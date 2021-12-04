import axios from 'axios';
import apiURL from '../../config/apiURL';

export const signIn = (values) => {
    return async (dispatch) => {
        dispatch({ type: 'SIGN_IN_START' });
        try {
            const res = await axios.post(`${apiURL}/user/login`, values);
            if (!res) throw new Error('Unable to Login');
            dispatch({ type: 'SIGN_IN_FIRST', payload: { data: res.data } });
        } catch (err) {
            dispatch({ type: 'SIGN_IN_FAIL', payload: err.message })
        }
    }
}

export const signInSecond = (values, history) => {
    return async (dispatch, getState) => {
        dispatch({ type: 'SIGN_IN_START' });
        try {
            const res = await axios.post(`${apiURL}/user/login2nd`, { email: getState().auth.email, verifyNumber: values.verifyNumber });
            //============= Set local storage ==============
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(checkAuthTimeout(3600));
            // ==============================================
            history.push('/')
            dispatch({ type: 'SIGN_IN_SUCCESS', payload: res.data })
        } catch (err) {
            dispatch({ type: 'SIGN_IN_FAIL', payload: err.message })
        }
    }

}

export const signInFail = () => {
    return { type: 'SIGN_IN_FAIL', payload: 'Unable to login' }
}


export const signOut = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if (token) {
            await axios.post(`${apiURL}/user/logout`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
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
            await axios.post(`${apiURL}/user/logout`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
            dispatch(signOut())
        }, expirationTime * 1000)
    }
}


export const authCheckState = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            signOut()
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate < new Date()) {
                try {
                    signOut()
                } catch (err) {
                    dispatch({ type: 'CHECK_AUTH_ERROR', payload: err.message })
                }
            } else {
                try {
                    const res = await axios.get(`${apiURL}/user/me`, { headers: { 'Authorization': `Bearer ${token}` } })
                    dispatch({ type: 'SIGN_IN_SUCCESS', payload: { user: res.data, token } });
                    dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
                } catch (err) {
                    dispatch({ type: 'CHECK_AUTH_ERROR', payload: err.message })
                }
            }
        }
    }
}