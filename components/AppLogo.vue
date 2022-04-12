<template>
  <nuxt-link class="flex items-center flex-shrink-0" :class="styles" to="/">
    <nuxt-img class="hidden w-auto h-16 rounded-lg lg:block" src="/logo.jpg" />
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    position: {
      default: 'static',
      type: String,
    },
    top: {
      default: null,
      type: String,
    },
    left: {
      default: null,
      type: String,
    },
    padding: {
      default: null,
      type: String,
    },
  },
  computed: {
    styles() {
      return `${this.position} ${this.top} ${this.left} ${this.padding}`
    },
  },
}
</script>
