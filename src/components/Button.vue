<template>
  <div
    class="button"
    @click="onClick"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'ボタン'
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  background: red;
  border-radius: 5px;
  color: white;
  padding: 10px;
  cursor: pointer;
}
.button:hover {
  background: rgb(182, 0, 0);
}
.button:active {
  background: rgb(138, 13, 13);
}
</style>