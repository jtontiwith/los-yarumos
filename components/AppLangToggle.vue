<template>
  <span>
    <a
      v-for="locale in availableLocales"
      :key="locale.code"
      href="#"
      class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm whitespace-nowrap md:w-min hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click.prevent.stop="$i18n.setLocale(locale.code)"
      >{{ locale.name }}
    </a>
  </span>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
