import React, { FunctionComponent } from 'react';
import { PageWithScrollViewInBottomTabView } from '../../../components/page';
import { MyRewardCard } from './reward-card';
import { DelegationsCard } from './delegations-card';
import { UndelegationsCard } from './undelegations-card';
import { useStyle } from '../../../styles';
import { useStore } from '../../../stores';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const StakingDashboardScreen: FunctionComponent = () => {
  const { chainStore, accountStore, queriesStore } = useStore();
  const { top } = useSafeAreaInsets();
  const style = useStyle();

  const account = accountStore.getAccount(chainStore.current.chainId);
  const queries = queriesStore.get(chainStore.current.chainId);

  const unbondings =
    queries.cosmos.queryUnbondingDelegations.getQueryBech32Address(
      account.bech32Address
    ).unbondingBalances;

  return (
    <PageWithScrollViewInBottomTabView style={{
      paddingTop: top
    }}>
      <MyRewardCard containerStyle={style.flatten(['margin-y-card-gap'])} />
      <DelegationsCard
        containerStyle={style.flatten(['margin-bottom-card-gap'])}
      />
      {unbondings.length > 0 ? (
        <UndelegationsCard
          containerStyle={style.flatten(['margin-bottom-card-gap'])}
        />
      ) : null}
    </PageWithScrollViewInBottomTabView>
  );
};
