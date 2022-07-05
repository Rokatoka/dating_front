<template>
  <header :class='$style.header'>
    <select
      v-model='selectedLang'
      :class='$style.select'
    >
      <option
        v-for='option in LANG_OPTIONS'
        :key='option.value'
        :value='option.value'
      >
        {{ option.label }}
      </option>
    </select>

    <button-component
      component-type='nuxt-link'
      to='/login'
    >
      Войти
    </button-component>
  </header>
</template>

<script>
import { LANG_OPTIONS } from '../data';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'LandingHeader',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      LANG_OPTIONS,
      selectedLang: 'ru',
    }
  }
}
</script>

<style lang='scss' module>
.header {
  @extend %typography-mont-thin;

  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 60px 60px 10px;
}

.select {
  background: transparent;
  border: none;
  color: white;
  outline: none;
  font-size: 16px;
}
</style>
