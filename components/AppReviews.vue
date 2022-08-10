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
        blurb: `I was fortunate to stay in the first Santa Elena treehouse for over a week. Despite visiting Medellin, Cartagena, and Jardin, my time in the treehouse was the highlight of my trip. I can’t wait to get back to that bedroom in the trees. I woke up each morning to birds, chipmunks, and butterflies flying around the 360 degrees of windows in my bedroom. On my final morning, I was visited by a toucan on my balcony. 
                By day, I explored the nearly 100km of hiking trails. By night I set the mood by taking an hour long bath in the claw-foot tub. As a large man, I have trouble finding a tub that fits my body. The instant hot water mixed with bath salts, moved my muscles and mind to full relaxation mode. 
                This home is luxury living: wifi; electrical outlets a plenty; heaters; full kitchen; fresh garden vegetables and eggs; and a dreamy queen size bed.
                I can’t wait to get back. Thank you Jon and Adri for being attentive hosts!`,
      },
      {
        name: 'Chris',
        date: 'May 2022',
        img: '/review_photos/Chris_Avatar.jpg',
        blurb:
          "I had a great time in the treehouse, it's a beautiful structure set in a stunning forrest. The elevated height makes you really feel like you're living up with the trees. The two balconies give you great spaces to enjoy outside and the bedroom is a very large area to enjoy as the night draws in. This is a lovely place to get away from the city and relax, and has many walks in the area that you can explore.",
      },
       {
        name: 'Liz',
        date: 'Aug 2022',
        img: '/review_photos/Liz_Avatar.png',
        blurb: "No puedo esperar para volver. Hasta el momento es el lugar más especial en el que he estado en Santa Elena. Despertarte en medio del bosque, poder desconectarme y al mismo tiempo tener el espacio perfecto para trabajar, es maravilloso. Además poder cosechar verdura fresca para cocinar mi propia comida y tener todo lo necesario para hacerlo, es increíble. Es toda una experiencia, una verdadera casa en el árbol, y con la calefacción perfecta. Sin dejar de lado la hospitalidad de Adriana la persona encargada. Volvería sin duda."
      },
      // {
      //   name: 'Some Body',
      //   date: 'February 2022',
      //   img: null,
      //   blurb:
      //     'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      // },
      // {
      //   name: 'Some Body',
      //   date: 'December 2021',
      //   img: null,
      //   blurb:
      //     'This place was an absolute dream. Very romantic area in the middle of the forest. Fast Wifi. Great hosts. The jacuzzi was a perfect way to end the day. Loved it.',
      // },
    ],
  }),
}
</script>
