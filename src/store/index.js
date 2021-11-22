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
                'description': 'Lorem ipsum',
                'time': '0805',
                'city': 'Florianopolis',
                'color': 'red'
            },
            {
                'id': 2,
                'description': 'Lorem ipsum 002',
                'time': '1530',
                'city': 'Sao Paulo',
                'color': 'blue'
            },
            {
                'id': 3,
                'description': 'Lorem ipsum 003',
                'time': '0245',
                'city': 'Bahia',
                'color': 'yellow'
            },
        ],
        '20211028': [
            {
                'id': 1,
                'description': 'Ipsum Lorium',
                'time': '1830',
                'city': 'Sao Jose',
                'color': 'yeallow'
            },
            {
                'id': 2,
                'description': 'Ipsum Lorium 002',
                'time': '0510',
                'city': 'Rio de janeiro',
                'color': 'green'
            },
        ]
    }
}

export default createStore({
    state
});