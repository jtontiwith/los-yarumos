<template>
  <div class="grid grid-cols-1 md:gap-x-32 md:grid-cols-2">
    <div v-for="(r, i) in reviews" :key="i" class="mb-8 md:mb-12">
      <AppAvatar :path="r.img" :name="r.name" :date="r.date" />
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
        name: 'Josh',
        date: 'June 2022',
        img: '/review_photos/Josh_Avatar.jpg',
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
      {
        name: 'Chris',
        date: 'May 2022',
        img: '/review_photos/Chris_Avatar.jpg',
        blurb:
          "I had a great time in the treehouse, it's a beautiful structure set in a stunning forrest. The elevated height makes you really feel like you're living up with the trees. The two balconies give you great spaces to enjoy outside and the bedroom is a very large area to enjoy as the night draws in. This is a lovely place to get away from the city and relax, and has many walks in the area that you can explore.",
      },
      {
        name: 'Some Body',
        date: 'February 2022',
        img: null,
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
      {
        name: 'Some Body',
        date: 'December 2021',
        img: null,
        blurb:
          'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      },
    ],
  }),
}
</script>
