import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/kujundus.css';
import './theme/variables.css';
import Home from './pages/Home';
import Chest from './pages/Chest';
import Back from './pages/Back';
import Legs from './pages/Legs';
import Shoulders from './pages/Shoulders';
import Biceps from './pages/Biceps';

import Triceps from './pages/Triceps';
import Glutes from './pages/Glutes';
import Tips from './pages/Tips';

import Menu from './components/Menu';



setupIonicReact();


const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {/* localhost:8100/---> localhost:8100/page/meist */}
            <Route path="/" exact={true}>
              <Redirect to="/page/home" />
            </Route>
            {/* <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            {/* localhost:8100/page/avaleht---> localhost:Avaleht.jsx faili */}
            <Route path="/page/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/page/Legs" exact={true}>
              <Legs />
            </Route>
            <Route path="/page/Chest" exact={true}>
              <Chest/>
            </Route>
            <Route path="/page/Biceps" exact={true}>
              <Biceps />
            </Route>
            <Route path="/page/Glutes" exact={true}>
              <Glutes />
            </Route>

            <Route path="/page/Triceps" exact={true}>
              <Triceps />
            </Route>
            <Route path="/page/Back" exact={true}>
              <Back />
            </Route>
            <Route path="/page/Shoulders" exact={true}>
              <Shoulders />
            </Route>
            <Route path="/page/Tips" exact={true}>
              <Tips />
            </Route>
            
            {/* <Route path="*" exact={true}>
              
           
            </Route> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;