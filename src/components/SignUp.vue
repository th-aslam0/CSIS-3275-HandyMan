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
      <FloatLabel>
        <div class="p-formgroup-inline">
          <RadioButton inputId="handyman" value="handyman" v-model="userType" />
          <label for="handyman">Handyman</label>
          <RadioButton inputId="customer" value="customer" v-model="userType" />
          <label for="customer">Customer</label>
        </div>
        <label>User Type</label>
      </FloatLabel>

      <!-- Address -->
      <FloatLabel>
        <InputText id="address" v-model="address" />
        <label for="address">Address</label>
      </FloatLabel>

      <!-- City and Postal Code -->
      <div class="p-formgroup-inline">
        <FloatLabel>
          <InputText id="city" v-model="city" />
          <label for="city">City</label>
        </FloatLabel>
        <FloatLabel>
          <InputText id="postalCode" v-model="postalCode" />
          <label for="postalCode">Postal Code</label>
        </FloatLabel>
      </div>

      <!-- Business Address (Visible for Handyman) -->
      <div v-if="userType === 'handyman'">
        <FloatLabel>
          <InputText id="businessAddress" v-model="businessAddress" />
          <label for="businessAddress">Business Address</label>
        </FloatLabel>
      </div>

      <!-- Expertise (Checkbox Group) -->
      <div class="p-field" v-if="userType === 'handyman'">
        <label>Expertise</label>
        <div class="p-formgroup-inline">
          <Checkbox id="millwright" value="Mill Wright" v-model="expertise" />
          <label for="millwright">Mill Wright</label>
          <Checkbox id="painter" value="Painter" v-model="expertise" />
          <label for="painter">Painter</label>
          <Checkbox id="labour" value="Labour" v-model="expertise" />
          <label for="labour">Labour</label>
          <Checkbox
            id="trafficControl"
            value="Traffic Control Person"
            v-model="expertise"
          />
          <label for="trafficControl">Traffic Control Person</label>
        </div>
      </div>

      <!-- Upload Profile Picture -->
      <FloatLabel>
        <FileUpload
          id="profilePic"
          mode="basic"
          accept="image/*"
          @change="handleProfilePicUpload"
        />
        <label for="profilePic">Upload Profile Picture</label>
      </FloatLabel>

      <!-- Upload Certificate -->
      <FloatLabel>
        <FileUpload
          id="certificate"
          mode="basic"
          accept=".pdf"
          @change="handleCertificateUpload"
        />
        <label for="certificate">Upload Certificate</label>
      </FloatLabel>

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
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";

import FloatLabel from "primevue/floatlabel";

export default {
  name: "SignUp",
  components: {
    InputText,
    Password,
    RadioButton,
    Checkbox,
    FileUpload,
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
