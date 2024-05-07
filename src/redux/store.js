import { createStore } from 'redux';
import initialState from './initialState';

// selectors
export const getMountains = state => state.mountains;
export const getClickedMountains = state => state.clickedMountains;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CLICKED_MOUNTAINS = createActionName('GET_CLICKED_MOUNTAINS');
const REMOVE_CLICKED_MOUNTAINS = createActionName('REMOVE_CLICKED_MOUNTAINS');

// action creators
export const addClickedMountains = payload => ({ type: ADD_CLICKED_MOUNTAINS, payload})
export const removeClickedMountains = payload => ({ type: REMOVE_CLICKED_MOUNTAINS, payload})
const reducer = (statePart = {}, action) => {
    switch (action.type) {
        case ADD_CLICKED_MOUNTAINS:
            return { ...statePart, clickedMountains: [...statePart.clickedMountains, action.payload.mountainId]};
        case REMOVE_CLICKED_MOUNTAINS:
            return {...statePart, clickedMountains: statePart.clickedMountains.filter(item => item !== action.payload.mountainId)};
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