<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-4">
        <h2>Login</h2>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="username" v-model="username" />
            <label for="username">Email</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <Password v-model="password" inputId="password" toggleMask/>
            <label for="password">Password</label>
          </FloatLabel>
        </div>
        <h5>Select User Type</h5>
      </div>

      <div
        class="flex align-items-center justify-content-center flex-row gap-3">
        <div class="flex align-items-center">
          <RadioButton
            inputId="handyman"
            name="handyman" v-model="role"
            value="handyman"
          />
          <label for="Pepper" class="ml-2">Handyman</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            inputId="customer"
            name="customer"  v-model="role"
            value="customer"
          />
          <label for="pizza" class="ml-2">Customer</label>
        </div>
      </div>
      <div class="flex flex-wrap  justify-content-center my-3 align-items-center gap-2">
      <Button type="submit" @click="logIn">Sign In</Button>
      </div>
    </div>
  </div>
  <!-- 


      <div class="p-formgroup-inline">
        <label>User Type</label>

        <FloatLabel>
          <RadioButton inputId="handyman" value="handyman" v-model="userType" />
          <label for="handyman">Handyman</label>
          <RadioButton inputId="customer" value="customer" v-model="userType" />
          <label for="customer">Customer</label>
        </FloatLabel>
        <FloatLabel> </FloatLabel>
      </div> -->

  <!-- Create Account Button -->
  <!-- <Button type="submit" @click="redirectToLoginPage">Create Accoun</Button> -->
</template>

<script>
// import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

import FloatLabel from 'primevue/floatlabel';
import {LOGIN} from "../services/LoginService"
// import InlineMessage from 'primevue/inlinemessage';

export default {
  name: 'SignUp',
  components: {
    InputText,
    Password,
    RadioButton,
    Button,
    FloatLabel,
    // InlineMessage,
  },
  data(){
    return {
      username: "",
      password: "",
      role: ""
    }
  },
  methods: {

    async logIn(){
      const jsonData= { 
        email: this.email,
        password:  this.password,
        role:  this.role
      }
      console.log(jsonData);

      const loginRes= await LOGIN(jsonData);
      console.log(loginRes);

    }
  }
};
</script>

<style scoped>

.login-form {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.p-field {
  margin-bottom: 20px;
}

.p-formgroup-inline .p-field {
  display: inline-block;
  margin-right: 10px;
}

.p-button {
  margin-top: 20px;
}
</style>
