import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, home, homeOutline, informationCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
// Home resources
import Home from './pages/home';
import ClickCounter from './pages/clickcounter';
import Tab2 from './pages/profile';
import Calculator from './pages/calculator';
import ToDoListApp from './pages/ToDolist';





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
import TodoListApp from './pages/ToDolist';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        
        <IonRouterOutlet>
           {/* Application default route */}
           <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          {/* Home Router */}
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/profile" component={Tab1} />*/}
          <Route exact path="/profile" component={Tab2} />
          {/* <Route exact path="/clickcounter" >*/}
          <Route exact path="/clickcounter" component={ClickCounter} />
           {/* <Route exact path="/calculator" >*/}
           <Route exact path="/calculator" component={Calculator} />
            {/* <Route exact path="/ToDoList" >*/}
            <Route exact path="/TodoListApp" component={TodoListApp} />


      
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Home Tab Button */}
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="" href="">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon aria-hidden="true" icon={informationCircleOutline} />
            <IonLabel>Info</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
