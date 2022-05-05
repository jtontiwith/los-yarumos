<template>
  <div>
    <span id="gallery"></span>
    <header class="my-4">
      <h1 class="text-2xl font-semibold uppercase">
        {{ $t('treehouse_title') }}
      </h1>
    </header>
    <AppReviewLink />
    <AppGallery />
    <section class="grid grid-cols-1 pt-6 md:grid-cols-5 gap-x-6">
      <div class="col-span-3"><ProductDetails /></div>
      <div class="col-span-2 px-6">
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
export default {
  name: 'Treehouse',
  layout: 'product',
}
</script>
