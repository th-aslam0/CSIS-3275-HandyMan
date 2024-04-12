<template>
  <!-- <div class="flex justify-content-center align-items-center h-full"> -->
  <div class="login-form flex flex-column justify-content-center gap-3">
    <div class="flex mx-8 flex-column align-items-center gap-1">
      <h2>Job Proposal</h2>
      <div class="flex flex-row gap-1">
        <div class="flex flex-wrap align-items-center gap-2">
          <div class="flex-auto">
            <FloatLabel>
              <Calendar
                id="calendar-12h"
                v-model="datetime"
                dateFormat="dd/mm/yy"
                showButtonBar
              />
              <label for="dateTime">Date And Time</label>
            </FloatLabel>
          </div>
        </div>
        <br />
        <h5 class="card flex flex-wrap justify-content-center">Expertise</h5>
        <div class="card flex flex-wrap justify-content-center gap-3">
          <div class="flex align-items-center">
            <RadioButton
              v-model="expertise"
              inputId="expertise1"
              name="expertise"
              value="Labourer"
            />
            <label for="ingredient1" class="ml-2"> Labourer </label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="expertise"
              inputId="expertise2"
              name="expertise"
              value="Plumber"
            />
            <label for="ingredient2" class="ml-2"> Plumber </label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="expertise"
              inputId="expertise3"
              name="expertise"
              value="Electrician"
            />
            <label for="ingredient3" class="ml-2"> Electrician </label>
          </div>
          <div class="flex align-items-center">
            <RadioButton
              v-model="expertise"
              inputId="expertise4"
              name="expertise"
              value="Traffic Control Person"
            />
            <label for="ingredient4" class="ml-2">
              Traffic Control Person
            </label>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
    >
      <Textarea v-model="jobDescription" variant="filled" rows="5" cols="50" />
    </div>

    <div
      class="flex mx-8 flex-row align-items-center justify-content-center gap-4"
    >
      <div class="flex flex-wrap align-items-center gap-2">
        <div class="flex-auto">
          <label for="horizontal-buttons" class="font-bold block mb-2"
            >Time Duration (days)</label
          >
          <InputNumber
            v-model="time"
            showButtons
            buttonLayout="horizontal"
            :step="1"
          >
            <template #incrementbuttonicon>
              <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus" />
            </template>
          </InputNumber>
        </div>

        <label for="imageUpload">Image Upload</label>

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
      <Button type="submit" @click="cJobs">Publish</Button>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import { jobs } from "../services/CustomerJobsService.js";
import FloatLabel from "primevue/floatlabel";
import FileUpload from "primevue/fileupload";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";

export default {
  name: "JobProposal",
  components: {
    Textarea,
    FileUpload,
    Button,
    RadioButton,
    FloatLabel,
    Calendar,
    InputNumber,
  },
  data() {
    return {
      datetime: "",
      expertise: "",
      jobDescription: "",
      time: "",
    };
  },
  methods: {
    async cJobs() {
      const cid = getLocalStorage()._id;
      console.log("cid;", cid);

      try {
        const jsonData = {
          jobDateTime: this.datetime,
          trade: this.expertise,
          jobDescription: this.jobDescription,
          jobDuration: this.time,
          image: this.demo,
          jobStatus: "proposed",
          customerId: cid,
        };
        console.log(jsonData);

        const response = await jobs(jsonData);
        console.log(response.body);
      } catch (error) {
        console.log(error);
      }
      this.$router.push('/NHomePage');

    },
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
