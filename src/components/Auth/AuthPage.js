import React from 'react'
import classes from './AuthPage.module.css';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { signIn } from '../../store/actions/auth';

function AuthPage(props) {
    const onSubmit = async (values) => {
        props.signIn(values, props.history);
    };

    if (!props.auth.isSignIn) {
        return (
            <div className={classes.AuthPage}  >
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

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}



export default connect(mapStateToProps, { signIn })(AuthPage)
// export default AuthPage