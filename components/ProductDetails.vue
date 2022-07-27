<template>
  <div>
    <h2 class="mb-2 text-xl">{{ $t('sub_description') }}</h2>
    <p class="mb-6 text-sm font-light text-gray-500">
      {{ $t('prod_overview.guests') }} &middot;
      {{ $t('prod_overview.room') }} &middot;
      {{ $t('prod_overview.bed') }} &middot; {{ $t('prod_overview.bath') }}
    </p>
    <section>
      <div class="w-full border-t border-gray-300"></div>
      <div class="grid grid-cols-2 md:grid-cols-1">
        <div
          class="flex flex-col items-center p-3 text-center md:flex-row md:justify-start md:text-left md:px-0"
        >
          <AppIcon><Home /></AppIcon>
          <div class="md:ml-4">
            <p class="text-base font-semibold">
              {{ $t('prod_details.house') }}
            </p>
            <p class="text-sm font-light">{{ $t('prod_details.house_sub') }}</p>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-3 text-center md:flex-row md:justify-start md:text-left md:px-0"
        >
          <AppIcon><Star /></AppIcon>
          <div class="md:ml-4">
            <p class="text-base font-semibold">
              {{ $t('prod_details.cleaning') }}
            </p>
            <p class="text-sm font-light">
              {{ $t('prod_details.cleaning_sub') }}
            </p>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-3 text-center md:flex-row md:justify-start md:text-left md:px-0"
        >
          <AppIcon><Badge /></AppIcon>
          <div class="md:ml-4">
            <p class="text-base font-semibold">{{ $t('prod_details.host') }}</p>
            <p class="text-sm font-light">{{ $t('prod_details.host_sub') }}</p>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-3 text-center md:flex-row md:justify-start md:text-left md:px-0"
        >
          <AppIcon><Calendar /></AppIcon>
          <div class="md:ml-4">
            <p class="text-base font-semibold">
              {{ $t('prod_details.cancelation') }}
            </p>
            <p class="text-sm font-light">
              {{ $t('prod_details.cancelation_sub') }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-full border-t border-gray-300"></div>
    </section>
    <section class="py-3">
      <p>{{ $t('prod_description') }}</p>
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <section class="py-3">
      <h3 class="mb-6 text-2xl font-semibold">
        {{ $t('prod_details.room_callout') }}
      </h3>
      <div class="inline-block p-8 mb-6 border border-gray-300 rounded-md">
        <p>{{ $t('prod_details.room') }}</p>
        <p>{{ $t('prod_details.bed') }}</p>
      </div>
    </section>
    <div class="w-full border-t border-gray-300"></div>
    <section class="py-3">
      <h3 class="mb-6 text-2xl font-semibold">{{ $t('features.offering') }}</h3>
      <div class="flex">
        <ul class="mr-12">
          <li class="mb-1">{{ $t('features.kitchen') }}</li>
          <li class="mb-1">{{ $t('features.wifi') }}</li>
          <li class="mb-1">{{ $t('features.bath') }}</li>
          <li class="mb-1">{{ $t('features.deck') }}</li>
          <li class="mb-1">{{ $t('features.park') }}</li>
        </ul>
        <ul>
          <li class="mb-1">{{ $t('features.food') }}</li>
          <li class="mb-1">{{ $t('features.workspace') }}</li>
          <li class="mb-1">{{ $t('features.safety') }}</li>
          <li class="mb-1">{{ $t('features.heat') }}</li>
        </ul>
      </div>
    </section>
    <div class="w-full mt-6 mb-10 border-t border-gray-300"></div>
    <AppCalendarContainer />
  </div>
</template>

<script>
import { Home, Star, Badge, Calendar } from './icons'
export default {
  components: {
    Home,
    Star,
    Badge,
    Calendar,
  },
}
</script>
