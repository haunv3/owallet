import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { PageWithScrollViewInBottomTabView } from '../../../../components/page';
import { SettingSectionTitle } from '../../components';
import DeviceInfo from 'react-native-device-info';
import codePush from 'react-native-code-push';
import {
  RectButton,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import { colors, spacing, typography } from '../../../../themes';
import { View, Text } from 'react-native';
import { useStyle } from '../../../../styles';
import { Divider } from '@rneui/base';

export const OWalletVersionScreen: FunctionComponent = () => {
  const [appVersion] = useState(() => DeviceInfo.getVersion());
  const [buildNumber] = useState(() => DeviceInfo.getBuildNumber());
  // "undefined" means that it is on fetching,
  // empty string "" means that there is no data.
  const [currentCodeVersion, setCurrentCodeVersion] = useState<
    string | undefined
  >(undefined);
  const [latestCodeVersion, setLatestCodeVersion] = useState<
    string | undefined
  >(undefined);
  const [pendingCodeVersion, setPendingCodeVersion] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    codePush.getUpdateMetadata(codePush.UpdateState.RUNNING).then(update => {
      if (update) {
        setCurrentCodeVersion(update.label);
      } else {
        setCurrentCodeVersion('');
      }
    });

    codePush.getUpdateMetadata(codePush.UpdateState.LATEST).then(update => {
      if (update) {
        setLatestCodeVersion(update.label);
      } else {
        setLatestCodeVersion('');
      }
    });

    codePush.getUpdateMetadata(codePush.UpdateState.PENDING).then(update => {
      if (update) {
        setPendingCodeVersion(update.label);
      } else {
        setPendingCodeVersion('');
      }
    });
  }, []);

  const parseVersion = (version: string | undefined) => {
    if (version === undefined) {
      return 'Fetching...';
    }

    if (version === '') {
      return 'None';
    }

    return version;
  };

  // Occur an error when the App Version is pressed several times to check whether the error report is successful.
  // Throws a runtime error on the 10th and raises an error on the render itself on the 20th.
  const testErrorReportRef = useRef(0);
  const [blockRender, setBlockRender] = useState(false);

  if (blockRender) {
    throw new Error('This is an render error for error report test');
  }

  return (
    <PageWithScrollViewInBottomTabView>
      <View
        style={{
          marginTop: spacing['32'],
          marginBottom: spacing['12']
        }}
      />
      <TouchableWithoutFeedback
        style={{
          backgroundColor: colors['white'],
          borderRadius: spacing['24'],
          marginHorizontal: spacing['20']
        }}
        onPress={() => {
          testErrorReportRef.current++;

          if (testErrorReportRef.current === 10) {
            setTimeout(() => {
              throw new Error('This is an runtime error for error report test');
            }, 200);
          }

          if (testErrorReportRef.current === 20) {
            setBlockRender(true);
          }
        }}
      >
        <SettingItem
          label="App Version"
          paragraph={appVersion}
          divider={false}
        />
        <SettingItem
          label="Build Number"
          paragraph={parseVersion(buildNumber)}
          divider={false}
        />
        <SettingItem
          label="Code Version"
          paragraph={parseVersion(currentCodeVersion)}
        />
      </TouchableWithoutFeedback>

      <View
        style={{
          marginTop: spacing['32'],
          marginBottom: spacing['12']
        }}
      />
      <TouchableWithoutFeedback
        style={{
          backgroundColor: colors['white'],
          borderRadius: spacing['24'],
          marginHorizontal: spacing['20']
        }}
      >
        <SettingItem
          label="Latest Code Version"
          paragraph={parseVersion(latestCodeVersion)}
          divider={false}
        />
        <SettingItem
          label="Pending Code Version"
          paragraph={parseVersion(pendingCodeVersion)}
        />
      </TouchableWithoutFeedback>
    </PageWithScrollViewInBottomTabView>
  );
};

const SettingItem: FunctionComponent<{
  label: string;
  paragraph: string;
  divider?: boolean;
}> = ({ label, paragraph, divider }) => {
  const style = useStyle();

  const renderChildren = () => {
    return (
      <React.Fragment>
        <View
          style={{
            width: '100%',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              marginHorizontal: spacing['16']
            }}
          >
            <Text
              style={{
                ...typography.h6,
                color: colors['text-black-medium'],
                fontWeight: '600',
                textAlign: 'left'
              }}
            >
              {label}
            </Text>
            {paragraph ? (
              <Text
                style={{
                  ...typography.h6,
                  color: colors['text-black-very-low'],
                  textAlign: 'right'
                }}
              >
                {paragraph}
              </Text>
            ) : null}
          </View>
          {divider ? (
            <Divider
              orientation="vertical"
              width={1}
              color={colors['gray-500']}
              style={{
                marginTop: spacing['24']
              }}
            />
          ): null}
        </View>
      </React.Fragment>
    );
  };

  return (
    <View>
      <TouchableWithoutFeedback
        style={{
          height: 80,
          paddingHorizontal: spacing['20'],
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {renderChildren()}
      </TouchableWithoutFeedback>
    </View>
  );
};
