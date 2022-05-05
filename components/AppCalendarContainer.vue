<template>
  <div>
    <div class="flex justify-between">
      <div class="cursor-pointer" @click="displayCals('back')">
        <AppIcon><ChevronLeft /></AppIcon>
      </div>
      <div class="cursor-pointer" @click="displayCals('forward')">
        <AppIcon><ChevronRight /></AppIcon>
      </div>
    </div>
    <div class="flex">
      <div
        v-for="(r, i) in calRanges"
        :key="i"
        class="flex justify-center flex-1"
        :class="[r.hidden ? 'hidden' : null]"
      >
        <!--{ hidden: r.hidden }-->
        <AppCalendar :date-limitor="r" @modify-month="displayCals" />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRight, ChevronLeft } from './icons'
export default {
  name: 'AppCalendarContainer',
  components: {
    ChevronRight,
    ChevronLeft,
  },
  data: () => ({
    onMonth: 0,
    calRanges: [
      {
        start: 0,
        end: 1,
        hidden: false,
      },
      {
        start: 1,
        end: 2,
        hidden: false,
      },
      {
        start: 2,
        end: 3,
        hidden: true,
      },
    ],
  }),
  computed: {
    innerWidth() {
      if (process.client) return window.innerWidth
      return null
    },
  },
  mounted() {
    this.displayCals('mobile_init')
  },
  methods: {
    // TODO: clean up this overly complex logic, works but messy
    displayCals(dir) {
      if (dir === 'forward' && innerWidth < 600 && this.onMonth === 1) {
        this.calRanges[0].hidden = true
        this.calRanges[1].hidden = true
        this.calRanges[2].hidden = false
      } else if (
        dir === 'forward' &&
        (innerWidth < 600) & (this.onMonth !== 2)
      ) {
        this.calRanges[0].hidden = true
        this.calRanges[1].hidden = false
        this.calRanges[2].hidden = true
      } else if (dir === 'forward' && innerWidth > 600) {
        this.calRanges[0].hidden = true
        this.calRanges[1].hidden = false
        this.calRanges[2].hidden = false
      } else if (dir === 'mobile_init' && innerWidth < 600) {
        this.calRanges[0].hidden = false
        this.calRanges[1].hidden = true
        this.calRanges[2].hidden = true
      } else if (dir === 'back' && innerWidth < 600 && this.onMonth === 2) {
        this.calRanges[0].hidden = true
        this.calRanges[1].hidden = false
        this.calRanges[2].hidden = true
      } else if (dir === 'back' && innerWidth < 600) {
        this.calRanges[0].hidden = false
        this.calRanges[1].hidden = true
        this.calRanges[2].hidden = true
      } else if (dir === 'back') {
        this.calRanges[0].hidden = false
        this.calRanges[1].hidden = false
        this.calRanges[2].hidden = true
      }

      if (dir === 'forward' && this.onMonth < 2) this.onMonth++
      if (dir === 'back' && this.onMonth > 0) this.onMonth--
    },
  },
}
</script>
