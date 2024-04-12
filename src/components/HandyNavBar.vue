<template>
    <div class="card">
      <TabMenu :model="items">
        <template #item="{ item, props }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </template>
      </TabMenu>
    </div>
  
  
  </template>
  
  <script>
  import TabMenu from "primevue/tabmenu";
   
  export default {
    name: "HandyNavBar",
    components: {
      TabMenu,
      
    },
    data() {
      return {
        items: [
  
        { label: 'Home', icon: 'pi pi-home', route: '/NHandyHomePage' },
          { label: 'My Jobs', icon: 'pi pi-briefcase', route: '/HandyJobs' },
          { label: 'Chats', icon: 'pi pi-comment', route: '/ChatPage' },
          { label: 'Account', icon: 'pi pi-user', route: '/HandyAccountPage' }
  
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
 
  </style>
  