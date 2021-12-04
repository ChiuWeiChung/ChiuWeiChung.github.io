import React from 'react';
import Markdown from 'markdown-to-jsx';
import classes from './Note.module.css';
import hljs from 'highlight.js';
import NoteLoader from '../UI/NoteLoader/NoteLoader';
import 'highlight.js/styles/stackoverflow-light.css';
import Footer from '../Footer/Footer';
import 'github-markdown-css/github-markdown.css';
import { connect } from 'react-redux';
import { fetchMarkdown, deleteNote } from '../../store/actions/note'

class Note extends React.Component {

    componentDidUpdate(prevProps) {
        hljs.highlightAll();
        let prevObjId = this.extractSearchParams(prevProps.location.search);
        let currentObjId = this.extractSearchParams(this.props.location.search);
        if (prevObjId.noteId !== currentObjId.noteId) {
            this.props.fetchMarkdown(currentObjId)
        }
    }

    componentDidMount() {
        let obj = this.extractSearchParams(this.props.location.search)
        this.props.fetchMarkdown(obj);
    }


    extractSearchParams(search) {
        const searchParams = new URLSearchParams(search);
        let obj = {}
        for (let key of searchParams) {
            obj[key[0]] = key[1]
        };
        return obj
    }

    goEditPage = () => {
        let idObj = this.extractSearchParams(this.props.location.search);
        this.props.history.push(`/note/edit?themeId=${idObj.themeId}&noteId=${idObj.noteId}`)
    }

    deleteNote = () => {
        let idObj = this.extractSearchParams(this.props.location.search);
        this.props.deleteNote(this.props.auth.token, this.props.history, idObj)
    }

    render() {
        let style = ['markdown-body', classes.Note, 'Main-Container'].join(' ');
        let renderContent = <NoteLoader />;
        let swhoEdit = null;
        if (this.props.notes.fetchedMarkdown) {
            renderContent = (
                <React.Fragment>
                    <Markdown>{this.props.notes.fetchedMarkdown}</Markdown>
                    <Footer />
                </React.Fragment>
            )
        }

        if (this.props.notes.errorMessage) {
            renderContent = (
                <React.Fragment>
                    <h2>Sorry! Something Went Wrong~</h2>
                    <p>{this.props.notes.errorMessage}</p>
                </React.Fragment>
            )
        }

        if (this.props.auth.isSignIn) {
            swhoEdit = (
                <div className={classes.ShowEdit}>
                    <button onClick={this.goEditPage} className={classes.EditButton}>Edit</button>
                    <button onClick={this.deleteNote} className={classes.DeleteButton}>Delete</button>
                </div>
            )
        }
        return (
            <div className={style}>
                {swhoEdit}
                {renderContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        auth: state.auth
    }
}


export default connect(mapStateToProps, { fetchMarkdown, deleteNote })(Note)
