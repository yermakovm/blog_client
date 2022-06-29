import { IDataService } from "@/types/services/IDataService";
import { IUserDetails } from "@/types/IUserDetails";
import { UserState, useStore } from "@/store/userStore";
import { Store } from "vuex";

export class DataService implements IDataService {
  userStore: Store<UserState>;

  constructor() {
    this.userStore = useStore();
  }

  async get(url: string, body: any, mimeType = "application/json") {
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: mimeType,
        Authorization: "Bearer " + this.userStore.getters.getToken,
      },
      body: body,
    });
  }

  async post(url: string, body: any, mimeType = "application/json") {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: mimeType,
        Authorization: "Bearer " + this.userStore.getters.getToken,
      },
      body: body,
    });
  }
  async update(url: string, body: any, mimeType = "application/json") {
    return fetch(url, {
      method: "UPDATE",
      headers: {
        Accept: mimeType,
        Authorization: "Bearer " + this.userStore.getters.getToken,
      },
      body: body,
    });
  }
  async delete(url: string, body: any, mimeType = "application/json") {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Accept: mimeType,
        Authorization: "Bearer " + this.userStore.getters.getToken,
      },
      body: body,
    });
  }
}
