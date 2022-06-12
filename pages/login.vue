<template>
  <div class='login'>
    <div class='login__title'>
      <span class='login__title__head'>
        Войти
      </span>

      <span class='login__title__body'>
        Введите свои данные для входа
      </span>
    </div>

    <input-component
      v-model='login'
      label='Логин'
      placeholder='Введите свой логин'
      type='text'
    />

    <input-component
      v-model='password'
      label='Пароль'
      placeholder='Введите свой пароль'
      type='password'
    />

    <button class='login__button'>
      Вход
    </button>
  </div>
</template>

<script>
import InputComponent from '~/components/InputComponent';

export default {
  name: 'LoginPage',
  components: {
    InputComponent,
  },
  layout: 'login',
  data() {
    return {
      login: '',
      password: ''
    }
  }
}
</script>

<style lang='scss'>
.login {
  @extend %typography-mont-thin;

  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 416px;
  padding: 42px 36px;
  border-radius: 20px;
  background-color: $white;
}

.login__title {
  display: grid;
  grid-row-gap: 8px;
  text-align: center;

  &__head {
    font-size: 24px;
    line-height: 36px;
  }

  &__body {
    color: $grey-dark;
  }
}

.login__button {
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background-color: $red-light;
  color: $white;
  cursor: pointer;
  transition: background-color $transition-duration;
  text-decoration: none;

  &:hover {
    background-color: $red-hovered;
  }
}
</style>
