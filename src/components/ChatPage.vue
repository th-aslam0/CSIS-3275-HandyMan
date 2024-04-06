<template>
    <div>
        <NavBar/>
    </div>


    <!-- <div>
      <Chat v-if="visible"
        :participants="participants"
        :myself="myself"
        :messages="messages"
        :chat-title="chatTitle"
        :placeholder="placeholder"
        :colors="colors"
        :border-style="borderStyle"
        :hide-close-button="hideCloseButton"
        :close-button-icon-size="closeButtonIconSize"
        :submit-icon-size="submitIconSize"
        :submit-image-icon-size="submitImageIconSize"
        :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
        :async-mode="asyncMode"
        :scroll-bottom="scrollBottom"
        :display-header="true"
        :send-images="true"
        :profile-picture-config="profilePictureConfig"
        :timestamp-config="timestampConfig"
        :link-options="linkOptions"
        :accept-image-types="'.png, .jpeg'"
        @onImageClicked="onImageClicked"
        @onImageSelected="onImageSelected"
        @onMessageSubmit="onMessageSubmit"
        @onType="onType"
        @onClose="onClose"/>
   </div> -->
</template>

<script>

// import Chat from 'vue-quick-chat'
// import 'vue-quick-chat/dist/vue-quick-chat.css';
import NavBar from "./NavBar.vue"

export default {
  name: "ChatPage",
  components: {
    NavBar,
    
    // Chat
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
