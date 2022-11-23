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
import './theme/variables.css';
import Avaleht from './pages/Avaleht';
import Sisestus from './pages/Sisestus';
import Menu from './components/Menu';
import Meist from './pages/Meist';
import Markmed from './pages/Markmed';


import'./theme/kujundus.css';
import Ooteleht from './pages/Ooteleht';


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
              <Redirect to="/page/meist" />
            </Route>
            {/* <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            {/* localhost:8100/page/avaleht---> localhost:Avaleht.jsx faili */}
            <Route path="/page/avaleht" exact={true}>
              <Avaleht />
            </Route>
            <Route path="/page/Markmed" exact={true}>
              <Markmed />
            </Route>
            <Route path="/page/sisestus" exact={true}>
              <Sisestus/>
            </Route>
            <Route path="/page/loomade-varjupaik" exact={true}>
              <loomade-varjupaik />
            </Route>
            <Route path="/page/meist" exact={true}>
              <Meist />
            </Route>
            <Route path="/page/Ooteleht" exact={true}>
              <Ooteleht />
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

// katki läheb rakendus kahes kohas:
// 1. kompileerimisel (koodi ülevaatusel/pakkimisel)
// 2. brauseris töötades

//1. kui juhtub viga komileerimisel, siis tuleb see viga ka sinna kuhu kirjutasin ionic serve ja brauseriss on see viga kirjas

// 2. kui juhtub viga brauseris (run-time error ), siis leht on üleni valge ja jonic serve taga võib olla terminalis kõik ok viga on leitav: parem klõps lehel--> vajutan inspect --> vajutan console
