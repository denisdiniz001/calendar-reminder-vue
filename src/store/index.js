import { createStore } from "vuex";

const state = {
    date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()
    },
    reminders: {
        '20211015': [
            {
                'id': 1,
                'name': 'nome 1'
            },
        ],
        '20211028': [
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