//actions that return objects
import { UserActionTypes } from "./user.types";
//comparable to this.setState

const { SET_CURRENT_USER } = UserActionTypes;

export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});