import { ChainInfo, NetworkType } from '../chain-info';
import {
  BroadcastMode,
  AminoSignResponse,
  StdSignDoc,
  StdTx,
  OfflineSigner,
  StdSignature,
} from '@cosmjs/launchpad';
import { DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SecretUtils } from 'secretjs/types/enigmautils';
import Long from 'long';
import { SignEthereumTypedDataObject } from '../typedMessage';

export interface Key {
  // Name of the selected key store.
  readonly name: string;
  readonly algo: string;
  readonly pubKey: Uint8Array;
  readonly address: Uint8Array;
  readonly bech32Address: string;
  // Indicate whether the selected account is from the nano ledger.
  // Because current cosmos app in the nano ledger doesn't support the direct (proto) format msgs,
  // this can be used to select the amino or direct signer.
  readonly isNanoLedger: boolean;
}

export type OWalletMode = 'core' | 'extension' | 'mobile-web' | 'walletconnect';

export interface OWalletIntereactionOptions {
  readonly sign?: OWalletSignOptions;
}

export interface OWalletSignOptions {
  readonly preferNoSetFee?: boolean;
  readonly preferNoSetMemo?: boolean;

  readonly disableBalanceCheck?: boolean;
  readonly networkType?: NetworkType;
}

export interface OWallet {
  readonly version: string;
  /**
   * mode means that how OWallet is connected.
   * If the connected OWallet is browser's extension, the mode should be "extension".
   * If the connected OWallet is on the mobile app with the embeded web browser, the mode should be "mobile-web".
   */
  readonly mode: OWalletMode;
  defaultOptions: OWalletIntereactionOptions;

  experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>;
  enable(chainIds: string | string[]): Promise<void>;
  getKey(chainId: string): Promise<Key>;
  signAmino(
    chainId: string,
    signer: string,
    signDoc: StdSignDoc,
    signOptions?: OWalletSignOptions
  ): Promise<AminoSignResponse>;
  signDirect(
    chainId: string,
    signer: string,
    signDoc: {
      /** SignDoc bodyBytes */
      bodyBytes?: Uint8Array | null;

      /** SignDoc authInfoBytes */
      authInfoBytes?: Uint8Array | null;

      /** SignDoc chainId */
      chainId?: string | null;

      /** SignDoc accountNumber */
      accountNumber?: Long | null;
    },
    signOptions?: OWalletSignOptions
  ): Promise<DirectSignResponse>;
  sendTx(
    chainId: string,
    /*
     If the type is `StdTx`, it is considered as legacy stdTx.
     If the type is `Uint8Array`, it is considered as proto tx.
     */
    tx: StdTx | Uint8Array,
    mode: BroadcastMode
  ): Promise<Uint8Array>;

  signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array
  ): Promise<StdSignature>;
  verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature
  ): Promise<boolean>;

  getOfflineSigner(chainId: string): OfflineSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino(chainId: string): OfflineSigner;
  getOfflineSignerAuto(
    chainId: string
  ): Promise<OfflineSigner | OfflineDirectSigner>;

  suggestToken(
    chainId: string,
    contractAddress: string,
    viewingKey?: string
  ): Promise<void>;
  getSecret20ViewingKey(
    chainId: string,
    contractAddress: string
  ): Promise<string>;
  getEnigmaUtils(chainId: string): SecretUtils;

  // Related to Enigma.
  // But, recommended to use `getEnigmaUtils` rather than using below.
  getEnigmaPubKey(chainId: string): Promise<Uint8Array>;
  getEnigmaTxEncryptionKey(
    chainId: string,
    nonce: Uint8Array
  ): Promise<Uint8Array>;
  enigmaEncrypt(
    chainId: string,
    contractCodeHash: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    msg: object
  ): Promise<Uint8Array>;
  enigmaDecrypt(
    chainId: string,
    ciphertext: Uint8Array,
    nonce: Uint8Array
  ): Promise<Uint8Array>;
}

export type EthereumMode =
  | 'core'
  | 'extension'
  | 'mobile-web'
  | 'walletconnect';

export interface RequestArguments {
  method: string;
  params?: any;
  [key: string]: any;
}

export interface Ethereum {
  readonly version: string;
  /**
   * mode means that how Ethereum is connected.
   * If the connected Ethereum is browser's extension, the mode should be "extension".
   * If the connected Ethereum is on the mobile app with the embeded web browser, the mode should be "mobile-web".
   */
  readonly mode: EthereumMode;
  initChainId: string;
  // send(): Promise<void>;
  request(args: RequestArguments): Promise<any>;
  signAndBroadcastEthereum(chainId: string, data: object): Promise<{ rawTxHex: string }>;
  experimentalSuggestChain(chainInfo: ChainInfo): Promise<void>;
  signEthereumTypeData(chainId: string, data: SignEthereumTypedDataObject): Promise<void>;
  signProxyReEncryptionData(chainId: string, data: object): Promise<object>;
  signProxyDecryptionData(chainId: string, data: object): Promise<object>;
  getPublicKey(chainId: string): Promise<object>;
  // asyncRequest(): Promise<void>;
  // getKey(chainId: string): Promise<Key>;
}
