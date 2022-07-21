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
            <span :class='$style.title'>
              {{ isEdit ? 'Редактирование профиля' : 'Добро пожаловать' }}
            </span>

            <div v-if='!isEdit'>
              Если уже зарегистрированны? <nuxt-link to='/login' :class='$style.link'>Войти</nuxt-link>
            </div>
          </div>
        </div>

        <div :class='$style.row'>
          <validation-provider
            v-slot='{ errors }'
            name='Имя'
            rules='required'
          >
            <input-component
              v-model='form.name'
              label='Имя'
              placeholder='Введите ваше Имя'
              :errors='errors'
            />
          </validation-provider>

          <validation-provider
            v-slot='{ errors }'
            name='Фамилия'
            rules='required'
          >
            <input-component
              v-model='form.surname'
              label='Фамилия'
              placeholder='Введите вашу фамилию'
              :errors='errors'
            />
          </validation-provider>
        </div>

        <div :class='$style.row'>
          <validation-provider
            v-if='!isEdit'
            v-slot='{ errors }'
            name='Пароль'
            rules='password'
          >
            <input-component
              v-model='form.password'
              label='Пароль'
              placeholder='Придумайте ваш пароль'
              type='password'
              disclaimer='*Пароль должен содержать минимут 8 символов'
              :errors='errors'
            />
          </validation-provider>

          <validation-provider
            v-slot='{ errors }'
            name='Email'
            rules='required|email'
          >
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
                v-model='day'
                label='День'
                :options='days'
                :custom-class='$style.selectLabel'
              />

              <select-component
                v-model='month'
                label='Месяц'
                :options='MOCK_MONTHS'
                :custom-class='$style.selectLabel'
              />

              <select-component
                v-model='year'
                label='Год'
                :options='years'
                :custom-class='$style.selectLabel'
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
            v-model='form.target'
            label='Цель'
            :options='targets'
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
            :value="isEdit ? $auth.user.interest : ''"
            label='Интересы'
            @onUpdateList='handleUpdateInterest'
          />
        </div>

        <div :class='$style.row'>
          <select-component
            v-model='form.country'
            label='Страна'
            :options='countries'
          />

          <select-component
            v-model='form.city'
            label='Город'
            :options='cities'
          />
        </div>

        <div
          v-if='!isEdit'
          :class='$style.row'
        >
          <div :class='$style.checkbox'>
            <checkbox-component v-model='agreement' />

            Я принимаю <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Условия</a>
          </div>
        </div>

        <div :class='[$style.row, $style.rowControl]'>
          <button-component
            type='button'
            :custom-class='$style.buttonGrey'
            @click="$emit('onClose')"
          >
            Отмена
          </button-component>

          <button-component
            type='submit'
            :custom-class='[$style.button, isEdit && $style.buttonEdit]'
            :disabled='invalid || (!isEdit && !agreement)'
          >
            {{ isEdit ? 'Сохранить изменения' : 'Готово' }}
          </button-component>
        </div>
      </validation-observer>

      <registration-success-modal
        v-if='successModalVisible'
        :is-edit='isEdit'
        @onClose='handleFinish'
      />
    </div>
  </transition>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import {
  MOCK_DAYS,
  MOCK_MONTHS,
  MOCK_GENDERS,
} from '../data'

import InputComponent from './InputComponent.vue';
import SelectComponent from './SelectComponent.vue';
import RadioInputGroup from './RadioInputGroup.vue';
import TextAreaComponent from './TextAreaComponent.vue';
import InterestsBlock from './InterestsBlock.vue';
import ButtonComponent from './ButtonComponent.vue';
import RegistrationSuccessModal from './RegistrationSuccessModal.vue';
import CheckboxComponent from './CheckboxComponent.vue';

import { createUser, updateUser } from '~/services/users';

