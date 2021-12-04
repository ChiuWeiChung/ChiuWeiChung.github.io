import React, { useState, useEffect } from 'react'
import classes from './AuthPage.module.css';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { signIn, signInSecond, signOut } from '../../store/actions/auth';
import Loader from '../UI/Loader/Loader';

function AuthPage(props) {

    const [sec, setSec] = useState(60);

    useEffect(() => {

        let timer;
        if (props.auth.email) {
            timer = setTimeout(() => {
                setSec(prevSec => prevSec - 1);
            }, 1000)
        }

        if (sec === 0) {
            clearTimeout(timer);
            props.signOut();
            props.history.push('/');
        }

        return () => clearTimeout(timer)
    }, [sec, props])

    const onSubmit = async (values) => {
        props.signIn(values, setSec);
    };

    const sendVerifyNumber = (values) => {
        props.signInSecond(values,props.history);
    }

    const renderLoader = () => {
        if (props.auth.showLoader) {
            return <Loader></Loader>
        }

        if (props.auth.errorMessage) {
            return (
                <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Unable to LogIn  !!!</p>
            )
        }
    }


    if (!props.auth.email) {
        return (
            <div className={[classes.AuthPage, 'Main-Container'].join(' ')}  >
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, invalid, values }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Email</label>
                            <Field
                                component="input"
                                type='email'
                                name="email"
                                placeholder="Email"
                            ></Field>
                            <label>Password</label>
                            <Field
                                component="input"
                                type='password'
                                name="password"
                                placeholder="password"
                            ></Field>
                            <button className={classes.Login} type="submit" >
                                <i className="fas fa-sign-in-alt" style={{ marginRight: '1rem' }}></i>
                                Login
                            </button>
                        </form>
                    )}
                />
                {renderLoader()}
            </div>
        )
    } else {
        return (
            <div className={[classes.AuthPage, 'Main-Container'].join(' ')}  >
                <Form
                    onSubmit={sendVerifyNumber}
                    render={({ handleSubmit, form, invalid, values }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Verify Number</label>
                            <Field
                                component="input"
                                type='text'
                                name="verifyNumber"
                                placeholder=""
                            ></Field>
                            <button className={classes.Login} type="submit" >
                                Send
                            </button>
                            <h3>{sec} s</h3>
                        </form>
                    )}
                />
                {renderLoader()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}



export default connect(mapStateToProps, { signIn, signInSecond, signOut })(AuthPage)
