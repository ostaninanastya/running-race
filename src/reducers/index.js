import {combineReducers} from 'redux'
import runners from './runners'
import {reducer as reduxFormReducer} from 'redux-form';

export default combineReducers({
    runners,
    form: reduxFormReducer
})