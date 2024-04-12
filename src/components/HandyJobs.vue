<template>
    <div>
      <HandyNavBar />
    </div>
  
   
    <div class="card">
      <DataTable
        :value="handymen"
        tableStyle="min-width: 50rem">
        
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
    <div><FooterComp/></div>

  </template>
  
  <script>
  
  //import InputText from 'primevue/inputtext';
  import HandyNavBar from "./HandyNavBar.vue"
  import FooterComp from "./footerComp.vue"

  import { getAllJobs, updateJobs } from '../services/CustomerJobsService.js';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  
  export default {
    name: 'HandyJobs',
    components: {
      HandyNavBar,
      //InputText,
      Column,
      DataTable,
      Button,
      FooterComp
    },
    data() {
      return {
        columns: [
          
          { field: 'jobDescription', header: 'Job Description' },
          { field: 'jobDateTime', header: 'Job Date' },
          { field: 'jobDuration', header: 'Duration' },
          { field: 'jobStatus', header: 'Status' },
          { field: 'trade', header: 'Trade' },
        ],
        handymen: [],
        acceptedUsers: [], // New array to hold accepted users
      };
    },
    methods: {
      async GetProposedJobs() {
        const trade= getLocalStorage().expertise;
        console.log(trade);
        try {
          const response = await getAllJobs();
          console.log(response);
          const filteredPrposedJobs = response.data.filter(item => item.jobStatus === 'proposed');
          console.log("filteredresponse", filteredPrposedJobs);
          const filteredExpertiseJobs = filteredPrposedJobs.filter(item => trade.includes(item.trade));
          console.log("final filteredresponse", filteredExpertiseJobs);

          return filteredExpertiseJobs;
        } catch (error) {
          console.log('Error:', error);
          return [];
        }
      },
      
      acceptHandler(rowData) {
        console.log('Accepting:', rowData);
        const hid= getLocalStorage()._id;
        console.log('hid:', hid);
        const jobId= rowData.data._id
        console.log('jobId:', jobId);

        // Check if rowData is valid
        if (rowData && Object.keys(rowData).length !== 0) {
          // Move a copy of the accepted user to the new table
          const jsonData= { ...rowData.data, jobStatus: "confirmed", handymanId: hid };
          console.log('jsonData:', jsonData);

          this.acceptedUsers.push({ ...rowData.data, jobStatus: "confirmed" });
          const response= updateJobs(jobId, jsonData);
          console.log(response.body);
          console.log('Accepted Users:', this.acceptedUsers);
          console.log(rowData.data);
          this.handymen= this.handymen.filter (  item=> item.jobsStatus == "proposed" );
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
    
  };
  const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};
  </script>
  
  <style scoped></style>
  