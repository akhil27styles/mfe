import React ,{lazy,Suspense, useEffect, useState}from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory} from 'history';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const MarketingLazy =   lazy(()=>import('./components/MarketingApp'));
const AuthLazy = lazy(()=>import('./components/AuthApp'))
const DashboardLazy = lazy(()=>import('./components/DashboardApp'))
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();
export default () => {
  const [isSignedIn,setIsSignedIn] =useState(false);

  useEffect(()=>{
    if(isSignedIn){
      console.log('Signed In');
      history.push('/dashboard');
    }
    else{
      history.push('/')
    }
  },[isSignedIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<ProgressBar/>}>
          <Switch>
            <Route path="/auth">
            <AuthLazy onSignIn={()=> setIsSignedIn(true)}/>
            </Route>
            <Route path="/dashboard">
            {!isSignedIn && <Redirect to="/"/>}
            <DashboardLazy/>
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
