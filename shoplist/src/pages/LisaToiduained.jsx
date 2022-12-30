import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonText} from '@ionic/react';
import { IonButton } from '@ionic/react';
import { useRef, useState } from 'react';
import './Page.css';


const LisaToiduained = () => {


const [sonum, muudaSonum]= useState ("");
  

const inputiLuger = useRef ();

useIonViewDidEnter (()=>{
  muudaSonum ("");
})
  


function lisa () {
let toiduainedLS = localStorage.getItem("toiduained") || "[]";
toiduainedLS = JSON.parse(toiduainedLS);
toiduainedLS.push(inputiLuger.current.value);
toiduainedLS = JSON.stringify(toiduainedLS);
localStorage.setItem("toiduained",toiduainedLS);

  
  muudaSonum("Sisestatud")
  inputiLuger.current.value = "";
}

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{color:"blue"}}>Lisa toode</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style ={{color:"blue"}} size="large">Lisa toode</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem counter={true}>
          <IonLabel position="floating">Lisa toode</IonLabel>
          <IonInput ref={inputiLuger} maxlength={30}></IonInput>
       </IonItem>


    <div className='keskele'>
      <IonButton  shape="round" onClick={lisa}>Sisesta</IonButton>
      <IonText color="tertiary">
        <h3>{sonum}</h3>
      </IonText>

    </div>


      </IonContent>
    </IonPage>
  );
};

export default LisaToiduained;
