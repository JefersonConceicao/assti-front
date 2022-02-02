import React, { Fragment,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import { Provider } from 'react-redux';

import './index.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {routes} from './route';
import Login from './pages/auth/login';

const Root = (props) =>  {
  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || 'fade'
  const abortController = new AbortController();

  useEffect(() => {
      setAnim(animation)
      
      console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
      console.disableYellowBox = true;

      return function cleanup() {
          abortController.abort();
      }
    }, []);

    return(
      <Fragment>
        <Provider store={store}>
          <BrowserRouter basename={`/`}>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
              return (<Redirect to={`${process.env.PUBLIC_URL}/login`} />)
            }}/>

            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
            <App>
              <TransitionGroup>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={`${process.env.PUBLIC_URL}${path}`}>
                        {({ match }) => (
                            <CSSTransition 
                            in={match != null}
                            timeout={100}
                            classNames={anim} 
                            unmountOnExit
                            >
                            <div>
                              <Component/>
                            </div>
                            </CSSTransition> 
                        )}
                    </Route>
                    ))}
              </TransitionGroup>
            </App>
          </Switch>
          </BrowserRouter>
        </Provider>
      </Fragment>
      )
}
ReactDOM.render(<Root/>,
  document.getElementById('root')
);

serviceWorker.unregister();
