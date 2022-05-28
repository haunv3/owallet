import { Bech32Address } from '@owallet/cosmos';
import { AppChainInfo } from '@owallet/types';
import { RegisterOption } from '@owallet/hooks';
import { IntlMessages, TypeLanguageToFiatCurrency } from './languages';
import { FiatCurrency } from '@owallet/types';

export const AutoFetchingFiatValueInterval = 300 * 1000; // 5min

export const AutoFetchingAssetsInterval = 15 * 1000; // 15sec

export const FiatCurrencies: FiatCurrency[] = [
  {
    currency: 'usd',
    symbol: '$',
    maxDecimals: 2,
    locale: 'en-US'
  },
  {
    currency: 'eur',
    symbol: '€',
    maxDecimals: 2,
    locale: 'de-DE'
  },
  {
    currency: 'gbp',
    symbol: '£',
    maxDecimals: 2,
    locale: 'en-GB'
  },
  {
    currency: 'cad',
    symbol: 'CA$',
    maxDecimals: 2,
    locale: 'en-CA'
  },
  {
    currency: 'aud',
    symbol: 'AU$',
    maxDecimals: 2,
    locale: 'en-AU'
  },
  {
    currency: 'rub',
    symbol: '₽',
    maxDecimals: 0,
    locale: 'ru'
  },
  {
    currency: 'krw',
    symbol: '₩',
    maxDecimals: 0,
    locale: 'ko-KR'
  },
  {
    currency: 'hkd',
    symbol: 'HK$',
    maxDecimals: 1,
    locale: 'en-HK'
  },
  {
    currency: 'cny',
    symbol: '¥',
    maxDecimals: 1,
    locale: 'zh-CN'
  },
  {
    currency: 'jpy',
    symbol: '¥',
    maxDecimals: 0,
    locale: 'ja-JP'
  },
  {
    currency: 'inr',
    symbol: '₹',
    maxDecimals: 1,
    locale: 'en-IN'
  }
];

export const LanguageToFiatCurrency: TypeLanguageToFiatCurrency = {
  default: 'usd',
  ko: 'krw',
  vi: 'vnd'
};

export const ADDITIONAL_SIGN_IN_PREPEND: RegisterOption[] | undefined =
  undefined;

export const ADDITIONAL_INTL_MESSAGES: IntlMessages = {};

export const AdditionalSignInPrepend: RegisterOption[] | undefined =
  ADDITIONAL_SIGN_IN_PREPEND;

export const AdditonalIntlMessages: IntlMessages = ADDITIONAL_INTL_MESSAGES;

// coingecko api for both evm and cosmos based networks
export const CoinGeckoAPIEndPoint = 'https://api.coingecko.com/api/v3';

export const EthereumEndpoint =
  'https://mainnet.infura.io/v3/eeb00e81cdb2410098d5a270eff9b341';

export const CoinGeckoGetPrice = '/simple/price';

