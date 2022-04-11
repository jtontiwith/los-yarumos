<template>
  <div>
    <header class="my-4">
      <h1 class="text-2xl font-semibold uppercase">
        {{ $t('treehouse_title') }}
      </h1>
    </header>
    <AppReviewLink />
    <!--<AppGallery />-->
    <section class="grid grid-cols-2">
      <div>
        <nuxt-img
          class="object-cover w-full md:rounded-l-xl"
          style="height: 486px"
          src="/farview_small.jpg"
        />
      </div>
      <div class="flex flex-wrap pl-2">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="w-1/2"
          :class="{ 'pr-2 pb-2': i === 0, 'pb-2': i === 1, 'pr-2': i === 2 }"
        >
          <nuxt-img
            class="object-cover w-full h-full"
            :class="{
              'md:rounded-tr-xl': i === 1,
              'md:rounded-br-xl': i === 3,
            }"
            :src="img"
          />
        </div>
      </div>
    </section>
    <section class="grid grid-cols-1 pt-6 md:grid-cols-2">
      <ProductDetails />
      <div class="flex justify-end">
        <AppCTA />
      </div>
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <section>
      <AppReviewSummary />
      <AppReviews />
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <br />
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
export default {
  name: 'Treehouse',
  layout: 'product',
  data: () => ({
    images: [
      '/bedroom_small.jpg',
      '/bathroom_small.jpg',
      '/kitchen_small.jpg',
      '/front_deck_small.jpg',
    ],
  }),
}
</script>
