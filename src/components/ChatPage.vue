<template>
    <div>
        <NavBar/>
    </div>


    <vue-advanced-chat
    :current-user-id="currentUserId"
    :rooms="JSON.stringify(rooms)"
    :messages="JSON.stringify(messages)"
    :room-actions="JSON.stringify(roomActions)"
  />
</template>

<script>

import NavBar from "./NavBar.vue"
import { register } from 'vue-advanced-chat'

export default {
  name: "ChatPage",
  components: {
    NavBar,
    
  },
  data() {
    return {
      searchQuery: "",
      NavBar,
      currentUserId: '1234',
        rooms: [],
        messages: [],
        roomActions: [
          { name: 'inviteUser', title: 'Invite User' },
          { name: 'removeUser', title: 'Remove User' },
          { name: 'deleteRoom', title: 'Delete Room' }
        ]

     
    };
  },
};

  register()

  // Or if you used CDN import
  // window['vue-advanced-chat'].register()

  
</script>

