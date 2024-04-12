<template>
  <RootNavBar />
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
        <br />
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
        <br />
        <div class="flex flex-row gap-1">
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText v-model="phoneNum" inputId="phoneNum" />
              <label for="phoneNum">Phone Number</label>
            </FloatLabel>
          </div>
        </div>
        <h5>Select User Type</h5>
      </div>

      <div
        class="flex align-items-center justify-content-center flex-row gap-3"
      >
        <div class="flex align-items-center">
          <RadioButton inputId="handyman" value="handyman" v-model="userType" />
          <label for="handyman">Handyman</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton inputId="customer" value="customer" v-model="userType" />
          <label for="customer">Customer</label>
        </div>
      </div>
      <br />
      <div
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
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
        class="flex mx-8 flex-row align-items-center justify-content-center gap-2"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <FloatLabel>
            <InputText id="postalCode" v-model="postalCode" />
            <label for="postalCode">Postal Code</label>
          </FloatLabel>
        </div>
        <div
          v-if="userType === 'handyman'"
          class="flex flex-wrap align-items-center gap-2"
        >
          <FloatLabel>
            <InputText id="businessAddress" v-model="businessAddress" />
            <label for="businessAddress">Business Address</label>
          </FloatLabel>
        </div>
      </div>
      <div
        v-if="userType === 'handyman'"
        class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
      >
        <div class="flex flex-wrap align-items-center gap-2">
          <label for="hourlyRate">Hourly Rate</label>
          <InputNumber
            mode="currency"
            showButtons
            buttonLayout="horizontal"
            :min="0"
            :step="0.25"
            currency="CAD"
            id="hourlyRate"
            v-model="hourlyRate"
          >
            <template #incrementbuttonicon>
              <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus" />
            </template>
          </InputNumber>
        </div>
      </div>
      <h5
        v-if="userType === 'handyman'"
        class="card flex flex-wrap justify-content-center"
      >
        Expertise
      </h5>
      <div
        v-if="userType === 'handyman'"
        class="card flex flex-wrap justify-content-center gap-3"
      >
        <div class="flex align-items-center">
          <Checkbox
            v-model="expertise"
            inputId="expertise1"
            name="expertise"
            value="Labourer"
          />
          <label for="ingredient1" class="ml-2"> Labourer </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="expertise"
            inputId="expertise2"
            name="expertise"
            value="Plumber"
          />
          <label for="ingredient2" class="ml-2"> Plumber </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="expertise"
            inputId="expertise3"
            name="expertise"
            value="Electrician"
          />
          <label for="ingredient3" class="ml-2"> Electrician </label>
        </div>
        <div class="flex align-items-center">
          <Checkbox
            v-model="expertise"
            inputId="expertise4"
            name="expertise"
            value="Traffic Control Person"
          />
          <label for="ingredient4" class="ml-2"> Traffic Control Person </label>
        </div>
      </div>
      <div
        v-if="userType === 'handyman'"
        class="card flex flex-row justify-content-center gap-6"
      >
        <div
          class="card flex flex-column align-items-center justify-content-center gap-1"
        >
          <h5>Upload Profile Pic</h5>
          <FileUpload
            mode="basic"
            name="model[]"
            accept="image/*"
            :max-file-size="5000000"
            :auto="true"
            :custom-upload="true"
            @uploader="handleProfilePicUpload"
          />
        </div>
        <div
          class="card flex flex-column align-items-center justify-content-center gap-1"
        >
          <h5>Upload Certificate</h5>
          <FileUpload
            mode="basic"
            name="certificate[]"
            accept="image/*"
            :max-file-size="5000000"
            :auto="true"
            :custom-upload="true"
            @uploader="handleCertificateUpload"
          />
        </div>
      </div>
      <div
        class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
      >
        <Button type="submit" @click="submitForm" raised>Create Account</Button>
      </div>
    </div>
  </div>

  <!-- <div v-if="profilePicSrc">
      <img :src="profilePicSrc" alt="Uploaded Image">
    </div> -->
</template>

<script>
//import { ref } from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import { createAccount } from '../services/SignUpService';
import RootNavBar from './RootNavBar.vue';

import FloatLabel from 'primevue/floatlabel';

export default {
  name: 'SignUp',
  components: {
    InputNumber,
    InputText,
    Password,
    RadioButton,
    Checkbox,
    FileUpload,
    Button,
    FloatLabel,
    RootNavBar,
  },
  data() {
    return {
      fname: '',
      lname: '',
      phoneNum: '',
      email: '',
      password: '',
      userType: '',
      address: '',
      city: '',
      postalCode: '',
      businessAddress: '',
      hourlyRate: '',
      expertise: [],
      profilePic: null,
      // profilePicSrc: null,
      certificate: null,
    };
  },
  methods: {
    handleProfilePicUpload(event) {
      const file = event.files[0];
  
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        this.profilePic =  base64String;
        // this.profilePicSrc ='data:image/jpeg;base64,' + this.profilePic;
        // console.log(this.profilePic);
      }
      reader.readAsDataURL(file);
    },

    handleCertificateUpload(event) {
      const file = event.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        this.certificate =  base64String;
        console.log(this.certificate);
      }
     
      reader.readAsDataURL(file);
    },
    async submitForm() {
      // Handle form submission here
      // Include data like email.value, password.value, etc.
      // Also, consider handling profilePic.value and certificate.value uploads.
      let jsonData;
      if (this.userType === 'customer') {
        jsonData = {
          email: this.email,
          password: this.password,
          role: this.userType,
          address: this.address,
          firstName: this.fname,
          postalCode: this.postalCode,
          lastName: this.lname,
          phNumber: this.phoneNum,
        };
      } else {
        jsonData = {
          email: this.email,
          password: this.password,
          role: this.userType,
          address: this.address,
          firstName: this.fname,
          postalCode: this.postalCode,
          lastName: this.lname,
          phNumber: this.phoneNum,
          expertise: this.expertise,
          businessAddress: this.businessAddress,
          hourlyRate: this.hourlyRate,
          profilePicture: this.profilePic,
          certificate: this.certificate,
        };
      }

      console.log(JSON.stringify(jsonData));
      try {
        const response = await createAccount(jsonData);

        const user = response.data
        console.log(user);
      
        localStorage.setItem('user', JSON.stringify(user));
        if (user.role === 'handyman') {
          this.$router.push('/NHandyHomePage');
        } else if (user.role === 'customer') {
          this.$router.push('/NHomePage');
        }
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
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
