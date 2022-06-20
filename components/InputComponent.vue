<template>
  <div class='input-component'>
    <div class='input-component__header'>
      <label class='input-component__label'>
        {{ label }}
      </label>

      <div v-if="type === 'password'" class='input-component__header-icon'>
        <show-visibility-icon
          class='input-component__icon'
          @click.native='handleVisibilityToggle'
        />

        <span>
          Скрыть
        </span>
      </div>
    </div>

    <input
      :id='id'
      :value='value'
      class='input-component__input'
      :class="{
        'input-component__input--search': isSearch,
        'input-component__input--error': errors.length,
      }"
      :type='type'
      v-bind='$attrs'
      @input="handleValueUpdate"
    >

    <span
      v-if='disclaimer'
      class='input-component__disclaimer'
    >
      {{ disclaimer }}
    </span>
  </div>
</template>

<script>
import ShowVisibilityIcon from '~/icons/ShowVisibilityIcon.vue';

export default {
  name: 'InputComponent',
  components: {
    ShowVisibilityIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    disclaimer: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    id() {
      return `id-${Math.random().toString(16)}`
    },
  },
  methods: {
    handleValueUpdate(e) {
      this.$emit('input', e.target.value);
    },
    handleVisibilityToggle() {
      const input = document.getElementById(this.id);

      input.type = input.type === 'password' ? 'text' : 'password'
    }
  }
}
</script>

<style lang='scss'>
.input-component {
  position: relative;
  display: grid;
  grid-row-gap: 10px;
  color: $grey-dark;

  input[type="text"] {
    @extend %typography-mont-thin;
  }
}

.input-component__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-component__header-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-component__icon {
  cursor: pointer;
}

.input-component__input {
  padding: 16px;
  border: 1px solid #C9C9C9;
  border-radius: 10px;

  &--search {
    padding: 8px 16px;
    border: none;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  }

  &--error {
    border: 1px solid $red;
  }
}

.input-component__disclaimer {
  position: absolute;
  bottom: -20px;
}
</style>
