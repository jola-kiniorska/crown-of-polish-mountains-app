import { createStore } from 'redux';
import initialState from './initialState';

// selectors
export const getMountains = state => state.mountains;

// actions
const createActionName = actionName => `app/lists/${actionName}`;

// action creators
const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_MOUNTAINS':
            return {...state => state.mountains}
        default:
            return state
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;