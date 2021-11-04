
const initialState = {
    isSignIn: false,
    name: null,
    email: null,
    id: null,
    token: null,
    errorMessage: null,
    showLoader: false,
}
const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ('SIGN_IN_START'):
            return { ...state, showLoader: true }
        case ('SIGN_IN_FIRST'):
            return { ...state, email: payload.data, showLoader: false, errorMessage: null }
        case ('SIGN_IN_SUCCESS'):
            return { ...state, isSignIn: true, name: payload.user.name, id: payload.user._id, email: payload.user.email, token: payload.token }
        case ('SIGN_IN_FAIL'):
            return { ...initialState, errorMessage: payload }
        case ('SIGN_OUT'):
            return { ...initialState }
        default:
            return state
    }
}

export default authReducer