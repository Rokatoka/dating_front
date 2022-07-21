<template>
  <div
    :class="$style['list-card']"
  >
    <div>
      <img
        :class="$style['list-card__image']"
        src='~/static/girl_1.png'
      />

      <div :class="$style['list-card__image-pagination']">
        <span
          v-for='page in 4'
          :key='page'
          :class="$style['list-card__image-pagination__item']"
        />
      </div>
    </div>

    <div>
      <span :class="$style['list-card__name']">{{ user.username }}</span>

      <p :class="$style['list-card__description']">
        Люблю кататься на коньках, вкусную пиццу, и романтические фильмы
      </p>
    </div>

    <div :class="$style['list-card__control']">
      <button-component>
        Сообщение
      </button-component>

      <button-component
        :custom-class="$style['list-card__button']"
        @click='handleModalOpen'
      >
        Подробнее
      </button-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'UserCard',
  components: {
    ButtonComponent,
  },
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleModalOpen() {
      this.$emit('onModalOpen')
    }
  }
}
</script>

<style lang='scss' module>
.list-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background-color: $white;
  border-radius: 16px;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
}

.list-card__image {
  width: 100%;
  border-radius: 8px;
}

.list-card__image-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  &__item {
    width: 6px;
    height: 6px;
    background-color: $grey-dark;
    border-radius: 50%;
    cursor: pointer;
  }
}

.list-card__name {
  font-size: 19px;
  line-height: 28px;
}

.list-card__description {
  color: $grey-dark;
}

.list-card__control {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.list-card__button {
  background-color: $grey-dark;

  &:hover {
    background-color: $grey-light;
  }
}
</style>
