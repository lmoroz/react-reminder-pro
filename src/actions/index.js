import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => ({
    type: ADD_REMINDER,
    text,
    dueDate
});

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    console.log('action in deleteReminder', action);
    return action;
};

export const clearReminders = () => ({
    type: CLEAR_REMINDERS
});

// export default addReminder;
// export { addReminder };
// export { addReminder as default };
