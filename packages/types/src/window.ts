import { OWallet, Ethereum } from './wallet';
import { OfflineSigner } from '@cosmjs/launchpad';
import { SecretUtils } from 'secretjs/types/enigmautils';
import { OfflineDirectSigner } from '@cosmjs/proto-signing';

export interface Window {
  owallet?: OWallet;
  ethereum?: Ethereum;
  getOfflineSigner?: (chainId: string) => OfflineSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino?: (chainId: string) => OfflineSigner;
  getOfflineSignerAuto?: (
    chainId: string
  ) => Promise<OfflineSigner | OfflineDirectSigner>;
  getEnigmaUtils?: (chainId: string) => SecretUtils;
}
