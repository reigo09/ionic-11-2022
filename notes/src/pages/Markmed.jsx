import { IonButton,IonButtons,IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonItem, IonLabel } from '@ionic/react';
import { useRef, useState } from 'react';
import './Page.css';
const Markmed = () => {

const [markmedLS, muudaMarkmed]= useState ([]) ;





useIonViewDidEnter ( ()=> {
  let markmedLS = localStorage.getItem("markmed") || "[]"; 
  markmedLS = JSON.parse(markmedLS);
 muudaMarkmed (markmedLS);
} )







  function kustuta (j2rjekorranr){
    // .push() on lisamineks
    // .splice() kustutamiseks
    markmedLS.splice(j2rjekorranr,1); // esimene nr on mitmendat ja teine nr on mitu tk
    // uuendama htmli, mis on visuaal
  muudaMarkmed(markmedLS.slice());

  
    localStorage.setItem("markmed", JSON.stringify([]));
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

        <IonList>
          {markmedLS.map((element,i) => 
         <IonItem key ={i}>
            <IonLabel>{element}</IonLabel>
            <IonButton onClick={() => kustuta(i)}>x</IonButton>
          </IonItem>)}
     
        </IonList>

        





      </IonContent>
    </IonPage>
  );
};

export default Markmed;


// import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
// import { IonItem, IonLabel, IonList,IonButton } from '@ionic/react';
// import { useState } from 'react';
// import './Page.css';


// const Markmed = () => {

  
//   const [markmed, uuendaMarkmed] = useState([]);

// useIonViewDidEnter ( ()=> {
//   let markmedLS = localStorage.getItem("markmed") || "[]"; 
//   markmedLS = JSON.parse(markmedLS);
//   uuendaMarkmed(markmedLS);
// } )


// function kustuta(j2rjekorranr){
//   // .push() on lisamineks
//   // .splice() kustutamiseks
//   markmed.splice(j2rjekorranr,1); // esimene nr on mitmendat ja teine nr on mitu tk
//    // uuendama htmli, mis on visuaal
//  uuendaMarkmed(markmed.slice());
//   // uuendama localStorage, mis on salvestus
//   localStorage.setItem("markmed", JSON.stringify(markmed));
// }

// function tyhjenda (){
//   uuendaMarkmed([]);
//   localStorage.setItem("markmed", JSON.stringify([]));
// }
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle>Android MENÜÜ</IonTitle>
//         </IonToolbar>
//       </IonHeader>

   
 

//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">IOS MENÜÜ</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//            <IonText className="keskele"> 
//           <h3>{markmed.length} tk</h3>
        
//       </IonText>

//         <IonList>
//          {markmed.map((element,i) => 
//          <IonItem key ={i}>
//             <IonLabel>{element}</IonLabel>
//             <IonButton onClick={() => kustuta(i)}>x</IonButton>
//           </IonItem>)}
     
//         </IonList>
        


//         {/* <IonList>
//           <IonItem>
            
//           </IonItem>
//           <IonItem>
//             <IonLabel>Mega Man X</IonLabel>
//           </IonItem>
//           <IonItem>
//             <IonLabel>The Legend of Zelda</IonLabel>
//           </IonItem>
//           <IonItem>
//             <IonLabel>Pac-Man</IonLabel>
//           </IonItem>
//           <IonItem>
//             <IonLabel>Super Mario World</IonLabel>
//           </IonItem>
//           <IonItem>
//             <IonLabel>{toiduained}</IonLabel>
//           </IonItem>
//         </IonList> */}

//           <IonButton shape="round" onClick= {tyhjenda}>Tühjenda</IonButton>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Markmed;