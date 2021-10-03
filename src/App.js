import React from 'react';
import Layout from './hoc/Layout';
import './App.css';
import Home from './components/Home/Home';
import AuthPage from './components/Auth/AuthPage';
import authRoute from './config/authRoute';
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends React.Component {


  render() {
    return (
        <div style={{position:'relative'}}>
          <Layout>
            <Switch>
                <Route path={authRoute} component={AuthPage} />
                <Route  path="/" component={Home}/>
                <Redirect to="/" />
            </Switch>
          </Layout>
        </div>
    )
  }
}


export default App