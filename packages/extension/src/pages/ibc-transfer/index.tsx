import React, { FunctionComponent, useState } from "react";
import { observer } from "mobx-react-lite";
import { HeaderLayout } from "../../layouts";
import { useHistory } from "react-router";

import style from "./style.module.scss";
import { Alert, Button } from "reactstrap";
import {
  AddressInput,
  CoinInput,
  FeeButtons,
  MemoInput,
  DestinationChainSelector,
} from "../../components/form";
import {
  IAmountConfig,
  IFeeConfig,
  IGasConfig,
  IIBCChannelConfig,
  IMemoConfig,
  IRecipientConfig,
  useIBCTransferConfig,
} from "@keplr-wallet/hooks";
import { useStore } from "../../stores";
import { EthereumEndpoint } from "../../config.ui";
import { useNotification } from "../../components/notification";

export const IBCTransferPage: FunctionComponent = observer(() => {
  const history = useHistory();

  const [phase, setPhase] = useState<"channel" | "amount">("channel");

  const { chainStore, accountStore, queriesStore } = useStore();
  const accountInfo = accountStore.getAccount(chainStore.current.chainId);
  const queries = queriesStore.get(chainStore.current.chainId);

  const notification = useNotification();

  const ibcTransferConfigs = useIBCTransferConfig(
    chainStore,
    chainStore.current.chainId,
    accountInfo.msgOpts.ibc.transfer,
    accountInfo.bech32Address,
    queries.getQueryBalances(),
    EthereumEndpoint
  );

  return (
    <HeaderLayout
      showChainName={true}
      canChangeChainInfo={false}
      onBackButton={() => {
        history.goBack();
      }}
    >
      {phase === "channel" ? (
        <IBCTransferPageChannel
          channelConfig={ibcTransferConfigs.channelConfig}
          recipientConfig={ibcTransferConfigs.recipientConfig}
          memoConfig={ibcTransferConfigs.memoConfig}
          onNext={() => {
            setPhase("amount");
          }}
        />
      ) : null}
      {phase === "amount" ? (
        <IBCTransferPageAmount
          amountConfig={ibcTransferConfigs.amountConfig}
          feeConfig={ibcTransferConfigs.feeConfig}
          gasConfig={ibcTransferConfigs.gasConfig}
          onSubmit={async () => {
            if (ibcTransferConfigs.channelConfig.channel) {
              try {
                await accountInfo.sendIBCTransferMsg(
                  ibcTransferConfigs.channelConfig.channel,
                  ibcTransferConfigs.amountConfig.amount,
                  ibcTransferConfigs.amountConfig.sendCurrency,
                  ibcTransferConfigs.recipientConfig.recipient,
                  ibcTransferConfigs.memoConfig.memo,
                  ibcTransferConfigs.feeConfig.toStdFee()
                );
                history.push("/");
              } catch (e) {
                history.replace("/");
                notification.push({
                  type: "warning",
                  placement: "top-center",
                  duration: 5,
                  content: `Fail to transfer token: ${e.message}`,
                  canDelete: true,
                  transition: {
                    duration: 0.25,
                  },
                });
              }
            }
          }}
        />
      ) : null}
    </HeaderLayout>
  );
});

export const IBCTransferPageChannel: FunctionComponent<{
  channelConfig: IIBCChannelConfig;
  recipientConfig: IRecipientConfig;
  memoConfig: IMemoConfig;
  onNext: () => void;
}> = observer(({ channelConfig, recipientConfig, memoConfig, onNext }) => {
  const isValid =
    channelConfig.getError() == null &&
    recipientConfig.getError() == null &&
    memoConfig.getError() == null;

  const isChannelSet = channelConfig.channel != null;

  return (
    <form className={style.formContainer}>
      <div className={style.formInnerContainer}>
        <DestinationChainSelector ibcChannelConfig={channelConfig} />
        <AddressInput
          label="Recipient"
          recipientConfig={recipientConfig}
          memoConfig={memoConfig}
          ibcChannelConfig={channelConfig}
          disabled={!isChannelSet}
        />
        <MemoInput
          label="Memo (Optional)"
          memoConfig={memoConfig}
          disabled={!isChannelSet}
        />
        <div style={{ flex: 1 }} />
        <Alert className={style.alert}>
          <i className="fas fa-exclamation-circle" />
          <div>
            <h1>IBC is still experimental</h1>
            <p>Only send small amounts until channels have stabilized</p>
          </div>
        </Alert>
        <Button
          type="submit"
          color="primary"
          block
          disabled={!isValid}
          onClick={(e) => {
            e.preventDefault();

            onNext();
          }}
        >
          Next
        </Button>
      </div>
    </form>
  );
});

export const IBCTransferPageAmount: FunctionComponent<{
  amountConfig: IAmountConfig;
  feeConfig: IFeeConfig;
  gasConfig: IGasConfig;
  onSubmit: () => void;
}> = observer(({ amountConfig, feeConfig, gasConfig, onSubmit }) => {
  const { priceStore } = useStore();

  const isValid =
    amountConfig.getError() == null &&
    feeConfig.getError() == null &&
    gasConfig.getError() == null;

  return (
    <form className={style.formContainer}>
      <div className={style.formInnerContainer}>
        <CoinInput
          label="Amount"
          amountConfig={amountConfig}
          feeConfig={feeConfig}
        />
        <div style={{ flex: 1 }} />
        <FeeButtons
          label="Fee"
          feeConfig={feeConfig}
          gasConfig={gasConfig}
          priceStore={priceStore}
        />
        <Button
          type="submit"
          color="primary"
          block
          disabled={!isValid}
          onClick={(e) => {
            e.preventDefault();

            onSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
});
