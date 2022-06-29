import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface UserState {
  token: null | string;
  role: null | string;
}

export const key: InjectionKey<Store<UserState>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<UserState>({
  state: {
    token: null,
    role: null,
  } as UserState,
  getters: {
    isAuthenticated(state: any) {
      return state.token !== null;
    },
    isAdmin(state: any) {
      return state.role === "admin";
    },
    getToken(state: any) {
      return state.token;
    },
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token;
    },
    removeToken(state: any) {
      state.token = null;
      state.role = null;
    },
  },
});
