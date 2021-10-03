import React from 'react';
import axios from '../../axios';
import Markdown from 'markdown-to-jsx';
import classes from './Note.module.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-bright.css';


class Note extends React.Component {
    state = {
        markup: null,
        showSpinner: true
    }

    componentDidUpdate(){
        hljs.highlightAll()
    }


    componentDidMount() {
        const searchParams = new URLSearchParams (this.props.location.search);
        let url;
        for (let key of searchParams){
            url = key[1]
        }
        axios.get(`https://raw.githubusercontent.com/ChiuWeiChung/notes-markdown/${url}`).then(res => {
            this.setState({ markup: res.data, showSpinner: false })
        })


    }

    render() {
        let content = (
            <div className="loader"></div>
        )

        if (!this.state.showSpinner) {
            content = (
                <Markdown>{this.state.markup}</Markdown>
            )

        }

        return (
            <div className={classes.Note}>
                {content}
            </div>
        )

    }
}

export default Note
