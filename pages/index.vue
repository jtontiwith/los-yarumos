<template>
  <div>
    <!--TODO: use different strategy to darken video-->
    <video
      id="hero-video"
      class="object-cover w-screen h-screen bg-black"
      style="-webkit-filter: brightness(75%)"
      playsinline
      muted
      autoplay
      loop
      src="../static/pan_vid.mp4"
    >
      <div class="video-error">No video!</div>
    </video>
    <AppLogo position="absolute" top="top-0" left="left-0" padding="p-6">
      <h1 class="ml-2 text-4xl font-bold text-white font-handwritten">
        Los Yarumos
      </h1>
    </AppLogo>
    <div class="absolute top-8 right-8"><AppLangToggle /></div>
    <nuxt-link to="/treehouse">
      <div
        class="absolute flex items-center justify-center w-1/2 p-10 text-3xl font-bold text-white border-2 border-white rounded inset-x-1/2 inset-y-3/4"
        style="
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.2);
        "
      >
        {{ $t('welcome_btn') }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
