import {SET_CURRENT_USER} from '../../utils/actions'

//initialize state in case there is no current state inititally 
const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
			case SET_CURRENT_USER:
				
				return {
					...state,
					currentUser: action.payload,
				};
			default:
				return state;
		}
}

export default userReducer 