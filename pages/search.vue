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
        :options='interestOptions'
        is-search
      />

      <select-component
        v-model='filter.city'
        label='Город'
        :options='interestOptions'
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

      <button :class="$style['filter-button']">
        Поиск
      </button>
    </div>

    <div :class='$style.list'>
      <user-card
        v-for='num in 10'
        :key='num'
        @onModalOpen='handleModalOpen'
      />
    </div>

    <user-card-modal
      v-if='isUserCardModalVisible'
      @onClose='handleModalClose'
    />

    <subscription-plug-modal
      v-if='subscriptionPlugVisible'
      @onClose='subscriptionPlugVisible = false'
    />
  </div>
</template>

<script>
import UserCard from '~/components/UserCard.vue';
import SelectComponent from '~/components/SelectComponent.vue';
import InputComponent from '~/components/InputComponent.vue';
import UserCardModal from '~/components/UserCardModal.vue';
import SubscriptionPlugModal from '~/components/SubscriptionPlugModal.vue'

export default {
  name: 'SearchPage',
  components: {
    UserCard,
    SelectComponent,
    InputComponent,
    UserCardModal,
    SubscriptionPlugModal,
  },
  data() {
    return {
      isUserCardModalVisible: false,
      subscriptionPlugVisible: true,
      filter: {
        interest: '',
        city: '',
        ageFrom: 18,
        ageTo: 35
      },
      interestOptions: [
        {
          name: 'Музыка',
          value: 'music'
        },
        {
          name: 'Кино',
          value: 'movies'
        },
        {
          name: 'Книги',
          value: 'books'
        },
      ],
      citiesOptions: [
        {
          name: 'Нур-султан',
          value: 'nur-sultan'
        },
        {
          name: 'Алматы',
          value: 'almaty'
        },
      ],
    }
  },
  methods: {
    handleModalOpen() {
      this.isUserCardModalVisible = true;
    },
    handleModalClose() {
      this.isUserCardModalVisible = false;
    },
  }
}
</script>

<style lang='scss' module>
.filter {
  display: flex;
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
  padding: 8px 40px;
  background-color: $black-hovered;
  color: $white;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.list {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, 325px);
  justify-content: center;
}
</style>
