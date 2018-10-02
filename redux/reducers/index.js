import { ADD_USER, LIST_USERS } from '../constants/action-types'

const initialState = {
    users: [
        {
            id: 1,
            name: 'blach'
        }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] }
        case LIST_USERS:
            return state;
        default:
            return state;
    }
}

export function listUsers() {
    return {
        type: LIST_USERS
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}
