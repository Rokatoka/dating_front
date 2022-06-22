<template>
  <div :class='$style.wrapper'>
    <main-header />

    <nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue';

export default {
  name: 'DefaultLayout',
  components: {
    MainHeader
  },
}
</script>

<style module>
.wrapper {
  padding: 20px;
}
</style>
