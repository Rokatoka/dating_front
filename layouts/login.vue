<template>
  <div :class='$style.login'>
    <div :class='$style.back' @click='$router.go(-1)'>
      <back-icon />

      Назад
    </div>

    <nuxt />
  </div>
</template>

<script>
import BackIcon from '~/icons/BackIcon.vue';

export default {
  name: 'LoginLayout',
  components: {
    BackIcon,
  }
}
</script>

<style lang='scss' module>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.back {
  position: absolute;
  top: 50px;
  left: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666666;
  font-size: 32px;
  font-weight: 700;
  cursor: pointer;
}
</style>
