import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { registerModal } from '../base';
import { CardModal } from '../card';
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useStyle } from '../../styles';
import { useStore } from '../../stores';

import { Button } from '../../components/button';
import { colors } from '../../themes';
import Big from 'big.js';

import { observer } from 'mobx-react-lite';
import { useUnmount } from '../../hooks';

import { TextInput } from '../../components/input';
import { useFeeEthereumConfig, useGasEthereumConfig } from '@owallet/hooks';
import { FeeEthereumInSign } from './fee-ethereum';
import { navigationRef } from '../../router/root';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 130 : 0;

export const SignEthereumModal: FunctionComponent<{
  isOpen: boolean;
  close: () => void;
}> = registerModal(
  observer(() => {
    const { chainStore, signInteractionStore } = useStore();

    useUnmount(() => {
      signInteractionStore.rejectAll();
      // navigationRef.current.goBack();
    });

    const [isInternal, setIsInternal] = useState(false);

    // Check that the request is from the wallet connect.
    // If this is undefiend, the request is not from the wallet connect.
    // const [wcSession, setWCSession] = useState<
    //   WalletConnect['session'] | undefined
    // >();

    const current = chainStore.current;
    // Make the gas config with 1 gas initially to prevent the temporary 0 gas error at the beginning.
    const [dataSign, setDataSign] = useState(null);
    const [gasPrice, setGasPrice] = useState('0');
    const gasConfig = useGasEthereumConfig(
      chainStore,
      current.chainId,
      parseInt(dataSign?.data?.data?.data?.estimatedGasLimit, 16)
    );
    const feeConfig = useFeeEthereumConfig(chainStore, current.chainId);
    const decimals = useRef(chainStore.current.feeCurrencies[0].coinDecimals);

    useEffect(() => {
      try {
        if (dataSign) {
          decimals.current = dataSign?.data?.data?.data?.decimals;
          let chainIdSign = dataSign?.data?.chainId;
          if (!chainIdSign?.toString()?.startsWith('0x'))
            chainIdSign = '0x' + Number(chainIdSign).toString(16);
          chainStore.selectChain(chainIdSign);

          const estimatedGasLimit = parseInt(
            dataSign?.data?.data?.data?.estimatedGasLimit,
            16
          );
          const estimatedGasPrice = new Big(
            parseInt(dataSign?.data?.data?.data?.estimatedGasPrice, 16)
          )
            .div(new Big(10).pow(decimals.current))
            .toFixed(decimals.current);

          if (!isNaN(estimatedGasLimit) && estimatedGasPrice !== 'NaN') {
            setGasPrice(estimatedGasPrice);
            gasConfig.setGas(estimatedGasLimit);
            feeConfig.setFee(
              new Big(estimatedGasLimit)
                .mul(estimatedGasPrice)
                .toFixed(decimals.current)
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, [dataSign]);

    // const memoConfig = useMemoConfig(chainStore, current.chainId);

    useEffect(() => {
      if (signInteractionStore.waitingEthereumData) {
        setDataSign(signInteractionStore.waitingEthereumData);
      }
    }, [signInteractionStore.waitingEthereumData]);

    // const [fee, setFee] = useState<string>('0x0');
    const [memo, setMemo] = useState<string>('');

    const style = useStyle();

    // const [chainId, setChainId] = useState(chainStore.current.chainId);

    // Make the gas config with 1 gas initially to prevent the temporary 0 gas error at the beginning.

    useEffect(() => {
      if (signInteractionStore.waitingEthereumData) {
        const data = signInteractionStore.waitingEthereumData;
        setIsInternal(data.isInternal);
      }
    }, [signInteractionStore.waitingEthereumData]);

    const _onPressReject = () => {
      try {
        signInteractionStore.rejectAll();
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <CardModal>
        {/* {wcSession ? (
          <WCAppLogoAndName
            containerStyle={style.flatten(['margin-y-14'])}
            peerMeta={wcSession.peerMeta}
          />
        ) : null} */}
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <View style={style.flatten(['margin-bottom-16'])}>
            <Text style={style.flatten(['margin-bottom-3'])}>
              <Text style={style.flatten(['subtitle3', 'color-primary'])}>
                {`1 `}
              </Text>
              <Text
                style={style.flatten(['subtitle3', 'color-text-black-medium'])}
              >
                Message
              </Text>
            </Text>
            <View
              style={style.flatten([
                'border-radius-8',
                'border-width-1',
                'border-color-border-white',
                'overflow-hidden'
              ])}
            >
              <ScrollView
                style={style.flatten(['max-height-214'])}
                persistentScrollbar={true}
              >
                <Text>{JSON.stringify(dataSign, null, 2)}</Text>
              </ScrollView>
            </View>
          </View>
          <TextInput
            label="Memo"
            onChangeText={txt => {
              setMemo(txt);
            }}
            defaultValue={''}
          />

          <FeeEthereumInSign
            feeConfig={feeConfig}
            gasConfig={gasConfig}
            gasPrice={gasPrice}
            decimals={decimals.current}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <Button
              text="Reject"
              size="large"
              containerStyle={{
                width: '40%'
              }}
              style={{
                backgroundColor: colors['red-500']
              }}
              textStyle={{
                color: colors['white']
              }}
              underlayColor={colors['danger-400']}
              loading={signInteractionStore.isLoading}
              disabled={signInteractionStore.isLoading}
              onPress={_onPressReject}
            />
            <Button
              text="Approve"
              size="large"
              disabled={signInteractionStore.isLoading}
              containerStyle={{
                width: '40%'
              }}
              style={{
                backgroundColor: signInteractionStore.isLoading
                  ? colors['gray-400']
                  : colors['purple-900']
              }}
              loading={signInteractionStore.isLoading}
              onPress={async () => {
                try {
                  const gasPrice =
                    '0x' +
                    parseInt(
                      new Big(parseFloat(feeConfig.feeRaw))
                        .mul(new Big(10).pow(decimals.current))
                        .div(parseFloat(gasConfig.gasRaw))
                        .toFixed(decimals.current)
                    ).toString(16);
                  await signInteractionStore.approveEthereumAndWaitEnd({
                    gasPrice,
                    gasLimit: `0x${parseFloat(gasConfig.gasRaw).toString(16)}`,
                    memo
                  });
                  if (navigationRef.current.getCurrentRoute().name === 'Send') {
                    navigationRef.current.navigate('TxSuccessResult', {});
                  }
                } catch (error) {
                  signInteractionStore.rejectAll();
                  console.log('error approveEthereumAndWaitEnd', error);
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </CardModal>
    );
  }),
  {
    disableSafeArea: true,
    blurBackdropOnIOS: true
  }
);
