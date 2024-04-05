<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <!-- Email -->
        <FloatLabel>
          <InputText id="email" v-model="email" required />
          <label for="email">Email</label>
        </FloatLabel>
        
  
        <!-- Password -->
        <FloatLabel>
          <Password v-model="password" inputId="password" />
          <label for="password">Password</label>
        </FloatLabel>
  
        <!-- User Type (Radio Buttons) -->

        <div class="flex flex-wrap gap-3">
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>
    
</div>


        <label>User Type</label>
        
          
          <div class="p-formgroup-inline">
            <FloatLabel>
            <RadioButton inputId="handyman" value="handyman" v-model="userType" />
            <label for="handyman">Handyman</label>
            <RadioButton inputId="customer" value="customer" v-model="userType" />
            <label for="customer">Customer</label>
          </FloatLabel>    
            <FloatLabel>
            
          </FloatLabel>    
          </div>
          
        
  
        <!-- Create Account Button -->
        <Button type="submit" @click="redirectToLoginPage">Create Accoun</Button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import InputText from "primevue/inputtext";
  import Password from "primevue/password";
  import RadioButton from "primevue/radiobutton";
  import Button from "primevue/button";
  
  import FloatLabel from "primevue/floatlabel";
  
  export default {
    name: "SignUp",
    components: {
      InputText,
      Password,
      RadioButton,
      Button,
      FloatLabel,
    },
    setup() {
      const email = ref("");
      const password = ref("");
      const userType = ref("customer");
      const address = ref("");
      const city = ref("");
      const postalCode = ref("");
      const businessAddress = ref("");
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
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .login-form * {
    margin: 1rem;
  }
  .login-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
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
  