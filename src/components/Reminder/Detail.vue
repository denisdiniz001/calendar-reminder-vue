<template>
    <div>Reminder</div>
    <div v-if="reminder" class="c-detail__reminder">
        <div class="c-detail__reminder-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="reminder.description" placeholder="Description" maxlength="30"></textarea>
        </div>
        <div class="c-detail__reminder-group">
            <label for="city">City</label>
            <input id="city" v-model="reminder.city" placeholder="City" />
        </div>
        <div class="c-detail__reminder-group">
            <label for="color">Color</label>
            <select id="color" v-model="reminder.color">
                <option v-for="color in colors" :key="color.value" :value="color.value">
                {{ color.text }}
                </option>
            </select>
        </div>
        <div class="c-detail__reminder-group">
            <label for="hour">Hour</label>
            <select id="hour" v-model="hour">
                <option v-for="index in hours" :key="index" :value="index">
                    {{ index }}
                </option>
            </select>
        </div>
        <div class="c-detail__reminder-group">
            <label for="minute">Minutes</label>
            <select id="minute" v-model="minute">
                <option v-for="index in minutes" :key="index" :value="index">
                    {{ index }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
export default {
    name: 'ReminderDetail',
    data() {
        return {
            id: this.$route.params.id,
            reminderPos: this.$route.params.reminderPos,
            reminder: null,
            hour: null,
            minute: null,
            colors: [
                { text: 'Blue', value: 'blue' },
                { text: 'Red', value: 'red' },
                { text: 'Yellow', value: 'yellow' },
                { text: 'Green', value: 'green' },
                { text: 'Navy', value: 'navy' },
                { text: 'Cyan', value: 'cyan' },
                { text: 'Orange', value: 'orange' }
            ],
            hours: null,
            minutes: null
        }
    },
    mounted() {
        this.reminder = this.getReminder();
        if(!this.reminder.time) return;
        this.hour = String(this.reminder.time).slice(0,2);
        this.minute = String(this.reminder.time).slice(2,4);
        this.hours = this.generateByNumber(24);
        this.minutes = this.generateByNumber(60);
    },
    methods: {
        getReminder() {
            const store = useStore();
            let rem = store.state.reminders[this.id];
            rem = rem[this.reminderPos];
            return rem ? JSON.parse(JSON.stringify(rem)) : [];
        },
        generateByNumber(value) {
            let array=[];
            for(let i=0; i<value; i++) array.push(String(i).padStart(2, '0'));
            return array;
        }
    },
}
</script>

<style lang="scss" scoped>
    .c-detail {
        &__reminder {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            width: 100%;
            &-group {
                align-items: flex-start;
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;
                width: 100%;
                label {
                    margin-bottom: 5px;
                }
                textarea, select, input {
                    box-sizing: border-box;
                    width: 100%;
                }
            }
        }
    }
</style>