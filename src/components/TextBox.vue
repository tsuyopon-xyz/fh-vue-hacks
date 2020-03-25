<template>
  <div class="textbox-container">
    <textarea
      placeholder="ここに入力"
      class="textbox-input"
      v-model.trim="body"
    ></textarea>
    <div class="textbox-button">
      <Button
        title="投稿"
        :onClick="post"/>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import MessageModel from '../models/Message';

export default {
  components: {
    Button
  },
  props: {
    onPost: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      body: ''
    }
  },
  methods: {
    async post() {
      try {
        const message = await MessageModel.save({
          body: this.body
        });
        this.onPost(message);
        this.body = '';
      } catch (error) {
        alert(error.message);
      }
    },
  }
}
</script>

<style scoped>
.textbox-container {
  padding: 10px;
}

.textbox-input {
  width: 100%;
  height: 100px;
  resize: none;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0;
}

.textbox-button {
  margin-top: 10px;
  text-align: right;
}
</style>