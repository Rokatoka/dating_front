<template>
  <div :class='$style.wrapper'>
    <div :class='$style.header'>
      <label>
        {{ label }}
      </label>

      <div
        v-if="type === 'password'"
        :class='$style.headerIcon'
      >
        <show-visibility-icon
          :class='$style.icon'
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
      :class='[
        $style.input,
        isSearch && $style.search,
        errors.length && $style.error
      ]'
      :type='type'
      v-bind='$attrs'
      @input="handleValueUpdate"
    >

    <span
      v-if='disclaimer'
      :class='$style.disclaimer'
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

<style lang='scss' module>
.wrapper {
  position: relative;
  display: grid;
  grid-row-gap: 10px;
  color: #111111;

  input[type="text"] {
    @extend %typography-mont-thin;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerIcon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  cursor: pointer;
}

.input {
  padding: 16px;
  border: 1px solid #C9C9C9;
  border-radius: 10px;

  &.search {
    height: 50px;
    padding: 8px 16px;
    border: none;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.error {
    border: 1px solid $red;
  }
}

.disclaimer {
  position: absolute;
  bottom: -20px;
  color: $grey-dark;
}
</style>
