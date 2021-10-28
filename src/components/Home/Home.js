import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
// import Pagination from '../Pagination/Pagination';
import Loader from '../UI/Loader/Loader';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary';

class Home extends React.Component {

    returnSubject() {
        let allNotes = [];
        this.props.notes.themes.forEach(el => allNotes.push(...el.noteCollection));
        allNotes.sort((a, b) => {
            return new Date(b.updatedDate) - new Date(a.updatedDate)
        })
        return allNotes.map(el => {
            return (
                <div className={classes.Subject} key={el._id} >
                    <Link to={`/note?themeId=${el.themeId}&noteId=${el._id}`}>{el.title}</Link>
                    <div className={classes.Date}>{new Date(el.updatedDate).toLocaleDateString()}</div>
                    <div className={classes.Desc}>{el.description.substring(0, 200) + '...'}</div>
                </div>
            )
        })


    }


    render() {
        let content = <Loader></Loader>
        if (this.props.notes.themes.length) {
            content = (
                <Aux>
                    <h1>近期發布</h1>
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