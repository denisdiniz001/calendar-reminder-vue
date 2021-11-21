<template>
  <div class="c-calendar__month">
    <h3 class="c-calendar__month--title">{{monthName}}</h3>
    <div class="c-calendar__day c-calendar__day--title" v-for="(wd, index) in weekDays" :key="index">
        <span>{{wd}}</span>
    </div>
    <div class="c-calendar__day" v-for="(day, index) in days" :key="index">
        <div v-if="day && day.dayOfMonth">
            {{day.dayOfMonth}}
            <div v-if="day.reminders && day.reminders.length">Tem coisa</div>
        </div>
        <div v-else>-</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Month',
    props: {
        days: Object,
        monthNumber: Number
    },
    data() {
        return {
            // weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']\
            weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        }
    },
    computed: {
        monthName() {
            return new Date(new Date().setMonth(this.monthNumber)).toLocaleString('default', { month: 'long' });
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
        &__day {
            align-items: center;
            border: 1px solid #666;
            box-sizing: border-box;
            display: flex;
            flex-basis: 14%;
            justify-content: center;
            height: 100px;
            &--title {
                background-color: #2f74b5;
                color: #ffffff;
                height: 50px;
            }
        }
    }
</style>