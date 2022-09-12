import { MsgOpt } from './base';
import { AccountSetBase, AccountSetOpts } from './base';
import { AppCurrency, OWalletSignOptions } from '@owallet/types';
import { StdFee } from '@cosmjs/launchpad';
import { DenomHelper } from '@owallet/common';
import { Dec, DecUtils, Int } from '@owallet/unit';
import { ChainIdHelper, cosmos, ibc } from '@owallet/cosmos';
import { BondStatus } from '../query/cosmos/staking/types';

import {
  HasCosmosQueries,
  HasEvmQueries,
  QueriesSetBase,
  QueriesStore
} from '../query';
import { DeepReadonly } from 'utility-types';
import { ChainGetter, StdFeeEthereum } from '../common';

export interface HasEthereumAccount {
  ethereum: DeepReadonly<EthereumAccount>;
}

export interface EthereumMsgOpts {
  readonly send: {
    readonly native: MsgOpt;
  };
}

export class AccountWithEthereum
  extends AccountSetBase<EthereumMsgOpts, HasEvmQueries>
  implements HasEthereumAccount
{
  public readonly ethereum: DeepReadonly<EthereumAccount>;

  static readonly defaultMsgOpts: EthereumMsgOpts = {
    send: {
      native: {
        type: 'send',
        gas: 80000
      }
    }
  };

  constructor(
    protected readonly eventListener: {
      addEventListener: (type: string, fn: () => unknown) => void;
      removeEventListener: (type: string, fn: () => unknown) => void;
    },
    protected readonly chainGetter: ChainGetter,
    protected readonly chainId: string,
    protected readonly queriesStore: QueriesStore<
      QueriesSetBase & HasEvmQueries
    >,
    protected readonly opts: AccountSetOpts<EthereumMsgOpts>
  ) {
    super(eventListener, chainGetter, chainId, queriesStore, opts);

    this.ethereum = new EthereumAccount(
      this,
      chainGetter,
      chainId,
      queriesStore
    );
  }
}

export class EthereumAccount {
  constructor(
    protected readonly base: AccountSetBase<EthereumMsgOpts, HasEvmQueries>,
    protected readonly chainGetter: ChainGetter,
    protected readonly chainId: string,
    protected readonly queriesStore: QueriesStore<
      QueriesSetBase & HasEvmQueries
    >
  ) {
    this.base.registerSendTokenFn(this.processSendToken.bind(this));
  }

