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

    <v-select
      :value='modelValue'
      :class="{
        'select-search': isSearch,
        'select-disabled': isDisabled,
      }"
      :disabled='isDisabled'
      :options='options'
      :clearable='false'
      placeholder='Выберите'
      @input='handleValueUpdate'
    >
      <template #no-options>
        Ничего не найдено
      </template>
    </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'SelectComponent',
  components: {
    vSelect,
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
    },
    optionsOnTop: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    modelValue() {
      if (this.value) {
        return {
          label: this.options.find((o) => o.value === this.value)?.label || '',
          value: this.value,
        }
      }

      return ''
    }
  },
  methods: {
    handleValueUpdate(e) {
      this.$emit('input', e ? e.value : '')
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

.vs--searchable .vs__dropdown-toggle {
  height: 100%;
  border: none;
}

.vs__dropdown-menu {
  max-height: 200px;
  z-index: 1;
}

.v-select {
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

  &.select-search {
    width: 258px !important;
    height: 50px !important;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
    border-radius: 10px !important;
    outline: none !important;
    background-color: $white !important;
  }

  &.select-disabled {
    background-color: var(--vs-disabled-bg);
  }
}
</style>
