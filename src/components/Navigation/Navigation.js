import React from 'react';
import Search from '../Search/Search';
import Hamburger from '../UI/Hamburger/Hamburger';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary';
import { signOut } from '../../store/actions/auth';

const navigation = (props) => {
    const renderAuthInfo = () => {
        if (props.auth.isSignIn) {
            return (
                <Aux>
                    <button className={classes.SignoutButton} onClick={props.signOut}>登出</button>
                </Aux>
            )
        }
    }
    return (
        <div className={classes.Navbar}>
            <div className={classes.Logo}><i className="fas fa-code"></i>
                <Link to="/"> Rick 的開發筆記</Link>
            </div>
            <Hamburger clicked={props.clicked} />
            <Link className={classes.HomeIcon} to="/">
                <i className="fas fa-home"></i>
            </Link>
            <Search />
            <NavigationItems />
            {renderAuthInfo()}
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { signOut })(navigation)