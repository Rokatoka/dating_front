<template>
  <component
    :is='componentType'
    :class='[$style.button, customClass]'
    :to="componentType === 'nuxt-link' ? to : ''"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ButtonComponent',
  inheritAttrs: true,
  props: {
    componentType: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
    customClass: {
      type: [String, Array],
      default: '',
    }
  }
}
</script>

<style lang='scss' module>
.button {
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background-color: $red;
  color: $white;
  cursor: pointer;
  transition: background-color $transition-duration;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: initial;

  &:hover {
    background-color: $red-hovered;
  }
}
</style>
