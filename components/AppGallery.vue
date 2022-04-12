<template>
  <section class="grid lg:grid-cols-2">
    <div>
      <nuxt-img
        class="object-cover w-full h-full rounded lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
        src="/treehouse_far_view_p.jpg"
      />
    </div>
    <div class="flex flex-wrap pt-2 lg:pt-0 lg:pl-2">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="w-1/2"
        :class="{ 'pr-2 pb-2': i === 0, 'pb-2': i === 1, 'pr-2': i === 2 }"
      >
        <nuxt-img
          class="object-cover w-full h-full rounded"
          :class="{
            'lg:rounded-none': i === 0 || i === 2,
            'lg:rounded-tr-xl lg:rounded-l-none lg:rounded-br-none': i === 1,
            'lg:rounded-br-xl lg:rounded-l-none lg:rounded-tr-none': i === 3,
          }"
          :src="img.path"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    images: [
      { path: '/bedroom_p.jpg', loaded: true },
      { path: '/bathroom_p.jpg', loaded: false },
      { path: '/kitchen_p.jpg', loaded: false },
      { path: '/balcony_p.jpg', loaded: false },
    ],
    imgIsLoaded: false,
  }),
  /* methods: {
    isLoaded() {
      this.imgIsLoaded = true
    },
    smallLoaded(idx) {
      this.images[idx].loaded = true
    },
  }, */
}
</script>
