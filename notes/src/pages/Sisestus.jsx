// import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
// import { IonInput, IonItem, IonLabel,IonText} from '@ionic/react';
// import { useRef, useState } from 'react';

// const Sisestus = () => {

//   const [sonum, muudaSonum]=useState ("");
//   // useState vasakpoolset muutujat, mille panen HTMLi
//   // parempoolset funktsiooni, millega muuta
//   // algväärtuseks panen tühja sõnumi  --> ""
//   // muudan seda algväärtust lisa() funktsiooni sees

//   // lehele tulles pane alati sõnum tagasi tühjuseks --> ""
//   // ionViewDidEnter ja selle sees kutsun välja parempoolse funktsiooni, millega sai muuta

//   const inputiluger = useRef();
//   useIonViewWillEnter (()=>{
//     muudaSonum("");
//   })
//   function lisa() {

//     localStorage.setItem("märkmed",inputiluger.current.value);
//     muudaSonum("Uus märge lisatud!");
//     inputiluger.current.value = "";
//   }

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonTitle>Lisa uus</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Lisa uus</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         <IonItem>
//           <IonLabel>Lisa uus märge</IonLabel>
//           <IonInput ref={inputiluger} placeholder="Siseta siia vabalt valitud märkmeid"></IonInput>
//         </IonItem>
        
//         <div className="keskele"> 
//           <IonButton onClick={lisa}>Sisesta</IonButton>
//           <IonText color="tertiary">
//             <h3>{sonum}</h3>
//           </IonText>
//          </div>

//       </IonContent>
//     </IonPage>
//   );
// };

// export default Sisestus;


import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonText} from '@ionic/react';
import { IonButton } from '@ionic/react';
import { useRef, useState } from 'react';
import './Page.css';


const Sisestus = () => {


const [sonum, muudaSonum]= useState ("");
  

const inputiLuger = useRef ();

useIonViewDidEnter (()=>{
  muudaSonum ("");
})
  


function lisa () {
let sisestusLS = localStorage.getItem("markmed") || "[]";
sisestusLS = JSON.parse(sisestusLS);
sisestusLS.push(inputiLuger.current.value);
sisestusLS = JSON.stringify(sisestusLS);
localStorage.setItem("markmed",sisestusLS);

  
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
          <IonTitle>Android MENÜÜ</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">IOS MENÜÜ</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem counter={true}>
          <IonLabel position="floating">Lisa uus märge</IonLabel>
          <IonInput ref={inputiLuger} maxlength={30}></IonInput>
       </IonItem>


    <div className='keskele'>
      <IonButton shape="round" onClick={lisa}>Sisesta</IonButton>
      <IonText color="tertiary">
        <h3>{sonum}</h3>
      </IonText>

    </div>


      </IonContent>
    </IonPage>
  );
};

export default Sisestus;
