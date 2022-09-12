import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores';
import { SignModal } from '../../modals/sign';
import { LedgerGranterModal } from '../../modals/ledger';
// import { WalletConnectApprovalModal } from '../../modals/wallet-connect-approval';
// import { WCMessageRequester } from '../../stores/wallet-connect/msg-requester';
// import { WCGoBackToBrowserModal } from '../../modals/wc-go-back-to-browser';
// import { BackHandler, Platform } from 'react-native';
// import { LoadingScreenModal } from '../loading-screen/modal';
// import { KeyRingStatus } from '@owallet/background';
import { navigationRef } from '../../router/root';
import { HomeBaseModal } from '../../modals/home-base';
import { SignEthereumModal } from '../../modals/sign/sign-ethereum';

export const InteractionModalsProivder: FunctionComponent = observer(
  ({ children }) => {
    const {
      keyRingStore,
      ledgerInitStore,
      permissionStore,
      signInteractionStore,
      modalStore
    } = useStore();

    // Example usage
    // modalStore.setOpen()
    // modalStore.setChildren(<Text>33333</Text>)

    useEffect(() => {
      for (const data of permissionStore.waitingDatas) {
        // Currently, there is no modal to permit the permission of external apps.
        // All apps should be embeded explicitly.
        // If such apps needs the permissions, add these origins to the privileged origins.
        if (data.data.origins.length !== 1) {
          permissionStore.reject(data.id);
        }
      }
    }, [permissionStore, permissionStore.waitingDatas]);

    return (
      <React.Fragment>
        {ledgerInitStore.isInitNeeded ? (
          <LedgerGranterModal
            isOpen={true}
            close={() => ledgerInitStore.abortAll()}
          />
        ) : null}
        {signInteractionStore.waitingData ? (
          <SignModal
            isOpen={true}
            close={() => signInteractionStore.rejectAll()}
          />
        ) : null}
        {signInteractionStore.waitingEthereumData ? (
          <SignEthereumModal
            isOpen={true}
            close={() => {
              signInteractionStore.rejectAll();
              navigationRef.current.goBack();
            }}
          />
        ) : null}
        {modalStore.getState ? (
          <HomeBaseModal isOpen={true} close={() => modalStore.close()} />
        ) : null}

        {children}
      </React.Fragment>
    );
  }
);
