<template>
  <div :class='$style.wrapper'>
    <label :class='$style.label'>
      {{ label }}
    </label>

    <textarea
      :class='$style.input'
      :value='value'
      @input='handleValueChange'
    />

    <span :class='$style.disclaimer'>{{ disclaimer }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextAreaComponent',
  props: {
    label: {
      type: String,
      default: '',
    },
    disclaimer: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleValueChange(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
}

.disclaimer,
.label {
  color: #111111;
}

.label {
  margin-bottom: 12px;
}

.input {
  height: 100%;
  padding: 12px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
  resize: none;
}
</style>
