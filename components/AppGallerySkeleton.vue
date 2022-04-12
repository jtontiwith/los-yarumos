<template>
  <div class="grid w-full text-center h-96 lg:grid-cols-2 animate-pulse">
    <div
      class="w-full h-full bg-gray-200 rounded lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
    ></div>
    <div>
      <div class="flex flex-wrap w-full h-full pt-2 lg:pt-0 lg:pl-2">
        <div
          v-for="(skel, i) in 4"
          :key="i"
          class="w-1/2"
          :class="{ 'pr-2 pb-2': i === 0, 'pb-2': i === 1, 'pr-2': i === 2 }"
        >
          <div
            class="w-full h-full bg-gray-200"
            :class="{
              'lg:rounded-none': i === 0 || i === 2,
              'lg:rounded-tr-xl lg:rounded-l-none lg:rounded-br-none': i === 1,
              'lg:rounded-br-xl lg:rounded-l-none lg:rounded-tr-none': i === 3,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
