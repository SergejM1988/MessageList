import { TOGGLE_SHOWNAME, CHANGE_NAME} from './actions'

const initialState = {
    showName : false,
    name : 'Sergio',
}

export const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TOGGLE_SHOWNAME:
            return {
                ...state,
                showName: !state.showName
            }              
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
    default: return state; 
    }
}