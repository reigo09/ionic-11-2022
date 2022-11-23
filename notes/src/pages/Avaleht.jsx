import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton } from '@ionic/react';


const Avaleht = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Avaleht</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Avaleht</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/page/meist">Mine vaata infot meist</IonButton>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Avaleht;
