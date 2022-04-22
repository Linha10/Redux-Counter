import { createStore } from 'redux';

const reducerFunc = (state = { counter: 0 }, action) => {
    

    if (action.type === 'INC') {
        return { counter: state.counter + 1 }
    }

    if (action.type === 'DEC') {
        return { counter: state.counter - 1 }
    }
    if (action.type === 'ADD') {
        return { counter: state.counter + action.payload }
    }
    if (action.type === 'TENTIMES') {
        return { counter: state.counter * action.payload }
    }
    if (action.type === 'RESTNUM') {
        return { counter: state.counter = 0}
    }
    return state;
}

const store = createStore(reducerFunc);


export default store;