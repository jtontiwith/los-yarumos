<template>
  <ul class="py-16">
    <li v-for="(section, i) in sections" :key="i" class="mb-8">
      <h2 class="mb-2 text-2xl font-semibold">{{ section.title }}</h2>
      <p>{{ $t(`info.${section.content}`) }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  layout: 'product',
  data: () => ({
    sections: [
      {
        title: 'About',
        content: 'about'
      },
      {
        title: 'Food',
        content: 'food'
      },
      {
        title: 'Wellness',
        content: 'wellness'
      },
      {
        title: 'Press',
        content: 'press'
      },
    ],
  }),
}
</script>
