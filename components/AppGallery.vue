<template>
  <div class="grid grid-rows-1">
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div class="mb-2 max-h-80 max-w-130 md:mb-0">
        <nuxt-img
          class="object-cover w-full md:rounded-l-xl"
          style="height: 328px"
          src="/treehouse_far_view.jpg"
        />
      </div>
      <div class="grid grid-cols-2 gap-2 md:max-w-123">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="cursor-pointer md:max-w-124 md:max-h-125"
        >
          <nuxt-img
            class="object-cover w-full h-full"
            :class="{
              'md:rounded-tr-xl': i === 1,
              'md:rounded-br-xl': i === 3,
            }"
            :src="img"
            @click="switchImg(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGallery',
  data: () => ({
    largeImg: '/treehouse_far_view.jpg',
    images: ['/bathtub.jpg', '/bedroom.jpg', '/kitchen.jpg', '/front_deck.jpg'],
  }),
  methods: {
    switchImg(idx) {
      const imgToSwitch = this.largeImg
      this.largeImg = this.images[idx]
      this.images[idx] = imgToSwitch
    },
  },
}
</script>
