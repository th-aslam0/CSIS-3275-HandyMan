<template>
    <NavBar/>
    <div class="flex justify-content-center align-items-center h-full">
      <div class="login-form flex flex-column justify-content-center gap-3">
        <div class="flex mx-8 flex-column align-items-center gap-1">
          <h2>Edit Account Details</h2>
          <div class="flex flex-row gap-1">
            <div class="flex flex-wrap align-items-center gap-2">
              <FloatLabel>
                <InputText id="fullName" v-model="value" />
                <label for="fullName">Full Name</label>
              </FloatLabel>
            </div>
            <div class="flex flex-wrap align-items-center gap-2">
              <FloatLabel>
                <InputText id="Email" v-model="value" />
                <label for="Email">Email</label>
              </FloatLabel>
            </div>
            <div class="flex flex-wrap align-items-center gap-2">
              <FloatLabel>
                <Password v-model="value" inputId="password" />
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
              <InputText id="Address" v-model="value" />
              <label for="Address">Address</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="City" v-model="value" />
              <label for="City">City</label>
            </FloatLabel>
          </div>
        </div>
        <div
          class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
        >
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="PostalCode" v-model="value" />
              <label for="PostalCode">Postal Code</label>
            </FloatLabel>
          </div>
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <InputText id="BusinessAddress" v-model="value" />
              <label for="BusinessAddress">Business Address</label>
            </FloatLabel>
          </div>
        </div>
        <h5 class="card flex flex-wrap justify-content-center">Expertise</h5>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <div class="flex align-items-center">
            <Checkbox
              v-model="expertise"
              inputId="expertise1"
              name="expertise"
              value="MillWright"
            />
            <label for="expertise1" class="ml-2"> Mill Wright </label>
          </div>
          <div class="flex align-items-center">
            <Checkbox
              v-model="expertise"
              inputId="expertise2"
              name="expertise"
              value="Painter"
            />
            <label for="expertise2" class="ml-2">Painter </label>
          </div>
          <div class="flex align-items-center">
            <Checkbox
              v-model="expertise"
              inputId="expertise3"
              name="expertise"
              value="Laborer "
            />
            <label for="expertise3" class="ml-2"> Laborer  </label>
          </div>
          <div class="flex align-items-center">
            <Checkbox
              v-model="expertise"
              inputId="expertise4"
              name="expertise"
              value="Traffic Control Person"
            />
            <label for="expertise4" class="ml-2"> Traffic Control Person </label>
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
      <Button type="submit" @click ="redirectToLoginPage">Update</Button> </div>
    </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Checkbox from 'primevue/checkbox';
  import FileUpload from 'primevue/fileupload';
  import Button from 'primevue/button';
  import NavBar from "./NavBar.vue";

  import FloatLabel from 'primevue/floatlabel';
  
  export default {
    name: 'HandyAccountPage',
    components: {
      InputText,
      Password,
      Checkbox,
      FileUpload,
      Button,  
      FloatLabel,
      NavBar
    },
    setup() {
      const email = ref('');
      const password = ref('');
      const userType = ref('customer');
      const address = ref('');
      const city = ref('');
      const postalCode = ref('');
      const businessAddress = ref('');
      const expertise = ref([]);
      const profilePic = ref(null);
      const certificate = ref(null);
  
      const submitForm = () => {
        // Handle form submission here
        // Include data like email.value, password.value, etc.
        // Also, consider handling profilePic.value and certificate.value uploads.
      };
  
      const handleProfilePicUpload = (event) => {
        profilePic.value = event.target.files[0];
      };
  
      const handleCertificateUpload = (event) => {
        certificate.value = event.target.files[0];
      };
  
      return {
        email,
        password,
        userType,
        address,
        city,
        postalCode,
        businessAddress,
        expertise,
        profilePic,
        certificate,
        submitForm,
        handleProfilePicUpload,
        handleCertificateUpload,
        NavBar
      };
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
  