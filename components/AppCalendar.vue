<template>
  <div class="w-64 text-center">
    {{ month }}
    <div class="grid w-64 h-64 grid-cols-7 mt-4 text-sm">
      <div
        v-for="(abbr, i) in daysOfWeek"
        :key="i"
        class="font-medium text-center"
      >
        {{ abbr }}
      </div>
      <div v-for="(d, i) in dayOfWeek" :key="i"></div>
      <div
        v-for="(d, i) in vacancy"
        :key="i"
        class="flex items-center justify-center w-10 h-10 border border-transparent rounded-full hover:border-gray-700"
        :class="[d.status === 'occupied' ? 'line-through' : null]"
      >
        {{ extractDay(d.date) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalendar',
  props: {
    dateLimitor: {
      type: Object,
      default() {
        return {
          start: 0,
          end: 1,
        }
      },
    },
  },
  data: () => ({
    events: [],
    date: new Date(),
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }),
  computed: {
    vacancy() {
      return this.events.reduce(
        (arr, e) =>
          e.start.date >= this.firstOfMonth && e.start.date <= this.lastOfMonth
            ? arr.concat({
                status: e.summary,
                date: e.start.date,
              })
            : arr,
        []
      )
    },
    firstOfMonth() {
      return new Date(
        this.date.getFullYear(),
        this.date.getMonth() + this.dateLimitor.start,
        1
      )
        .toISOString()
        .split('T')[0]
    },
    lastOfMonth() {
      return new Date(
        this.date.getFullYear(),
        this.date.getMonth() + this.dateLimitor.end,
        0
      )
        .toISOString()
        .split('T')[0]
    },
    dayOfWeek() {
      return new Date(
        this.date.getFullYear(),
        this.date.getMonth() + this.dateLimitor.start,
        1
      ).getDay()
    },
    month() {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      return months[this.date.getMonth() + this.dateLimitor.start]
    },
  },
  mounted() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      const events = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbwdap7rWIqft34rS1DszbewDmiVS21g3Pr8KARlihRvt5Jw3Ouu48BNJgodsYoOwe_n/exec'
      )
      this.events = events
    },
    extractDay(d) {
      return parseInt(d.substring(8), 10)
    },
  },
}
</script>
