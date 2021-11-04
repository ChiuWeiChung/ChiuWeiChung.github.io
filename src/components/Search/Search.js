import React, { useState, useEffect, useRef } from 'react';
import classes from './Search.module.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const Search = (props) => {
    const [keyword, setKeyword] = useState('');
    const searchInput = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchInput.current.value !== keyword) {
                setKeyword(searchInput.current.value)
            }
        }, 500)
        return () => clearTimeout(timer)
    }, [keyword, searchInput]);

    const goToNote = (themeId, noteId) => {
        props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }


    const renderSearchKeyword = () => {
        const allNotes = [];
        if (props.notes.themes.length) {
            props.notes.themes.forEach(el => {
                allNotes.push(...el.noteCollection);
            })
        }
        const filteredNotes = allNotes.filter(el => {
            return el.title.toLowerCase().includes(keyword.toLowerCase());
        })

        if (!filteredNotes.length | !keyword) return null;
        return filteredNotes.map(el => {
            return (
                <div onClick={() => goToNote(el.themeId, el._id)} key={el._id} className={classes.FilteredResult}>
                    {el.title}
                </div>
            )
        })
    }

    const renderResult = () => {
        return (
            <div className={classes.Result}>
                {renderSearchKeyword()}
            </div>
        )
    }


    return (
        <div className={classes.Search} >
            <i className="fas fa-search"></i>
            <input ref={searchInput} value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Search for title..."></input>
            {renderResult()}
        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(withRouter(Search))