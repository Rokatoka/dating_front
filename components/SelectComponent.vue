<template>
  <div :class='$style.wrapper'>
    <label
      v-if='label'
      :class='[$style.label, customClass]'
      v-bind='$attrs'
    >
      {{ label }}
    </label>

    <select
      :value='value'
      :class="selectClass"
      @change='handleValueUpdate'
    >
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
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    selectClass() {
      return this.isSearch ? this.$style['select--search'] : this.$style.select
    }
  },
  methods: {
    handleValueUpdate(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-row-gap: 10px;
}

.label {
  color: #111111;
}

.select {
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  background: $white;
  border: 1px solid $grey-light;
  border-radius: 10px;
  outline: none;

  &--search {
    width: 258px;
    height: 32px;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
    outline: none;
  }
}
</style>
