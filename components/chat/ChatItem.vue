<template>
  <div
    :class='$style.chatItem'
    @click="$emit('onMessengerOpen')"
  >
    <div :class='$style.chatItemWrapper'>
      <div :class='$style.chatItemInfo'>
        <div :class='[$style.imageWrapper, $style.offline]'>
          <span :class='$style.newMessage' />

          <img :class='$style.infoImg' src='~/static/profile.png' alt='user' />
        </div>

        <div :class='$style.chatItemName'>
          <span :class='$style.profileName'>Дарина М.</span>

          <span :class='$style.profileInfo'>28 лет. г. Алматы</span>
        </div>
      </div>

      <div :class='$style.chatItemControl'>
        <more-icon @click.stop.native="$emit('onModalOpen')" />

        <bell-icon
          :class='[$style.chatItemDisable, $style.disabled]'
          @click.stop.native="$emit('onBlockOpen')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BellIcon from '~/icons/BellIcon.vue';
import MoreIcon from '~/icons/MoreIcon.vue';

export default {
  name: 'ChatItem',
  components: {
    BellIcon,
    MoreIcon,
  }
}
</script>

<style lang='scss' module>
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

.imageWrapper.offline {
  &:after {
    background-color: $grey-light;
  }
}

.newMessage {
  position: absolute;
  left: -12px;
  top: 10px;
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  background-color: $red-light;
  color: white;
  border-radius: 50%;
}

.infoImg {
  border-radius: 50%;
}

.profileName {
  font-weight: 600;
}

.profileInfo {
  color: $grey-light;
}
</style>
