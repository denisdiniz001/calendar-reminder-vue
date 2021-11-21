<template>
  <div class="c-calendar">
    <h1>{{ title }}</h1>
    <Month :days="daysToGenerateMonth" :month="month"/>
  </div>
</template>

<script>
import Month from './Month.vue';
export default {
  name: 'Calendar',
  props: {
    title: String,
    date: Object,
    reminders: Object
  },
  components: {
      Month
  },
  mounted() {
      console.log(this.date)
      console.log(this.getDaysInMonth(this.date.month, this.date.year))
  },
  computed: {

      daysToGenerateMonth() {
          return this.getDaysInMonth(this.date.month, this.date.year);
      },
      month() {
          return this.date.month;
      }
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
        let prepend = (7 - (days[0].dayOfWeek + 1));
        if(prepend) days = new Array(prepend).concat(days);

        let append = (35 - days.length);
        if(append) days = days.concat(append);
        return days;
    },
    createDateObject(nDate, year, month) {
        let dayOfMonth = nDate.getDate();
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
