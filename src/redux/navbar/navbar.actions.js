//actions that return objects
import { NavbarActionTypes } from "./navbar.types";
//comparable to this.setState

const { SET_TOGGLE_SIDEBAR } = NavbarActionTypes;

export const toggleSidebar = () => ({
	type: SET_TOGGLE_SIDEBAR
});
