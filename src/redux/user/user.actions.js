//actions that return objects
import {SET_CURRENT_USER} from "../../utils/actions";
//comparable to this.setState
export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});