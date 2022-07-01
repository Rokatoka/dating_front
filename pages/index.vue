<template>
  <main :class='$style.main'>
    <section :class='$style.section'>
      <span :class='$style.title'>
        Qupidon
      </span>

      <div>
        <span :class='$style.descriptionTitle'>
          Найди свою любовь
        </span>

        <p :class='$style.descriptionText'>
          Уникальная платформа Qupidon, которая помогает соединять сердца
        </p>
      </div>

      <button-component
        :custom-class='$style.button'
        @click='showRegistrationModal = true'
      >
        Регистрация
      </button-component>
    </section>

    <footer :class='$style.footer'>
      <div :class='$style.statistics'>
        <div :class='$style.statisticsBlock'>
          <span :class='[$style.statisticsItem, $style.title]'>
            Пользователи
          </span>

          <span :class='[$style.statisticsItem, $style.data]'>
            120 ч.
          </span>

          <span :class='[$style.statisticsItem, $style.description]'>
            новых пользователей каждый день
          </span>
        </div>

        <div :class='$style.statisticsBlock'>
          <span :class='[$style.statisticsItem, $style.title]'>
            Сердца
          </span>

          <span :class='[$style.statisticsItem, $style.data]'>
            42
          </span>

          <span :class='[$style.statisticsItem, $style.description]'>
            пар нашедних свою любовь
          </span>
        </div>
      </div>
    </footer>

    <RegistrationModal
      v-if='showRegistrationModal'
      @onClose='showRegistrationModal = false'
    />
  </main>
</template>

<script>
import RegistrationModal from '~/components/RegistrationModal.vue';
import ButtonComponent from '~/components/ButtonComponent.vue';

export default {
  name: 'IndexPage',
  components: {
    RegistrationModal,
    ButtonComponent,
  },
  layout: 'landing',
  data() {
    return {
      showRegistrationModal: false,
    }
  },
}
</script>

<style lang='scss' module>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 110px;
  max-width: 630px;
  color: $white;
}

.title {
  @extend %typography-optima;
}

.descriptionTitle {
  @extend %typography-mont-black;

  font-size: 56px;
  line-height: 64px;
}

.descriptionText {
  @extend %typography-mont-thin;

  font-size: 24px;
  line-height: 31px;
}

.button {
  @extend %typography-mont-thin;

  padding: 12px 52px;
  background-color: $black;
  border-radius: 40px;
  font-size: 28px;
  line-height: 36px;

  &:hover {
    background-color: $black-hovered;
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: $white;
}

.statistics {
  display: flex;
  gap: 40px;
  padding: 40px 75px;
  background: linear-gradient(159.03deg, #484848 -68.69%, rgba(136, 136, 136, 0) 103.75%);
  backdrop-filter: blur(26.3384px);
}

.statisticsBlock {
  display: grid;
  grid-row-gap: 10px;
}

.statisticsItem {
  @extend %typography-gotham-bold;

  max-width: 150px;

  &.title {
    font-size: 14px;
    line-height: 17px;
  }

  &.data {
    font-size: 36px;
    line-height: 43px;
  }

  &.description {
    @extend %typography-gotham-medium;

    font-size: 14px;
    line-height: 17px;
  }
}
</style>
