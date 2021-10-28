import React from 'react';
import Markdown from 'markdown-to-jsx';
import classes from './Note.module.css';
import hljs from 'highlight.js';
import Loader from '../UI/Loader/Loader';
import 'highlight.js/styles/stackoverflow-light.css';
import Footer from '../Footer/Footer';
import Aux from '../../hoc/Auxiliary';
import 'github-markdown-css/github-markdown.css';
import { connect } from 'react-redux';
import { fetchMarkdown } from '../../store/actions/note'

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

    render() {
        let style = ['markdown-body', classes.Note].join(' ');
        let renderContent = <div style={{ width: '10rem',margin:'auto',transform:'translateY(5rem)' }}><Loader /></div>

        if (this.props.notes.fetchedMarkdown) {
            renderContent = (
                <Aux>
                    <Markdown>{this.props.notes.fetchedMarkdown}</Markdown>
                    <Footer />
                </Aux>
            )
        }

        if (this.props.notes.errorMessage) {
            renderContent = (
                <Aux>
                    <h2>Sorry! Something Went Wrong~</h2>
                    <p>{this.props.notes.errorMessage}</p>
                </Aux>
            )
        }
        return (
            <div className={style}>
                {renderContent}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}


export default connect(mapStateToProps, { fetchMarkdown })(Note)
