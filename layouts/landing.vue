<template>
  <div class='landing'>
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
  data() {
    return {
      slide: 1
    }
  },
  created() {
    this.$nuxt.$on('onSlideChange', (index) => {
      this.slide = index;
    });
  }
}
</script>

<style lang='scss'>
.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/img/landing_background_1.png');
}
</style>
