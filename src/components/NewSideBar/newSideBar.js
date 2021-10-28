import classes from './newSideBar.module.css';
import { connect } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import { Link } from 'react-router-dom'

function newSideBar(props) {
    let sideBarStyle = props.showSideBar ? [classes.NewSideBar, classes.ShowSideBar].join(' ') : [classes.NewSideBar];

    const subjectClicker = (e) => {
        const subject = e.target.closest(`.${classes.Subject}`);
        subject.childNodes[1].classList.toggle(classes.Show);
    }
    // console.log('sidebar page', props.notes);

    const renderSubject = () => {
        if (!props.themes.length) return <Loader></Loader>
        const themesWithoutPortfolio = props.themes.filter(el=>el.type!=='portfolio');
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
        themes: state.notes.themes
    }
}

export default connect(mapStateToProps)(newSideBar)