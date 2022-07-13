<template>
  <div :class='$style.login'>
    <div :class='$style.title'>
      <span :class='$style.titleHead'>
        Новый пароль
      </span>

      <span :class='$style.titleBody'>
        Пожалуйста, придумайте новый пароль для в хода в систему.
      </span>
    </div>

    <input-component
      v-model='login'
      label='Новый пароль'
      placeholder='Введите свой пароль'
      type='password'
    />

    <input-component
      v-model='password'
      label='Подтвердите новый пароль'
      placeholder='Введите свой пароль'
      type='password'
    />

    <button-component>
      Вход
    </button-component>
  </div>
</template>

<script>
import InputComponent from '~/components/InputComponent.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';

export default {
  name: 'PasswordResetPage',
  components: {
    InputComponent,
    ButtonComponent,
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

<style lang='scss' module>
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

.title {
  display: grid;
  grid-row-gap: 8px;
  text-align: center;
}

.titleHead {
  font-size: 24px;
  line-height: 36px;
}

.titleBody {
  font-size: 16px;
  line-height: 24px;
  color: $grey-dark;
}
</style>
