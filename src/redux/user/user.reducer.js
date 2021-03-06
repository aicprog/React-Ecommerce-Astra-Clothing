import {UserActionTypes} from './user.types'

//initialize state in case there is no current state inititally 
const INITIAL_STATE = {
    currentUser: null
}

const {SET_CURRENT_USER} = UserActionTypes

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

