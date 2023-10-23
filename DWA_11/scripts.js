//@ts-check
/**
 * Represents the initial state of the Tally App.
 * @typedef {Object} TallyState
 * @property {number} count - The count value.
 */

/**
 * A reducer function to update the Tally App's state.
 * @param {TallyState} state - The current state.
 * @param {Object} action -  Object with a type property.
 * @returns {TallyState} - New state.
 */
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { count: state.count + 1 };
        case "SUBTRACT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
};

/**
 * Creates a Redux-inspired store for the Tally App.
 * @param {Function} reducer - A function to handle state updates.
 * @returns {Object} - A store object with methods to manage state.
 */
function logSubscribers(reducer) {
    let state = reducer({ count: 0 }, {})
    const subscribers = [];

    /**
     * Dispatches an action to update the state.
     * @param {Object} action - The action object with a type property.
     * Notify subscribers when the state changes
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach((subscriber) => subscriber(state));
    };

    /**
     * Subscribes to state changes.
     * @param {Function} subscriber - A function to be called when the state changes.
     */
    const subscribe = (subscriber) => {
        subscribers.push(subscriber);
    };

    /**
     * Gets the current state.
     * @returns {TallyState} - The current state.
     */
    const getState = () => state;

    return {
        getState,
        dispatch,
        subscribe,
    };
}

// Logs subscribers with the reducer
const store = logSubscribers(reducer);

//Increment the counter by one
console.log("Scenario 1:");
const initialState1 = store.getState();
console.log(`Count ${initialState1.count}`);

// Scenario 2: Increment the counter by one
console.log("Scenario 2:");
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
const state2 = store.getState();
console.log(`Count ${state2.count}`);

// Scenario 3: Decrement the counter by one
console.log("Scenario 3:");
store.dispatch({ type: "SUBTRACT" });
const state3 = store.getState();
console.log(`Count ${state3.count}`);

// Scenario 4: Resetting the Tally Counter
console.log("Scenario 4:");
store.dispatch({ type: "RESET" });
const reset = store.getState();
console.log(`Count ${reset.count}`);
