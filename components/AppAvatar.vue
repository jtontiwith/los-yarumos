<template>
  <a href="#" class="flex-shrink-0 group block">
    <div class="flex items-center">
      <div>
        <img
          class="inline-block h-14 w-14 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
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
  },
}
</script>
