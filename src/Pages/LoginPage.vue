<template>
  <div>
    <div v-if="userInfoVisible">
      <p>
        Logged in as <span>{{ userName }}</span>
      </p>
      <input type="button" value="Logout" @click="logOutClick" />
    </div>
    <div v-if="loginFormVisible">
      <h3>Login</h3>
      <label>Email</label>
      <input type="email" v-model="emailLogin" />
      <label>Password</label>
      <input type="password" v-model="passwordLogin" />
      <input
        type="submit"
        id="submitLogin"
        value="Login"
        @click="submitLoginClick"
      />
    </div>
    <div>
      <input
        type="submit"
        id="getDataByLogin"
        value="Login details"
        @click="getDataByLoginClick"
      />
    </div>
    <div>
      <input
        type="submit"
        id="getDataByRole"
        value="Role details"
        @click="getDataByRoleClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from "@/store/userStore";
import { TokenService } from "@/services/tokenService";
@Options({})
export default class LoginPage extends Vue {
  tokenKey = "accessToken";
  userStore = useStore();
  tokenService = new TokenService();
  userName = "";
  emailLogin = "";
  passwordLogin = "";
  userInfoVisible = false;
  loginFormVisible = true;

  async getTokenAsync() {
    const formData = new FormData();
    formData.append("grant_type", "password");
    console.log(this.emailLogin);
    formData.append("username", this.emailLogin);
    formData.append("password", this.passwordLogin);
    try {
      const response: any = await this.tokenService.login(formData);
      this.userName = response.username;
      this.userInfoVisible = true;
      this.loginFormVisible = false;
    } catch (err) {
      console.log(err);
    }
  }

  async submitLoginClick() {
    await this.getTokenAsync();
  }
  async logOutClick() {
    this.userName = "";
    this.userInfoVisible = false;
    this.loginFormVisible = true;
    this.userStore.commit("removeToken");
  }
  async getDataByLoginClick() {
    const resp = await this.tokenService.getLogin();
    alert(resp);
  }
  async getDataByRoleClick() {
    const resp = await this.tokenService.getRole();
    alert(resp);
  }
}
</script>

<style scoped lang="scss">
input {
  border: solid;
}
</style>
