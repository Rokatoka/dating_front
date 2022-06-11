<template>
  <main class='landing-main'>
    <section class='landing-section'>
      <span class='landing-section__title'>
        Qupidon
      </span>

      <div class='landing-section__description'>
        <span class='landing-section__description__title'>
          Найди свою любовь
        </span>

        <p class='landing-section__description__text'>
          Уникальная платформа Qupidon, которая помогает соединять сердца
        </p>
      </div>

      <button class='landing-section__button'>
        Регистрация
      </button>
    </section>

    <footer class='landing-footer'>
      <div class='landing-footer__carousel'>
        <div
          v-for='index in 4'
          :key='index'
          class='landing-footer__carousel__item'
          :class="{ 'landing-footer__carousel__item--active': index === currentSlide }"
          @click='changeSlide(index)'
        />
      </div>

      <div class='landing-footer__statistics'>
        <div class='landing-footer__statistics__block'>
          <span class='landing-footer__statistics__item landing-footer__statistics__item--title'>
            Пользователи
          </span>

          <span class='landing-footer__statistics__item landing-footer__statistics__item--data'>
            120 ч.
          </span>

          <span class='landing-footer__statistics__item landing-footer__statistics__item--description'>
            новых пользователей каждый день
          </span>
        </div>

        <div class='landing-footer__statistics__block'>
          <span class='landing-footer__statistics__item landing-footer__statistics__item--title'>
            Сердца
          </span>

          <span class='landing-footer__statistics__item landing-footer__statistics__item--data'>
            42
          </span>

          <span class='landing-footer__statistics__item landing-footer__statistics__item--description'>
            пар нашедних свою любовь
          </span>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'landing',
  data() {
    return {
      currentSlide: 1
    }
  },
  created() {
    setInterval(() => {
      const index = this.currentSlide < 4 ? this.currentSlide + 1 : 1;

      this.changeSlide(index);
    }, 10000)
  },
  methods: {
    changeSlide(index) {
      this.currentSlide = index;
      this.$nuxt.$emit('onSlideChange', this.currentSlide)
    }
  },
}
</script>

<style lang='scss'>
.landing-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
}

.landing-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 110px;
  max-width: 630px;
  color: $white;
}

.landing-section__title {
  @extend %typography-optima;
}

.landing-section__description {
  &__title {
    @extend %typography-mont-black;

    font-size: 56px;
    line-height: 64px;
  }

  &__text {
    @extend %typography-mont-thin;

    font-size: 24px;
    line-height: 31px;
  }
}

.landing-section__button {
  @extend %typography-mont-thin;

  width: 296px;
  padding: 12px 52px;
  background-color: $black;
  color: $white;
  border-radius: 40px;
  border: none;
  font-size: 28px;
  line-height: 36px;
  cursor: pointer;
  transition: background-color $transition-duration;

  &:hover {
    background-color: $black-hovered;
  }
}

.landing-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $white;
}

.landing-footer__carousel {
  display: flex;
  gap: 10px;
  padding: 0 110px;
  align-items: center;

  &__item {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid $white;
    background-color: transparent;
    cursor: pointer;

    &--active {
      background-color: $white;
    }
  }
}

.landing-footer__statistics {
  display: flex;
  gap: 40px;
  padding: 40px 75px;
  background: linear-gradient(159.03deg, #484848 -68.69%, rgba(136, 136, 136, 0) 103.75%);
  backdrop-filter: blur(26.3384px);
}

.landing-footer__statistics__block {
  display: grid;
  grid-row-gap: 10px;
}

.landing-footer__statistics__item {
  @extend %typography-gotham-bold;

  max-width: 150px;

  &--title {
    font-size: 14px;
    line-height: 17px;
  }

  &--data {
    font-size: 36px;
    line-height: 43px;
  }

  &--description {
    @extend %typography-gotham-medium;

    font-size: 14px;
    line-height: 17px;
  }
}
</style>
