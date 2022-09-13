import { observable, action, makeObservable, computed } from 'mobx';
import { create, persist } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EmbedChainInfos } from '@owallet/common';

export class EmbedChainInfosStore {
  @persist('list')
  @observable
  protected chainArray: Array<any>;

  constructor() {
    makeObservable(this);
    this.chainArray = [];
  }

  @action
  addChain(chainInfo: object) {
    this.chainArray.push(chainInfo);
  }

  @computed
  get getChainInfos() {
    return this.chainArray;
  }
}

const hydrate = create({
  storage: AsyncStorage, // or AsyncStorage in react-native.
  jsonify: true // if you use AsyncStorage, here shoud be true
});

export const embedChainInfosStore = new EmbedChainInfosStore();

hydrate('embedChainInfosStore', embedChainInfosStore).then(() =>
  console.log('embedChainInfos hydrated')
);
