<template>
  <div class="mb-1">
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="true"
      pagination-color="#16a34a"
      pagination-position="bottom-overlay"
    >
      <template v-for="(img, i) in images">
        <slide :key="i">
          <nuxt-img
            class="object-cover w-full rounded rounded-lg lg:h-112 lg:mb-0"
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
      { path: '/house_side_view.jpg', loaded: false },
      { path: '/house_underneath_view.jpg', loaded: false },
      { path: '/treehouse_far_view_p.jpg', loaded: false },
      { path: '/house_side_view.jpg', loaded: false },
      { path: '/bedroom_facing_bed.jpg', loaded: false },
      { path: '/bedroom_with_tree.jpg', loaded: false },
      { path: '/rocking_chair.jpg', loaded: false },
      { path: '/kitchen.jpg', loaded: false },
      { path: '/kitchen_with_utensils.jpg', loaded: false },
    ],
  }),
}
</script>
