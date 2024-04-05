<template>
  <div class="flex justify-content-center">
    <div class="login-form flex flex-column justify-content-center gap-3">
      <div class="flex mx-8 flex-column align-items-center gap-4">
        <h2>Login</h2>
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

      <div
        class="flex align-items-center justify-content-center mt-3 flex-row gap-3"
      >
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient3"
            name="pizza"
            value="Pepper"
          />
          <label for="ingredient3" class="ml-2">Handyman</label>
        </div>
        <div class="flex align-items-center">
          <RadioButton
            v-model="ingredient"
            inputId="ingredient4"
            name="pizza"
            value="Onion"
          />
          <label for="ingredient4" class="ml-2">Customer</label>
        </div>
      </div>
      <div class="flex flex-wrap  justify-content-center my-3 align-items-center gap-2">
      <Button type="submit" @click="redirectToLoginPage">Sign In</Button>
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
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

import FloatLabel from 'primevue/floatlabel';

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
    };
  },
};
</script>

<style scoped>
.login-form {
  /* max-width: 400px; */
  /* margin-top: 1.5rem; */
  /* padding: 20px; */
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
