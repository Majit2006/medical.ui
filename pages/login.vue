<template>
  <div>
    <div class="container">
      <img src="../assets/images/logo.png" class="Form-Logo" />
      <h1>Международный центр травматологии</h1>
      <div class="login">
        <h3>Вход в систему</h3>
        <DxForm :form-data.sync="signIn" ref="loginForm">
          <DxGroupItem :col-count="1">
            <DxGroupItem :col-count="1">
              <DxSimpleItem class="input" data-field="name" :show-colon="false"
                :editor-options="{ placeholder: 'username' }" />
            </DxGroupItem>
            <DxGroupItem :col-count="1">
              <DxSimpleItem :editor-options="{ placeholder: 'Пароль', mode: 'password' }" data-field="password"
                :show-colon="false" />
            </DxGroupItem>
          </DxGroupItem>
        </DxForm>
        <DxButton @click="login" :width="120" text="Contained" type="success" class="btn-login" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxLabel,
} from "devextreme-vue/form";
import DxButton from "devextreme-vue/button";
import { Login } from "~/infrastructure/classes/Login";
import { ILogin } from "~/infrastructure/interfaces/administration/ILogin";
export default {
  layout: "LoginPage",
  data() {
    let signIn: ILogin = new Login();
    return {
      signIn,
    };
  },
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxLabel,
    DxButton,
  },
  props: {},
  created() { },
  methods: {
    login() {
      let result = this.$refs["loginForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.authentications, this.signIn),

          (e) => {
            let token = e.data.access_token;
            localStorage.setItem("token", token);
            console.log(token);
            this.$awn.success();
            this.$router.push(`/cabinet`);
          }
        );
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Form-Logo {
  margin-top: 10px;
}

.login {
  margin-top: 20px;
}

.btn-login {
  margin-top: 10px;
}

h1 {
  margin-bottom: 10px;
  color: #009332;
}

h3 {
  margin-bottom: 10px;
  text-align: center;
}
</style>
