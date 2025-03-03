import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { BackHandler, Platform, View } from 'react-native';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { useStyle } from '../../../../styles';
import { OWallet, Ethereum } from '@owallet/provider';
import { RNMessageRequesterExternal } from '../../../../router';
import {
  RNInjectedEthereum,
  RNInjectedOWallet
} from '../../../../injected/injected-provider';
import EventEmitter from 'eventemitter3';
// import { PageWithViewInBottomTabView } from "../../../../components/page";
import { PageWithView } from '../../../../components/page';
import { OnScreenWebpageScreenHeader } from '../header';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { WebViewStateContext } from '../context';
import { URL } from 'react-native-url-polyfill';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../stores';
import DeviceInfo from 'react-native-device-info';
import { InjectedProviderUrl } from '../../config';
import { BrowserFooterSection } from '../footer-section';
import { SwtichTab } from '../switch-tabs';
import { version } from '../../../../../package.json';

export const useInjectedSourceCode = () => {
  const [code, setCode] = useState<string | undefined>();

  useEffect(() => {
    console.log(
      'InjectedProviderUrl',
      `${InjectedProviderUrl}/injected-provider.bundle.js`
    );
    fetch(`${InjectedProviderUrl}/injected-provider.bundle.js`)
      .then(res => {
        return res.text();
      })
      .then(setCode)
      .catch(err => console.log(err));
  }, []);

  return code;
};

export const WebpageScreen: FunctionComponent<
  React.ComponentProps<typeof WebView> & {
    name: string;
  }
> = observer(props => {
  const { keyRingStore, chainStore, browserStore } = useStore();
  const [isSwitchTab, setIsSwitchTab] = useState(false);
  const style = useStyle();

  const webviewRef = useRef<WebView | null>(null);
  const [currentURL, setCurrentURL] = useState(() => {
    if (props.source && 'uri' in props.source) {
      return props.source.uri;
    }

    return '';
  });

  const [owallet] = useState(
    () =>
      new OWallet(
        version,
        'core',
        new RNMessageRequesterExternal(() => {
          if (!webviewRef.current) {
            throw new Error('Webview not initialized yet');
          }

          if (!currentURL) {
            throw new Error('Current URL is empty');
          }

          return {
            url: currentURL,
            origin: new URL(currentURL).origin
          };
        })
      )
  );

  const [ethereum] = useState(
    () =>
      new Ethereum(
        DeviceInfo.getVersion(),
        'core',
        chainStore.current.chainId,
        new RNMessageRequesterExternal(() => {
          if (!webviewRef.current) {
            throw new Error('Webview not initialized yet');
          }

          if (!currentURL) {
            throw new Error('Current URL is empty');
          }

          return {
            url: currentURL,
            origin: new URL(currentURL).origin
          };
        })
      )
  );

  const onPressItem = ({ name, uri }) => {
    setIsSwitchTab(false);
    if (browserStore.getSelectedTab?.uri !== uri) {
      browserStore.updateSelectedTab({ name, uri });
      navigation.navigate('Web.dApp', {
        name,
        uri
      });
    }
  };

  const [eventEmitter] = useState(() => new EventEmitter());
  const onMessage = useCallback(
    (event: WebViewMessageEvent) => {
      if (__DEV__) {
        console.log('WebViewMessageEvent', event.nativeEvent.data);
      }
      eventEmitter.emit('message', event.nativeEvent);
    },
    [eventEmitter]
  );
  const eventListener = {
    addMessageListener: (fn: any) => {
      eventEmitter.addListener('message', fn);
    },
    postMessage: (message: any) => {
      webviewRef.current?.injectJavaScript(
        `
            window.postMessage(${JSON.stringify(
              message
            )}, window.location.origin);
            true; // note: this is required, or you'll sometimes get silent failures
          `
      );
    }
  };

  useEffect(() => {
    RNInjectedOWallet.startProxy(
      owallet,
      eventListener,
      RNInjectedOWallet.parseWebviewMessage
    );
  }, [eventEmitter, owallet]);

  useEffect(() => {
    RNInjectedEthereum.startProxy(
      ethereum,
      eventListener,
      RNInjectedEthereum.parseWebviewMessage
    );
  }, [eventEmitter, ethereum]);

  useEffect(() => {
    const keyStoreChangedListener = () => {
      webviewRef.current?.injectJavaScript(
        `
            window.dispatchEvent(new Event("keplr_keystorechange"));
            true; // note: this is required, or you'll sometimes get silent failures
          `
      );
    };

    keyRingStore.addKeyStoreChangedListener(keyStoreChangedListener);

    return () => {
      keyRingStore.removeKeyStoreChangedListener(keyStoreChangedListener);
    };
  }, [keyRingStore]);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    // Handle the hardware back button on the android.
    const backHandler = () => {
      if (!isFocused || webviewRef.current == null) {
        return false;
      }

      if (!canGoBack) {
        return false;
      }

      webviewRef.current.goBack();
      return true;
    };

    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    };
  }, [canGoBack, isFocused]);

  const navigation = useNavigation();

  useEffect(() => {
    // Android disables the gesture by default.
    // If we turn on the gesture manually without checking OS,
    // the gesture will turn on even on Android.
    // So, checking platform is required.
    if (Platform.OS === 'ios') {
      navigation.setOptions({
        gestureEnabled: !canGoBack
      });
    }
  }, [canGoBack, navigation]);

  const sourceCode = useInjectedSourceCode();

  return (
    <PageWithView
      style={{
        padding: 0,
        paddingBottom: 80
      }}
      disableSafeArea
    >
      {isSwitchTab ? (
        <SwtichTab onPressItem={onPressItem} />
      ) : (
        <>
          <WebViewStateContext.Provider
            value={{
              webView: webviewRef.current,
              name: props.name,
              url: currentURL,
              canGoBack,
              canGoForward
            }}
          >
            <OnScreenWebpageScreenHeader />
          </WebViewStateContext.Provider>

          {sourceCode ? (
            <WebView
              ref={webviewRef}
              incognito={true}
              injectedJavaScriptBeforeContentLoaded={sourceCode}
              onMessage={onMessage}
              onNavigationStateChange={e => {
                // Strangely, `onNavigationStateChange` is only invoked whenever page changed only in IOS.
                // Use two handlers to measure simultaneously in ios and android.
                setCanGoBack(e.canGoBack);
                setCanGoForward(e.canGoForward);

                setCurrentURL(e.url);
              }}
              onLoadProgress={e => {
                // Strangely, `onLoadProgress` is only invoked whenever page changed only in Android.
                // Use two handlers to measure simultaneously in ios and android.
                setCanGoBack(e.nativeEvent.canGoBack);
                setCanGoForward(e.nativeEvent.canGoForward);

                setCurrentURL(e.nativeEvent.url);
              }}
              contentInsetAdjustmentBehavior="never"
              automaticallyAdjustContentInsets={false}
              decelerationRate="normal"
              allowsBackForwardNavigationGestures={true}
              {...props}
            />
          ) : null}
        </>
      )}

      <WebViewStateContext.Provider
        value={{
          webView: webviewRef.current,
          name: props.name,
          url: currentURL,
          canGoBack,
          canGoForward,
          clearWebViewContext: () => {
            webviewRef.current = null;
          }
        }}
      >
        <BrowserFooterSection
          isSwitchTab={isSwitchTab}
          setIsSwitchTab={setIsSwitchTab}
          typeOf={'webview'}
        />
      </WebViewStateContext.Provider>
    </PageWithView>
  );
});

export * from './screen-options';
