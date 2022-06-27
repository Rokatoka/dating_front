<template>
  <div :class='$style.wrapper'>
    <user-card @onModalOpen='handleModalOpen' />

    <div :class='$style.profileBlock'>
      <div :class='$style.profileRow'>
        <span :class='$style.profileTitle'>
          Профиль
        </span>

        <div :class='$style.profileEdit' @click='registrationModalVisible = true'>
          <settings-icon />

          Редактировать
        </div>
      </div>

      <div :class='$style.profileRow'>
        <div :class='$style.info'>
          <div :class='$style.imageWrapper'>
            <img :class='$style.infoImg' src='~/static/profile.png' alt='profile'>
          </div>

          <div :class='$style.infoBlock'>
            <span :class='$style.profileName'>Марат Альжанов</span>

            <span :class='$style.profileInfo'>Тел.: +7 (701) 000 00 00</span>

            <span :class='$style.profileInfo'>г. Алматы</span>
          </div>
        </div>

        <div :class='$style.imagesBlock'>
          <img src='~/static/profile.png' alt='profile'>

          <img src='~/static/profile.png' alt='profile'>

          <div :class='$style.newImage' @click='handleAddImage'>
            <plus-icon />

            <span>Добавить фото</span>
          </div>
        </div>
      </div>

      <div :class='$style.profileRowVertical'>
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

      <div :class='$style.profileRowBlock'>
        <interests-block
          v-model='form.interests'
          label='Интересы'
          :options='interests'
        />
      </div>
    </div>

    <div :class='$style.chat'>
      <div :class='$style.chatTitle'>
        <span :class='$style.profileTitle'>Чат сообщений</span>
      </div>

      <div :class='$style.chatItem'>
        <div :class='$style.chatItemWrapper'>
          <div :class='$style.chatItemInfo'>
            <div :class='[$style.imageWrapper, $style.offline]'>
              <img :class='$style.infoImg' src='~/static/profile.png' alt='user' />
            </div>

            <div :class='$style.chatItemName'>
              <span :class='$style.profileName'>Дарина М.</span>

              <span :class='$style.profileInfo'>28 лет. г. Алматы</span>
            </div>
          </div>

          <div :class='$style.chatItemControl'>
            <more-icon @click.native='handleModalOpen' />

            <bell-icon :class='[$style.chatItemDisable]' @click.native='blockUserModalVisible = true' />
          </div>
        </div>
      </div>

      <div
        v-for='key in 20'
        :key='key'
        :class='$style.chatItem'
        @click='messengerVisible = true'
      >
        <div :class='$style.chatItemWrapper'>
          <div :class='$style.chatItemInfo'>
            <div :class='[$style.imageWrapper]'>
              <span :class='$style.newMessage'>3</span>

              <img :class='$style.infoImg' src='~/static/profile.png' alt='user' />
            </div>

            <div :class='$style.chatItemName'>
              <span :class='$style.profileName'>Дарина М.</span>

              <span :class='$style.profileInfo'>28 лет. г. Алматы</span>
            </div>
          </div>

          <div :class='$style.chatItemControl'>
            <more-icon @click.native='handleModalOpen' />

            <bell-icon :class='[$style.chatItemDisable, $style.disabled]' @click.native='blockUserModalVisible = true' />
          </div>
        </div>
      </div>
    </div>

    <div :class='$style.additionalInfo'>
      <text-area-component
        v-model='form.about'
        label='Обо мне'
        disclaimer='Не более 150 символов'
      />

      <div>
        <label :class='$style.paymentLabel'>Другие методы оплаты</label>

        <div :class='$style.paymentBlock'>
          <div :class='$style.paymentItem'>
            <label :class='$style.paymentItemRadio'>
              <input type='radio' />
              <span :class='$style.checkmarkRadio' />
            </label>

            <img src='~/static/paypal.png' alt='paypal'>

            <div :class='$style.paymentItemInfo'>
              <span :class='$style.paymentItemInfoName'>PayPal</span>

              <span :class='$style.paymentItemInfoText'>Без комиссии</span>
            </div>
          </div>

          <div :class='$style.paymentItem'>
            <label :class='$style.paymentItemRadio'>
              <input type='radio' />
              <span :class='$style.checkmarkRadio' />
            </label>

            <img src='~/static/visa.png' alt='visa'>

            <div :class='$style.paymentItemInfo'>
              <span :class='$style.paymentItemInfoName'>Credit Card</span>

              <span :class='$style.paymentItemInfoText'>Без комиссии</span>
            </div>
          </div>

          <div :class='$style.activator'>
            <div :class='$style.activatorBlock'>
              Активировать подписку

              <span :class='$style.activatorLink'>Моя подписка?</span>
            </div>

            <label :class="$style.switcher">
              <input type="checkbox" checked>
              <span :class="[$style.slider, $style.rounded]"></span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <user-card-modal v-if='userCardModalVisible' @onClose='handleModalClose' />

    <block-user-modal v-if='blockUserModalVisible' @onClose='handleBlockModalClose' />

    <registration-modal
      :visible='registrationModalVisible'
      @onClose='registrationModalVisible = false'
    />

    <messenger v-if='messengerVisible' @onClose='messengerVisible = false' />
  </div>
</template>

