<template>
    <div>
        <NavBar/>
    </div>


  <div class="content p-d-flex p-jc-center p-mt-5">
    <div class="search-bar p-d-flex p-jc-center p-mt-5">
      <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
          <i class="pi pi-search"></i>
        </span>
        <InputText v-model="searchQuery" placeholder="Search..." />
      </div>
    </div>
  </div>
</template>

<script>

import InputText from "primevue/inputtext";
import NavBar from "./NavBar.vue"

export default {
  name: "NHomePage",
  components: {
    NavBar,
    InputText,
  },
  data() {
    return {
      searchQuery: "",
      NavBar,
     
    };
  },
};
</script>

<style scoped>


</style>
