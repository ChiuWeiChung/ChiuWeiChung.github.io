import React from 'react';
import Layout from './hoc/Layout';
import './App.css';
//=====Route Component=====
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Note from './components/Note/Note';
import AuthPage from './components/Auth/AuthPage';
import NoteForm from './components/Note/NoteForm/NoteForm';
import Portfolio from './components/Portfolio/Portfolio';
import authRoute from './config/authRoute';
// =====redux====
import { connect } from 'react-redux';
import { fetchNote } from './store/actions/note';
import {authCheckState} from './store/actions/auth';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchNote();
    this.props.authCheckState();
  }

  render() {

    let route = (

      <Switch>
        <Route exact path={authRoute} component={AuthPage} />
        <Route path="/note" component={Note} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>

    )
    if (this.props.isSignIn) {
      route = (
        <Switch>
          <Route path="/note/new" component={NoteForm} />
          <Route path="/note" component={Note} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      )
    }


    return (
      <div style={{ position: 'relative' }}>
        <Layout>
          {route}
        </Layout>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isSignIn: state.auth.isSignIn
  }
}

export default connect(mapStateToProps, { fetchNote,authCheckState })(App)