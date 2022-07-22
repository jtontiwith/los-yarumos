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
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
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
