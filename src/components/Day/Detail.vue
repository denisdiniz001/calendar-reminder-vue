<template>
    <div>
        <h2>Date: {{localeDate}} - ID: {{id}}</h2>
        <div class="c-card__detail" v-if="!reminderPos">
            <h3>Reminders</h3>
            <router-link :to="{ name: 'Reminder', params: { reminderPos: -1 } }" class="c-card__reminders--link">
                <i class="fas fa-calendar-plus"></i>
            </router-link>
            <div class="c-card__reminders" v-if="reminders && reminders.length">
                <CardReminder v-for="(reminder, index) in reminders" :key="index" :pos="index" :reminder="reminder"/>
            </div>
            <div v-else class="c-card__reminders c-card__reminders--empty">
                Do not contain reminders
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import {useStore} from "vuex";
import CardReminder from '../Reminder/Card.vue';
export default {
    name: "DayDetail",
    data() {
        return {
            id: this.$route.params.id,
            year: null,
            month: null,
            day: null,
            date: null,
        }
    },
    components: {
        CardReminder
    },
    beforeMount(){
        let date = String(this.id);
        this.year = date.substring(0,4);
        this.month = date.substring(4,6);
        this.day = date.substring(6,8);
        this.date = new Date(this.year, this.month, this.day);
    },
    computed: {
        localeDate() {
            return this.date ? this.date.toLocaleDateString() : '';
        },
        reminderPos() {
            return this.$route.params.reminderPos ? this.$route.params.reminderPos : null;
        },
        reminders() {
            const store = useStore();
            let rem = store.state.reminders[this.id];
            return rem ? JSON.parse(JSON.stringify(rem)) : [];
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-card {
        &__detail {
            align-items: center;
            display: flex;
            flex-direction: column;
            min-height: 200px;
            padding: 1rem;
        }
        &__reminders {
            align-items: center;
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            min-height: 5rem;
            overflow: hidden;
            width: 100%;
            &--link {
                background-color: #666;
                border-radius: 50%;
                box-sizing: border-box;
                bottom: 2rem;
                color: #FFF;
                display: flex;
                font-size: 2rem;
                justify-content: flex-end;
                padding: 1rem;
                position: fixed;
                right: 1.5rem;
            }
        }
    }
</style>