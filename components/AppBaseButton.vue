<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm whitespace-nowrap md:w-min hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'AppBaseButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
