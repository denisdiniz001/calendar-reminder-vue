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
                'color': 'yellow'
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

const getters = {
    orderedReminders: state => {
        let keys = Object.keys(state.reminders);
        keys.forEach(key => {
            let remElements = state.reminders[key];
            remElements.sort(function (a, b) {
              return a.time - b.time;
            });
        });
        return state.reminders;
    }
}

const mutations = {
    addReminder(state, {parentID, pos, reminder}) {
        console.log(parentID);
        console.log(pos);
        console.log(reminder);
        let reminderObj = state.reminders[parentID];
        if(!reminderObj) reminderObj = [];
        if(pos != -1) {
            reminderObj[pos] = reminder;
        }else {
            let length = reminderObj.length;
            reminder.id = length + 1;
            reminderObj[length] = reminder;
        }

        state.reminders[parentID] = reminderObj;
        console.log(state.reminders)
    }
}

export default createStore({
    state,
    getters,
    mutations
});