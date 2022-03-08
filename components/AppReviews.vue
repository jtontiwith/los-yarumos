<template>
  <div class="grid grid-cols-1 md:gap-x-32 md:grid-cols-2">
    <div v-for="(r, i) in reviews" :key="i" class="mb-8 md:mb-12">
      <AppAvatar :name="r.name" :date="r.date" />
      <p class="pt-6">{{ r.blurb }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppReviews',
  data: () => ({
    reviews: [
      {
        name: 'Janis Jones',
        date: 'December 2022',
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
      {
        name: 'Janis Jones',
        date: 'December 2022',
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
      {
        name: 'Janis Jones',
        date: 'December 2022',
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
      {
        name: 'Janis Jones',
        date: 'December 2022',
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
    ],
  }),
}
</script>
