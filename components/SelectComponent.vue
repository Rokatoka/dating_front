<template>
  <div class='select-component-wrapper'>
    <label
      v-if='label'
      class='select-component-label'
      :class='customClass'
      v-bind='$attrs'
    >
      {{ label }}
    </label>

    <vue-simple-select
      :value='modelValue'
      :class="{
        'select-search': isSearch,
        'select-disabled': isDisabled,
      }"
      :options='options'
      @change='handleValueUpdate'
    />
  </div>
</template>

<script>
import VueSimpleSelect from 'vue-simple-custom-select';

export default {
  name: 'SelectComponent',
  components: {
    VueSimpleSelect,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
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
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    modelValue() {
      return {
        label: this.options.find((o) => o.value === this.value)?.label || '',
        value: this.value,
      }
    }
  },
  methods: {
    handleValueUpdate(e) {
      this.$emit('input', e.value)
    },
  },
}
</script>

<style lang='scss'>
.select-component-wrapper {
  display: grid;
  grid-row-gap: 10px;
}

.select-component-label {
  color: #111111;
}

.vue-simple-select-container > button {
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  background: $white;
  border: 1px solid $grey-light !important;
  border-radius: 10px !important;
  outline: none;

  span {
    margin-left: 10px;
  }
}

.select-search > button {
  width: 258px !important;
  height: 32px !important;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1) !important;
  border: none !important;
  border-radius: 10px !important;
  outline: none !important;
  background-color: $white !important;
}

.select-disabled > button {
  pointer-events: none;
  opacity: .5;
}

.vue-simple-select-dropdown {
  max-height: 250px;
  overflow-y: auto;
  background-color: $white;
  border-radius: 10px !important;
  z-index: 1;
}
</style>
