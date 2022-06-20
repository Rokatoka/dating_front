<template>
  <div :class='$style.wrapper'>
    <label :class='$style.label'>
      {{ label }}
    </label>

    <select-component :options='options' @input='handleAddOption' />

    <div :class='$style.container'>
      <div
        v-for='(option, index) in selectedOptions'
        :key='option.value'
        :class="$style['container__item']"
      >
        {{ option.name }}

        <remove-item-icon
          :class="$style['container__item__icon']"
          @click.native='handleRemoveOption(index)'
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectComponent from './SelectComponent.vue';

import RemoveItemIcon from '~/icons/RemoveItemIcon.vue';

export default {
  name: 'InterestsBlock',
  components: {
    SelectComponent,
    RemoveItemIcon
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      selectedOptions: [],
    }
  },
  methods: {
    handleAddOption(opt) {
      if (!this.selectedOptions.find((o) => o.value === opt)) {
        const option = this.options.find((o) => o.value === opt);

        this.selectedOptions.push(option);

        this.$emit('onUpdateList', this.selectedOptions);
      }
    },
    handleRemoveOption(index) {
      this.selectedOptions.splice(index, 1);

      this.$emit('onUpdateList', this.selectedOptions);
    }
  }
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-row-gap: 12px;
}

.label {
  color: $grey-dark;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: 100px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid $grey-light;
  overflow-y: scroll;

  &__item {
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
    height: fit-content;
    background-color: $grey;
    color: $grey-light;
    border-radius: 12px;
    padding: 4px 8px;

    &__icon {
      cursor: pointer;
    }
  }
}
</style>
