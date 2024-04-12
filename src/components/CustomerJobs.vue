<template>
    <div>
        <NavBar/>
    </div>


    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">My Jobs</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Job"></Column>
            <!-- <Column header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem border-round" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column> -->
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ 0 }} jobs. </template>
        </DataTable>
    </div>
    <div
        class="card flex flex-column align-items-center justify-content-center gap-1 mb-1"
      >
        <Button type="submit" @click="createJob">CreateJob</Button>

        
      </div>
      <div v-if="showComponent">
      <JobProposal/>
      
    </div>
</template>

<script>


import NavBar from "./NavBar.vue";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button";
import JobProposal from "./JobProposal.vue";
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional


export default {
  name: "CustomerJobs",
  components: {
    NavBar,
    DataTable,
    Column,
    Button,
    JobProposal
    // ColumnGroup,
    // Row
  },
  data() {
    return {
      searchQuery: "",
      NavBar,
      JobProposal,
      getSeverity,
      Button,
      showComponent:false
     
    };
  },
  methods: {
    createJob() {
      this.showComponent = !this.showComponent;
    }
  }
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

</script>

<style scoped>


</style>
