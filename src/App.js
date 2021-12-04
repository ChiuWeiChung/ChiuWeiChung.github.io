import React, { useEffect, Suspense } from 'react';
import Layout from './hoc/Layout';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import authRoute from './config/authRoute';
// =====redux====
import { connect } from 'react-redux';
import { fetchNote } from './store/actions/note';
import { authCheckState } from './store/actions/auth';
import NoteLoader from './components/UI/NoteLoader/NoteLoader';
//=====Route Component=====
const NoteForm = React.lazy(() => import('./components/Note/NoteForm/NoteForm'));
const Note = React.lazy(() => import('./components/Note/Note'));
const About = React.lazy(() => import('./components/About/About'));
const AuthPage = React.lazy(() => import('./components/Auth/AuthPage'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Home = React.lazy(() => import('./components/Home/Home'));



const App = (props) => {
  useEffect(() => {
    props.fetchNote();
    props.authCheckState();
  }, [props])

  let route = (
    <Switch>
      {props.isSignIn && <Route path="/note/new" component={NoteForm} />}
      {props.isSignIn && <Route path="/note/edit" component={NoteForm} />}
      {!props.isSignIn && <Route exact path={authRoute} component={AuthPage} />}
      <Route exact path="/note" component={Note} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/aboutme" component={About} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div>
      <Layout>
        <Suspense fallback={<div className='lazy-loader'><NoteLoader/></div>}>
          {route}
        </Suspense>
      </Layout>
    </div>
  )

}


const mapStateToProps = (state) => {
  return {
    isSignIn: state.auth.isSignIn,
    renderListener: state.notes.render
  }
}

export default connect(mapStateToProps, { fetchNote, authCheckState })(App)