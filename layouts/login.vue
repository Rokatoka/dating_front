<template>
  <div :class='$style.login'>
    <nuxt />

    <div :class='$style.back' @click='$router.go(-1)'>
      <back-icon />

      Назад
    </div>
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
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.back {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #320009;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
</style>
