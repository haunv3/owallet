/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

const { getDefaultConfig } = require('metro-config');

const blacklist = require('metro-config/src/defaults/exclusionList');
const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');
const fs = require('fs');

const workspaces = getWorkspaces(__dirname);

// Add additional Yarn workspace package roots to the module map
// https://bit.ly/2LHHTP0
const watchFolders = [
  path.resolve(__dirname, '../..', 'node_modules'),
  ...workspaces.filter((workspaceDir) => {
    return !(workspaceDir === __dirname);
  })
];

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  const injectedProviderFile = path.resolve(
    __dirname,
    './build/injected/injected-provider.bundle.js'
  );
  return {
    projectRoot: path.resolve(__dirname, '.'),
    watchFolders,
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      blacklistRE: blacklist([/packages\/mobile\/node_modules\/react\/.*/]),
      extraNodeModules: {
        crypto: path.resolve(__dirname, './polyfill/crypto'),
        buffer: path.resolve(__dirname, '../../node_modules/buffer'),
        stream: path.resolve(__dirname, '../../node_modules/stream-browserify'),
        string_decoder: path.resolve(
          __dirname,
          '../../node_modules/string_decoder'
        ),
        path: path.resolve(__dirname, '../../node_modules/path-browserify'),
        http: path.resolve(__dirname, '../../node_modules/http-browserify'),
        https: path.resolve(__dirname, '../../node_modules/https-browserify'),
        os: path.resolve(__dirname, '../../node_modules/os-browserify')
      }
    },
    transformer: {
      minifierPath: require.resolve('metro-minify-esbuild'),
      minifierConfig: {},
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    },
    server: {
      enhanceMiddleware: (middleare) => {
        return (req, res, next) => {
          if (req.originalUrl === '/injected-provider.bundle.js') {
            return res.end(fs.readFileSync(injectedProviderFile));
          }
          return middleare(req, res, next);
        };
      }
    }
  };
})();
