import axios from 'axios';



export const signIn = (values, history) => {
    return async (dispatch) => {
        dispatch({ type: 'SIGN_IN_START' });
        try {
            const res = await axios.post(`/user/login`, values);
            history.push('/');
            //============= Set local storage ==============
            const expirationDate = new Date(new Date().getTime() + 600 * 1000);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(checkAuthTimeout(600));
            // ==============================================
            dispatch({ type: 'SIGN_IN_SUCCESS', payload: res.data })
        } catch (err) {
            dispatch({ type: 'SIGN_IN_FAIL', payload: err.message })
        }
    }
}



// export const signOut = () => {

//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationDate');

//     return {
//         type: 'SIGN_OUT'
//     }

// }
export const signOut = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if (token) {
            await axios.post('/user/logout', {}, { headers: { 'Authorization': `Bearer ${token}` } });
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
        }

        dispatch({ type: 'SIGN_OUT' })
    }


}

export const checkAuthTimeout = (expirationTime) => {
    const token = localStorage.getItem('token');
    return dispatch => {
        setTimeout(async () => {
            await axios.post('/user/logout', {}, { headers: { 'Authorization': `Bearer ${token}` } });
            dispatch(signOut())
        }, expirationTime * 1000)
    }
}


export const authCheckState = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            // dispatch(signOut());
            signOut()
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate < new Date()) {
                try {
                    // await axios.post('/user/logout', {}, { headers: { 'Authorization': `Bearer ${token}` } });
                    // dispatch(signOut())
                    signOut()
                } catch (err) {
                    dispatch({ type: 'CHECK_AUTH_ERROR', payload: err.message })
                }
            } else {
                try {
                    const res = await axios.get('/user/me', { headers: { 'Authorization': `Bearer ${token}` } })
                    // const userId = localStorage.getItem('userId');                    
                    dispatch({ type: 'SIGN_IN_SUCCESS', payload: { user: res.data, token } });
                    dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
                } catch (err) {
                    dispatch({ type: 'CHECK_AUTH_ERROR', payload: err.message })
                }
            }
        }
    }
}