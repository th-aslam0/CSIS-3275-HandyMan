<template>
  <div>
    <NavBar />
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
    </DataTable>
  </div>
  <div><FooterComp/></div>
</template>

<script>
import InputText from 'primevue/inputtext';
import NavBar from './NavBar.vue';
import FooterComp from './footerComp.vue';
import { getUsersByRole } from '../services/UserService';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'NHomePage',
  components: {
    NavBar,
    InputText,
    Column,
    DataTable,
    FooterComp
  },
  data() {
    return {
      globalFilter: '',
      NavBar,
      columns: null,
      handymen: [],
    };
  },
  methods: {
    async GetHandyMen() {
      let response;
      try {
        response = await getUsersByRole('handyman');
      } catch (error) {
        console.log('debug: ', error);
      }

      const users = response.data.map((user) => {
        return { ...user, expertise: user.expertise.join(', ') };
      });
      console.log('debug: ', users);
      return users;
    },
    filterBySearchQuery(user) {
      const searchLowerCase = this.globalFilter.toLowerCase();
      return (
        Number.toString(user.hourlyRate).includes(searchLowerCase) ||
        user.firstName.toLowerCase().includes(searchLowerCase) ||
        user.expertise.toLowerCase().includes(searchLowerCase) ||
        user.phNumber.toLowerCase().includes(searchLowerCase) ||
        user.businessAddress.toLowerCase().includes(searchLowerCase)
      );
    },
  },
  created() {
    this.columns = [
      { field: 'firstName', header: 'Name' },
      { field: 'hourlyRate', header: 'Hourly Rate' },
      { field: 'expertise', header: 'Trade Categories' },
      { field: 'phNumber', header: 'Phone Number' },
      { field: 'businessAddress', header: 'Business Address' },
    ];
  },
  mounted() {
    this.GetHandyMen().then((handymen) => {
      this.handymen = handymen;
    });
  },
  computed: {
    filteredUsers() {
      return this.handymen.filter((user) => this.filterBySearchQuery(user));
    },
  },
};
</script>

<style scoped></style>
