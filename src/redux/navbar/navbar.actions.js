import { NavbarActionTypes } from "./navbar.types";


const { SET_TOGGLE_SIDEBAR } = NavbarActionTypes;

export const toggleSidebar = () => ({
	type: SET_TOGGLE_SIDEBAR
});
