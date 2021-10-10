
import { NavbarActionTypes } from "./navbar.types";


const INITIAL_STATE = {
	isSidebarOpen: false,
    toggleSidebar: false 
};

const { SET_TOGGLE_SIDEBAR} = NavbarActionTypes;

const navbarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case SET_TOGGLE_SIDEBAR:
            console.log(state.toggleSidebar)
            return {
							...state,
							toggleSidebar: !state.toggleSidebar,
							isSidebarOpen: !state.isSidebarOpen,
						};
		default:
			return state;
	}
};

export default navbarReducer;
