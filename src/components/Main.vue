<template>
  <main class="main-container">
    <TextBox :onPost="addMessage"/>
    <div class="devider"></div>
    <MessageList :messages="reversedMessages" />
  </main>
</template>

<script>
import TextBox from './TextBox';
import MessageList from './MessageList';

export default {
  components: {
    TextBox,
    MessageList
  },
  data() {
    return {
      messages: []
    };
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    }
  }
}
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
}

.devider {
  border-top: 10px solid #ccc;
}
</style>