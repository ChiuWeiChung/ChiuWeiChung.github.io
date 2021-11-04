import React from 'react';
import classes from './Portfolio.module.css';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Loader from '../UI/Loader/Loader';
class Portfolio extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    gotoProject = (themeId, noteId) => {
        this.props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }

    renderPortfolio = () => {
        if (!this.props.portfolio && !this.props.errorMessage) return <Loader></Loader>;
        if (this.props.errorMessage && !this.props.portfolio) return this.props.errorMessage
        return this.props.portfolio.noteCollection.map(el => {
            return (
                <div onClick={() => this.gotoProject(el.themeId, el._id)} key={el._id} className={classes.Item}>
                    <div className={classes.Front} >
                        <div className={classes.TextContainer}>
                            <p >{el.title}</p>
                        </div>
                        <div className={classes.ImgContainer}>
                            <img src={el.img} alt={el.title} />
                        </div>
                        <div className={classes.ViewButton}>View Project</div>
                    </div>
                    <div className={classes.Back}>
                        <div className={classes.BackTextContainer}>
                            <p >{el.title}</p>
                        </div>
                        <p className={classes.Description}>{el.description}</p>
                        <div className={classes.BackImgContainer}
                            style={{ backgroundImage: `linear-gradient(to right bottom, rgb(182 180 241 / 80%), rgba(40, 180, 133, 0.8)),url(${el.img})` }}
                        />
                        <div className={classes.ViewButton}>View Project</div>
                    </div>

                </div>
            )
        })
    }
    render() {
        return (
            <div className={classes.Portfolio}>
                <div className={classes.Container}>
                    <h1 className={classes.MainTitle}>我的作品集</h1>
                    <div className={classes.Content}>
                        {this.renderPortfolio()}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const portfolio = state.notes.themes.find(el => el.type === "portfolio");

    return {
        portfolio,
        errorMessage:state.notes.errorMessage
    }
}

export default connect(mapStateToProps)(Portfolio)