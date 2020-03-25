<template>
  <main class="main-container">
    <TextBox />
    <div class="devider"></div>
    <MessageList :messages="messages" />
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
      messages: [
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
        {date: 'aaaaaa', body: 'bbbbb'},
      ]
    };
  },
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