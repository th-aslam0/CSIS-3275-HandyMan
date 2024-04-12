<template>
  <div>
    <NavBar/>
    <vue-advanced-chat
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
  <div><FooterComp/></div>
</template>

<script>
import NavBar from "./NavBar.vue"
import FooterComp from "./footerComp.vue"
import { register } from 'vue-advanced-chat'
register()

export default {
  components: {
    NavBar,
    FooterComp},
  data() {
    return {

      currentUserId: '1234',
      rooms: [
        {
          roomId: '1',
          roomName: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          users: [
            { _id: '1234', username: 'John Doe' },
            { _id: '4321', username: 'John Snow' }
          ]
        },
        {
          roomId: '2',
          roomName: 'Jane Smith',
          avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
          users: [
            { _id: '5678', username: 'Jane Smith' },
            { _id: '9012', username: 'Jane Doe' }
          ]
        },
        {
          roomId: '3',
          roomName: 'Alice Johnson',
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          users: [
            { _id: '3456', username: 'Alice Johnson' },
            { _id: '7890', username: 'Bob Williams' }
          ]
        },
        {
          roomId: '4',
          roomName: 'Charlie Brown',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
          users: [
            { _id: '2468', username: 'Charlie Brown' },
            { _id: '1357', username: 'David Wilson' }
          ]
        },
        {
          roomId: '5',
          roomName: 'Eve Thompson',
          avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
          users: [
            { _id: '1010', username: 'Eve Thompson' },
            { _id: '2020', username: 'Frank Davis' }
          ]
        },
        {
          roomId: '6',
          roomName: 'Grace Miller',
          avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
          users: [
            { _id: '7777', username: 'Grace Miller' },
            { _id: '8888', username: 'Henry Lee' }
          ]
        },
        {
          roomId: '7',
          roomName: 'Ivy Clark',
          avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
          users: [
            { _id: '4545', username: 'Ivy Clark' },
            { _id: '5656', username: 'Jack Taylor' }
          ]
        },
        {
          roomId: '8',
          roomName: 'Kevin Hernandez',
          avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
          users: [
            { _id: '1313', username: 'Kevin Hernandez' },
            { _id: '2424', username: 'Laura Martinez' }
          ]
        },
        {
          roomId: '9',
          roomName: 'Mike Brown',
          avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
          users: [
            { _id: '9090', username: 'Mike Brown' },
            { _id: '8080', username: 'Nancy Lopez' }
          ]
        },
        {
          roomId: '10',
          roomName: 'Olivia Young',
          avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
          users: [
            { _id: '9696', username: 'Olivia Young' },
            { _id: '7575', username: 'Peter Adams' }
          ]
        }
      ],
      messages: [],
      messagesLoaded: false,
      NavBar
    }
  },

 methods: {
  fetchMessages({ options = {} }) {
    setTimeout(() => {
      if (options.reset) {
        this.messages = this.addMessages(true)
        this.messagesLoaded = true
      } 
    })
  },

  addMessages(reset) {
    const messages = []

    messages.push({
      _id: reset,
      content: 'Hi\nCan you please start your service from Wednesday',
      senderId: '4321',
      username: 'John Doe',
      date: '12 April ',
      timestamp: '10:20'
    })

    return messages
  },

  sendMessage(message) {
    this.messages = [
      ...this.messages,
      {
        _id: this.messages.length,
        content: message.content,
        senderId: this.currentUserId,
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString()
      }
    ]

    
  },

  addNewMessage() {
    setTimeout(() => {
      this.messages = [
        ...this.messages,
        {
          _id: this.messages.length,
          content: 'NEW MESSAGE',
          senderId: '1234',
          timestamp: new Date().toString().substring(16, 21),
          date: new Date().toDateString()
        }
      ]
    }, 2000)
  }
}

}
</script>

<style lang="scss">
body {
  font-family: 'Quicksand', sans-serif;
}
</style>
