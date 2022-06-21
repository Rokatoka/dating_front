<template>
  <transition
    name='modal'
  >
    <div :class='$style.wrapper' @click.self='handleModalClose'>
      <div :class='$style.container'>
        <img src='~/static/girl_1.png' />

        <div :class='$style.info'>
          <div :class='$style.head'>
            <span :class='$style.name'>
              Толкын А.
            </span>

            <span :class='$style.age'>
              28 лет. г. Алматы
            </span>

            <close-icon :class='$style.close' @click.native='handleModalClose' />
          </div>

          <div :class='$style.item'>
            <span>Обо мне</span>

            <div :class="$style['item__box']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>

          <div :class='$style.item'>
            <span>Интересы</span>

            <div :class="[$style['item__box'], $style['item__box__list']]">
              <div :class="$style['list-item']">
                кино
              </div>

              <div :class="$style['list-item']">
                музыка
              </div>

              <div :class="$style['list-item']">
                спорт
              </div>
            </div>
          </div>

          <div :class='$style.control'>
            <button :class='$style.button'>
              Сообщение
            </button>

            <button :class="[$style.button, $style['button--close']]">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '~/icons/CloseIcon.vue';

export default {
  name: 'UserCardModal',
  components: { CloseIcon },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.removeProperty('overflow');
  },
  methods: {
    handleModalClose() {
      this.$emit('onClose');
    }
  },
}
</script>

<style lang='scss' module>
.modal-enter-active,
.modal-leave-active {
  transition: opacity .5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  display: grid;
  grid-template-columns: 284px 324px;
  grid-column-gap: 30px;
  padding: 32px;
  background-color: $white;
  border-radius: 16px;

  img {
    width: 284px;
    height: 472px;
    object-fit: cover;
    border-radius: 8px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.head {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name {
  font-size: 19px;
  line-height: 28px;
}

.age {
  color: $grey-dark;
}

.close {
  position: absolute;
  right: 0;
  cursor: pointer;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: $grey-dark;

  &__box {
    padding: 20px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    border-radius: 12px;

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      grid-row-gap: 10px;
      grid-column-gap: 10px;
    }
  }
}

.control {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.button {
  padding: 10px 32px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: $white;
  background-color: $red-light;
  cursor: pointer;

  &--close {
    background-color: $grey-light;
  }
}

.list-item {
  background: $grey;
  border-radius: 25px;
  padding: 5px 10px;
  color: $black;
  text-align: center;
}
</style>
