<template>
  <div class="c-calendar">
    <h1>{{ title }}</h1>
    <Month :days="generatedMonths" :monthNumber="monthNumber"/>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from "vuex";
import Month from './Month.vue';
export default {
  name: 'Calendar',
  props: {
    title: String
  },
  components: {
      Month
  },
  setup() {
    const store = useStore();
    return {
      date: computed(() => JSON.parse(JSON.stringify(store.state.date))),
      reminders: computed(() => JSON.parse(JSON.stringify(store.state.reminders))),
      generatedMonths: null,
      monthNumber: null
    }
  },
  beforeMount() {
      this.generatedMonths = this.getDaysInMonth(this.date.month, this.date.year);
      this.monthNumber = this.date.month;
  },
  methods: {
    getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            let nDate = new Date(date);
            let dateObj = this.createDateObject(nDate, year, month);
            
            days.push(dateObj);
            date.setDate(date.getDate() + 1);
        }
        let prepend = days[0].dayOfWeek;
        if(prepend) days = new Array(prepend).concat(days);

        let append = (42 - days.length);
        if(append) days = days.concat(new Array(append));
        console.log(days)
        return days;
    },
    createDateObject(nDate, year, month) {
        let dayOfMonth = String(nDate.getDate()).padStart(2, '0');
        let dateObj = {
            dayOfWeek: nDate.getDay(),
            dayOfMonth,
            month,
            year,
            id: `${year}${month}${dayOfMonth}`
        };

        //GET Reminders
        dateObj.reminders = this.reminders[dateObj.id];
        return dateObj;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
