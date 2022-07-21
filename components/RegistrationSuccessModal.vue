<template>
  <transition
    name='success'
    :enter-class='$style.enter'
    :leave-to-class='$style.leaveTo'
    :leave-active-class='$style.transition'
    :enter-active-class='$style.transition'
  >
    <div :class='$style.wrapper' @click.self="$emit('onClose')">
      <div :class='$style.success'>
        <span :class='$style.title'>{{ isEdit ? 'Спасибо!' : 'Регистрация завершена!' }}</span>

        <p>
          {{ isEdit ? 'Ваши данные успешно изменены ' : 'Ваша заявка отправлена администратору.Ответ придет вам на почту.Спасибо!' }}
        </p>

        <div :class='$style.control'>
          <button-component
            :custom-class='$style.button'
            @click="$emit('onClose')"
          >
            Ок
          </button-component>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
  name: 'RegistrationSuccessModal',
  components: {
    ButtonComponent,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang='scss' module>
.transition {
  transition: opacity .5s ease;
}

.enter,
.leaveTo {
  opacity: 0;
}

.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.success {
  padding: 28px 44px;
  width: 340px;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
}

.title {
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
}

.control {
  display: flex;
  justify-content: center;
}

.button {
  width: 100%;
}

.grey {
  background-color: $grey-dark;

  &:hover {
    background-color: $grey-light;
  }
}
</style>
