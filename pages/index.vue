<template>
  <div>
    <nuxt-img
      v-if="vpWidth < 400"
      class="object-cover w-screen h-screen bg-black"
      :src="poster"
    />
    <video
      v-else
      id="hero-video"
      :poster="poster"
      class="object-cover w-screen h-screen bg-black"
      style="-webkit-filter: brightness(75%)"
      playsinline
      muted
      controls
      preload="none"
    >
      <source src="../static/pan_vid.mp4" type="video/mp4" />
      <div>No video!</div>
    </video>
    
    <AppLogo position="absolute" top="top-0" left="left-0" padding="p-6">
      <h1 class="ml-2 text-4xl font-bold text-white font-handwritten">
        Los Yarumos
      </h1>
    </AppLogo>
    <div class="absolute top-5 right-6 lg:top-8 lg:right-8">
      <AppLangToggle styles="text-white border-2 border-white" />
    </div>
    <nuxt-link to="/treehouse">
      <div
        class="absolute flex items-center justify-center w-3/4 p-10 text-2xl font-bold text-center text-white border-2 border-white rounded lg:text-3xl lg:w-1/2 inset-x-1/2 inset-y-3/4"
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
  data: () => ({
    poster: "treehouse_far_view_p.jpg",
    vpWidth: null 
  }),
  mounted() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      this.poster = "bedroom_platform_portriat.jpg"
    }
    this.vpWidth = window.innerWidth
  },
}
</script>
