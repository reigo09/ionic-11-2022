import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useState } from 'react';


const Ooteleht = () => {

  const [number, muudaNumber] = useState (0);

useIonViewDidEnter (()=>{
  muudaNumber(0);
})

function suurenda () {
muudaNumber (number + 1)
}
 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ooteleht</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ooteleht</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      <div className="keskele">
        <IonButton onClick={suurenda}>{number}</IonButton>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Ooteleht;
