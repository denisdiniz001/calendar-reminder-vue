<template>
    <div v-if="reminder" class="c-card__reminder" :class="`c-card__reminder--${reminder.color}`">
        <router-link v-if="reminder && reminder.id" :to="{ name: 'Reminder', params: { reminderPos: pos } }" class="c-card__reminder-link">
            <p>
                <b>Description: </b>{{reminder.description}}
            </p>
            <span>
                <b>Time: </b>{{reminder.time}}
            </span>

            <div v-if="weatherMain" class="c-card__reminder-weather"><b>Weather</b>{{weatherMain}}</div>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "CardReminder",
    data() {
        return {
            weatherMain: '',
            apiKey: '9c4861f698e62ba8e1dfd439d2fcda4f'
        }
    },
    props: {
        reminder: Object,
        pos: Number
    },
    mounted() {
        console.log(this.pos)
        this.getWeather()
    },
    computed: {
        cityName() {
            return this.reminder.city;
        }
    },
    methods: {
        getWeather() {
            if(!this.cityName) return null;
            axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${this.apiKey}`)
            .then((res) => {
                    let {weather, name} = res.data;
                    if(weather && weather[0]) this.weatherMain = `${name} now: ${weather[0].main} - ${weather[0].description}`;
                    console.log(res.data)
            })
            .catch((error) => {
                    this.weatherMain = "-";
                    console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './../../mixins/mixins.scss';
    .c-card {
        &__reminder {
            box-sizing: border-box;
            padding: 1rem;
            margin-bottom: 5px;
            text-align: left;
            width: 100%;
            &-link {
                color: #FFF;
                display: flex;
                flex-direction: column;
                text-decoration: none;
            }
            &-weather {
                align-items: flex-end;
                display: flex;
                flex-direction: column;
            }

            @include bg-colors;
        }
    }
</style>