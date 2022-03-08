<template>
  <div>
    <AppLangToggle />
    <header class="my-4">
      <h1 class="text-2xl font-semibold uppercase">
        {{ $t('treehouse_title') }}
      </h1>
    </header>
    <AppReviewLink />
    <AppGallery />
    <section class="grid grid-cols-1 pt-6 md:grid-cols-2">
      <ProductDetails />
      <div>checkout here</div>
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
}
</script>
