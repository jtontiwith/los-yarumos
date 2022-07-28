<template>
  <div class="grid grid-cols-1 py-4 mt-6 md:grid-cols-2">
    <div>
      <AppAvatar
        path="/treehouse_far_view_p.jpg"
        name="Los Yarumos"
        date="hosting since 2018"
      />
      <div class="flex items-center py-4 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
        <span class="mr-2">38 reviews</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ $t('bio.host') }}</span>
      </div>
      <div>
        <h4 class="mt-6 mb-2 text-xl">{{ $t('during_head') }}</h4>
        <p>{{ $t('during_policy') }}</p>
      </div>
    </div>
    <div class="pt-8 md:pt-0">
      <AppClickToChat>{{ $t('contact_host') }}</AppClickToChat>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHostBio',
}
</script>
