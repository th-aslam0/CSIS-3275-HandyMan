<template>
    <div class="handy-home-page">
      <Menubar :model="menuItems" />
  
      
  
      <div class="content p-d-flex p-jc-center p-mt-5">
        <div>
            
        <textarea v-model="searchQuery" placeholder="Total Earnings..." class="p-inputtext"></textarea>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import  Menubar  from 'primevue/menubar';
  
  export default {
    name: 'HandyHomePage',
    components: {
      Menubar,
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
  .handy-home-page {
    /* Add styles to center content vertically and horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .handy-home-page .content {
    /* Optional: Add additional styles for the content area */
    max-width: 800px; /* Example: Limiting content width */
  }
  </style>
  