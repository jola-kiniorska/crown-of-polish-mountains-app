import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

// selectors
export const getMountains = ({ mountains }) => mountains;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const GET_CLICKED_MOUNTAINS = createActionName('GET_CLICKED_MOUNTAINS');

// action creators
export const getClickedMountains = payload => ({ type: GET_CLICKED_MOUNTAINS, payload})
const reducer = (statePart = [], action) => {
    switch (action.type) {
        case GET_CLICKED_MOUNTAINS:
            return [...statePart, {...action.payload, id: shortId() }];
        default:
            return statePart;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;