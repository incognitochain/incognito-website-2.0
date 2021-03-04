import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesktopApp from './containers/desktop/App';
import MobileApp from './containers/mobile/App';
//import { Provider } from 'react-redux';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-147717164-1');
ReactGA.pageview(window.location.pathname + window.location.search); 
 
ReactDOM.render( 
    <Router> 
      { isMobile ?  <MobileApp/> : <DesktopApp/> }
    </Router>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//      {/* <Router>
//          {
//           isMobile ?  <MobileApp/> : <DesktopApp/>
//          }
//     </Router> */}
//     <Router>
//         <Switch>
//           <Route path="/" component={DesktopApp} />
//           <Route path="/about-you" component={AboutYou} />
//           <Route path="/about-us" component={AboutUs} />
//         </Switch>
//     </Router> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
