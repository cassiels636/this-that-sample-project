import {FAILED_RECEIVE_PAIRING, RECEIVE_PAIRING, REQUEST_PAIRING} from "../actions/randpairing";


const defaultState = {
    isFetching: false,
    hasFailed: false,
    this: null,
    that: null,
};

const pairings = ( state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_PAIRING:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_PAIRING:
            return {
                ...state,
                isFetching: false,
                this: action.data.this_name,
                that: action.data.that_name,
            };
        case FAILED_RECEIVE_PAIRING:
            return {
                ...state,
                isFetching: false,
                hasFailed: true,
            };
        default:
            return state
    }
};

export default pairings;