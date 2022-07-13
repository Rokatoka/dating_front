<template>
  <div>
    <div :class='$style.filter'>
      <div :class="$style['filter-logo']">
        <img src='~/static/filter.png' />

        <span>Фильтр</span>
      </div>

      <select-component
        v-model='filter.interest'
        label='Интерес'
        :options='MOCK_INTERESTS'
        is-search
      />

      <select-component
        v-model='filter.city'
        label='Город'
        :options='MOCK_CITIES'
        is-search
      />

      <select-component
        v-model='filter.goal'
        label='Цель'
        :options='MOCK_GOALS'
        is-search
      />

      <input-component
        v-model='filter.ageFrom'
        label='Возраст от'
        is-search
        type='number'
      />

      <input-component
        v-model='filter.ageTo'
        label='Возраст до'
        is-search
        type='number'
      />

      <button-component
        :custom-class="$style['filter-button']"
      >
        Поиск
      </button-component>
    </div>

    <div :class='$style.list'>
      <user-card
        v-for='num in 10'
        :key='num'
        @onModalOpen='isUserCardModalVisible = true'
      />
    </div>

    <user-card-modal
      v-if='isUserCardModalVisible'
      @onClose='isUserCardModalVisible = false'
    />

    <subscription-plug-modal
      v-if='subscriptionPlugVisible'
      @onClose='subscriptionPlugVisible = false'
    />

    <div :class="[$style.chat, isChatHidden && $style.hidden]">
      <div
        :class='$style.chatHead'
        @click='isChatHidden = !isChatHidden'
      >
        <div :class='$style.chatImage'>
          <img src='~/static/profile.png' alt='user' />
        </div>

        <span>Чат сообщений</span>

        <chevron-icon />
      </div>

      <template v-for='item in 20'>
        <chat-item
          :key='item'
          @onModalOpen='isUserCardModalVisible = true'
          @onMessengerOpen='messengerVisible = true'
          @onBlockOpen='blockUserModalVisible = true'
        />
      </template>
    </div>

    <messenger
      v-if='messengerVisible'
      :pickup-phrases='phrases'
      @onClose='messengerVisible = false'
    />

    <block-user-modal v-if='blockUserModalVisible' @onClose='blockUserModalVisible = false' />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import {
  MOCK_INTERESTS,
  MOCK_CITIES,
  MOCK_GOALS,
} from '../data';

import UserCard from '~/components/UserCard.vue';
import SelectComponent from '~/components/SelectComponent.vue';
import InputComponent from '~/components/InputComponent.vue';
import UserCardModal from '~/components/UserCardModal.vue';
import SubscriptionPlugModal from '~/components/SubscriptionPlugModal.vue';
import ChatItem from '~/components/chat/ChatItem.vue';
import Messenger from '~/components/Messenger.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';
import BlockUserModal from '~/components/BlockUserModal.vue';
import ChevronIcon from '~/icons/ChevronIcon.vue';

export default {
  name: 'SearchPage',
  components: {
    UserCard,
    SelectComponent,
    InputComponent,
    UserCardModal,
    SubscriptionPlugModal,
    ChatItem,
    Messenger,
    BlockUserModal,
    ChevronIcon,
    ButtonComponent,
  },
  middleware: 'auth',
  data() {
    return {
      isChatHidden: true,
      messengerVisible: false,
      blockUserModalVisible: false,
      isUserCardModalVisible: false,
      subscriptionPlugVisible: true,
      filter: {
        interest: '',
        city: '',
        goal: '',
        ageFrom: 18,
        ageTo: 35
      },
      MOCK_INTERESTS,
      MOCK_CITIES,
      MOCK_GOALS,
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('pickupPhrases/getPhrases');
    } catch (e) {
      error({
        statusCode: 500,
        message: 'something went wrong',
      })
    }
  },
  computed: mapState({
    phrases: (state) => state.pickupPhrases.phrases,
  }),
}
</script>

<style lang='scss' module>
.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
  padding: 44px 40px 32px;
}

.filter-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 24px;
}

.filter-button {
  background-color: $black-hovered;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    background-color: $black-hovered;
  }
}

.list {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, 325px);
  justify-content: center;
}

.chat {
  position: fixed;
  right: 20px;
  bottom: 0;
  width: 324px;
  height: 80vh;
  background-color: $white;
  border-radius: 16.0494px 16.0494px 0 0;
  overflow-y: scroll;
  transition: height .5s ease;

  &.hidden {
    height: 57px;

    svg {
      transform: rotate(180deg);
    }
  }
}

.chatHead {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 12px 38px 16px;
  background: #333333;
  color: $white;
  cursor: pointer;

  svg {
    margin-left: auto;
  }
}

.chatImage {
  position: relative;
  margin-right: 12px;
  &:after {
    content: '';
    position: absolute;
    bottom: 3px;
    right: 0;
    display: block;
    width: 7px;
    height: 7px;
    background-color: #34C759;
    border-radius: 50%;
    border: 1px solid $white;
  }

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
  }
}
</style>
