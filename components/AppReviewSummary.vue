<template>
  <div class="py-10">
    <div class="flex items-center mb-6 text-xl font-semibold">
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
      <p>5.0</p>
      &nbsp; - &nbsp;
      <p>23 reviews</p>
    </div>
    <div class="grid grid-cols-1 gap-x-32 md:grid-cols-2">
      <div>
        <ul>
          <li
            v-for="(category, i) in reviewCategories.slice(0, 3)"
            :key="i"
            class="flex items-baseline justify-between mb-3"
          >
            <div>{{ category }}</div>
            <div class="flex items-center text-sm">
              <div class="w-32 mr-2 border-b-4 border-black"></div>
              <div>5.0</div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li
            v-for="(category, i) in reviewCategories.slice(3)"
            :key="i"
            class="flex items-baseline justify-between mb-3"
          >
            <div>{{ category }}</div>
            <div class="flex items-center text-sm">
              <div class="w-32 mr-2 border-b-4 border-black"></div>
              <div>5.0</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppReviewSummary',
  data: () => ({
    reviewCategories: [
      'Cleanliness',
      'Communication',
      'Check-in',
      'Accuracy',
      'Location',
      'Value',
    ],
  }),
}
</script>
