<template>
  <section class="grid lg:grid-cols-2">
    <div>
      <nuxt-img
        class="object-cover w-full h-full rounded lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
        src="/farview_small.jpg"
      />
    </div>
    <div class="flex flex-wrap pt-2 lg:pt-0 lg:pl-2">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="w-1/2"
        :class="{ 'pr-2 pb-2': i === 0, 'pb-2': i === 1, 'pr-2': i === 2 }"
      >
        <nuxt-img
          class="object-cover w-full h-full rounded"
          :class="{
            'lg:rounded-none': i === 0 || i === 2,
            'lg:rounded-tr-xl lg:rounded-l-none lg:rounded-br-none': i === 1,
            'lg:rounded-br-xl lg:rounded-l-none lg:rounded-tr-none': i === 3,
          }"
          :src="img"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
