import { combineReducers } from 'redux';
import { registration } from './registration.reducer';
import {accession} from './login.reducer';

const rootReducer = combineReducers({
    registration,
    accession,

});

export default rootReducer;