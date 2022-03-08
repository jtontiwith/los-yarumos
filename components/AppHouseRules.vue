<template>
  <div>
    <h4 class="mt-6 mb-2 text-2xl">Things to know</h4>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>
        <h5 class="mt-6 mb-2 font-bold">
          {{ $t('to_know.rules.sub_head') }}
        </h5>
        <ul>
          <li v-for="(r, i) in rules" :key="i" class="pb-1">
            {{ $t(`to_know.rules.${r}`) }}
          </li>
        </ul>
      </div>
      <div>
        <h5 class="mt-6 mb-2 font-bold">
          {{ $t('to_know.health.sub_head') }}
        </h5>
        <ul>
          <li v-for="(h, i) in health" :key="i" class="pb-1">
            {{ $t(`to_know.health.${h}`) }}
          </li>
        </ul>
      </div>
      <div>
        <h5 class="mt-6 mb-2 font-bold">
          {{ $t('to_know.cancellation.sub_head') }}
        </h5>
        <ul>
          <li v-for="(c, i) in cancellation" :key="i" class="pb-1">
            {{ $t(`to_know.cancellation.${c}`) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHouseRules',
  data: () => ({
    rules: [
      'check_in',
      'check_out',
      'pets',
      'events',
      'prostitution',
      'smoking',
    ],
    health: ['cleaning', 'smoke_alarm'],
    cancellation: ['policy'],
  }),
}
</script>
