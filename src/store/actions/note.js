import axios from 'axios';
import dbURL from '../../config/dbURL';


export const fetchNote = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${dbURL}/all`);
            dispatch({ type: 'FETCH_NEWNOTE_SUCCESS', payload: res.data })
        } catch (err) {

            dispatch({ type: 'FETCH_NOTE_FAIL', payload: err.message })
        }

    }
}


export const submitNote = (values, id, history) => {
    return async (dispatch) => {
        const res = await axios.post(`${dbURL}/new`, { values, id });
        // console.log(values)
        history.push('/');
        dispatch({ type: 'SUBMIT_NOTE', payload: res.data })
    }
}


export const fetchMarkdown = (obj) => {
    return async dispatch => {
        dispatch({ type: 'FECTH_MARKDOWN_START' })
        try {
            const res = await axios.get(`${dbURL}/${obj.themeId}/${obj.noteId}`);
            if (!res.data) {
                throw new Error('Markdown does not exist');
            }
            dispatch({ type: 'FETCH_MARKDOWN_SUCCESS', payload: res.data })
        } catch (error) {
            dispatch({ type: 'FETCH_MARKDOWN_FAIL', payload: error.message })
        }
    }
}