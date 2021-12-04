const initialState = {
    errorMessage: null,
    themes: [],
    fetchedMarkdown: null,
    render:false,
}


const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('FETCH_NEWNOTE_SUCCESS'):
            return { ...state, themes: action.payload, errorMessage: null };
        case ('FETCH_NOTE_FAIL'):
            return { ...state, errorMessage: action.payload };
        case ('SUBMIT_NOTE'):
            return { ...state, render: action.payload };
        case ('FECTH_MARKDOWN_START'):
            return { ...state, errorMessage: null, fetchedMarkdown: null }
        case ('FETCH_MARKDOWN_SUCCESS'):
            return { ...state, fetchedMarkdown: action.payload, errorMessage: null };
        case ('FETCH_MARKDOWN_FAIL'):
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

export default noteReducer