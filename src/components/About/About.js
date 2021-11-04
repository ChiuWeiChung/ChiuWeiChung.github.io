import React from 'react';
import classes from './About.module.css';
import me from '../../assets/images/me.jpg'


const About = () => {
    return (
        <div className={classes.About}>
            <h2 className={classes.Name}>Rick Chiu</h2>
            <div className={classes.Story}>
                <figure className={classes.ImgContainer}>
                    <img className={classes.Me} alt="me" src={me}></img>
                </figure>
                <div className={classes.Content}>
                    府因怎合業的放系大提有人作。站用傷下、著兒紀服河人辦的學星但興己員見靈紀過作實現怎響死人。電個善低的類而化傳本應得上，好了念久天飛車像身業議長都在標希解以上幾力……法市天照、點單民不常術火許……球開的說單會來今你門經型必曾？人笑省的分，員議朋性業不現主長然育中時國起。是不直來列裡細往計什業孩野，向年氣也較度利這帶生上可連然特倒一理統起不有性者汽定總主速支著些飛關成制要倒。
                </div>
            </div>
        </div>

    )
}

export default About;