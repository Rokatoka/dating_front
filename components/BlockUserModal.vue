<template>
  <transition
    name='block'
    :enter-class='$style.enter'
    :leave-to-class='$style.leaveTo'
    :leave-active-class='$style.transition'
    :enter-active-class='$style.transition'
  >
    <div :class='$style.wrapper' @click.self="$emit('onClose')">
      <div :class='$style.block'>
        <span :class='$style.title'>Блокировка сообщений!</span>

        <p>Уважаемый пользователь, Вы блокируете все входящие сообщения от данного человека, Вам не смогут писать и отправлять сообщения.</p>

        <div :class='$style.control'>
          <button :class='$style.button'>
            Блокировть
          </button>

          <button
            :class='[$style.button, $style.grey]'
            @click="$emit('onClose')"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BlockUserModal',
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

.block {
  padding: 28px 44px;
  width: 304px;
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
  justify-content: space-between;
}

.button {
  padding: 16px 20px;
  border-radius: 12px;
  background-color: $red-light;
  color: $white;
  border: none;
  cursor: pointer;
}

.button.grey {
  background-color: $grey-light;
}
</style>
