<template>
  <transition
    name='register'
    appear
    :enter-active-class='$style.transition'
    :leave-active-class='$style.transition'
    :enter-class='$style.enter'
    :leave-to-class='$style.leaveTo'
  >
    <div
      :class='$style.overlay'
      @click.self="$emit('onClose')"
    >
      <validation-observer
        v-slot='{ invalid }'
        tag='form'
        :class='$style.wrapper'
        @submit.prevent='handleSubmitForm'
      >
        <div :class='$style.row'>
          <div>
            <span :class='$style.title'>Добро пожаловать</span>

            <div>
              Если уже зарегистрированны? <nuxt-link to='/login' :class='$style.link'>Войти</nuxt-link>
            </div>
          </div>
        </div>

        <div :class='$style.row'>
          <validation-provider name='Имя' rules='required' v-slot='{ errors }'>
            <input-component
              v-model='form.name'
              label='Имя'
              placeholder='Введите ваше Имя'
              :errors='errors'
            />
          </validation-provider>

          <validation-provider name='Фамилия' rules='required' v-slot='{ errors }'>
            <input-component
              v-model='form.surname'
              label='Фамилия'
              placeholder='Введите вашу фамилию'
              :errors='errors'
            />
          </validation-provider>
        </div>

        <div :class='$style.row'>
          <validation-provider name='Пароль' rules='password' v-slot='{ errors }'>
            <input-component
              v-model='form.password'
              label='Пароль'
              placeholder='Придумайте ваш пароль'
              type='password'
              disclaimer='*Пароль должен содержать минимут 8 символов'
              :errors='errors'
            />
          </validation-provider>

          <validation-provider name='Email' rules='required|email' v-slot='{ errors }'>
            <input-component
              v-model='form.email'
              label='Email'
              placeholder='Введите ваш email'
              :errors='errors'
            />
          </validation-provider>
        </div>

        <div :class="[$style.row, $style['row--center']]">
          <div>
            <label>
              Ваша дата рождения?
            </label>

            <div :class='$style.selects'>
              <select-component
                v-model='form.birthDate.day'
                label='День'
                :options='MOCK_DAYS'
              />

              <select-component
                v-model='form.birthDate.month'
                label='Месяц'
                :options='MOCK_MONTHS'
              />

              <select-component
                v-model='form.birthDate.year'
                label='Год'
                :options='MOCK_YEARS'
              />
            </div>
          </div>

          <radio-input-group
            v-model='form.gender'
            label='Выберете Ваш пол?'
            :options='MOCK_GENDERS'
          />
        </div>

        <div :class='$style.row'>
          <select-component
            v-model='form.goal'
            label='Цель'
            :options='MOCK_GOALS'
          />

          <select-component
            v-model='form.religion'
            label='Религия'
            :options='MOCK_RELIGION'
          />
        </div>

        <div :class='$style.row'>
          <text-area-component
            v-model='form.about'
            label='Обо мне'
          />

          <interests-block
            label='Интересы'
            :options='MOCK_INTERESTS'
            @onUpdateList='handleUpdateInterest'
          />
        </div>

        <div :class='$style.row'>
          <select-component
            v-model='form.city'
            label='Город'
            :options='MOCK_CITIES'
          />

          <select-component
            v-model='form.country'
            label='Страна'
            :options='MOCK_COUNTRIES'
          />
        </div>

        <div :class='$style.row'>
          <button-component
            type='submit'
            :custom-class='$style.button'
            :disabled='invalid'
          >
            Готово
          </button-component>
        </div>
      </validation-observer>
    </div>
  </transition>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import {
  MOCK_DAYS,
  MOCK_MONTHS,
  MOCK_GOALS,
  MOCK_GENDERS,
  MOCK_INTERESTS,
  MOCK_RELIGION,
  MOCK_YEARS,
  MOCK_COUNTRIES,
  MOCK_CITIES,
} from '../data'

import InputComponent from './InputComponent.vue';
import SelectComponent from './SelectComponent.vue';
import RadioInputGroup from './RadioInputGroup.vue';
import TextAreaComponent from './TextAreaComponent.vue';
import InterestsBlock from './InterestsBlock.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'RegistrationModal',
  components: {
    InputComponent,
    SelectComponent,
    RadioInputGroup,
    TextAreaComponent,
    InterestsBlock,
    ButtonComponent,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        name: '',
        surname: '',
        password: '',
        email: '',
        gender: 'female',
        goal: 'fun',
        religion: 'islam',
        city: 'almaty',
        country: 'kz',
        birthDate: {
          day: '01',
          month: '01',
          year: '1996'
        },
        about: '',
        interests: [],
      },
      MOCK_DAYS,
      MOCK_MONTHS,
      MOCK_GOALS,
      MOCK_GENDERS,
      MOCK_INTERESTS,
      MOCK_RELIGION,
      MOCK_YEARS,
      MOCK_COUNTRIES,
      MOCK_CITIES,
    }
  },
  methods: {
    handleUpdateInterest(list) {
      this.form.interests = list;
    },
    handleSubmitForm() {
      console.log(this.form);
    }
  }
}
</script>

<style lang='scss' module>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1000px;
  height: 100%;
  padding: 28px 64px;
  background-color: $white;
}

.row {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  justify-content: space-between;

  &--center {
    align-items: center;
  }
}

.title {
  margin-bottom: 8px;
  font-size: 32px;
  line-height: 48px;
}

.link {
  color: $red;
}

.selects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  margin-top: 12px;
}

.button {
  width: 190px;
  height: 44px;
  grid-column: 2;
  margin-left: auto;

  &:disabled {
    opacity: .5;
  }
}

.transition .wrapper {
  transition: transform .5s ease;
}

.transition.overlay {
  transition: background .5s ease;
}

.enter .wrapper,
.leaveTo .wrapper {
  transform: translateX(-100%);
}

.enter.overlay,
.leaveTo.overlay {
  background: transparent;
}
</style>
