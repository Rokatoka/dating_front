<template>
  <div :class='$style.login'>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
}
</script>

<style lang='scss' module>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
