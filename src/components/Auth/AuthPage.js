import React from 'react'
import classes from './AuthPage.module.css';
import { connect } from 'react-redux';

function AuthPage(props) {
    if(props.auth.authInstance){
        return (
            <div className={classes.AuthPage}>
                <button className={classes.Login} >
                    <i className="google icon" />
                    Sign In With Google
                </button>
                <button className={classes.Logout} >
                    <i className="google icon" />
                    Sign Out
                </button>
            </div>
        )
    }
    return null
}

const mapStateToProps = (state)=>{
    return{
        auth:state.auth
    }
}



export default connect(mapStateToProps,null)(AuthPage)
// export default AuthPage