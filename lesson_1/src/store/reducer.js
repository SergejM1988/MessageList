import { exampleAction } from './actions'

const initialState = {
    showName : false,
    name : 'Default'
}

export const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case exampleAction:
            return {
                ...state,
                showName: !state.showName
            }
            default: return state;
    }
}