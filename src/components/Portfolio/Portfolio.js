import React, { useState,useEffect } from 'react';
import classes from './Portfolio.module.css';
import { connect } from 'react-redux';
import NoteLoader from '../UI/NoteLoader/NoteLoader'
import Markdown from 'markdown-to-jsx';
import Loader from '../UI/Loader/Loader';
import Footer from '../Footer/Footer';
const Portfolio = (props) => {
    const [loaded,setLoaded]=useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const gotoProject = (themeId, noteId) => {
        props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
    }

    const renderPortfolio = () => {
        if (!props.portfolio && !props.errorMessage) return <Loader></Loader>;
        if (props.errorMessage && !props.portfolio) return props.errorMessage;
        props.portfolio.noteCollection.sort((a, b) => {
            return new Date(b.updatedDate) - new Date(a.updatedDate)
        });

        return props.portfolio.noteCollection.map(el => {
            return (
                <div onClick={() => gotoProject(el.themeId, el._id)} key={el._id} className={classes.Item}>
                    <div className={classes.Front} >
                        <div className={classes.TextContainer}>
                            <p >{el.title}</p>
                        </div>
                        <div className={classes.ImgContainer}>
                            {loaded?null:<NoteLoader />}
                            <img src={el.img} alt={el.title} onLoad={()=>{setLoaded(true)}}  />
                        </div>
                        <div className={classes.ViewButton}>View Project</div>
                    </div>
                    <div className={classes.Back}>
                        <div className={classes.BackTextContainer}>
                            <p >{el.title}</p>
                        </div>
                        <Markdown>{el.description}</Markdown>
                        <div className={classes.ViewButton}>View Project</div>
                    </div>

                </div>
            )
        })
    }

    return (
        <div className={[classes.Portfolio, 'Main-Container'].join(' ')}>
            <div className={classes.Container}>
                <h1 className={classes.MainTitle}>我的作品集</h1>
                <div className={classes.Content}>
                    {renderPortfolio()}
                </div>
            </div>
            <Footer />
        </div>
    )

}

const mapStateToProps = (state) => {
    const portfolio = state.notes.themes.find(el => el.type === "portfolio");

    return {
        portfolio,
        errorMessage: state.notes.errorMessage
    }
}
// class Portfolio extends React.Component {

//     componentDidMount() {
//         window.scrollTo(0, 0)
//     }

//     gotoProject = (themeId, noteId) => {
//         this.props.history.push(`/note?themeId=${themeId}&noteId=${noteId}`)
//     }

//     renderPortfolio = () => {
//         if (!this.props.portfolio && !this.props.errorMessage) return <Loader></Loader>;
//         if (this.props.errorMessage && !this.props.portfolio) return this.props.errorMessage;
//         this.props.portfolio.noteCollection.sort((a, b) => {
//             return new Date(b.updatedDate) - new Date(a.updatedDate)
//         });

//         return this.props.portfolio.noteCollection.map(el => {
//             return (
//                 <div onClick={() => this.gotoProject(el.themeId, el._id)} key={el._id} className={classes.Item}>
//                     <div className={classes.Front} >
//                         <div className={classes.TextContainer}>
//                             <p >{el.title}</p>
//                         </div>
//                         <div className={classes.ImgContainer}>
//                             <NoteLoader/>
//                             {/* <img src={el.img} alt={el.title}  /> */}
//                         </div>
//                         <div className={classes.ViewButton}>View Project</div>
//                     </div>
//                     <div className={classes.Back}>
//                         <div className={classes.BackTextContainer}>
//                             <p >{el.title}</p>
//                         </div>
//                         <Markdown>{el.description}</Markdown>
//                         <div className={classes.ViewButton}>View Project</div>
//                     </div>

//                 </div>
//             )
//         })
//     }
//     render() {
//         return (
//             <div className={classes.Portfolio}>
//                 <div className={classes.Container}>
//                     <h1 className={classes.MainTitle}>我的作品集</h1>
//                     <div className={classes.Content}>
//                         {this.renderPortfolio()}
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     const portfolio = state.notes.themes.find(el => el.type === "portfolio");

//     return {
//         portfolio,
//         errorMessage: state.notes.errorMessage
//     }
// }

export default connect(mapStateToProps)(Portfolio)