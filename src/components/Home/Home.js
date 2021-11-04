import React from 'react';
import classes from './Home.module.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';

class Home extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);        
    }

    goToNote = (themeId, noteId) => {
        this.props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }

    returnSubject() {
        let allNotes = [];
        this.props.notes.themes.forEach(el => allNotes.push(...el.noteCollection));
        allNotes.sort((a, b) => {
            return new Date(b.updatedDate) - new Date(a.updatedDate)
        })
        return (
            <Aux>
                {allNotes.map(el => {
                    return (
                        <div onClick={() => this.goToNote(el.themeId, el._id)} className={classes.Subject} key={el._id} >
                            <div className={classes.Title} >{el.title}</div>
                            <div className={classes.Date}>{new Date(el.updatedDate).toLocaleDateString()}</div>
                            <div className={classes.Desc}>{el.description.substring(0, 200) + '...'}</div>
                        </div>
                    )
                })}
                <Pagination itemLength={allNotes.length} itemsPerPage={2} currentPage={1} />
            </Aux>
        )


    }


    render() {
        let content = <Loader></Loader>
        if (this.props.notes.themes.length) {
            content = (
                <Aux>
                    <h1 className={classes.MainTitle}>近期發布</h1>
                    {this.returnSubject()}
                    <Footer />
                </Aux>
            )
        } else if (!this.props.notes.themes.length && this.props.notes.errorMessage) {
            content = (
                <Aux>
                    <h1>{this.props.notes.errorMessage}</h1>
                    <Footer />
                </Aux>
            )
        }
        return (
            <div className={classes.Home}>
                <div className={classes.Container}>
                    {content}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(Home)