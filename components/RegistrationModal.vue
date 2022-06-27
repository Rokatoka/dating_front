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
      v-if='visible'
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
                :options='days'
              />

              <select-component
                v-model='form.birthDate.month'
                label='Месяц'
                :options='months'
              />

              <select-component
                v-model='form.birthDate.year'
                label='Год'
                :options='years'
              />
            </div>
          </div>

          <radio-input-group
            v-model='form.gender'
            label='Выберете Ваш пол?'
            :options='genders'
          />
        </div>

        <div :class='$style.row'>
          <select-component
            v-model='form.goal'
            label='Цель'
            :options='goals'
          />

          <select-component
            v-model='form.religion'
            label='Религия'
            :options='religions'
          />
        </div>

        <div :class='$style.row'>
          <text-area-component
            v-model='form.about'
            label='Обо мне'
          />

          <interests-block
            label='Интересы'
            :options='interests'
            @onUpdateList='handleUpdateInterest'
          />
        </div>

        <div :class='$style.row'>
          <select-component
            v-model='form.city'
            label='Город'
            :options='cities'
          />

          <select-component
            v-model='form.country'
            label='Страна'
            :options='countries'
          />
        </div>

        <div :class='$style.row'>
          <button
            type='submit'
            :class='$style.button'
            :disabled='invalid'
          >
            Готово
          </button>
        </div>
      </validation-observer>
    </div>
  </transition>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import InputComponent from './InputComponent.vue';
import SelectComponent from './SelectComponent.vue';
import RadioInputGroup from './RadioInputGroup.vue';
import TextAreaComponent from './TextAreaComponent.vue';
import InterestsBlock from './InterestsBlock.vue';

export default {
  name: 'RegistrationModal',
  components: {
    InputComponent,
    SelectComponent,
    RadioInputGroup,
    TextAreaComponent,
    InterestsBlock,
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
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
      goals: [
        {
          name: 'Отношения',
          value: 'relationship'
        },
        {
          name: 'Досуг',
          value: 'fun'
        },
      ],
      religions: [
        {
          name: 'Ислам',
          value: 'islam',
        },
        {
          name: 'Буддизм',
          value: 'buddism',
        }
      ],
      cities: [
        {
          name: 'Астана',
          value: 'astana',
        },
        {
          name: 'Алматы',
          value: 'almaty',
        }
      ],
      countries: [
        {
          name: 'Казахстан',
          value: 'kz',
        },
        {
          name: 'Америка',
          value: 'usa',
        }
      ],
      genders: [
        {
          name: 'Женщина',
          value: 'female',
        },
        {
          name: 'Мужчина',
          value: 'male',
        },
      ],
      days: [
        {
          name: '01',
          value: '01'
        }
      ],
      months: [
        {
          name: 'январь',
          value: '01'
        }
      ],
      years: [
        {
          name: '1996',
          value: '1996'
        }
      ],
      interests: [
        {
          name: 'Кино',
          value: 'movies'
        },
        {
          name: 'Музыка',
          value: 'music'
        },
        {
          name: 'Книги',
          value: 'books'
        }
      ],
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
  padding: 8px 64px;
  border-radius: 12px;
  background-color: $red-light;
  color: $white;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: .5;
  }
}

.transition .wrapper {
  transition: transform 1s ease;
}

.transition.overlay {
  transition: background 1s ease;
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
