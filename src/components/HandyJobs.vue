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

</template>

<script>


import NavBar from "./NavBar.vue";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional


export default {
  name: "HandyJobs",
  components: {
    NavBar,
    DataTable,
    Column,
    // ColumnGroup,
    // Row
  },
  data() {
    return {
      searchQuery: "",
      NavBar,
      getSeverity
     
    };
  },
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
