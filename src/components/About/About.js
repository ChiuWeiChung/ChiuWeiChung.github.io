import React, { useState } from 'react';
import aboutFields from './aboutFields';
import Footer from '../Footer/Footer';
import classes from './About.module.css';
import me from '../../assets/images/me.jpg';


const About = () => {
    const [active, setActive] = useState('skills');
    const [isLoaded, setIsLoaded] = useState(false);
    const tagClicker = (type) => {
        setActive(type)
    }

    const buttonActiveStyle = (type) => {
        const style = type === active ? classes.Active : null;
        return [classes.TagButton, style].join(' ')
    }

    const render = () => {
        return aboutFields.map(el => {
            return (
                <li className={classes.Item} key={el.id}>
                    <button className={buttonActiveStyle(el.type)} onClick={() => tagClicker(el.type)}>{el.label}</button>
                    <div style={active === el.type ? { visibility: 'visible',opacity:1 } : { visibility: 'hidden',opacity:0 }} className={classes.Content}>
                        {el.content}
                    </div>
                </li>
            )
        })
    }
    return (
        <div style={{opacity:isLoaded?1:0}} className={[classes.About, 'Main-Container'].join(' ')} onLoad={()=>setIsLoaded(true)} >
            <h2 className={classes.Name}>Rick Chiu</h2>
            <div className={classes.Story}>
                <figure className={classes.ImgContainer}>
                    <img className={classes.Me} alt="me" src={me}></img>
                </figure>

                <div className={classes.Bookmark}>
                    <ul className={classes.List}>
                        {render()}
                    </ul>
                </div>
            </div>
            <Footer layout={{position:'absolute',bottom:'0'}}/>
        </div>

    )
}

export default About;