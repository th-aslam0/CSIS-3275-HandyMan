<template>
    <NavBar />
    <div class="flex justify-content-center align-items-center h-full">
      <div class="login-form flex flex-column justify-content-center gap-3">
        <div class="flex mx-8 flex-column align-items-center gap-1">
          <h2>Job Proposal</h2>
          <div class="flex flex-row gap-1">
            <div class="flex flex-wrap align-items-center gap-2">
              <div class="flex-auto">
                <FloatLabel>
                  <Calendar
                    id="calendar-12h"
                    v-model="datetime12h"
                    showTime
                    hourFormat="12"
                  />
                  <label for="dateTime">Date And Time</label>
                </FloatLabel>
              </div>
            </div>
  
            <div class="flex flex-wrap align-items-center gap-2">
              <FloatLabel>
                <InputText id="trade" v-model="value" />
                <label for="trade">Trade</label>
              </FloatLabel>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
        >
          <Textarea v-model="value" variant="filled" rows="5" cols="50" />
        </div>
       
        <div
          class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
        >
          <div class="flex flex-wrap align-items-center gap-2">
            <FloatLabel>
              <Calendar id="calendar-timeonly" v-model="time" timeOnly />
              <label for="TimeDuration">Time Duration</label>
            </FloatLabel>
            <label for="mageUpload">Image Upload</label>
              
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
          <Button type="submit" @click="redirectTo">Update</Button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import InputText from "primevue/inputtext";
  import Button from "primevue/button";
  import FloatLabel from "primevue/floatlabel";
  import NavBar from "./NavBar.vue";
  import FileUpload from "primevue/fileupload";
  import Calendar from "primevue/calendar";
  import Textarea from "primevue/textarea";
  
  export default {
    name: "JobProposal",
    components: {
      Textarea,
      InputText,
      FileUpload,
      NavBar,
      Button,
      FloatLabel,
      Calendar,
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
        NavBar,
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
  