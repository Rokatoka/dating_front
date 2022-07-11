<template>
  <transition
    appear
    :enter-active-class='$style.transition'
    :leave-active-class='$style.transition'
    :leave-to-class='$style.leave'
    :enter-class='$style.enter'
  >
    <div :class='$style.overlay'>
      <div :class='$style.block'>
        <div :class='$style.head'>
          <div :class='$style.headName'>
            <div :class='$style.headImage'>
              <img src='~/static/profile.png' alt='user'>
            </div>

            <span>Полина</span>
          </div>

          <div :class='$style.headControl'>
            <close-icon @click.native="$emit('onClose')" />
          </div>
        </div>

        <div id='messagesContainer' :class='$style.body'>
          <div
            v-for='(message, index) in messages'
            :key='index+message.text'
            :class='$style.messageItem'
          >
            <div v-if='isNewDay(message.date)' :class='$style.messageNewDate'>
              {{ formatDate(message.date) }}

              <hr style='width: 100%' />
            </div>

            <div :class='[$style.messageWrapper, message.isYours && $style.messageOwnItem]'>
              <div :class='$style.messageImage'>
                <img src='~/static/profile.png' alt='user'>
              </div>

              <div :class='$style.messageBox'>
                {{ message.text }}
              </div>

              <div :class='$style.messageTime'>
                {{ getTime(message.date) }}
              </div>
            </div>
          </div>

          <div :class='$style.messagePickupPhrases'>
            <div v-for='phrase in pickupPhrases' :key='phrase'>
              <div
                :class='$style.phrase'
                @click='writePhrase(phrase.attributes.title)'
              >
                <write-icon />

                {{ phrase.attributes.title }}
              </div>
            </div>
          </div>
        </div>

        <div :class='$style.message'>
          <input
            v-model='messageText'
            placeholder='Написать сообщение...'
            @keyup.enter='addMessage'
          />
        </div>

        <div :class='$style.control'>
          <div :class='$style.controlItems'>
            <add-image-icon />

            <add-link-icon />

            <add-emoji-icon />
          </div>

          <button-component
            :custom-class='$style.btn'
            :disabled='!messageText'
            @click='addMessage'
          >
            Отправить
          </button-component>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import CloseIcon from '~/icons/CloseIcon.vue';
import AddImageIcon from '~/icons/AddImageIcon.vue';
import AddEmojiIcon from '~/icons/AddEmojiIcon.vue';
import AddLinkIcon from '~/icons/AddLinkIcon.vue';
import WriteIcon from '~/icons/WriteIcon.vue';

export default {
  name: 'MessengerBlock',
  components: {
    CloseIcon,
    AddImageIcon,
    AddEmojiIcon,
    AddLinkIcon,
    WriteIcon,
    ButtonComponent,
  },
  props: {
    pickupPhrases: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      messageText: '',
      messages: [
        {
          text: 'An example with a lot of text. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum.',
          date: '2018-12-19 09:26:03',
          isYours: false,
        },
        {
          text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.',
          date: '2018-12-19 10:32:03',
          isYours: true,
        },
      ],
    }
  },
  methods: {
    getTime(date) {
      const newDate = new Date(date);
      return `${newDate.getHours()}:${newDate.getMinutes()}`
    },

    addMessage() {
      const newMessage = {
        text: this.messageText,
        date: new Date(),
        isYours: true,
      };

      this.messages.push(newMessage);

      this.messageText = '';

      setTimeout(() => {
        const element = document.getElementById('messagesContainer');
        element.scrollTop = element.scrollHeight;
      }, 0);
    },

    writePhrase(phrase) {
      this.messageText = phrase;
      this.addMessage();
    },

    isNewDay(date) {
      const today = new Date();
      const newDate = new Date(date);

      return today.getDate() !== newDate.getDate();
    },

    padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    },

    formatDate(date) {
      const d = new Date(date);
      return [
        this.padTo2Digits(d.getDate()),
        this.padTo2Digits(d.getMonth() + 1),
        d.getFullYear(),
      ].join('.');
    }
  }
}
</script>

<style lang='scss' module>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.block {
  position: absolute;
  bottom: 0;
  right: 30vw;
  width: 500px;
  background-color: $white;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #C4C4C4;
}

.headName {
  display: flex;
  gap: 20px;
  align-items: center;
  font-weight: 600;
}

.headImage {
  position: relative;

  img {
    border-radius: 50%;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background-color: #34C759;
    border-radius: 50%;
  }
}

.headControl {
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    cursor: pointer;
  }
}

.body {
  display: grid;
  grid-row-gap: 20px;
  grid-auto-rows: min-content;
  height: 400px;
  padding: 20px 24px;
  overflow-y: scroll;
}

.messageItem {
  display: grid;
  grid-row-gap: 12px;
  height: fit-content;
}

.messageNewDate {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #9E9E9E;
}

.messageWrapper {
  display: flex;
  gap: 12px;

  &.messageOwnItem {
    flex-direction: row-reverse;
  }
}

.messageBox {
  position: relative;
  padding: 16px;
  background: #E2F9E8;
  border-radius: 10px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 20px;
    left: -5px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: #E2F9E8;
  }
}

.messageOwnItem .messageBox {
  background: #F1F1F1;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 20px;
    right: -5px;
    left: unset;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    background: #F1F1F1;
  }
}

.messageImage {
  position: relative;
  height: fit-content;

  img {
    border-radius: 50%;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background-color: #34C759;
    border-radius: 50%;
  }
}

.messageTime {
  margin-top: auto;
  color: #9E9E9E;
}

.messagePickupPhrases {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;

  .phrase {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #179BD7;
    border-radius: 8px;
    color: rgba(23, 155, 215, 1);
    cursor: pointer;
  }
}

.message {
  input {
    width: 100%;
    padding: 8px 20px 100px;
    outline: none;
    border: none;
    border-top: 1px solid;
  }
}

.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F7F8F9;
  padding: 16px 22px;

  svg {
    cursor: pointer;
  }
}

.controlItems {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  padding: 4px 24px;
  background: #333333;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 27px;

  &:hover {
    background-color: $black-hovered;
  }

  &:disabled {
    opacity: .5;
  }
}

.transition .block {
  transition: transform .5s ease;
}

.transition.overlay {
  transition: background-color .5s ease;
}

.enter .block,
.leave .block {
  transform: translateY(100%);
}

.enter.overlay,
.leave.overlay {
  background-color: transparent;
}
</style>
