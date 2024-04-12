<template>
  <div>
    <NavBar/>
  </div>
  <Card>
    <template #title>Total Earnings</template>
    <template #content>
      <p class="m-0">{{"$"+generateRandomNumber() }}</p>
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
  },
  methods: {
    generateRandomNumber() {
      // Generate a random number between 999 and 1500
      return Math.floor(Math.random() * (1500 - 999 + 1)) + 999;
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
