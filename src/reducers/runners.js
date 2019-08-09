import data from '../data/users.json';

const initialState = data.users;

const runners = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_RUNNER':
            return [
                ...state,
                action.payload
            ];
        default:
            return state
    }
}

export default runners