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
      <span :class="$style['list-card__name']">Толкын А.</span>

      <p :class="$style['list-card__description']">
        Люблю кататься на коньках, вкусную пиццу, и романтические фильмы
      </p>
    </div>

    <div :class="$style['list-card__control']">
      <button :class="[$style['list-card__button'], $style['list-card__button--red']]">
        Сообщение
      </button>

      <button :class="$style['list-card__button']" @click='handleModalOpen'>
        Подробнее
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
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
  gap: 16px;
  padding: 24px;
  background-color: $white;
  border-radius: 16px;
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
  padding: 10px 24px;
  color: $white;
  border-radius: 8px;
  border: none;
  background-color: $grey-dark;
  cursor: pointer;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    background-color: $grey-light;
  }

  &--red {
    background-color: $red-light;

    &:hover {
      background-color: $red-hovered;
    }
  }
}
</style>
