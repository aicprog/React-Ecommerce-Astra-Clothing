//actions that return objects
//comparable to this.setState
export const setCurrentUser = user =>({
    type: 'SET_CURRENT_USER',
    payload: user
})