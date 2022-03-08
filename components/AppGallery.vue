<template>
  <div class="grid grid-rows-1">
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div class="mb-2 max-h-80 max-w-130 md:mb-0">
        <nuxt-img
          class="object-cover w-full md:rounded-l-xl"
          style="height: 328px"
          src="/treehouse_far_view.jpg"
        />
      </div>
      <!-- https://stackoverflow.com/questions/9071830/contain-an-image-within-a-div -->
      <div class="grid grid-cols-2 gap-2 md:max-w-123">
        <div class="md:max-w-124 md:max-h-125">
          <nuxt-img class="object-cover w-full h-full" src="/bathtub.jpg" />
        </div>
        <div class="md:max-w-124 md:max-h-125">
          <nuxt-img
            class="object-cover w-full h-full md:rounded-tr-xl"
            src="/bedroom.jpg"
          />
        </div>
        <div class="md:max-w-124 md:max-h-125">
          <nuxt-img class="object-cover w-full h-full" src="/kitchen.jpg" />
        </div>
        <div class="md:max-w-124 md:max-h-125">
          <nuxt-img
            class="object-cover w-full h-full md:rounded-br-xl"
            src="/front_deck.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGallery',
}
</script>
