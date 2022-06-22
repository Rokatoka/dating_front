<template>
  <div :class='$style.header'>
    <div :class='$style.logo' @click='handleRedirect'>
      <img :class='$style.icon' src='~/static/logo.svg' alt='qupidon' />

      <span>Qupidon</span>
    </div>

    <nav :class='$style.links'>
      <nuxt-link
        v-for='link in navLinks'
        :key='link.name'
        :class="$style['link-item']"
        :to='link.path'
      >
        {{ link.name }}

        <span
          v-if="link.name === 'Сообщения'"
          :class="$style['link-counter']"
        >
          5
        </span>
      </nuxt-link>
    </nav>

    <div :class='$style.control'>
      <select :class='$style.select'>
        <option>Русский (RU)</option>
        <option>Казахский (KZ)</option>
      </select>

      <button :class='$style.button'>
        Выйти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      navLinks: [
        {
          name: 'Профиль',
          path: '/profile'
        },
        {
          name: 'Сообщения',
          path: '/messages'
        },
        {
          name: 'Поиск',
          path: '/search'
        },
        {
          name: 'FAQ',
          path: '/faq'
        },
      ],
    }
  },
  methods: {
    handleRedirect() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang='scss' module>
.header {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 16px 40px;
  background: $white;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.logo {
  @extend %typography-optima;

  display: flex;
  align-items: center;
  font-size: 32px;
  line-height: 39px;
  cursor: pointer;
}

.icon {
  margin-right: 40px;
}

.links {
  display: flex;
  gap: 26px;
  margin-left: 112px;
}

.link-item {
  text-decoration: none;
  color: $black;

  &:hover {
    color: $black-hovered;
  }
}

.link-counter {
  display: inline-block;
  text-align: center;
  width: 20px;
  height: 20px;
  margin-left: 12px;
  background-color: $red-light;
  color: white;
  border-radius: 50%;
}

.control {
  margin-left: auto;
}

.select {
  background: transparent;
  border: none;
  color: $black;
  outline: none;
}

.button {
  margin-left: 24px;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  color: $white;
  background: $black;
  cursor: pointer;

  &:hover {
    background-color: $black-hovered;
  }
}
</style>
