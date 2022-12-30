import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonItem, IonLabel, IonList,IonButton } from '@ionic/react';
import { useState } from 'react';
import './Page.css';


const Toiduained = () => {

  
  const [toiduained, uuendaToiduained] = useState([]);

useIonViewDidEnter ( ()=> {
  let toiduainedLS = localStorage.getItem("toiduained") || "[]"; 
  toiduainedLS = JSON.parse(toiduainedLS);
  uuendaToiduained (toiduainedLS);
} )


function kustuta(j2rjekorranr){
  // .push() on lisamineks
  // .splice() kustutamiseks
  toiduained.splice(j2rjekorranr,1); // esimene nr on mitmendat ja teine nr on mitu tk
   // uuendama htmli, mis on visuaal
 uuendaToiduained(toiduained.slice());
  // uuendama localStorage, mis on salvestus
  localStorage.setItem("toiduained", JSON.stringify(toiduained));
}

function tyhjenda (){
  uuendaToiduained([]);
  localStorage.setItem("toiduained", JSON.stringify([]));
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{color:"blue"}}>Ostunimekiri</IonTitle>
        </IonToolbar>
      </IonHeader>

   
 

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle style ={{color:"blue"}} size="large">Ostunimekiri</IonTitle>
          </IonToolbar>
        </IonHeader>

           <IonText style ={{color:"blue"}} className="keskele"> 
          <h3>{toiduained.length} tk</h3>
        
      </IonText>

        <IonList>
         {toiduained.map((element,i) => 
         <IonItem key ={i}>
            <IonLabel>{element}</IonLabel>
            <IonButton onClick={() => kustuta(i)}>x</IonButton>
          </IonItem>)}
        </IonList>
        


        {/* <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{toiduained}</IonLabel>
          </IonItem>
        </IonList> */}

          <IonButton  shape="round" onClick= {tyhjenda}>Kustuta kõik</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Toiduained;
