<template>
  <div class="sp sp-circle"></div>
</template>

<script>
</script>

<style scoped>
/* 参考: https://codepen.io/bernethe/pen/dorozd */
.sp {
	width: 32px;
	height: 32px;
	margin: 20px auto;
}
.sp-circle {
  border: 4px solid #0004;
  border-top: 4px solid #000f;
	border-radius: 50%;
	animation: spCircRot .6s infinite linear;
}
@keyframes spCircRot {
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
}
</style>