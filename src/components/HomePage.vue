<template>
  <div class="home-page">
    <Menubar :model="menuItems" />

    
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
import  Menubar  from 'primevue/menubar';
import InputText from 'primevue/inputtext';

export default {
  name: 'HomePage',
  components: {
    Menubar,
    InputText
  },
  data() {
    return {
      searchQuery: '',
      menuItems: [
        { label: 'Home', icon: 'pi pi-home', to: '/' },
        { label: 'My Jobs', icon: 'pi pi-briefcase', to: '/myJobs' },
        { label: 'Chats', icon: 'pi pi-comment', to: '/chats' },
        { label: 'Account', icon: 'pi pi-user', to: '/account' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add scoped styles here */
.home-page {
  /* Add styles to center content vertically and horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-page .content {
  /* Optional: Add additional styles for the content area */
  max-width: 800px; /* Example: Limiting content width */
}
</style>
