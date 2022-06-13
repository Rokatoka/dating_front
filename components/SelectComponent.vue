<template>
  <div :class='$style.wrapper'>
    <label :class='$style.label'>
      {{ label }}
    </label>

    <select :value='value' :class='$style.select' @change='handleValueUpdate'>
      <option
        v-for='option in options'
        :key='option.name'
        :value='option.value'
        :selected='option.value === value'
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleValueUpdate(e) {
      this.$emit('input', e.target.value)
    }
  },
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-row-gap: 10px;
}

.label {
  color: $grey-dark;
}

.select {
  width: 258px;
  padding: 8px 16px;
  background: $white;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  outline: none;
}
</style>
