import React from 'react';
import Hamburger from '../UI/Hamburger/Hamburger';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const navigation = (props) => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Logo}><i className="fas fa-code"></i>
                <Link to="/"> Rick的網頁開發筆記</Link>
            </div>
            <NavigationItems />
            <Hamburger clicked={props.clicked} />
            <div >{props.auth.isSignIn?`Hi ${props.auth.userName}`:''}</div>
        </div >
    )
}

const mapStateToProps = (state)=>{
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps)(navigation)