<template>
  <div class="flex justify-content-center align-items-center h-full">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-1">
        <h2>Sign Up</h2>

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
        </div>
        <br>
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="username" v-model="email" />
              <label for="username">Email</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <Password v-model="password" inputId="password" toggleMask />
              <label for="password">Password</label>
            </FloatLabel>
          </div>
        </div>
        <br>
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText v-model="phoneNum" inputId="phoneNum"  />
              <label for="phoneNum">Phone Number</label>
            </FloatLabel>
          </div>
        </div>
        <h5>Select User Type</h5>
      </div>

      <div
        class="flex align-items-center justify-content-center flex-row gap-3">
        <div class="flex align-items-center">
          <RadioButton inputId="handyman" value="handyman" v-model="userType" />
          <label for="handyman">Handyman</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton inputId="customer" value="customer" v-model="userType" />
          <label for="customer">Customer</label>
        </div>
      </div>
      <br>
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4">
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
              <InputText id="address" v-model="address" />
              <label for="address">Address</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="city" v-model="city" />
            <label for="city">City</label>
          </FloatLabel>
        </div>
      </div>
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4">
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
          <InputText id="postalCode" v-model="postalCode" />
          <label for="postalCode">Postal Code</label>
        </FloatLabel>
        </div>
        <div v-if="userType === 'handyman'" class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="businessAddress" v-model="businessAddress" />
            <label for="businessAddress">Business Address</label>
          </FloatLabel>
      </div>
      </div>
      <h5 v-if="userType === 'handyman'" class="card flex flex-wrap justify-content-center">Expertise</h5>
      <div v-if="userType === 'handyman'" class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
          <Checkbox
            v-model="pizza"
            inputId="ingredient1"
            name="pizza"
            value="Cheese" binary
          />
          <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="pizza"
            inputId="ingredient2"
            name="pizza"
            value="Mushroom"
          />
          <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="pizza"
            inputId="ingredient3"
            name="pizza"
            value="Pepper"
          />
          <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="pizza"
            inputId="ingredient4"
            name="pizza"
            value="Onion"
          />
          <label  for="ingredient4" class="ml-2"> Onion </label>
        </div>
      </div>
      <div v-if="userType === 'handyman'" class="card flex flex-row justify-content-center gap-6">
      <div
        class="card flex flex-column align-items-center justify-content-center gap-1">
        <h5>Upload Profile Pic</h5>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUpload"
        />
      </div>
      <div
        class="card flex flex-column align-items-center justify-content-center gap-1"
      >
        <h5>Upload Certificate</h5>
        <FileUpload
          mode="basic"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          :maxFileSize="1000000"
          @upload="onUpload"
        />
      </div>
    </div>
    <div
        class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
      >
    <Button type="submit" @click ="submitForm" raised>Create Account</Button> </div>
  </div>
  </div>
</template>

<script>
//import { ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";
import {createAccount} from "../services/SignUpService";

import FloatLabel from 'primevue/floatlabel';

export default {
  name: 'SignUp',
  components: {
    InputText,
    Password,
    RadioButton,
    Checkbox,
    FileUpload,
    Button,  
    FloatLabel,
  },
  data(){
    return {
      fname: "",
      lname: "",
      phoneNum: "",
      email: "",
      password: "",
      userType: "",
      address: "",
      city: "",
      postalCode: "",
      businessAddress: "",
      expertise: [],
      profilePic: null,
      certificate: null
    };
  },
  // setup() {
  //   const email = ref("");
  //   const password = ref("");
  //   const userType = ref("");
  //   const address = ref("");
  //   const city = ref("");
  //   const postalCode = ref("");
  //   const businessAddress = ref("");
  //   const expertise = ref([]);
  //   const profilePic = ref(null);
  //   const certificate = ref(null);
  //   const handleProfilePicUpload = (event) => {
  //     profilePic.value = event.target.files[0];
  //   };

  //   const handleCertificateUpload = (event) => {
  //     certificate.value = event.target.files[0];
  //   };

  //   return {
  //     email,
  //     password,
  //     userType,
  //     address,
  //     city,
  //     postalCode,
  //     businessAddress,
  //     expertise,
  //     profilePic,
  //     certificate,
  //     handleProfilePicUpload,
  //     handleCertificateUpload,
  //   };
  //},
  methods: {
    async submitForm()  {
      // Handle form submission here
      // Include data like email.value, password.value, etc.
      // Also, consider handling profilePic.value and certificate.value uploads.
        const jsonData = {
            email: this.email,
            password: this.password,
            role: this.userType,
            address: this.address,
            firstName: this.fname,
            lastName: this.lname,
            phoneNum: this.phoneNum
        };

        console.log(JSON.stringify(jsonData));
        
     
        // formData.append("businessAddress", businessAddress.value);
        // formData.append("expertise", JSON.stringify(expertise.value));
        // formData.append("profilePic", profilePic.value);
        // formData.append("certificate", certificate.value);          
        
        const createAccountStatus = await createAccount(jsonData);
        console.log(createAccountStatus);
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
