<template>
   <div>
        <NavBar/>
    </div>
    <Card>
        <template #title>Total Earnings</template>
        <template #content>
            <p class="m-0">
                
            </p>
        </template>
    </Card>
  
  </template>
  
  <script>
  
import Card from 'primevue/card';
import NavBar from "./NavBar.vue"

  
  export default {
    name: 'NHandyHomePage',
    components: {
      NavBar,
      Card
    },
    data() {
      return {
        searchQuery: '',
        NavBar,
      };
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  