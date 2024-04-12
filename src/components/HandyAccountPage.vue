<template>
  <HandyNavBar />
  <div class="flex justify-content-center align-items-center h-full">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-1">
        <h2>Edit Account Details</h2>
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="fullName" v-model="fname" />
              <label for="fullName">First Name</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="Email" v-model="lname" />
              <label for="Email">Last Name</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <Password v-model="password" inputId="password" toggleMask />
              <label for="password">Password</label>
            </FloatLabel>
          </div>
        </div>

      </div>

      <div class="flex mx-8 flex-row align-items-center justify-content-center gap-4">
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
      <div class="flex mx-8 flex-row align-items-center justify-content-center gap-4">
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="PostalCode" v-model="postalCode" />
            <label for="PostalCode">Postal Code</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="BusinessAddress" v-model="businessAddress" />
            <label for="BusinessAddress">Business Address</label>
          </FloatLabel>
        </div>
      </div>
      <!-- <h5 class="card flex flex-wrap justify-content-center">Expertise</h5>
      <div class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
          <Checkbox v-model="expertise" inputId="expertise1" name="expertise" value="MillWright" />
          <label for="expertise1" class="ml-2"> Plumber </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="expertise" inputId="expertise2" name="expertise" value="Painter" />
          <label for="expertise2" class="ml-2"> Electrician </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="expertise" inputId="expertise3" name="expertise" value="Laborer " />
          <label for="expertise3" class="ml-2"> Labourer </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox v-model="expertise" inputId="expertise4" name="expertise" value="Traffic Control Person" />
          <label for="expertise4" class="ml-2"> Traffic Control Person </label>
        </div>
      </div> -->
      <div class="card flex flex-row justify-content-center gap-6">
        <div class="card flex flex-column align-items-center justify-content-center gap-1">

          <div class="card flex flex-column align-items-center justify-content-center gap-1 mb-1">
            <Button type="submit" @click="updateAcc">Update</Button>
          </div>
          <Button type="submit" @click="logout">Logout</Button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
//import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import HandyNavBar from "./HandyNavBar.vue"
import FloatLabel from 'primevue/floatlabel';
import { updateAccount, getAccount } from "../services/SignUpService.js";

export default {
  name: 'HandyAccountPage',
  components: {
    InputText,
    Password,
    //Checkbox,
    Button,
    FloatLabel,
    HandyNavBar
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
      businessAddress: "",
      //expertise: [],
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
        businessAddress: this.businessAddress
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
      this.phoneNum = response.data.phNumber;
      this.businessAddress= response.data.businessAddress;
    },
    logout() {
      this.$router.push('/');
    }
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