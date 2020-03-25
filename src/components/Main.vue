<template>
  <main class="main-container">
    <TextBox />
    <div class="devider"></div>
    mainが入りますよ
  </main>
</template>

<script>
import TextBox from './TextBox';

export default {
  components: {
    TextBox
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