  //send token
  protected async processSendToken(
    amount: string,
    currency: AppCurrency,
    recipient: string,
    memo: string,
    stdFee: Partial<StdFeeEthereum>,
    signOptions?: OWalletSignOptions,
    onTxEvents?:
      | ((tx: any) => void)
      | {
          onBroadcasted?: (txHash: Uint8Array) => void;
          onFulfill?: (tx: any) => void;
        },
    extraOptions?: {
      from: string;
      contract_addr: string;
      token_id?: string;
      recipient?: string;
      amount?: string;
      to?: string;
      gas?: string;
    }
  ): Promise<boolean> {
    const denomHelper = new DenomHelper(currency.coinMinimalDenom);
    console.log(stdFee, 'STD FEE ETHEREUM!!!!!!!!!!!!!!!!!!!!!');
    console.log(denomHelper.type, 'denomHelper.type!!!!!!!!!!!!!!!!!!!!!');

    if (signOptions.networkType === 'evm') {
      switch (denomHelper.type) {
        case 'erc20':
          const realAmount = (() => {
            let dec = new Dec(amount);
            dec = dec.mul(
              DecUtils.getTenExponentNInPrecisionRange(currency.coinDecimals)
            );
            return dec.truncate().toString();
          })();

          await this.base.sendEvmMsgs(
            'send',
            {
              type: 'erc20',
              value: { ...extraOptions, amount: realAmount }
            },
            memo,
            {
              gas: '0x' + parseInt(stdFee.gas).toString(16),
              gasPrice: stdFee.gasPrice
            },
            signOptions,
            this.txEventsWithPreOnFulfill(onTxEvents, tx => {
              console.log('Tx on fullfill: ', tx);
              if (tx) {
                // After succeeding to send token, refresh the balance.
                const queryEvmBalance =
                  this.queries.evm.queryEvmBalance.getQueryBalance(
                    this.base.evmosHexAddress
                  );

                if (queryEvmBalance) {
                  queryEvmBalance.fetch();
                }
              }
            })
          );
          // Do something with web3 stuff here
          // Example: https://www.coinbase.com/cloud/discover/solutions/send-erc20-with-web3-library
          // Move all of this part to the base with this.base.sendEvmMsgs function
          // web3 can be create in the base later
          // const provider = this.chainGetter.getChain(this.chainId).rest;
          // const web3 = new Web3(provider);
          // Just format the data we want in here (contract, data, txObj)
          // const contract = new web3.eth.Contract(
          //   // @ts-ignore
          //   ERC20_ABI,
          //   extraOptions.contract_addr
          // );
          // let data = contract.methods
          //   .transfer(extraOptions.contract_addr, extraOptions.amount)
          //   .encodeABI();

          // let txObj = {
          //   gas: web3.utils.toHex(extraOptions.gas),
          //   to: extraOptions.contract_addr,
          //   value: extraOptions.amount,
          //   from: extraOptions.recipient,
          //   data
          // };
          // This part will be handle in the background package to get the privateKey
          // And it will return the txHash ?
          // web3.eth.accounts.signTransaction(
          //   txObj,
          //   'privateKey',
          //   (err, signedTx) => {
          //     if (err) {
          //       console.log(err);
          //     } else {
          //       console.log(signedTx);
          //       return web3.eth.sendSignedTransaction(
          //         signedTx.rawTransaction,
          //         (err, res) => {
          //           if (err) {
          //             console.log(err);
          //           } else {
          //             console.log(res);
          //           }
          //         }
          //       );
          //     }
          //   }
          // );
          return true;
        case 'native':
          const actualAmount = (() => {
            let dec = new Dec(amount);
            dec = dec.mul(
              DecUtils.getTenExponentNInPrecisionRange(currency.coinDecimals)
            );
            return dec.truncate().toString();
          })();

          const msg = {
            type: this.base.msgOpts.send.native.type,
            value: {
              from_address: this.base.bech32Address,
              to_address: recipient,
              amount: [
                {
                  denom: currency.coinMinimalDenom,
                  amount: actualAmount
                }
              ]
            }
          };

          console.log('msg ===>', msg);

          await this.base.sendEvmMsgs(
            'send',
            msg,
            memo,
            {
              gas: '0x' + parseInt(stdFee.gas).toString(16),
              gasPrice: stdFee.gasPrice
            },
            signOptions,
            this.txEventsWithPreOnFulfill(onTxEvents, tx => {
              console.log('Tx on fullfill: ', tx);
              if (tx) {
                // After succeeding to send token, refresh the balance.
                const queryEvmBalance =
                  this.queries.evm.queryEvmBalance.getQueryBalance(
                    this.base.evmosHexAddress
                  );

                if (queryEvmBalance) {
                  queryEvmBalance.fetch();
                }
              }
            })
          );
          return true;
      }
    }
    return false;
  }

  protected txEventsWithPreOnFulfill(
    onTxEvents:
      | ((tx: any) => void)
      | {
          onBroadcasted?: (txHash: Uint8Array) => void;
          onFulfill?: (tx: any) => void;
        }
      | undefined,
    preOnFulfill?: (tx: any) => void
  ):
    | {
        onBroadcasted?: (txHash: Uint8Array) => void;
        onFulfill?: (tx: any) => void;
      }
    | undefined {
    if (!onTxEvents) {
      return;
    }

    const onBroadcasted =
      typeof onTxEvents === 'function' ? undefined : onTxEvents.onBroadcasted;
    const onFulfill =
      typeof onTxEvents === 'function' ? onTxEvents : onTxEvents.onFulfill;

    return {
      onBroadcasted,
      onFulfill:
        onFulfill || preOnFulfill
          ? (tx: any) => {
              if (preOnFulfill) {
                preOnFulfill(tx);
              }

              if (onFulfill) {
                onFulfill(tx);
              }
            }
          : undefined
    };
  }

  protected get queries(): DeepReadonly<QueriesSetBase & HasEvmQueries> {
    return this.queriesStore.get(this.chainId);
  }

  protected hasNoLegacyStdFeature(): boolean {
    const chainInfo = this.chainGetter.getChain(this.chainId);
    return (
      chainInfo.features != null &&
      chainInfo.features.includes('no-legacy-stdTx')
    );
  }
}
