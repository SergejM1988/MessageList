import { profileReducer} from './reducer'
import { createStore } from 'redux';
// const rootReducer = combineReducers(
//     {
//         profile:profileReducer
//     }
// )
const store = createStore (profileReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;