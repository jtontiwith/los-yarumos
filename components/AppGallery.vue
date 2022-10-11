<template>
  <div>
    <section v-show="isLoaded" class="grid lg:grid-cols-2">
      <div>
        <nuxt-img
          class="object-cover w-full h-full rounded lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
          :src="images[0].path"
          @load="registerLoad(0)"
        />
      </div>
      <div class="flex flex-wrap pt-2 lg:pt-0 lg:pl-2">
        <div
          v-for="(img, i) in images.slice(1)"
          :key="i"
          class="w-1/2 h-1/2"
          :class="{ 'pr-2 pb-2': i === 0, 'pb-2': i === 1, 'pr-2': i === 2 }"
        >
          <nuxt-img
            class="object-cover w-full h-full rounded"
            :class="{
              'lg:rounded-none': i === 0 || i === 2,
              'lg:rounded-tr-xl lg:rounded-l-none lg:rounded-br-none': i === 1,
              'lg:rounded-br-xl lg:rounded-l-none lg:rounded-tr-none': i === 3,
            }"
            :src="img.path"
            @load="registerLoad(i + 1)"
          />
        </div>
      </div>
    </section>
    <AppGallerySkeleton v-show="!isLoaded" />
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    images: [
      { path: '/treehouse_far_view_p.jpg', loaded: false },
      { path: '/bedroom_facing_bed.jpg', loaded: false },
      { path: '/rocking_chair.jpg', loaded: false },
      { path: '/kitchen.jpg', loaded: false },
      { path: '/bathroom_re_crop.jpg', loaded: false },
    ],
  }),
  computed: {
    isLoaded() {
      const loaded = this.images.map((i) => i.loaded)
      return loaded.every(Boolean)
    },
  },
  methods: {
    registerLoad(idx) {
      this.images[idx].loaded = true
    },
  },
}
</script>
