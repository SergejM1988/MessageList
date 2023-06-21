import { TOGGLE_SHOWNAME} from './actions'

const initialState = {
    showName : false,
    name : 'Sergio'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOWNAME:
            return {
                ...state,
                showName: !state.showName
            }
            default: return state;
    }
}