<script>
import UserCard from '~/components/UserCard.vue';
import UserCardModal from '~/components/UserCardModal.vue';
import SelectComponent from '~/components/SelectComponent.vue';
import InterestsBlock from '~/components/InterestsBlock.vue';
import TextAreaComponent from '~/components/TextAreaComponent.vue'
import BlockUserModal from '~/components/BlockUserModal.vue';
import RegistrationModal from '~/components/RegistrationModal.vue';
import Messenger from '~/components/Messenger.vue';
import PlusIcon from '~/icons/PlusIcon.vue';
import BellIcon from '~/icons/BellIcon.vue';
import MoreIcon from '~/icons/MoreIcon.vue';
import SettingsIcon from '~/icons/SettingsIcon.vue';

export default {
  name: 'ProfilePage',
  components: {
    UserCard,
    UserCardModal,
    PlusIcon,
    SelectComponent,
    InterestsBlock,
    TextAreaComponent,
    BellIcon,
    MoreIcon,
    BlockUserModal,
    SettingsIcon,
    RegistrationModal,
    Messenger,
  },
  data() {
    return {
      userCardModalVisible: false,
      blockUserModalVisible: false,
      registrationModalVisible: false,
      messengerVisible: false,
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
        interests: ['books'],
      },
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
    handleModalOpen() {
      this.userCardModalVisible = true;
    },
    handleModalClose() {
      this.userCardModalVisible = false;
    },
    handleBlockModalClose() {
      this.blockUserModalVisible = false;
    },
    handleAddImage() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/png, image/gif, image/jpeg';
      input.onchange = () => {
        const files = Array.from(input.files);
        console.log(files);
      };
      input.click();
    }
  }
}
</script>

<style lang='scss' module>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1.5fr 1fr;
  grid-row-gap: 28px;
  grid-column-gap: 20px;
  height: calc(100vh - 140px);
  margin-top: 20px;
}

.profileBlock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 32px 28px;
  background: $white;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}

.profileTitle {
  position: relative;
  font-weight: 600;

  &:before {
    content: '';
    position: absolute;
    top: -12px;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 0px 0px 5px 5px;
    background-color: $black;
  }
}

.profileEdit {
  display: flex;
  gap: 8px;
  align-items: center;
  color: $grey-light;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
}

.profileName {
  font-weight: 600;
}

.profileInfo {
  color: $grey-light;
}

.profileRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profileRowVertical {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.profileRowBlock {
  display: block;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.imageWrapper {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 0;
    display: block;
    width: 12px;
    height: 12px;
    background-color: #34C759;
    border-radius: 50%;
    border: 1px solid $white;
  }
}

.newMessage {
  position: absolute;
  left: -15px;
  top: 10px;
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  background-color: $red-light;
  color: white;
  border-radius: 50%;
}

.imageWrapper.offline {
  &:after {
    background-color: $grey-light;
  }
}

.infoImg {
  border-radius: 50%;
}

.infoBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.imagesBlock {
  display: flex;
  gap: 10px;
}

.newImage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 1.04688px solid $grey-light;
  border-radius: 6px;
  cursor: pointer;

  font-size: 10px;
  color: $grey-light;
}

.selects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  width: 100%;
}

.chat {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column: 3;
  background: #FFFFFF;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  overflow-y: scroll;
}

.chatTitle {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: $white;
  padding: 12px 36px 20px;
}

.chatItem {
  display: block;
  padding: 12px 36px;
  border-top: 1px solid $grey;
  cursor: pointer;

  &:hover {
    background-color: $grey;
  }
}

.chatItemWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatItemInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.chatItemName {
  display: grid;
  grid-row-gap: 4px;
}

.chatItemControl {
  display: grid;
  grid-row-gap: 12px;
  justify-items: center;

  svg {
    cursor: pointer;
  }
}

.chatItemDisable {
  color: $grey-light;
}

.chatItemDisable.disabled {
  color: $red;
}

.additionalInfo {
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  padding: 34px 38px;
  background: #FFFFFF;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}

.paymentLabel {
  color: #667483;
}

.paymentBlock {
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: 1fr 1fr 2fr;
  margin-top: 20px;
}

.paymentItem {
  display: flex;
  align-items: center;
  gap: 16px;
}

.paymentItemRadio {
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

.checkmarkRadio {
  position: absolute;
  top: 25%;
  left: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #EEF2F7;
  border: 1px solid #667483;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
}

.paymentItemRadio:hover input ~ .checkmarkRadio {
  background-color: $grey;
}

.paymentItemRadio input:checked ~ .checkmarkRadio {
  background-color: #FBCD02;
  border: none;
}

.paymentItemRadio input:checked ~ .checkmarkRadio:after {
  display: block;
  content: '';
  top: 5px;
  left: 5px;
  background-color: $white;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.paymentItemInfo {
  display: grid;
  grid-row-gap: 8px;
}

.paymentItemInfoName {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}

.paymentItemInfoText {
  color: #667483;
  font-size: 12px;
}

.switcher {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switcher input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #34C759;;
}

input:focus + .slider {
  box-shadow: 0 0 1px #34C759;;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.rounded {
  border-radius: 34px;
}

.slider.rounded:before {
  border-radius: 50%;
}

.activator {
  display: flex;
  align-items: center;
  gap: 76px;
  margin-top: auto;
}

.activatorBlock {
  display: grid;
  grid-row-gap: 8px;
}

.activatorLink {
  color: $red-light;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;

  text-decoration: underline;
  text-underline-offset: 1px;
}
</style>
