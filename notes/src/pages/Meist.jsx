import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
// import { useParams } from 'react-router';

import './Page.css';

const Page = () => {

  // const { name } = useParams(); URL parameetritest võttis väärtuse

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Meist</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Meist</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
            <img alt="Silhouette of mountains" src= "https://www.helpguide.org/wp-content/uploads/woman-mixing-ingredients-and-vegetables-in-pan-while-preparing-lunch-768.jpg" />
           <IonCardHeader>
              <IonCardTitle>Meie rakendus</IonCardTitle>
              <IonCardSubtitle>Siin on kirjeldus</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Siin on pikem kirjeldus meist ja kogu sellest rakendusest
            </IonCardContent>
            
          </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
