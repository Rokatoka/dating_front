<template>
  <div
    class='landing'
    :class="{
    'landing--bg-1': slide === 1,
    'landing--bg-2': slide === 2,
    'landing--bg-3': slide === 3,
    'landing--bg-4': slide === 4,
  }"
  >
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
  transition: background-image $transition-duration;

  &--bg-1 {
    background-image: url('../assets/img/landing_background_1.png');
  }

  &--bg-2 {
    background-image: url('../assets/img/landing_background_2.jpeg');
  }

  &--bg-3 {
    background-image: url('../assets/img/landing_background_3.jpeg');
  }

  &--bg-4 {
    background-image: url('../assets/img/landing_background_4.jpeg');
  }
}
</style>
