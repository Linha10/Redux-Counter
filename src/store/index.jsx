import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

//Using redux toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState : { counter : 0},
    reducers: {
        incre(state, action) { 
            state.counter ++
        },
        decre(state, action) { 
            state.counter --
        },
        addBy(state, action) {
            state.counter += action.payload
         },
        tenTImes(state, action) { 
            state.counter *= action.payload
        },
        RESET(state, action) { 
            state.counter *= action.payload
        },
    }
})
export const actions = counterSlice.actions

const store = configureStore({
    reducer : counterSlice.reducer
})
export default store;

//----[not using the redux toolkit down below---

// const reducerFunc = (state = { counter: 0 }, action) => {

//     if (action.type === 'INC') {
//         return { counter: state.counter + 1 }
//     }

//     if (action.type === 'DEC') {
//         return { counter: state.counter - 1 }
//     }
//     if (action.type === 'ADD') {
//         return { counter: state.counter + action.payload }
//     }
//     if (action.type === 'TENTIMES') {
//         return { counter: state.counter * action.payload }
//     }
//     if (action.type === 'RESTNUM') {
//         return { counter: state.counter = 0}
//     }
//     return state;
// }

// const store = createStore(reducerFunc);


// export default store;