export default {
  name: 'RegistrationModal',
  components: {
    InputComponent,
    SelectComponent,
    RadioInputGroup,
    TextAreaComponent,
    InterestsBlock,
    ButtonComponent,
    RegistrationSuccessModal,
    CheckboxComponent,
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      successModalVisible: false,
      form: {
        name: '',
        surname: '',
        password: '',
        email: '',
        gender: 'woman',
        target: '',
        religion: '',
        city: '',
        country: '',
        about: '',
        interest: [],
      },
      agreement: false,
      day: '01',
      month: '01',
      year: '1996',
      MOCK_DAYS,
      MOCK_MONTHS,
      MOCK_GENDERS,
    }
  },
  computed: {
    username() {
      return this.form.name;
    },
    date() {
      return `${this.year}-${this.month}-${this.day}`
    },
    days() {
      if (['01', '03', '05', '07', '08', '10', '12'].includes(this.month)) {
        return this.MOCK_DAYS;
      } else if (['04', '06', '09', '11'].includes(this.month)) {
        return this.MOCK_DAYS.slice(0, -1);
      } else if (this.month === '02' && this.year % 4 === 0 ) {
        return this.MOCK_DAYS.slice(0, -2);
      } else {
        return this.MOCK_DAYS.slice(0, -3);
      }
    },
    years() {
      const currentYear = new Date();
      const years = [];
      for (let i = 1950; i <= currentYear.getFullYear(); i++) {
        years.push({
          label: i.toString(),
          value: i.toString(),
        });
      }

      return years;
    },
    cities() {
      return this.$store.getters['geo/citiesList']
    },
    countries() {
      return this.$store.getters['geo/countriesList']
    },
    targets() {
      return this.$store.getters['data/targetsList']
    },
    religions() {
      return this.$store.getters['data/religionsList']
    },
  },
  watch: {
    async 'form.country'(val) {
      this.form.city = this.isEdit && val === this.$auth.user.country.id ? this.$auth.user.city.id : '';

      await this.$store.dispatch('geo/getCities', val);
    }
  },
  mounted() {
    if (this.isEdit) {
      this.form.email = this.$auth.user.email;
      this.form.gender = this.$auth.user.gender;
      this.form.about = this.$auth.user.about;
      this.form.name = this.$auth.user.name;
      this.form.surname = this.$auth.user.surname;
      this.form.target = this.$auth.user.target.id;
      this.form.religion = this.$auth.user.religion.id;
      this.form.country = this.$auth.user.country.id;
      this.form.interest = this.$auth.user.interest.id;
      this.day = this.$auth.user.date.split('-')[2];
      this.month = this.$auth.user.date.split('-')[1];
      this.year = this.$auth.user.date.split('-')[0];
    }

    try {
      this.$store.dispatch('geo/getCountries');
      this.$store.dispatch('data/getTargets');
      this.$store.dispatch('data/getReligions');
    } catch(e) {
      console.error(e);
    }
  },
  methods: {
    handleUpdateInterest(list) {
      this.form.interest = list;
    },
    handleFinish() {
      this.successModalVisible = false;

      this.$auth.fetchUser();

      this.$emit('onClose');
    },
    async handleSubmitForm(e) {
      if (!['vue-simple-select-option', 'vue-simple-select-button'].includes(e.submitter.className)) {
        try {
          const data = {
            ...this.form,
            username: this.username,
            date: this.date,
          };

          if (this.isEdit) {
            delete data.password;

            await updateUser (data, this.$auth.user.id)
          } else {
            await createUser(data);
          }

          this.successModalVisible = true;
        } catch (e) {
          console.error(e);
        }
      }
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
  overflow-y: auto;
}

.row {
  display: grid;
  grid-template-columns: repeat(2, 400px);
  justify-content: space-between;

  &--center {
    align-items: center;
    margin-top: 20px;
  }

  &.rowControl {
    display: flex;
    justify-content: flex-end;
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

.selectLabel {
  color: $grey-dark;
}

.button {
  width: 190px;
  height: 44px;

  &:disabled {
    opacity: .5;
  }
}

.buttonEdit {
  background-color: $green;
}

.buttonGrey {
  width: 190px;
  height: 44px;
  margin-right: 16px;
  background-color: $grey-dark;

  &:hover {
    background-color: $grey-light;
  }
}

.checkbox {
  display: flex;
  gap: 10px;
  grid-column: 2;
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
