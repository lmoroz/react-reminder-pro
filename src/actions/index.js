import { ADD_REMINDER } from '../constants.js';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    };
    console.log('action in addReminder', action);
    return action;
};

// export default addReminder;
// export { addReminder };
// export { addReminder as default };
