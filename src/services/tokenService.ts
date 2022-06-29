import { UserState, useStore } from "@/store/userStore";
import { Store } from "vuex";
import { DataService } from "./dataService";
import { IDataService } from "@/types/services/IDataService";
import { ITokenService } from "@/types/services/ITokenService";

const BASE_URL = "https://localhost:5001/";

export class TokenService implements ITokenService {
  userStore: Store<UserState>;
  dataService: IDataService;

  constructor() {
    this.userStore = useStore();
    this.dataService = new DataService();
  }

  async login(userDetails: any): Promise<any> {
    const response = await this.dataService.post(
      BASE_URL + "account/token",
      userDetails
    );
    const data = await response.json();

    if (response.ok === true) {
      this.userStore.commit("setToken", data.access_token);
      return Promise.resolve(data);
    } else {
      return Promise.reject(response.status);
    }
  }

  async getRole() {
    const response = await this.dataService.post(BASE_URL + "users/getrole");
    const data = await response.json();

    if (response.ok === true) {
      this.userStore.commit("setToken", data.access_token);
      return Promise.resolve(data);
    } else {
      return Promise.reject(response.status);
    }
  }

  async getLogin() {
    const response = await this.dataService.post(BASE_URL + "users/getlogin");
    const data = await response.json();

    if (response.ok === true) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(response.status);
    }
  }
}
