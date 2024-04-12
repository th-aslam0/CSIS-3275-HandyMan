<template>
  <div>
    <HandyNavBar/>
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
import HandyNavBar from "./HandyNavBar.vue"

export default {
  name: 'NHandyHomePage',
  components: {
    HandyNavBar,
    Card
  },
  data() {
    return {
      searchQuery: '',
      HandyNavBar,
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
