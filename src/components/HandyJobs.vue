<template>
    <div>
      <HandyNavBar />
    </div>
  
    <div class="content p-d-flex p-jc-center p-mt-5">
      <div class="search-bar p-d-flex p-jc-center p-mt-5">
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">
            <i class="pi pi-search"></i>
          </span>
          <InputText v-model="globalFilter" placeholder="Search..." />
        </div>
      </div>
    </div>
    <div class="card">
      <DataTable
        :value="filteredUsers"
        tableStyle="min-width: 50rem"
        :globalFilter="globalFilter"
      >
        <template #header>
          <div
            class="flex flex-wrap align-items-center justify-content-between gap-2"
          >
            <span class="text-xl text-900 font-bold">Search Handy</span>
            <Button icon="pi pi-refresh" rounded raised />
          </div>
        </template>
        <Column
          v-for="col of columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        ></Column>
        <!-- Add buttons for each row -->
        <Column header="Actions" style="text-align: center">
          <template #body="rowData">
            <div class="p-d-flex p-jc-center">
              <Button
                label="Accept"
                icon="pi pi-check"
                class="p-button-success p-button-rounded p-mr-2"
                @click="acceptHandler(rowData)"
              />
              <Button
                label="Reject"
                icon="pi pi-times"
                class="p-button-danger p-button-rounded"
                @click="rejectHandler(rowData)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  
    <!-- New table for accepted users -->
    <div class="card">
      <h2>Accepted Users</h2>
      <DataTable :value="acceptedUsers" tableStyle="min-width: 50rem">
        <!-- Same columns as the existing DataTable -->
        <Column
          v-for="col of columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        ></Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  
  import InputText from 'primevue/inputtext';
  import HandyNavBar from "./HandyNavBar.vue"
  import { getAllJobs } from '../services/CustomerJobsService.js';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  
  export default {
    name: 'HandyJobs',
    components: {
      HandyNavBar,
      InputText,
      Column,
      DataTable,
      Button,
    },
    data() {
      return {
        globalFilter: '',
        columns: [
          { field: 'firstName', header: 'Name' },
          { field: 'hourlyRate', header: 'Hourly Rate' },
          { field: 'expertise', header: 'Trade Categories' },
          { field: 'phNumber', header: 'Phone Number' },
          { field: 'businessAddress', header: 'Business Address' },
        ],
        handymen: [],
        acceptedUsers: [], // New array to hold accepted users
      };
    },
    methods: {
      async GetProposedJobs() {
        try {
          const response = await getAllJobs();
          return response.data.map((user) => ({
            ...user,
            expertise: user.expertise.join(', '),
          }));
        } catch (error) {
          console.log('Error:', error);
          return [];
        }
      },
      filterBySearchQuery(user) {
        const searchLowerCase = this.globalFilter.toLowerCase();
        return (
          user.hourlyRate.toString().includes(searchLowerCase) ||
          user.firstName.toLowerCase().includes(searchLowerCase) ||
          user.expertise.toLowerCase().includes(searchLowerCase) ||
          user.phNumber.toLowerCase().includes(searchLowerCase) ||
          user.businessAddress.toLowerCase().includes(searchLowerCase)
        );
      },
      acceptHandler(rowData) {
        console.log('Accepting:', rowData);
        // Check if rowData is valid
        if (rowData && Object.keys(rowData).length !== 0) {
          // Move a copy of the accepted user to the new table
          this.acceptedUsers.push({ ...rowData.data });
          console.log('Accepted Users:', this.acceptedUsers);
          console.log(rowData.data);
        } else {
          console.log('Invalid row data:', rowData);
        }
      },
      rejectHandler(rowData) {
        console.log('Rejecting:', rowData.data);
        // Remove the rejected user from the existing table
        this.handymen = this.handymen.filter((user) => user !== rowData);
        console.log('Remaining Users:', this.handymen);
      },
    },
    async created() {
      this.handymen = await this.GetProposedJobs();
    },
    computed: {
      filteredUsers() {
        return this.handymen.filter((user) => this.filterBySearchQuery(user));
      },
    },
  };
  </script>
  
  <style scoped></style>
  
