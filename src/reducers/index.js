import { combineReducers } from 'redux';
import { FORM_SUBMIT, RESULT_FETCH_SUCCESS }  from '../actions/actions';

const initialState = {
  result: { },
  isLoading: false
};

const nikeApp = (state = initialState, action) => {
  switch (action.type) {

	  case FORM_SUBMIT:
	    return Object.assign({}, state, {
		    result: action.formValues, 
		    isLoading: action.isLoading
		  })
	    
	  case RESULT_FETCH_SUCCESS:
	  	return Object.assign({}, state, {
		  	isLoading: action.isLoading
		  })
	
	  default:
	    return initialState;
  }
}

/* in larger app we would probably have multiple reducers,
	 but not necessary here
	 
const rootReducer = combineReducers({
	nikeApp	
})
*/

export default nikeApp;