<template>
  <div>
    <NavBar />
  </div>

  <div class="card">
    <DataTable :value="jobs" tableStyle="min-width: 50rem">
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold">My Jobs</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
  <div
    class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
  >
    <Button type="submit" @click="createJob">CreateJob</Button>
  </div>
  <div v-if="showComponent">
    <JobProposal />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import { Jobs, customerJobs } from "../services/CustomerJobsService.js";

import JobProposal from './JobProposal.vue';
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional

export default {
  name: 'CustomerJobs',
  components: {
    NavBar,
    DataTable,
    Column,
    Button,
    JobProposal,
    // ColumnGroup,
    // Row
  },
  data() {
    return {
      searchQuery: '',
      NavBar,
      JobProposal,
      getSeverity,
      Button,
      showComponent: false,
      columns: null,
      jobs: null,
    };
  },
  methods: {
    async GetCustomerJobs() {
      const cid = getLocalStorage()._id;
      const response = await customerJobs(cid);
      console.log(cid, response.data);
      return response.data;

    },
    async CreateJobs() {
      const jsonData = {};
      const response = await Jobs(jsonData);
      console.log(response);
    },
    createJob() {
      this.showComponent = !this.showComponent;
    },
  },
  created() {
        this.columns =  [
            { field: 'jobDescription', header: 'Job' },
            { field: 'jobDateTime', header: 'Start Date' },
            { field: 'trade', header: 'Trade Category' },
            { field: 'jobDuration', header: 'Duration' },
            { field: 'jobStatus', header: 'Status' },
        ];
    },
  mounted() {
     this.GetCustomerJobs().then((jobs) => { this.jobs = jobs });
  },
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'active':
      return 'success';

    case 'completed':
      return 'warning';

    case 'proposed':
      return 'danger';

    default:
      return null;
  }
};
</script>

<style scoped></style>