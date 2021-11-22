<template>
    <div class="c-calendar__day">
        <router-link v-if="day && day.dayOfMonth" :to="{ name: 'Day', params: { id: day.id } }" class="c-calendar__day c-calendar__day--link">
            {{day.dayOfMonth}}
            <div v-if="day.reminders && day.reminders.length" class="c-calendar__reminder">Tem coisa</div>
        </router-link>
        <div v-else>-</div>
    </div>
</template>

<script>
export default {
    name: "DayCard",
    props: {
        day: Object
    },
    mounted() {
        console.log(this.day)
    }
}
</script>

<style lang="scss" scoped>
    .c-calendar {
        &__day {
            border: 1px solid #666;
            box-sizing: border-box;
            display: flex;
            flex-basis: 14%;
            height: 100px;
            padding: 0.5rem;
            &--link{
                border: none;
                color: #666;
                flex-basis: 100%;
                height: 100%;
                padding: 0;
                position: relative;
                text-decoration: none;
            }
        }
        &__reminder {
            position: absolute;
            bottom: 0;
        }
    }
</style>