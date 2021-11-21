import { createStore } from "vuex";

const state = {
    date: {
        year: 2021,
        month: 11
    },
    reminders: {
        '20211128': [
            {
                'id': 1,
                'name': 'nome 1'
            },
            {
                'id': 2,
                'name': 'nome 2'
            }
        ]
    }
}

export default createStore({
    state
});