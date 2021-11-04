import axios from 'axios';
import apiURL from '../../config/apiURL';


export const fetchNote = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${apiURL}/note/all`);
            dispatch({ type: 'FETCH_NEWNOTE_SUCCESS', payload: res.data })
        } catch (err) {

            dispatch({ type: 'FETCH_NOTE_FAIL', payload: err.message })
        }

    }
}


export const submitNote = (values, token, history) => {
    return async (dispatch) => {
        const res = await axios.post(`${apiURL}/note/new`, { values }, { headers: { 'Authorization': `Bearer ${token}` } });
        history.push('/');
        dispatch({ type: 'SUBMIT_NOTE', payload: res.data })
    }
}


export const fetchMarkdown = (obj) => {
    return async dispatch => {
        dispatch({ type: 'FECTH_MARKDOWN_START' })
        try {
            const res = await axios.get(`${apiURL}/note/${obj.themeId}/${obj.noteId}`);
            if (!res.data) {
                throw new Error('Markdown does not exist');
            }
            dispatch({ type: 'FETCH_MARKDOWN_SUCCESS', payload: res.data })
        } catch (error) {
            dispatch({ type: 'FETCH_MARKDOWN_FAIL', payload: error.message })
        }
    }
}