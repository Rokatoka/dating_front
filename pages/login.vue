<template>
  <div :class='$style.login'>
    <div :class='$style.title'>
      <span :class='$style.titleHead'>
        Войти
      </span>

      <span :class='$style.titleBody'>
        Пожалуйста, укажите ваш email , который был использован при регистрации.
      </span>

      <span v-if='error' :class='$style.error'>{{ error }}</span>
    </div>

    <input-component
      v-model='identifier'
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

    <nuxt-link
      :class='$style.link'
      to='passwordReset'
    >
      Забыли пароль?
    </nuxt-link>

    <button-component @click='handleLogin'>
      Вход
    </button-component>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import InputComponent from '~/components/InputComponent.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    InputComponent,
    ButtonComponent,
  },
  layout: 'login',
  middleware: 'auth',
  data() {
    return {
      identifier: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapMutations([
      'user/SET_CURRENT_USER'
    ]),
    async handleLogin() {
      this.error = '';

      const data = {
        identifier: this.identifier,
        password: this.password,
      };

      try {
        await this.$auth.loginWith('local', { data });

        await this.$router.push('/profile');
      } catch (e) {
        const error = e.response.data.error;

        if (error.message === 'Invalid identifier or password') {
          this.error = 'Неверный логин или пароль'
        } else if (error.message === 'Your account email is not confirmed') {
          this.error = 'Ваш аккаунт еще не подтвержден'
        } else if (error.details?.errors?.length) {
          this.error = 'Заполните все поля'
        }
      }

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

.error {
  color: $red;
}

.link {
  margin-top: -18px;
  color: $red;
  font-size: 12px;
}
</style>
