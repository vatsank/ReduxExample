
import { combineReducers } from 'redux'
import medicineReducer from './medicineReducer';
import uiReducer from './uiReducer';

const rootReducer =combineReducers({
    
    medicines: medicineReducer,
    ui: uiReducer,
  
})


export default rootReducer;