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
      </nuxt-link>
    </nav>

    <div :class='$style.control'>
      <select :class='$style.select'>
        <option
          v-for='lang in LANG_OPTIONS'
          :key='lang'
          :value='lang.value'
        >
          {{ lang.label }}
        </option>
      </select>

      <button-component :custom-class='$style.button'>
        Выйти
      </button-component>
    </div>
  </div>
</template>

<script>
import { LANG_OPTIONS } from '../data';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'MainHeader',
  components: {
    ButtonComponent,
  },
  data() {
    return {
      LANG_OPTIONS,
      navLinks: [
        {
          name: 'Профиль',
          path: '/profile'
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
  background: $black;

  &:hover {
    background-color: $black-hovered;
  }
}
</style>
