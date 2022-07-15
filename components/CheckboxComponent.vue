<template>
  <label :class='$style.wrapper'>
    <input
      :value='value'
      type='checkbox'
      @change='handleChangeValue'
    />
    <span :class='$style.checkbox' />
  </label>
</template>

<script>
export default {
  name: 'CheckboxComponent',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleChangeValue(e) {
      this.$emit('input', e.target.checked);
    }
  }
}
</script>

<style lang='scss' module>
.wrapper {
  position: relative;
  display: block;
  height: 100%;
  margin-right: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    cursor: pointer;
  }
}

.checkbox {
  position: absolute;
  left: 0;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid $black;
  border-radius: 2px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
}

.wrapper:hover input ~ .checkbox {
  background-color: $grey;
}

.wrapper input:checked ~ .checkbox {
  border: 1px solid $red;
}

.wrapper input:checked ~ .checkbox:after {
  content: '';
  display: block;
  background-image: url("~/static/check.png");
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
