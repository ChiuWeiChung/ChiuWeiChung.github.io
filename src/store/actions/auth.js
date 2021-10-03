export const getAuth = (authInstance) => {
    return {
        type: 'GET_AUTH_INSTANCE', payload: authInstance
    }
}

export const signIn = (id, userName) => {
    return {
        type: 'SIGN_IN', id, userName
    }
}
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}