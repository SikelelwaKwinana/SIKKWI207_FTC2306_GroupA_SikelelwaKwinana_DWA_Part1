//@ts-check
/**
 * Represents the initial state of the Tally App.
 * @typedef {Object} State
 * @property {number} count - The count value.
 */

/**
 * A reducer function to update the Tally App's state.
 * @param {State} state - represents the current state.
 * @param {Object} action - an object representing what needs to be done.
 * @returns {State} - New state.
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
 * Creating a Redux store for the Tally App.
 * @param {Function} reducer - A function to handle state updates.
 * @returns {Object} - A store object with methods to manage state.
 */
function logSubscribers(reducer) {
    let state = reducer({ count: 0 }, {})
    const subscribers = [];

    /**
     * Dispatches an action to update the state.
     * @param {Object} action - The action object with a type property.
     * Notify subscribers when the state changes.
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach((subscriber) => subscriber(state));
    };

    /**
     * Get the current state.
     * @returns {State} - The current state.
     */
    const getState = () => state;

    return {
        getState,
        dispatch,
    };
}

// Store subscribers using the logSubscribers function and the reducer
const store = logSubscribers(reducer);

// Initial state
console.log("Scenario A:");
const initialState = store.getState();
console.log(`Count ${initialState.count}`);

// Increment the counter by one, two times to get 2.
console.log("Scenario B:");
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
const add = store.getState();
console.log(`Count ${add.count}`);

// Scenario 3: Decrement the counter by one
console.log("Scenario C:");
store.dispatch({ type: "SUBTRACT" });
const subtract = store.getState();
console.log(`Count ${subtract.count}`);

// Scenario 4: Resetting the Tally Counter
console.log("Scenario D:");
store.dispatch({ type: "RESET" });
const reset = store.getState();
console.log(`Count ${reset.count}`);