// default networks
export const EmbedChainInfos: AppChainInfo[] = [
  {
    rpc: 'https://rpc.orai.io',
    rest: 'https://lcd.orai.io',
    chainId: 'Oraichain',
    chainName: 'Oraichain',
    stakeCurrency: {
      coinDenom: 'ORAI',
      coinMinimalDenom: 'orai',
      coinDecimals: 6,
      coinGeckoId: 'oraichain-token',
      coinImageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('orai'),
    get currencies() {
      return [
        this.stakeCurrency,
        {
          type: 'cw20',
          coinDenom: 'AIRI',
          coinMinimalDenom:
            'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg:aiRight Token',
          contractAddress: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
          coinDecimals: 6,
          coinGeckoId: 'airight',
          coinImageUrl: 'https://i.ibb.co/m8mCyMr/airi.png'
        },
        {
          type: 'cw20',
          coinDenom: 'ORAIX',
          coinMinimalDenom:
            'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge:OraiDex Token',
          contractAddress: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
          coinDecimals: 6,
          // coinGeckoId: 'oraix',
          coinImageUrl: 'https://i.ibb.co/VmMJtf7/oraix.png'
        },

        {
          type: 'cw20',
          coinDenom: 'USDT',
          coinMinimalDenom:
            'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh:Tether',
          contractAddress: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
          coinDecimals: 6,
          coinGeckoId: 'tether',
          coinImageUrl:
            'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
        }
      ];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 0.000025,
      high: 0.00004
    },
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'cosmwasm'],
    chainSymbolImageUrl: 'https://orai.io/images/logos/logomark-dark.png',
    txExplorer: {
      name: 'Oraiscan',
      txUrl: 'https://scan.orai.io/txs/{txHash}',
      accountUrl: 'https://scan.orai.io/account/{address}'
    },
    beta: true // use v1beta1
  },
  {
    chainId: 'oraibridge-subnet',
    chainName: 'OraiBridge',
    rpc: 'https://bridge.rpc.orai.io',
    rest: 'https://bridge.lcd.orai.io',
    stakeCurrency: {
      coinDenom: 'ORAIB',
      coinMinimalDenom: 'uoraib',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('oraib'),
    // List of all coin/tokens used in this chain.
    get currencies() {
      return [this.stakeCurrency];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0
    },
    features: ['stargate', 'ibc-transfer', 'cosmwasm']
  },
  {
    rpc: 'https://rpc-cosmoshub.keplr.app',
    rest: 'https://lcd-cosmoshub.keplr.app',
    chainId: 'cosmoshub-4',
    chainName: 'Cosmos Hub',
    stakeCurrency: {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coinGeckoId: 'cosmos',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('cosmos'),
    currencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png',
    txExplorer: {
      name: 'Mintscan',
      txUrl: 'https://www.mintscan.io/cosmos/txs/{txHash}'
    }
  },
  // {
  //   rest: 'https://bsc-dataseed1.ninicoin.io',
  //   chainId: '56',
  //   chainName: 'BNB Smart Chain',
  //   bip44: {
  //     coinType: 60
  //   },
  //   stakeCurrency: {
  //     coinDenom: 'BNB',
  //     coinMinimalDenom: 'bnb',
  //     coinDecimals: 18,
  //     coinGeckoId: 'bnb',
  //     coinImageUrl:
  //       'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('evmos'),
  //   networkType: 'evm',
  //   currencies: [
  //     {
  //       coinDenom: 'BNB',
  //       coinMinimalDenom: 'bnb',
  //       coinDecimals: 18,
  //       coinGeckoId: 'bnb',
  //       coinImageUrl:
  //         'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
  //     },
  //     {
  //       coinDenom: 'ORAI',
  //       coinMinimalDenom:
  //         'erc20:0xA325Ad6D9c92B55A3Fc5aD7e412B1518F96441C0:Oraichain Token',
  //       coinDecimals: 18,
  //       coinGeckoId: 'oraichain-token',
  //       coinImageUrl:
  //         'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
  //     },
  //     {
  //       coinDenom: 'AIRI',
  //       coinMinimalDenom:
  //         'erc20:0x7e2a35c746f2f7c240b664f1da4dd100141ae71f:aiRight Token',
  //       coinDecimals: 18,
  //       coinGeckoId: 'airight',
  //       coinImageUrl:
  //         'https://s2.coinmarketcap.com/static/img/coins/64x64/11563.png'
  //     },
  //     {
  //       coinDenom: 'KWT',
  //       coinMinimalDenom:
  //         'erc20:0x257a8d1e03d17b8535a182301f15290f11674b53:Kawaii Islands',
  //       coinDecimals: 18,
  //       coinGeckoId: 'kawaii-islands',
  //       coinImageUrl:
  //         'https://s2.coinmarketcap.com/static/img/coins/64x64/12313.png'
  //     }
  //   ],
  //   feeCurrencies: [
  //     {
  //       coinDenom: 'BNB',
  //       coinMinimalDenom: 'bnb',
  //       coinDecimals: 18,
  //       coinGeckoId: 'bnb',
  //       coinImageUrl:
  //         'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
  //     }
  //   ],
  //   gasPriceStep: {
  //     low: 10000000000,
  //     average: 25000000000,
  //     high: 40000000000
  //   },
  //   features: [],
  //   txExplorer: {
  //     name: 'Bsc Scan',
  //     txUrl: 'https://bscscan.com/tx/${txHash}',
  //     accountUrl: 'https://bscscan.com/address/{address}'
  //   }
  // },

  {
    rpc: 'https://rpc-osmosis.keplr.app',
    rest: 'https://lcd-osmosis.keplr.app',
    chainId: 'osmosis-1',
    chainName: 'Osmosis',
    stakeCurrency: {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('osmo'),
    currencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png'
      },
      {
        coinDenom: 'ION',
        coinMinimalDenom: 'uion',
        coinDecimals: 6,
        coinGeckoId: 'ion',
        coinImageUrl:
          'https://dhj8dql1kzq2v.cloudfront.net/white/osmosis-ion.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'OSMO',
        coinMinimalDenom: 'uosmo',
        coinDecimals: 6,
        coinGeckoId: 'osmosis',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png'
      }
    ],
    coinType: 118,
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png',
    txExplorer: {
      name: 'Mintscan',
      txUrl: 'https://www.mintscan.io/osmosis/txs/{txHash}'
    }
  },
  {
    rpc: 'https://rpc-secret.keplr.app',
    rest: 'https://lcd-secret.keplr.app',
    chainId: 'secret-3',
    chainName: 'Secret Network',
    stakeCurrency: {
      coinDenom: 'SCRT',
      coinMinimalDenom: 'uscrt',
      coinDecimals: 6,
      coinGeckoId: 'secret',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/secret.png'
    },
    bip44: {
      coinType: 529
    },
    alternativeBIP44s: [
      {
        coinType: 118
      }
    ],
    bech32Config: Bech32Address.defaultBech32Config('secret'),
    currencies: [
      {
        coinDenom: 'SCRT',
        coinMinimalDenom: 'uscrt',
        coinDecimals: 6,
        coinGeckoId: 'secret',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/secret.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SCRT',
        coinMinimalDenom: 'uscrt',
        coinDecimals: 6,
        coinGeckoId: 'secret',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/secret.png'
      }
    ],
    coinType: 529,
    gasPriceStep: {
      low: 0.1,
      average: 0.25,
      high: 0.3
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/secret.png',
    features: ['secretwasm'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-akash.keplr.app',
    rest: 'https://lcd-akash.keplr.app',
    chainId: 'akashnet-2',
    chainName: 'Akash',
    stakeCurrency: {
      coinDenom: 'AKT',
      coinMinimalDenom: 'uakt',
      coinDecimals: 6,
      coinGeckoId: 'akash-network',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('akash'),
    currencies: [
      {
        coinDenom: 'AKT',
        coinMinimalDenom: 'uakt',
        coinDecimals: 6,
        coinGeckoId: 'akash-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AKT',
        coinMinimalDenom: 'uakt',
        coinDecimals: 6,
        coinGeckoId: 'akash-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png'
      }
    ],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-crypto-org.keplr.app',
    rest: 'https://lcd-crypto-org.keplr.app',
    chainId: 'crypto-org-chain-mainnet-1',
    chainName: 'Crypto.org',
    stakeCurrency: {
      coinDenom: 'CRO',
      coinMinimalDenom: 'basecro',
      coinDecimals: 8,
      coinGeckoId: 'crypto-com-chain',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/crypto-org.png'
    },
    bip44: {
      coinType: 394
    },
    bech32Config: Bech32Address.defaultBech32Config('cro'),
    currencies: [
      {
        coinDenom: 'CRO',
        coinMinimalDenom: 'basecro',
        coinDecimals: 8,
        coinGeckoId: 'crypto-com-chain',
        coinImageUrl:
          'https://dhj8dql1kzq2v.cloudfront.net/white/crypto-org.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CRO',
        coinMinimalDenom: 'basecro',
        coinDecimals: 8,
        coinGeckoId: 'crypto-com-chain',
        coinImageUrl:
          'https://dhj8dql1kzq2v.cloudfront.net/white/crypto-org.png'
      }
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.04
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/crypto-org.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-iov.keplr.app',
    rest: 'https://lcd-iov.keplr.app',
    chainId: 'iov-mainnet-ibc',
    chainName: 'Starname',
    stakeCurrency: {
      coinDenom: 'IOV',
      coinMinimalDenom: 'uiov',
      coinDecimals: 6,
      coinGeckoId: 'starname',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/starname.png'
    },
    bip44: {
      coinType: 234
    },
    bech32Config: Bech32Address.defaultBech32Config('star'),
    currencies: [
      {
        coinDenom: 'IOV',
        coinMinimalDenom: 'uiov',
        coinDecimals: 6,
        coinGeckoId: 'starname',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/starname.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'IOV',
        coinMinimalDenom: 'uiov',
        coinDecimals: 6,
        coinGeckoId: 'starname',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/starname.png'
      }
    ],
    gasPriceStep: {
      low: 1,
      average: 2,
      high: 3
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/starname.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-sifchain.keplr.app',
    rest: 'https://lcd-sifchain.keplr.app/',
    chainId: 'sifchain-1',
    chainName: 'Sifchain',
    stakeCurrency: {
      coinDenom: 'ROWAN',
      coinMinimalDenom: 'rowan',
      coinDecimals: 18,
      coinGeckoId: 'sifchain',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sifchain.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('sif'),
    currencies: [
      {
        coinDenom: 'ROWAN',
        coinMinimalDenom: 'rowan',
        coinDecimals: 18,
        coinGeckoId: 'sifchain',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sifchain.png'
      },
      {
        coinDenom: 'Tether USDT',
        coinMinimalDenom: 'cusdt',
        coinDecimals: 6
      },
      {
        coinDenom: 'Ethereum',
        coinMinimalDenom: 'ceth',
        coinDecimals: 18
      },
      {
        coinDenom: 'Basic Attention Token',
        coinMinimalDenom: 'cbat',
        coinDecimals: 18
      },
      {
        coinDenom: 'Aragon',
        coinMinimalDenom: 'cant',
        coinDecimals: 18
      },
      {
        coinDenom: 'Bancor Network Token',
        coinMinimalDenom: 'cbnt',
        coinDecimals: 18
      },
      {
        coinDenom: '0x',
        coinMinimalDenom: 'czrx',
        coinDecimals: 18
      },
      {
        coinDenom: 'Chainlink',
        coinMinimalDenom: 'clink',
        coinDecimals: 18
      },
      {
        coinDenom: 'Decentraland',
        coinMinimalDenom: 'cmana',
        coinDecimals: 18
      },
      {
        coinDenom: 'Loopring',
        coinMinimalDenom: 'clrc',
        coinDecimals: 18
      },
      {
        coinDenom: 'Enjin Coin',
        coinMinimalDenom: 'cenj',
        coinDecimals: 18
      },
      {
        coinDenom: 'Synthetix Network Token',
        coinMinimalDenom: 'csnx',
        coinDecimals: 18
      },
      {
        coinDenom: 'TrueUSD',
        coinMinimalDenom: 'ctusd',
        coinDecimals: 18
      },
      {
        coinDenom: 'Ocean Protocol',
        coinMinimalDenom: 'cocean',
        coinDecimals: 18
      },
      {
        coinDenom: 'Fantom',
        coinMinimalDenom: 'cftm',
        coinDecimals: 18
      },
      {
        coinDenom: 'sUSD',
        coinMinimalDenom: 'csusd',
        coinDecimals: 18
      },
      {
        coinDenom: 'USD Coin',
        coinMinimalDenom: 'cusdc',
        coinDecimals: 6
      },
      {
        coinDenom: 'Crypto com Coin',
        coinMinimalDenom: 'ccro',
        coinDecimals: 8
      },
      {
        coinDenom: 'Wrapped Bitcoin',
        coinMinimalDenom: 'cwbtc',
        coinDecimals: 8
      },
      {
        coinDenom: 'Swipe',
        coinMinimalDenom: 'csxp',
        coinDecimals: 18
      },
      {
        coinDenom: 'Band Protocol',
        coinMinimalDenom: 'cband',
        coinDecimals: 18
      },
      {
        coinDenom: 'Dai Stablecoin',
        coinMinimalDenom: 'cdai',
        coinDecimals: 18
      },
      {
        coinDenom: 'Compound',
        coinMinimalDenom: 'ccomp',
        coinDecimals: 18
      },
      {
        coinDenom: 'UMA',
        coinMinimalDenom: 'cuma',
        coinDecimals: 18
      },
      {
        coinDenom: 'Balancer',
        coinMinimalDenom: 'cbal',
        coinDecimals: 18
      },
      {
        coinDenom: 'Yearn finance',
        coinMinimalDenom: 'cyfi',
        coinDecimals: 18
      },
      {
        coinDenom: 'Serum',
        coinMinimalDenom: 'csrm',
        coinDecimals: 6
      },
      {
        coinDenom: 'Cream',
        coinMinimalDenom: 'ccream',
        coinDecimals: 18
      },
      {
        coinDenom: 'SAND',
        coinMinimalDenom: 'csand',
        coinDecimals: 18
      },
      {
        coinDenom: 'Sushi',
        coinMinimalDenom: 'csushi',
        coinDecimals: 18
      },
      {
        coinDenom: 'Empty Set Dollar',
        coinMinimalDenom: 'cesd',
        coinDecimals: 18
      },
      {
        coinDenom: 'Uniswap',
        coinMinimalDenom: 'cuni',
        coinDecimals: 18
      },
      {
        coinDenom: 'Aave',
        coinMinimalDenom: 'caave',
        coinDecimals: 18
      },
      {
        coinDenom: 'BarnBridge',
        coinMinimalDenom: 'cbond',
        coinDecimals: 18
      },
      {
        coinDenom: 'Wrapped Filecoin',
        coinMinimalDenom: 'cwfil',
        coinDecimals: 18
      },
      {
        coinDenom: 'The Graph',
        coinMinimalDenom: 'cgrt',
        coinDecimals: 18
      },
      {
        coinDenom: 'Tokenlon',
        coinMinimalDenom: 'clon',
        coinDecimals: 18
      },
      {
        coinDenom: '1inch',
        coinMinimalDenom: 'c1inch',
        coinDecimals: 18
      },
      {
        coinDenom: 'THORChain ERC20',
        coinMinimalDenom: 'crune',
        coinDecimals: 18
      },
      {
        coinDenom: 'Secret ERC20',
        coinMinimalDenom: 'cwscrt',
        coinDecimals: 6
      },
      {
        coinDenom: 'IoTeX',
        coinMinimalDenom: 'ciotx',
        coinDecimals: 18
      },
      {
        coinDenom: 'Reef Finance',
        coinMinimalDenom: 'creef',
        coinDecimals: 18
      },
      {
        coinDenom: 'COCOS BCX',
        coinMinimalDenom: 'ccocos',
        coinDecimals: 18
      },
      {
        coinDenom: 'Keep Network',
        coinMinimalDenom: 'ckeep',
        coinDecimals: 18
      },
      {
        coinDenom: 'Origin Protocol',
        coinMinimalDenom: 'cogn',
        coinDecimals: 18
      },
      {
        coinDenom: 'ODAOfi',
        coinMinimalDenom: 'cdaofi',
        coinDecimals: 18
      },
      {
        coinDenom: 'Linear',
        coinMinimalDenom: 'clina',
        coinDecimals: 18
      },
      {
        coinDenom: '12Ships',
        coinMinimalDenom: 'ctshp',
        coinDecimals: 18
      },
      {
        coinDenom: 'B.20',
        coinMinimalDenom: 'cb20',
        coinDecimals: 18
      },
      {
        coinDenom: 'Akropolis',
        coinMinimalDenom: 'cakro',
        coinDecimals: 18
      },
      {
        coinDenom: 'Rio Fuel Token',
        coinMinimalDenom: 'crfuel',
        coinDecimals: 18
      },
      {
        coinDenom: 'Rally',
        coinMinimalDenom: 'crly',
        coinDecimals: 18
      },
      {
        coinDenom: 'Convergence',
        coinMinimalDenom: 'cconv',
        coinDecimals: 18
      },
      {
        coinDenom: 'Render Token',
        coinMinimalDenom: 'crndr',
        coinDecimals: 18
      },
      {
        coinDenom: 'PAID Network',
        coinMinimalDenom: 'cpaid',
        coinDecimals: 18
      },
      {
        coinDenom: 'Tidal',
        coinMinimalDenom: 'ctidal',
        coinDecimals: 18
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'ROWAN',
        coinMinimalDenom: 'rowan',
        coinDecimals: 18,
        coinGeckoId: 'sifchain',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sifchain.png'
      }
    ],
    gasPriceStep: {
      low: 500000000000,
      average: 1000000000000,
      high: 2000000000000
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/sifchain.png',
    features: ['stargate'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-certik.keplr.app',
    rest: 'https://lcd-certik.keplr.app',
    chainId: 'shentu-2.2',
    chainName: 'Certik',
    stakeCurrency: {
      coinDenom: 'CTK',
      coinMinimalDenom: 'uctk',
      coinDecimals: 6,
      coinGeckoId: 'certik'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('certik'),
    currencies: [
      {
        coinDenom: 'CTK',
        coinMinimalDenom: 'uctk',
        coinDecimals: 6,
        coinGeckoId: 'certik'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CTK',
        coinMinimalDenom: 'uctk',
        coinDecimals: 6,
        coinGeckoId: 'certik'
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-iris.keplr.app',
    rest: 'https://lcd-iris.keplr.app',
    chainId: 'irishub-1',
    chainName: 'IRISnet',
    stakeCurrency: {
      coinDenom: 'IRIS',
      coinMinimalDenom: 'uiris',
      coinDecimals: 6,
      coinGeckoId: 'iris-network',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/iris.png'
    },
    bip44: {
      coinType: 118
    },
    alternativeBIP44s: [
      {
        coinType: 566
      }
    ],
    bech32Config: Bech32Address.defaultBech32Config('iaa'),
    currencies: [
      {
        coinDenom: 'IRIS',
        coinMinimalDenom: 'uiris',
        coinDecimals: 6,
        coinGeckoId: 'iris-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/iris.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'IRIS',
        coinMinimalDenom: 'uiris',
        coinDecimals: 6,
        coinGeckoId: 'iris-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/iris.png'
      }
    ],
    gasPriceStep: {
      low: 0.2,
      average: 0.3,
      high: 0.4
    },
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/iris.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-regen.keplr.app',
    rest: 'https://lcd-regen.keplr.app',
    chainId: 'regen-1',
    chainName: 'Regen',
    stakeCurrency: {
      coinDenom: 'REGEN',
      coinMinimalDenom: 'uregen',
      coinDecimals: 6,
      coinGeckoId: 'regen',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('regen'),
    currencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coinGeckoId: 'regen',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'REGEN',
        coinMinimalDenom: 'uregen',
        coinDecimals: 6,
        coinGeckoId: 'regen',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png'
      }
    ],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png',
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go']
  },
  {
    rpc: 'https://rpc-juno.keplr.app',
    rest: 'https://lcd-juno.keplr.app',
    chainId: 'juno-1',
    chainName: 'Juno',
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coinGeckoId: 'juno-network',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('juno'),
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png'
      }
    ],
    gasPriceStep: {
      low: 0.001,
      average: 0.0025,
      high: 0.004
    },
    features: [
      'stargate',
      'no-legacy-stdTx',
      'cosmwasm',
      'ibc-transfer',
      'ibc-go'
    ],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png',
    txExplorer: {
      name: 'Mintscan',
      txUrl: 'https://www.mintscan.io/juno/txs/{txHash}'
    }
  },
  {
    rpc: 'https://rpc-stargaze.keplr.app',
    rest: 'https://lcd-stargaze.keplr.app',
    chainId: 'stargaze-1',
    chainName: 'Stargaze',
    stakeCurrency: {
      coinDenom: 'STARS',
      coinMinimalDenom: 'ustars',
      coinDecimals: 6,
      coinGeckoId: 'stargaze',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('stars'),
    currencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coinGeckoId: 'stargaze',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'STARS',
        coinMinimalDenom: 'ustars',
        coinDecimals: 6,
        coinGeckoId: 'stargaze',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png'
      }
    ],
    features: ['stargate', 'no-legacy-stdTx', 'ibc-transfer', 'ibc-go'],
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/stargaze.png',
    txExplorer: {
      name: 'Mintscan',
      txUrl: 'https://www.mintscan.io/stargaze/txs/{txHash}'
    }
  },
  {
    rpc: 'https://rpc-persistence.keplr.app',
    rest: 'https://lcd-persistence.keplr.app',
    chainId: 'core-1',
    chainName: 'Persistence',
    stakeCurrency: {
      coinDenom: 'XPRT',
      coinMinimalDenom: 'uxprt',
      coinDecimals: 6,
      coinGeckoId: 'persistence',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/persistence.png'
    },
    bip44: {
      coinType: 750
    },
    bech32Config: Bech32Address.defaultBech32Config('persistence'),
    currencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coinGeckoId: 'persistence',
        coinImageUrl:
          'https://dhj8dql1kzq2v.cloudfront.net/white/persistence.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'XPRT',
        coinMinimalDenom: 'uxprt',
        coinDecimals: 6,
        coinGeckoId: 'persistence',
        coinImageUrl:
          'https://dhj8dql1kzq2v.cloudfront.net/white/persistence.png'
      }
    ],
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/persistence.png',
    features: ['stargate', 'ibc-transfer']
  },
  {
    rpc: 'https://rpc-axelar.keplr.app',
    rest: 'https://lcd-axelar.keplr.app',
    chainId: 'axelar-dojo-1',
    chainName: 'Axelar',
    stakeCurrency: {
      coinDenom: 'AXL',
      coinMinimalDenom: 'uaxl',
      coinDecimals: 6,
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/axelar.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('axelar'),
    currencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/axelar.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AXL',
        coinMinimalDenom: 'uaxl',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/axelar.png'
      }
    ],
    gasPriceStep: {
      low: 0.05,
      average: 0.075,
      high: 0.1
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/axelar.png'
  },
  {
    rpc: 'https://rpc-sommelier.keplr.app',
    rest: 'https://lcd-sommelier.keplr.app',
    chainId: 'sommelier-3',
    chainName: 'Sommelier',
    stakeCurrency: {
      coinDenom: 'SOMM',
      coinMinimalDenom: 'usomm',
      coinDecimals: 6,
      coinGeckoId: 'sommelier',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/somm.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('somm'),
    currencies: [
      {
        coinDenom: 'SOMM',
        coinMinimalDenom: 'usomm',
        coinDecimals: 6,
        coinGeckoId: 'sommelier',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/somm.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SOMM',
        coinMinimalDenom: 'usomm',
        coinDecimals: 6,
        coinGeckoId: 'sommelier',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/somm.png'
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/somm.png'
  },
  {
    rpc: 'https://rpc-umee.keplr.app',
    rest: 'https://lcd-umee.keplr.app',
    chainId: 'umee-1',
    chainName: 'Umee',
    stakeCurrency: {
      coinDenom: 'UMEE',
      coinMinimalDenom: 'uumee',
      coinDecimals: 6,
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/umee.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('umee'),
    currencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/umee.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'UMEE',
        coinMinimalDenom: 'uumee',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/umee.png'
      }
    ],
    gasPriceStep: {
      low: 0,
      average: 0.025,
      high: 0.04
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/umee.png'
  },
  {
    rpc: 'https://rpc-sentinel.keplr.app',
    rest: 'https://lcd-sentinel.keplr.app',
    chainId: 'sentinelhub-2',
    chainName: 'Sentinel',
    stakeCurrency: {
      coinDenom: 'DVPN',
      coinMinimalDenom: 'udvpn',
      coinDecimals: 6,
      coinGeckoId: 'sentinel',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sentinel.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('sent'),
    currencies: [
      {
        coinDenom: 'DVPN',
        coinMinimalDenom: 'udvpn',
        coinDecimals: 6,
        coinGeckoId: 'sentinel',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sentinel.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DVPN',
        coinMinimalDenom: 'udvpn',
        coinDecimals: 6,
        coinGeckoId: 'sentinel',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/sentinel.png'
      }
    ],
    gasPriceStep: {
      low: 0.1,
      average: 0.25,
      high: 0.4
    },
    chainSymbolImageUrl:
      'https://dhj8dql1kzq2v.cloudfront.net/white/sentinel.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-impacthub.keplr.app',
    rest: 'https://lcd-impacthub.keplr.app',
    chainId: 'impacthub-3',
    chainName: 'ixo',
    stakeCurrency: {
      coinDenom: 'IXO',
      coinMinimalDenom: 'uixo',
      coinDecimals: 6,
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('ixo'),
    currencies: [
      {
        coinDenom: 'IXO',
        coinMinimalDenom: 'uixo',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'IXO',
        coinMinimalDenom: 'uixo',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png'
      }
    ],
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png',
    features: ['stargate'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-emoney.keplr.app',
    rest: 'https://lcd-emoney.keplr.app',
    chainId: 'emoney-3',
    chainName: 'e-Money',
    stakeCurrency: {
      coinDenom: 'NGM',
      coinMinimalDenom: 'ungm',
      coinDecimals: 6,
      coinGeckoId: 'e-money',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png'
    },

    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('emoney'),
    currencies: [
      {
        coinDenom: 'NGM',
        coinMinimalDenom: 'ungm',
        coinDecimals: 6,
        coinGeckoId: 'e-money',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png'
      },
      {
        coinDenom: 'EEUR',
        coinMinimalDenom: 'eeur',
        coinDecimals: 6,
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'NGM',
        coinMinimalDenom: 'ungm',
        coinDecimals: 6,
        coinGeckoId: 'e-money',
        coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png'
      }
    ],
    gasPriceStep: {
      low: 1,
      average: 1,
      high: 1
    },
    chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png',
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-microtick.keplr.app',
    rest: 'https://lcd-microtick.keplr.app',
    chainId: 'microtick-1',
    chainName: 'Microtick',
    stakeCurrency: {
      coinDenom: 'TICK',
      coinMinimalDenom: 'utick',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('micro'),
    currencies: [
      {
        coinDenom: 'TICK',
        coinMinimalDenom: 'utick',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'TICK',
        coinMinimalDenom: 'utick',
        coinDecimals: 6
      }
    ],
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-columbus.keplr.app',
    rest: 'https://lcd-columbus.keplr.app',
    chainId: 'columbus-5',
    chainName: 'Terra',
    stakeCurrency: {
      coinDenom: 'LUNA',
      coinMinimalDenom: 'uluna',
      coinDecimals: 6,
      coinGeckoId: 'terra-luna'
    },
    bip44: {
      coinType: 330
    },
    bech32Config: Bech32Address.defaultBech32Config('terra'),
    currencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coinGeckoId: 'terra-luna'
      },
      {
        coinDenom: 'UST',
        coinMinimalDenom: 'uusd',
        coinDecimals: 6,
        coinGeckoId: 'terrausd'
      },
      {
        coinDenom: 'KRT',
        coinMinimalDenom: 'ukrw',
        coinDecimals: 6,
        coinGeckoId: 'terrakrw'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LUNA',
        coinMinimalDenom: 'uluna',
        coinDecimals: 6,
        coinGeckoId: 'terra-luna'
      },
      {
        coinDenom: 'UST',
        coinMinimalDenom: 'uusd',
        coinDecimals: 6,
        coinGeckoId: 'terrausd'
      }
    ],
    gasPriceStep: {
      low: 0.015,
      average: 0.015,
      high: 0.015
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    hideInUI: true
  },
  {
    rpc: 'https://mainnet-node.like.co/rpc',
    rest: 'https://mainnet-node.like.co',
    chainId: 'likecoin-mainnet-2',
    chainName: 'LikeCoin',
    stakeCurrency: {
      coinDenom: 'LIKE',
      coinMinimalDenom: 'nanolike',
      coinDecimals: 9,
      coinGeckoId: 'likecoin'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('cosmos'),
    currencies: [
      {
        coinDenom: 'LIKE',
        coinMinimalDenom: 'nanolike',
        coinDecimals: 9,
        coinGeckoId: 'likecoin'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LIKE',
        coinMinimalDenom: 'nanolike',
        coinDecimals: 9,
        coinGeckoId: 'likecoin'
      }
    ],
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.bitcanna.io',
    rest: 'https://lcd.bitcanna.io',
    chainId: 'bitcanna-1',
    chainName: 'BitCanna',
    stakeCurrency: {
      coinDenom: 'BCNA',
      coinMinimalDenom: 'ubcna',
      coinDecimals: 6,
      coinGeckoId: 'bitcanna'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('bcna'),
    currencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'ubcna',
        coinDecimals: 6,
        coinGeckoId: 'bitcanna'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BCNA',
        coinMinimalDenom: 'ubcna',
        coinDecimals: 6,
        coinGeckoId: 'bitcanna'
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.explorebitsong.com',
    rest: 'https://lcd.explorebitsong.com',
    chainId: 'bitsong-2b',
    chainName: 'BitSong',
    stakeCurrency: {
      coinDenom: 'BTSG',
      coinMinimalDenom: 'ubtsg',
      coinDecimals: 6
    },
    bip44: {
      coinType: 639
    },
    bech32Config: Bech32Address.defaultBech32Config('bitsong'),
    currencies: [
      {
        coinDenom: 'BTSG',
        coinMinimalDenom: 'ubtsg',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BTSG',
        coinMinimalDenom: 'ubtsg',
        coinDecimals: 6
      }
    ],
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-mainnet.blockchain.ki',
    rest: 'https://api-mainnet.blockchain.ki',
    chainId: 'kichain-2',
    chainName: 'Ki',
    stakeCurrency: {
      coinDenom: 'XKI',
      coinMinimalDenom: 'uxki',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('ki'),
    currencies: [
      {
        coinDenom: 'XKI',
        coinMinimalDenom: 'uxki',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'XKI',
        coinMinimalDenom: 'uxki',
        coinDecimals: 6
      }
    ],
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.gopanacea.org',
    rest: 'https://api.gopanacea.org',
    chainId: 'panacea-3',
    chainName: 'Panacea',
    stakeCurrency: {
      coinDenom: 'MED',
      coinMinimalDenom: 'umed',
      coinDecimals: 6,
      coinGeckoId: 'medibloc'
    },
    bip44: {
      coinType: 371
    },
    bech32Config: Bech32Address.defaultBech32Config('panacea'),
    currencies: [
      {
        coinDenom: 'MED',
        coinMinimalDenom: 'umed',
        coinDecimals: 6,
        coinGeckoId: 'medibloc'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'MED',
        coinMinimalDenom: 'umed',
        coinDecimals: 6,
        coinGeckoId: 'medibloc'
      }
    ],
    gasPriceStep: {
      low: 5,
      average: 7,
      high: 9
    },
    features: ['stargate', 'ibc-transfer'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.bostrom.cybernode.ai',
    rest: 'https://lcd.bostrom.cybernode.ai',
    chainId: 'bostrom',
    chainName: 'Bostrom',
    stakeCurrency: {
      coinDenom: 'BOOT',
      coinMinimalDenom: 'boot',
      coinDecimals: 0
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('bostrom'),
    currencies: [
      {
        coinDenom: 'BOOT',
        coinMinimalDenom: 'boot',
        coinDecimals: 0
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'BOOT',
        coinMinimalDenom: 'boot',
        coinDecimals: 0
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.comdex.one',
    rest: 'https://rest.comdex.one',
    chainId: 'comdex-1',
    chainName: 'Comdex',
    stakeCurrency: {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('comdex'),
    currencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CMDX',
        coinMinimalDenom: 'ucmdx',
        coinDecimals: 6
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.cheqd.net',
    rest: 'https://api.cheqd.net',
    chainId: 'cheqd-mainnet-1',
    chainName: 'cheqd',
    stakeCurrency: {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'ncheq',
      coinDecimals: 9
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('cheqd'),
    currencies: [
      {
        coinDenom: 'CHEQ',
        coinMinimalDenom: 'ncheq',
        coinDecimals: 9
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'CHEQ',
        coinMinimalDenom: 'ncheq',
        coinDecimals: 9
      }
    ],
    gasPriceStep: {
      low: 25,
      average: 30,
      high: 50
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.chihuahua.wtf',
    rest: 'https://api.chihuahua.wtf',
    chainId: 'chihuahua-1',
    chainName: 'Chihuahua',
    stakeCurrency: {
      coinDenom: 'HUAHUA',
      coinMinimalDenom: 'uhuahua',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('chihuahua'),
    currencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'HUAHUA',
        coinMinimalDenom: 'uhuahua',
        coinDecimals: 6
      }
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.035
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://node0.mainnet.lum.network/rpc',
    rest: 'https://node0.mainnet.lum.network/rest',
    chainId: 'lum-network-1',
    chainName: 'Lum Network',
    stakeCurrency: {
      coinDenom: 'LUM',
      coinMinimalDenom: 'ulum',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('lum'),
    currencies: [
      {
        coinDenom: 'LUM',
        coinMinimalDenom: 'ulum',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'LUM',
        coinMinimalDenom: 'ulum',
        coinDecimals: 6
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://mainnet-rpc.vidulum.app',
    rest: 'https://mainnet-lcd.vidulum.app',
    chainId: 'vidulum-1',
    chainName: 'Vidulum',
    stakeCurrency: {
      coinDenom: 'VDL',
      coinMinimalDenom: 'uvdl',
      coinDecimals: 6,
      coinGeckoId: 'vidulum'
    },
    bip44: {
      coinType: 370
    },
    bech32Config: Bech32Address.defaultBech32Config('vdl'),
    currencies: [
      {
        coinDenom: 'VDL',
        coinMinimalDenom: 'uvdl',
        coinDecimals: 6,
        coinGeckoId: 'vidulum'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'VDL',
        coinMinimalDenom: 'uvdl',
        coinDecimals: 6,
        coinGeckoId: 'vidulum'
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc.mainnet.desmos.network',
    rest: 'https://api.mainnet.desmos.network',
    chainId: 'desmos-mainnet',
    chainName: 'Desmos',
    stakeCurrency: {
      coinDenom: 'DSM',
      coinMinimalDenom: 'udsm',
      coinDecimals: 6,
      coinGeckoId: 'desmos'
    },
    bip44: {
      coinType: 852
    },
    bech32Config: Bech32Address.defaultBech32Config('desmos'),
    currencies: [
      {
        coinDenom: 'DSM',
        coinMinimalDenom: 'udsm',
        coinDecimals: 6,
        coinGeckoId: 'desmos'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DSM',
        coinMinimalDenom: 'udsm',
        coinDecimals: 6,
        coinGeckoId: 'desmos'
      }
    ],
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  },
  {
    rpc: 'https://rpc-1-dig.notional.ventures',
    rest: 'https://api-1-dig.notional.ventures',
    chainId: 'dig-1',
    chainName: 'Dig',
    stakeCurrency: {
      coinDenom: 'DIG',
      coinMinimalDenom: 'udig',
      coinDecimals: 6
    },
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('dig'),
    currencies: [
      {
        coinDenom: 'DIG',
        coinMinimalDenom: 'udig',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'DIG',
        coinMinimalDenom: 'udig',
        coinDecimals: 6
      }
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.035
    },
    features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
    hideInUI: true
  }
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = [
  'https://app.osmosis.zone',
  'https://oraidex.io'
];

// tracking ads
export const AmplitudeApiKey = '879f08e23ff5926be676c19157bc4fd4';

// default thumbnails for fix address
export const ValidatorThumbnails: { [key: string]: string } = {
  oraivaloper1mxqeldsxg60t2y6gngpdm5jf3k96dnju5el96f:
    'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
  oraivaloper1h89umsrsstyeuet8kllwvf2tp630n77aymck78:
    'https://res.cloudinary.com/oraichain/image/upload/v1645501963/stakeWithOraiKingLogo.jpg',
  oraivaloper1xesqr8vjvy34jhu027zd70ypl0nnev5euy9nyl:
    'https://res.cloudinary.com/oraichain/image/upload/v1645432916/synergy.jpg',
  oraivaloper1uhcwtfntsvk8gpwfxltesyl4e28aalmq9v9z0x:
    'https://res.cloudinary.com/dcpwvhglr/image/upload/v1611912662/Superman_4_-_SAL_L_nwykie.jpg',
  oraivaloper1cp0jml5fxkdvmajcwvkue9d0sym6s0vqly88hg:
    'https://res.cloudinary.com/oraichain/image/upload/v1645501939/stakement_orai_explorer.jpg',
  oraivaloper1u2344d8jwtsx5as7u5jw7vel28puh34q7d3y64:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502101/titan.jpg',
  oraivaloper130jsl66rgss6eq7qur02yfr6tzppdvxglz7n7g:
    'https://res.cloudinary.com/oraichain/image/upload/v1645501772/vaiot.png',
  oraivaloper14nz2pqskfv9kcez8u0a9gnnsgwjerzqxpmne0y:
    'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
  oraivaloper16e6cpk6ycddk6208fpaya7tmmardhvr7h40yqy:
    'https://res.cloudinary.com/c-ng-ty-c-ph-n-rikkeisoft/image/upload/v1616749893/photo_2021-03-25_18-39-37_tqfsof.jpg',
  oraivaloper12ru3276mkzuuay6vhmg3t6z9hpvrsnplm2994n:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502148/binnostakeLogo.png',
  oraivaloper1kh9vejqxqqccavtv2nf683mx0z85mfpd7q566q:
    'https://res.cloudinary.com/c-ng-ty-c-ph-n-rikkeisoft/image/upload/v1616994377/lux_logo_small_1_nvwpdi.png',
  oraivaloper109vcny07r3waj9sld4ejasjyal0rudskeax7uc:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502209/chandraLogo.png',
  oraivaloper13ckyvg0ah9vuujtd49yner2ky92lej6nwjvrjv:
    'https://res.cloudinary.com/oraichain/image/upload/v1645501901/antOraiLogo.jpg',
  oraivaloper1xsptthm2ylfw0salut97ldfan2jt032nye7s00:
    'https://images.airight.io/validator/62641351385ee5000118de9e.png',
  oraivaloper1f6q9wjn8qp3ll8y8ztd8290vtec2yxyxxygyy2:
    'https://res.cloudinary.com/oraichain/image/upload/v1646573946/Blockval.png',
  oraivaloper1h9gg3xavqdau6uy3r36vn4juvzsg0lqvszgtvc:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502659/dime.jpg',
  oraivaloper1yc9nysml8dxy447hp3aytr0nssr9pd9a47l7gx:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502169/oraiBotValidatorLogo.png',
  oraivaloper1mrv57zj3dpfyc9yd5xptnz2tqfez9fss4c9r85:
    'https://images.airight.io/validator/62555944385ee500012733f0.png',
  oraivaloper1v26tdegnk79edw7xkk2xh8qn89vy6qej6yhsev:
    'https://res.cloudinary.com/oraichain/image/upload/v1645502256/TrinityLogo.jpg',
  oraivaloper17zr98cwzfqdwh69r8v5nrktsalmgs5sa83gpd9:
    'https://images.airight.io/validator/623c45bd385ee50001437260.png',
  oraivaloper1qv5jn7tueeqw7xqdn5rem7s09n7zletreera88:
    'https://images.airight.io/validator/626d483a385ee5000162832e.png',
  oraivaloper10z9f6539v0ge78xlm4yh7tddrvw445s6d7s2xq:
    'https://images.airight.io/validator/627565f6385ee5000181e778.JPG',
  oraivaloper1ch3ewye24zm094ygmxu5e4z7d0xre3vhthctpn:
    'https://images.airight.io/validator/62686b04385ee5000162832c.jpg',
  oraivaloper1m2d5uhr65p9vvlw2w29kajud5q529a76v22wyu:
    'https://images.airight.io/validator/626c1920385ee5000162832d.jpg',
  oraivaloper1ucx0gm8kca2zvyr9d39z249j62y2t8r0rwtmr6:
    'https://res.cloudinary.com/oraichain/image/upload/v1646034968/strong_node.jpg',
  oraivaloper1g0hmvzs76akv6802x0he6ladjnftp94ygsf2lc:
    'https://images.airight.io/validator/627231c8385ee5000162832f.png',
  oraivaloper1rqq57xt5r5pnuguffcrltnvkul7n0jdxxdgey0:
    'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
  oraivaloper1asz5wl5c2xt8y5kyp9r04v54zh77pq90qar7e8:
    'https://images.airight.io/validator/62729055385ee50001499911.png',
  oraivaloper1djm07np8dzyg4et3d7dqtr3692l80nggvl0edh:
    'https://images.airight.io/validator/625522ca385ee50001b67f29.png',
  oraivaloper14vcw5qk0tdvknpa38wz46js5g7vrvut8ku5kaa:
    'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
};
