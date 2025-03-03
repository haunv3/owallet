import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef
} from 'react';
import { PageWithScrollViewInBottomTabView } from '../../components/page';
import { AccountCard } from './account-card';
import {
  AppState,
  AppStateStatus,
  RefreshControl,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useStore } from '../../stores';
import { EarningCard } from './earning-card';
import { observer } from 'mobx-react-lite';
import { TokensCard } from './tokens-card';
import { usePrevious } from '../../hooks';
import { BIP44Selectable } from './bip44-selectable';
import { useFocusEffect } from '@react-navigation/native';
import { ChainUpdaterService } from '@owallet/background';
import { colors } from '../../themes';
import { AccountCardEVM } from './account-card-evm';

export const HomeScreen: FunctionComponent = observer(props => {
  const [refreshing, setRefreshing] = React.useState(false);

  const { chainStore, accountStore, queriesStore, priceStore } = useStore();

  const scrollViewRef = useRef<ScrollView | null>(null);

  const currentChain = chainStore.current;
  const currentChainId = currentChain?.chainId;
  const previousChainId = usePrevious(currentChainId);
  const chainStoreIsInitializing = chainStore.isInitializing;
  const previousChainStoreIsInitializing = usePrevious(
    chainStoreIsInitializing,
    true
  );

  const checkAndUpdateChainInfo = useCallback(() => {
    if (!chainStoreIsInitializing) {
      (async () => {
        const result = await ChainUpdaterService.checkChainUpdate(currentChain);

        // TODO: Add the modal for explicit chain update.
        if (result.slient) {
          chainStore.tryUpdateChain(currentChainId);
        }
      })();
    }
  }, [chainStore, chainStoreIsInitializing, currentChain, currentChainId]);

  useEffect(() => {
    const appStateHandler = (state: AppStateStatus) => {
      if (state === 'active') {
        checkAndUpdateChainInfo();
      }
    };

    AppState.addEventListener('change', appStateHandler);

    return () => {
      AppState.removeEventListener('change', appStateHandler);
    };
  }, [checkAndUpdateChainInfo]);

  useFocusEffect(
    useCallback(() => {
      if (
        (chainStoreIsInitializing !== previousChainStoreIsInitializing &&
          !chainStoreIsInitializing) ||
        currentChainId !== previousChainId
      ) {
        checkAndUpdateChainInfo();
      }
    }, [
      chainStoreIsInitializing,
      previousChainStoreIsInitializing,
      currentChainId,
      previousChainId,
      checkAndUpdateChainInfo
    ])
  );

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0 });
    }
  }, [chainStore.current.chainId]);

  const onRefresh = React.useCallback(async () => {
    const account = accountStore.getAccount(chainStore.current.chainId);
    const queries = queriesStore.get(chainStore.current.chainId);

    // Because the components share the states related to the queries,
    // fetching new query responses here would make query responses on all other components also refresh.

    await Promise.all([
      priceStore.waitFreshResponse(),
      ...queries.queryBalances
        .getQueryBech32Address(account.bech32Address)
        .balances.map(bal => {
          return bal.waitFreshResponse();
        }),
      queries.cosmos.queryRewards
        .getQueryBech32Address(account.bech32Address)
        .waitFreshResponse(),
      queries.cosmos.queryDelegations
        .getQueryBech32Address(account.bech32Address)
        .waitFreshResponse(),
      queries.cosmos.queryUnbondingDelegations
        .getQueryBech32Address(account.bech32Address)
        .waitFreshResponse()
    ]);

    setRefreshing(false);
  }, [accountStore, chainStore, priceStore, queriesStore]);
  // const queries = queriesStore.get(chainStore.current.chainId);

  // const queryBalances = queriesStore
  //   .get(chainStore.current.chainId)
  //   .queryBalances.getQueryBech32Address(
  //     accountStore.getAccount(chainStore.current.chainId).bech32Address
  //   );

  // const queryBalancesEVM = queries.evm.queryEvmBalance.getQueryBalance(
  //   accountStore.getAccount(chainStore.current.chainId).evmosHexAddress
  // );

  // const tokens = queryBalances.balances;

  return (
    <PageWithScrollViewInBottomTabView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ref={scrollViewRef}
    >
      <BIP44Selectable />
      {chainStore.current.networkType === 'cosmos' ? (
        <AccountCard containerStyle={styles.containerStyle} />
      ) : (
        <AccountCardEVM containerStyle={styles.containerStyle} />
      )}
      <TokensCard containerStyle={styles.containerStyle} />
      {chainStore.current.networkType === 'cosmos' ? (
        <EarningCard containerStyle={styles.containerEarnStyle} />
      ) : null}

      {/* {currentChain.networkType === 'cosmos' && (
        <>
          <MyRewardCard
            containerStyle={style.flatten(['margin-bottom-card-gap'])}
          />
          <StakingInfoCard
            containerStyle={style.flatten(['margin-bottom-card-gap'])}
          />
          <GovernanceCard
            containerStyle={style.flatten(['margin-bottom-card-gap'])}
          />
        </>
      )} */}
    </PageWithScrollViewInBottomTabView>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 12,
    backgroundColor: colors['gray-100']
  },
  containerEarnStyle: {
    backgroundColor: colors['gray-100']
  }
});
