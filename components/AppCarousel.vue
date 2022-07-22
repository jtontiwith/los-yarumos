<template>
  <div>
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="false"
      pagination-position="bottom-overlay"
      pagination-color="#16a34a"
    >
      <template v-for="(img, i) in images">
        <slide :key="i">
          <nuxt-img
            class="object-cover w-full rounded rounded-lg h-112 lg:mb-0"
            :src="img.path"
          />
        </slide>
      </template>
    </carousel>
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
// TODO: check how this works in production because there's no SSR support
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    images: [
      { path: '/treehouse_far_view_p.jpg', loaded: false },
      { path: '/bedroom_p.jpg', loaded: false },
      { path: '/bathroom_p.jpg', loaded: false },
      { path: '/kitchen_p.jpg', loaded: false },
      { path: '/balcony_p.jpg', loaded: false },
    ],
  }),
}
</script>
