const usernameReducer = (state=0, action) => {
    switch (action.type) {
        case "USERNAME":
            return state+1;
        default:
            return state;
    }
}

export default usernameReducer;
