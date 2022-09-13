import React, { FunctionComponent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useStore } from '../../../stores';
import { useStyle } from '../../../styles';
import { BondStatus } from '@owallet/stores';
import { useRedelegateTxConfig } from '@owallet/hooks';
import { PageWithScrollView, PageWithScrollViewInBottomTabView } from '../../../components/page';
import { Card, CardBody, CardDivider } from '../../../components/card';
import { Image, View } from 'react-native';
import { CText as Text } from '../../../components/text';
import { ValidatorThumbnail } from '../../../components/thumbnail';
import {
  AmountInput,
  FeeButtons,
  MemoInput,
  SelectorButtonWithoutModal
} from '../../../components/input';
import { Button } from '../../../components/button';
import { useSmartNavigation } from '../../../navigation.provider';
import { colors, spacing, typography } from '../../../themes';
import { ValidatorThumbnails } from '@owallet/common';
import ValidatorsList from './validators-list';
import { HeaderBackDownButtonIcon } from '../../../components/header/icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DownArrowIcon } from '../../../components/icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const RedelegateScreen: FunctionComponent = observer(() => {
  const route = useRoute<
    RouteProp<
      Record<
        string,
        {
          validatorAddress: string;
        }
      >,
      string
    >
  >();

  const validatorAddress = route.params.validatorAddress;

  const smartNavigation = useSmartNavigation();

  const { chainStore, accountStore, queriesStore, analyticsStore, modalStore } =
    useStore();

  const style = useStyle();
  const bottomTabBarHeight = useBottomTabBarHeight();
  const account = accountStore.getAccount(chainStore.current.chainId);
  const queries = queriesStore.get(chainStore.current.chainId);

  const srcValidator =
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Bonded)
      .getValidator(validatorAddress) ||
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Unbonding)
      .getValidator(validatorAddress) ||
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Unbonded)
      .getValidator(validatorAddress);

  const srcValidatorThumbnail = srcValidator
    ? queries.cosmos.queryValidators
        .getQueryStatus(BondStatus.Bonded)
        .getValidatorThumbnail(validatorAddress) ||
      queries.cosmos.queryValidators
        .getQueryStatus(BondStatus.Unbonding)
        .getValidatorThumbnail(validatorAddress) ||
      queries.cosmos.queryValidators
        .getQueryStatus(BondStatus.Unbonded)
        .getValidatorThumbnail(validatorAddress) ||
      ValidatorThumbnails[validatorAddress]
    : undefined;

  const staked = queries.cosmos.queryDelegations
    .getQueryBech32Address(account.bech32Address)
    .getDelegationTo(validatorAddress);

  const sendConfigs = useRedelegateTxConfig(
    chainStore,
    chainStore.current.chainId,
    account.msgOpts['undelegate'].gas,
    account.bech32Address,
    queries.queryBalances,
    queries.cosmos.queryDelegations,
    validatorAddress
  );

  const [dstValidatorAddress, setDstValidatorAddress] = useState('');
  const [switchValidator, setSwitchValidator] = useState({
    avatar: '',
    moniker: ''
  });
  const dstValidator =
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Bonded)
      .getValidator(dstValidatorAddress) ||
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Unbonding)
      .getValidator(dstValidatorAddress) ||
    queries.cosmos.queryValidators
      .getQueryStatus(BondStatus.Unbonded)
      .getValidator(dstValidatorAddress);

  useEffect(() => {
    sendConfigs.recipientConfig.setRawRecipient(dstValidatorAddress);
  }, [dstValidatorAddress, sendConfigs.recipientConfig]);

  const sendConfigError =
    sendConfigs.recipientConfig.getError() ??
    sendConfigs.amountConfig.getError() ??
    sendConfigs.memoConfig.getError() ??
    sendConfigs.gasConfig.getError() ??
    sendConfigs.feeConfig.getError();
  const txStateIsValid = sendConfigError == null;

  const isDisable = !account.isReadyToSendMsgs || !txStateIsValid;

  const _onPressSwitchValidator = async () => {
    if (account.isReadyToSendMsgs && txStateIsValid) {
      try {
        await account.cosmos.sendBeginRedelegateMsg(
          sendConfigs.amountConfig.amount,
          sendConfigs.srcValidatorAddress,
          sendConfigs.dstValidatorAddress,
          sendConfigs.memoConfig.memo,
          sendConfigs.feeConfig.toStdFee(),
          {
            preferNoSetMemo: true,
            preferNoSetFee: true
          },
          {
            onBroadcasted: (txHash) => {
              analyticsStore.logEvent('Redelgate tx broadcasted', {
                chainId: chainStore.current.chainId,
                chainName: chainStore.current.chainName,
                validatorName: srcValidator?.description.moniker,
                toValidatorName: dstValidator?.description.moniker,
                feeType: sendConfigs.feeConfig.feeType
              });
              smartNavigation.pushSmart('TxPendingResult', {
                txHash: Buffer.from(txHash).toString('hex')
              });
            }
          }
        );
      } catch (e) {
        if (e?.message === 'Request rejected') {
          return;
        }
        if (e?.message.includes('Cannot read properties of undefined')) {
          return;
        }
        console.log(e);
        if (smartNavigation.canGoBack) {
          smartNavigation.goBack();
        } else {
          smartNavigation.navigateSmart('Home', {});
        }
      }
    }
  };

  const onPressSelectValidator = (address, avatar, moniker) => {
    setDstValidatorAddress(address);
    setSwitchValidator({
      avatar,
      moniker
    });
    modalStore.close();
  };
  return (
    <PageWithScrollViewInBottomTabView
      contentContainerStyle={{
        flexGrow: 1
      }}
    >
      <View style={style.flatten(['height-page-pad'])} />
      <Text
        style={{
          fontSize: 24,
          lineHeight: 34,
          fontWeight: '700',
          textAlign: 'center'
        }}
      >
        Switch validator
      </Text>
      <View
        style={{
          borderRadius: spacing['8'],
          marginTop: 24,
          backgroundColor: colors['white'],
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <View
          style={{
            backgroundColor: 'inherit',
            borderRadius: 8,
            padding: 10,
            borderWidth: 1,
            borderColor: colors['purple-400'],
            borderStyle: 'dashed'
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: 40, height: 40 }}>
              <ValidatorThumbnail
                style={style.flatten(['margin-right-12'])}
                size={36}
                url={srcValidatorThumbnail}
              />
            </View>
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  color: colors['gray-900'],
                  fontSize: 18,
                  lineHeight: 22,
                  fontWeight: '700'
                }}
              >
                {srcValidator ? srcValidator.description.moniker : '...'}
              </Text>
              <Text
                style={{
                  color: colors['blue-300'],
                  fontWeight: '700',
                  fontSize: 14,
                  lineHeight: 16
                }}
              >
                Staked{' '}
                {staked.trim(true).shrink(true).maxDecimals(6).toString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/*
        // The recipient validator is selected by the route params, so no need to show the address input.
        <AddressInput
          label="Recipient"
          recipientConfig={sendConfigs.recipientConfig}
        />
      */}
      {/*
      Undelegate tx only can be sent with just stake currency. So, it is not needed to show the currency selector because the stake currency is one.
      <CurrencySelector
        label="Token"
        placeHolder="Select Token"
        amountConfig={sendConfigs.amountConfig}
      />
      */}
      <View
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: spacing['24'],
            height: spacing['24']
          }}
          source={require('../../../assets/image/back.png')}
          fadeDuration={0}
        />
      </View>
      <View
        style={{
          marginBottom: spacing['12'],
          borderRadius: spacing['8'],
          backgroundColor: colors['white'],
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 8,
            padding: 10,
            borderWidth: 0.5,
            borderColor: colors['white']
          }}
          onPress={() => {
            modalStore.setOpen();
            modalStore.setChildren(
              <ValidatorsList
                onPressSelectValidator={onPressSelectValidator}
                dstValidatorAddress={dstValidatorAddress}
              />
            );
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              {dstValidatorAddress ? (
                <View
                  style={{
                    width: 40,
                    height: 40,
                  }}
                >
                  <ValidatorThumbnail
                    style={{
                      marginRight: spacing['8']
                    }}
                    size={38}
                    url={switchValidator.avatar}
                  />
                </View>
              ) : (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F3F1F5',
                    borderRadius: 8
                  }}
                >
                  <Image
                    style={{
                      width: spacing['24'],
                      height: spacing['24']
                    }}
                    source={require('../../../assets/image/user-square.png')}
                    fadeDuration={0}
                  />
                </View>
              )}
              {dstValidatorAddress ? (
                <View style={{ display: 'flex', paddingLeft: 12 }}>
                  <Text
                    style={{
                      color: colors['gray-900'],
                      fontSize: 18,
                      lineHeight: 22,
                      fontWeight: '700'
                    }}
                  >
                    {switchValidator ? switchValidator.moniker : '...'}
                  </Text>
                  <Text
                    style={{
                      color: colors['blue-300'],
                      fontWeight: '700',
                      fontSize: 14,
                      lineHeight: 16
                    }}
                  >
                    Staked 0 ORAI
                  </Text>
                </View>
              ) : (
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 22,
                    paddingLeft: 12
                  }}
                >
                  Select validator
                </Text>
              )}
            </View>
            <DownArrowIcon height={15} color={colors['gray-150']} />
          </View>
        </TouchableOpacity>
      </View>
      {/* <SelectorButtonWithoutModal
        label="Redelegate to"
        placeHolder="Select Validator"
        selected={
          dstValidator
            ? {
                key: dstValidatorAddress,
                label: dstValidator.description.moniker || dstValidatorAddress
              }
            : undefined
        }
        onPress={() => {
          modalStore.setOpen();
          modalStore.setChildren(
            <ValidatorsList
              onPressSelectValidator={onPressSelectValidator}
              dstValidatorAddress={dstValidatorAddress}
            />
          );
          // smartNavigation.pushSmart('Validator.List', {
          //   validatorSelector: (validatorAddress: string) => {
          //     setDstValidatorAddress(validatorAddress);
          //   }
          // });
        }}
      /> */}
      {dstValidatorAddress ? (
        <View
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: colors['white'],
            borderRadius: 24,
          }}
        >
          <AmountInput label="Amount" amountConfig={sendConfigs.amountConfig} />
          <MemoInput
            label="Memo (Optional)"
            memoConfig={sendConfigs.memoConfig}
          />
          <FeeButtons
            label="Fee"
            gasLabel="gas"
            feeConfig={sendConfigs.feeConfig}
            gasConfig={sendConfigs.gasConfig}
          />
          <Button
            style={{
              backgroundColor: isDisable
                ? colors['disabled']
                : colors['purple-900']
            }}
            text="Switch"
            size="large"
            disabled={isDisable}
            loading={account.isSendingMsg === 'redelegate'}
            onPress={_onPressSwitchValidator}
          />
        </View>
      ) : null}
      <View style={style.flatten(['height-page-pad'])} />
    </PageWithScrollViewInBottomTabView>
  );
});
