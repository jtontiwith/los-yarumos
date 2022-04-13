<template>
  <span>
    <a
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-center bg-white bg-opacity-25 rounded-md shadow-sm whitespace-nowrap md:w-min focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="styles"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
      >{{ locale.name }}
    </a>
  </span>
</template>

<script>
export default {
  name: 'AppLangToggle',
  props: {
    styles: {
      type: String,
      default: 'text-gray-700 border border-gray-300 hover:bg-gray-50',
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
