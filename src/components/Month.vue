<template>
  <div class="c-calendar__month">
      <div class="c-calendar__controls">
          <div v-on:click="previousMonth" class="c-calendar__controls--icon"><i class="fas fa-arrow-left"></i></div>
          <h3 class="c-calendar__month--title">{{monthName}} - {{yearNumber}}</h3>
          <div v-on:click="nextMonth" class="c-calendar__controls--icon"><i class="fas fa-arrow-right"></i></div>
      </div>

    <!-- header -->
    <div class="c-calendar__day c-calendar__header" v-for="(wd, index) in weekDays" :key="index">
        <span>{{wd}}</span>
    </div>
    <!-- days -->
    <DayCard v-for="(day, index) in days" :key="index" :day="day"/>
  </div>
</template>

<script>
import DayCard from './Day/Card.vue';
export default {
    name: 'Month',
    props: {
        days: Object
    },
    components: {
        DayCard
    },
    data() {
        return {
            // weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\
            weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        }
    },
    computed: {
        monthNumber() {
            return this.$store.state.date.month;
        },
        yearNumber() {
            return this.$store.state.date.year;
        },
        monthName() {
            return new Date(new Date().setMonth(this.monthNumber)).toLocaleString('default', { month: 'long' });
        }
    },
    methods: {
        previousMonth() {
            this.$store.commit('previousMonth');
        },
        nextMonth() {
            this.$store.commit('nextMonth');
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-calendar {
        &__month {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            &--title {
                text-transform: capitalize;
                width: 100%;
            }
        }
        &__controls {
            align-items: center;
            display: flex;
            flex-basis: 100%;
            margin: 1rem 3rem;
            &--icon {
                cursor: pointer;
                font-size: 2rem;
            }
        }
        &__header {
            align-items: center;
            background-color: #2f74b5;
            border: 1px solid #666;
            box-sizing: border-box;
            color: #ffffff;
            display: flex;
            flex-basis: 14%;
            height: 50px;
            justify-content: center;
        }
    }
</style>