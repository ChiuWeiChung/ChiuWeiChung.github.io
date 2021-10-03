import React from 'react'
import classes from './Hamburger.module.css';
const hamburger = (props)=>{
    return (
        <div onClick={props.clicked} className={classes.Hamburger}>
            <div className={classes.Line}></div>
            <div className={classes.Line}></div>
            <div className={classes.Line}></div>
        </div>
    )
}

export default hamburger;