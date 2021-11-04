import classes from './SideBar.module.css';
import { connect } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import { Link } from 'react-router-dom'

function SideBar(props) {
    let sideBarStyle = props.showSideBar ? [classes.SideBar, classes.ShowSideBar].join(' ') : [classes.SideBar];

    const subjectClicker = (e) => {
        const subject = e.target.closest(`.${classes.Subject}`);
        subject.childNodes[1].classList.toggle(classes.Show);
    }
    // console.log('sidebar page', props.notes);

    const renderSubject = () => {
        if (!props.themes.length && !props.errorMessage) return <Loader></Loader>
        if (props.errorMessage && !props.themes.length) return props.errorMessage
        const themesWithoutPortfolio = props.themes.filter(el => el.type !== 'portfolio');
        return themesWithoutPortfolio.map(theme => {
            return (
                <div key={theme._id} className={classes.Subject}>
                    <div className={classes.Title} onClick={subjectClicker}>
                        <p>{theme.name}</p>
                        <i style={{ marginLeft: '1rem' }} className="fas fa-sort-down"></i>
                    </div>
                    <ul className={classes.List}  >
                        {theme.noteCollection.map(note => {
                            return (
                                <li onClick={props.sideBarToggler} key={note._id}>
                                    <Link to={`/note?themeId=${note.themeId}&noteId=${note._id}`}>{note.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    return (
        <div className={sideBarStyle}>
            {renderSubject()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        themes: state.notes.themes,
        errorMessage: state.notes.errorMessage
    }
}

export default connect(mapStateToProps)(SideBar)