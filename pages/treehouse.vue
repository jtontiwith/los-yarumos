<template>
  <div>
    <span id="gallery"></span>
    <header class="my-4">
      <h1 class="text-2xl font-semibold uppercase">
        {{ $t('treehouse_title') }}
      </h1>
    </header>
    <AppReviewLink />
    <section class="relative">
      <AppModal v-if="carousel && vpWidth < 600">
        <AppCarousel />
        <AppBaseButton text="Back" @click.native="toggleCarousel" />
      </AppModal>
      <AppCarousel v-else-if="carousel" />
      <AppGallery v-else />
      <div
        class="absolute flex items-center py-1 pl-4 pr-6 text-sm bg-white border border-black rounded-md cursor-pointer bottom-4 left-4"
        @click="toggleCarousel"
      >
        <AppIcon width="25" height="25"><Photo /></AppIcon>
        <p class="ml-3 font-semibold">Show all photos</p>
      </div>
    </section>
    <section class="grid grid-cols-1 pt-6 md:grid-cols-5 gap-x-6">
      <div class="col-span-3"><ProductDetails /></div>
      <div class="col-span-3 mt-4 md:col-span-2">
        <AppCTA />
      </div>
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <section id="reviews">
      <AppReviewSummary />
      <AppReviews />
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <br />
    <span id="map"></span>
    <AppMap />
    <br />
    <div class="w-full border-t border-gray-300"></div>
    <AppHostBio />
    <br />
    <div class="w-full border-t border-gray-300"></div>
    <AppHouseRules />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { Photo } from '../components/icons'
export default {
  name: 'Treehouse',
  components: {
    Photo,
  },
  layout: 'product',
  data: () => ({
    carousel: false,
    vpWidth: null,
  }),
  mounted() {
    this.vpWidth = window.innerWidth
  },
  methods: {
    toggleCarousel() {
      this.carousel = !this.carousel
      // if (this.carousel) document.body.classList.add('fixed')
      // if (!this.carousel) document.body.classList.remove('fixed')
    },
  },
}
</script>
