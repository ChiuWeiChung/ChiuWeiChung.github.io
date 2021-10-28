import React from 'react';
import classes from './Portfolio.module.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Loader from '../UI/Loader/Loader';
class Portfolio extends React.Component {

    renderPortfolio = () => {

        if(!this.props.portfolio) return <Loader></Loader>;
        
        return this.props.portfolio.noteCollection.map(el => {
            return (
                <Link to={`/note?themeId=${el.themeId}&noteId=${el._id}`} key={el._id} className={classes.Item}>
                    <div className={classes.ImgContainer}>
                        <img src={el.img} alt={el.title} />
                    </div>
                    <div className={classes.TextContainer}>
                        <h4 className={classes.Title}>{el.title}</h4>
                        <p className={classes.Description}>{el.description} </p>
                    </div>
                    <figcaption className={classes.Caption}>點擊查看</figcaption>
                </Link>

            )
        })
    }
    render() {
        return (
            <div className={classes.Portfolio}>
                <div className={classes.Content}>
                    {this.renderPortfolio()}


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const portfolio = state.notes.themes.find(el => el.type === "portfolio");

    return {
        portfolio
    }
}

export default connect(mapStateToProps)(Portfolio)