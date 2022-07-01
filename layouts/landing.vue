<template>
  <div :class='$style.landing'>
    <LandingHeader />

    <nuxt />
  </div>
</template>

<script>
import LandingHeader from '~/components/LandingHeader';

export default {
  name: 'LandingLayout',
  components: {
    LandingHeader,
  },
}
</script>

<style lang='scss' module>
.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../static/landing_background_1.jpg');
}
</style>
