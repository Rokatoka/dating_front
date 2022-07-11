<template>
  <div :class='$style.wrapper'>
    <label :class='$style.label'>
      {{ label }}
    </label>

    <div :class='$style.options'>
      <template
        v-for='option in options'
      >
        <input
          :key='option.value'
          type='radio'
          :value='option.value'
          :checked='value === option.value'
          @change='handleChangeValue'
        />

        <span :key='option.label'>
          {{ option.label }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioInputGroup',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    handleChangeValue(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-row-gap: 12px;
  accent-color: $red;
}

.label {
  color: #111111;
}

.options {
  display: flex;
  gap: 8px;
}
</style>
