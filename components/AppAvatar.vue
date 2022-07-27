<template>
  <a href="#" class="flex-shrink-0 block group">
    <div class="flex items-center">
      <div>
        <img
          v-if="imgSrc"
          class="inline-block rounded-full h-14 w-14"
          :src="imgSrc"
          alt=""
        />
        <span
          v-else
          class="inline-block overflow-hidden bg-gray-100 rounded-full h-14 w-14"
        >
          <svg
            class="w-full h-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </div>
      <div class="ml-3">
        <p class="text-lg font-medium text-gray-700 group-hover:text-gray-900">
          {{ name }}
        </p>
        <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">
          {{ date }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AppAvatar',
  props: {
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgSrc() {
      if (this.path) return this.path
      return null
    },
  },
}
</script>
