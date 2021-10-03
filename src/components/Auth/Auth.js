import React from 'react'
import { googleClientID } from '../../key';
import { connect } from 'react-redux';
import { getAuth, signIn, signOut } from '../../store/actions/auth';
class Auth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: googleClientID,
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.props.getAuth(this.auth);
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            let id = this.auth.currentUser.get().getId();
            let name = this.auth.currentUser.get().getBasicProfile().getGivenName()
            this.props.signIn(id, name);  //dispatch the actions
        } else {
            console.log('signed out')
            this.props.signOut(); // dispatch the actions
        }
    }

    // signIn = () => {
    //     this.auth.signIn()
    // };

    // signOut = () => {
    //     this.auth.signOut();
    // };


    render() {
        return (
            null
        )
    }
}



export default connect(null, { getAuth, signIn, signOut })(Auth);