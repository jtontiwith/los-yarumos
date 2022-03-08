<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :stroke="iconColor"
    :width="width"
    :height="height"
    fill="none"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
    class="h-8 w-8"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
    fill: {
      type: String,
      default: 'none',
    },
  },
}
</script>
