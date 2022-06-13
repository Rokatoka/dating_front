<template>
  <div>
    <main-header />

    <nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue';

export default {
  name: 'SearchLayout',
  components: {
    MainHeader,
  },
}
</script>
