<template>
  <NavBar />
  <div class="flex justify-content-center align-items-center h-full">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-1">
        <h2>Edit Account Details</h2>
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="fname" v-model="fname" />
              <label for="username">First Name</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="lname" v-model="lname" />
              <label for="username">Last Name</label>
            </FloatLabel>
          </div>

          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <Password toggleMask v-model="password" inputId="password" />
              <label for="password">Password</label>
            </FloatLabel>
          </div>
        </div>
      </div>

      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="Address" v-model="address" />
            <label for="Address">Address</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="City" v-model="city" />
            <label for="City">City</label>
          </FloatLabel>
        </div>
      </div>
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="PostalCode" v-model="postalCode" />
            <label for="PostalCode">Postal Code</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="PhoneNumber" v-model="phoneNum" />
            <label for="PhoneNumber">Phone Number</label>
          </FloatLabel>
        </div>
      </div>

      <div
        class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
      >
        <Button type="submit" @click="updateAcc">Update</Button>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
import NavBar from "./NavBar.vue";
import { updateAccount, getAccount } from "../services/SignUpService.js";

export default {
  name: "AccountPage",
  components: {
    InputText,
    Password,
    NavBar,
    Button,
    FloatLabel,
  },
  data() {
    return {
      fname: "",
      lname: "",
      phoneNum: "",
      password: "",
      address: "",
      city: "",
      postalCode: "",
    };
  },
  methods: {
    async updateAcc() {
      const cid = getLocalStorage()._id;
      console.log("cid;", cid);

      const jsonData = {
        password: this.password,
        firstName: this.fname,
        lastName: this.lname,
        address: this.address,
        city: this.city,
        postalCode: this.postalCode,
        phNumber: this.phoneNum,
      };
      const response = await updateAccount(cid, jsonData);
      console.log(response);
    },
    async getAccountDetails() {
      const cid = getLocalStorage()._id;
      console.log("cid;", cid);
      const response = await getAccount(cid);
      console.log(response);
      this.fname = response.data.firstName;
      this.lname = response.data.lastName;
      this.address = response.data.address;
      this.city = response.data.city;
      this.postalCode = response.data.postalCode;
      this.phoneNum = response.data.phNumber;
    },
  },
  mounted() {
    this.getAccountDetails();
  },
};
const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
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
