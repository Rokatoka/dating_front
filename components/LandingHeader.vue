<template>
  <header class='landing-header'>
    <select
      v-model='selectedLang'
      class='landing-header__select'
    >
      <option
        v-for='option in langOptions'
        :key='option.value'
        :value='option.value'
      >
        {{ option.label }}
      </option>
    </select>

    <nuxt-link to='/login' class='landing-header__button'>
      Войти
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'LandingHeader',
  data() {
    return {
      langOptions: [
        { label: 'Русский (RU)', value: 'ru' },
        { label: 'Казахский (KZ)', value: 'kz' },
      ],
      selectedLang: 'ru',
    }
  }
}
</script>

<style lang='scss'>
.landing-header {
  @extend %typography-mont-thin;

  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 60px 60px 10px;
}

.landing-header__select {
  background: transparent;
  border: none;
  color: white;
  outline: none;
}

.landing-header__button {
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background-color: $red;
  color: $white;
  cursor: pointer;
  transition: background-color $transition-duration;
  text-decoration: none;

  &:hover {
    background-color: $red-hovered;
  }
}
</style>
