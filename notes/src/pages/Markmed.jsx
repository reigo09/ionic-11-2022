import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';

const Markmed = () => {

const [markmedLS, muudaMarkmed]= useState (localStorage.getItem("märkmed"));

useIonViewDidEnter(() => {
  //   markmedLS = localStorage.getItem("märkmed");
  muudaMarkmed (localStorage.getItem("märkmed"));
})

const [muutuja, muudaMuutuja] = useState ("Tere123");

function kustuta () {
  muudaMuutuja("Kustutatud")

}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Kõik meie märkmed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kõik meie märkmed</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel>{muutuja}</IonLabel>
          <IonButton onClick={kustuta}>x</IonButton>
        </IonItem>



        <IonItem>
          <IonLabel>{markmedLS}</IonLabel>
        </IonItem>

        

      </IonContent>
    </IonPage>
  );
};

export default Markmed;
