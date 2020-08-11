import { ADD } from "../actions/actions"


const initialState = []

function todos(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        default:
            return state
    }
}

export default todos