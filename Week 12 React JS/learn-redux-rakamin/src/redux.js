import {
    createStore
} from "redux";

// state = object dan immutable, atau array, atau string, atau number
const defaultState = {
    count :7,
}


// Signature of reducer
// (state, action) => newState

//reducer
const reducer = (state = defaultState, action)=> {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}

//store
const store = createStore(reducer);
store.subscribe(() => {
    console.log("Store changed", store.getState());
});

console.log(store.getState());

// adalah cara kita untuk mengubah state di dalam store

// dispatch
store.dispatch({type: "INCREMENT"});

