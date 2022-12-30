import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { barbellOutline,barbellSharp,homeOutline,homeSharp,} from 'ionicons/icons';
import './Menu.css';



const appPages = [
  {
    title: 'Home',
    url: '/page/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Chest',
    url: '/page/Chest',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Back',
    url: '/page/Back',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Biceps',
    url: '/page/Biceps',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Triceps',
    url: '/page/Triceps',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Shoulders',
    url: '/page/Shoulders',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Legs',
    url: '/page/Legs',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Glutes',
    url: '/page/Glutes',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
 
  {
    title: 'Tips',
    url: '/page/Tips',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
 
];



const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader >Gym<span style ={{color:"blue"}}>Plan</span></IonListHeader>
          <IonNote >reigogymplan@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon style ={{color:"blue"}} slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
