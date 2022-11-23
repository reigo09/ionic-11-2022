import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel,} from '@ionic/react';
import { useRef } from 'react';

const Loomad = () => {

  const inputiluger = useRef();
  function lisa() {
    console.log ("Funktsioon käivitus!" + inputiluger.current.value);
    localStorage.setItem("loomad",inputiluger.current.value);
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>uus loom</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">uus loom</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonLabel>uus loom</IonLabel>
          <IonInput ref={inputiluger} placeholder="uus loom"></IonInput>
        </IonItem>

        <IonButton onClick={lisa}>Lisa loom</IonButton>
        
        </IonContent>
    </IonPage>
  );
};

export default Loomad;