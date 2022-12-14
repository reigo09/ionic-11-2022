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
import { accessibilitySharp, accessibilityOutline,archiveOutline, archiveSharp,    mailOutline, mailSharp,homeOutline,homeSharp,
  //  heartOutline, heartSharp,paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,

     
      addOutline, addSharp } from 'ionicons/icons';
import './Menu.css';



const appPages = [
  {
    title: 'Avaleht',
    url: '/page/Avaleht',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
 
  {
    title: 'Kõik märkmed ',
    url: '/page/markmed',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: 'Lisa uus ',
    url: '/page/sisestus',
    iosIcon: addOutline,
    mdIcon: addSharp,
  },
  {
    title: 'Info meist',
    url: '/page/meist',
    iosIcon: accessibilityOutline,
    mdIcon: accessibilitySharp
  },
  {
    title: 'Ooteleht',
    url: '/page/ooteleht',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
 
];


const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Märkmed</IonListHeader>
          <IonNote>Märkmete sisestamis rakendus</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
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
