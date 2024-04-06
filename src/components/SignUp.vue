<template>
  <div class="flex justify-content-center align-items-center h-full">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-1">
        <h2>Sign Up</h2>
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="username" v-model="value" />
              <label for="username">Full Name</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="username" v-model="value" />
              <label for="username">Email</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <Password v-model="value" inputId="password" />
              <label for="password">Password</label>
            </FloatLabel>
          </div>
        </div>
        <h5>Select User Type</h5>
      </div>

      <div
        class="flex align-items-center justify-content-center flex-row gap-3"
      >
        <div class="flex align-items-center">
          <RadioButton inputId="ingredient3" name="pizza" value="Pepper" />
          <label for="Pepper" class="ml-2">Handyman</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton inputId="ingredient4" name="pizza" value="Onion" />
          <label for="pizza" class="ml-2">Customer</label>
        </div>
      </div>
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="username">Address</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="password">City</label>
          </FloatLabel>
        </div>
      </div>
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="password">Postal Code</label>
          </FloatLabel>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="password">Business Address</label>
          </FloatLabel>
        </div>
      </div>
      <h5 class="card flex flex-wrap justify-content-center">Expertise</h5>
      <div class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
          <Checkbox
            v-model="pizza"
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
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
          <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
      </div>
      <div class="card flex flex-row justify-content-center gap-6">
      <div
        class="card flex flex-column align-items-center justify-content-center gap-1"
      >
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
    <Button type="submit" @click ="redirectToLoginPage">Create Account</Button> </div>
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
    async submitForm ()  {
      // Handle form submission here
      // Include data like email.value, password.value, etc.
      // Also, consider handling profilePic.value and certificate.value uploads.
        const jsonData = {
            email: this.email,
            password: this.password,
            role: "customer",
            address: this.address,
            firstName: this.city,
            lastName: this.postalCode
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
