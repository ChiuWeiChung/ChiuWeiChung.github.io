import React, { useState, useEffect,useRef } from 'react';
import classes from './Home.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';
import Inset from './Inset/Inset';

const numPerPage = 5;

const Home = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const homeRef =useRef(null)
    useEffect(() => {
        homeRef.current.scrollTo(0,0);
        const searchParams = new URLSearchParams(props.history.location.search);
        let obj = {}
        for (let key of searchParams) {
            obj[key[0]] = key[1]
        };
        if (obj.page) {
            if (currentPage.toString() !== obj.page) setCurrentPage(Number(obj.page));
        } else {
            setCurrentPage(1)
        }
    }, [currentPage, props.history.location.search])

    const goToNote = (themeId, noteId) => {
        props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }

    const gotoPage = (pageNum) => {
        setCurrentPage(pageNum);
        props.history.replace(`/?page=${pageNum}`)
    }

    const renderNotes = () => {
        if (!props.notes.length && !props.errorMessage) return <Loader />
        if (!props.notes.length && props.errorMessage) return <h2>{props.errorMessage}</h2>
        const slicedNotes = props.notes.slice((currentPage - 1) * numPerPage, currentPage * numPerPage);
        return (
            <div className={classes.Container}>
                <header className={classes.Header}>
                    <h1 className={classes.MainTitle}>近期發布</h1>
                    {props.isSignIn && (<Link to={'/note/new'}><i className="fas fa-plus-circle"></i></Link>)}
                </header>
                {slicedNotes.map(el => {
                    return (
                        <div onClick={() => goToNote(el.themeId, el._id)} className={classes.Subject} key={el._id} >
                            <div className={classes.Date}>
                                <span style={{ marginRight: '1rem' }}>
                                    <i className="far fa-calendar-alt">
                                    </i> {new Date(el.updatedDate).toLocaleDateString()}
                                </span>
                                <span>
                                    <i className="far fa-sticky-note">
                                    </i> {el.themeType}
                                </span>
                            </div>

                            <div className={classes.Title} >{el.title}</div>
                            <div className={classes.Desc}>{el.description.substring(0, 120) + '...'}</div>
                        </div>
                    )
                })}
                <Pagination gotoPage={gotoPage} itemLength={props.notes.length} numPerPage={numPerPage} currentPage={currentPage} />
            </div>
        )
    }

    return (
        <div className={[classes.Home, 'Main-Container'].join(' ')} ref={homeRef}>
            <Inset/>
            {renderNotes()}
        </div>
    )
}

const mapStateToProps = (state) => {
    let allNotes = [];
    const copyThemes = [...state.notes.themes];
    copyThemes.forEach(theme => {
        theme.noteCollection.forEach(note => {
            note.themeType = theme.name
        });
        allNotes.push(...theme.noteCollection);
    });
    allNotes.sort((a, b) => {
        return new Date(b.updatedDate) - new Date(a.updatedDate)
    });
    return {
        notes: allNotes,
        errorMessage: state.notes.errorMessage,
        isSignIn: state.auth.isSignIn
    }
}

export default connect(mapStateToProps)(Home)
