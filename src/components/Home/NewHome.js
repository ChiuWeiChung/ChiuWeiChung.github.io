import React, { useState, useEffect } from 'react';
import classes from './Home.module.css';
import { connect } from 'react-redux';

import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';

const numPerPage = 5; 

const NewHome = (props) => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0)
        const searchParams = new URLSearchParams(props.history.location.search);
        let obj = {}
        for (let key of searchParams) {
            obj[key[0]] = key[1]
        };
        if (obj.page) {
            if (currentPage.toString() !== obj.page) {
                setCurrentPage(Number(obj.page));
            }
        } else {
            setCurrentPage(1)
        }
    }, [currentPage, props.history.location.search])

    const renderNotes = () => {
        if (!props.notes.length && !props.errorMessage) return <Loader />
        if (!props.notes.length && props.errorMessage) return <h2>{props.errorMessage}</h2>
        const slicedNotes = props.notes.slice((currentPage - 1) * numPerPage, currentPage * numPerPage);
        return (
            <div className={classes.Container}>
                <h1 className={classes.MainTitle}>近期發布</h1>
                {slicedNotes.map(el => {
                    return (
                        <div onClick={() => goToNote(el.themeId, el._id)} className={classes.Subject} key={el._id} >
                            <div className={classes.Title} >{el.title}</div>
                            <div className={classes.Date}>{new Date(el.updatedDate).toLocaleDateString()}</div>
                            <div className={classes.Desc}>{el.description.substring(0, 200) + '...'}</div>
                        </div>
                    )
                })}
                <Pagination gotoPage={gotoPage} itemLength={props.notes.length} numPerPage={numPerPage} currentPage={currentPage} />
            </div>
        )
    }

    const goToNote = (themeId, noteId) => {
        props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }

    const gotoPage = (pageNum) => {
        setCurrentPage(pageNum);
        props.history.replace(`/?page=${pageNum}`)
    }

    return (
        <div className={classes.Home}>
            {renderNotes()}
        </div>
    )
}

const mapStateToProps = (state) => {
    let allNotes = [];
    state.notes.themes.forEach(el => allNotes.push(...el.noteCollection));
    allNotes.sort((a, b) => {
        return new Date(b.updatedDate) - new Date(a.updatedDate)
    })
    return {
        notes: allNotes,
        errorMessage: state.notes.errorMessage
    }
}

export default connect(mapStateToProps)(NewHome)
