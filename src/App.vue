<template>
  <Calendar title="Calendar" :date="date" :reminders="reminders"/>
</template>

<script>
import { computed } from '@vue/reactivity';
import {useStore} from "vuex";
import Calendar from './components/Calendar.vue'

export default {
  name: 'App',
  components: {
    Calendar
  },
  setup() {
    const store = useStore();
    return {
      date: computed(() => JSON.parse(JSON.stringify(store.state.date))),
      reminders: computed(() => JSON.parse(JSON.stringify(store.state.reminders))),
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
