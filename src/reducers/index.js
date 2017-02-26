import {ADD_REMINDER} from '../constants';

const reminder = (action) => ({
    text: action.text,
    id: Math.random()
});

const Reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        default:
            return state;
    }
};

export default Reminders;
