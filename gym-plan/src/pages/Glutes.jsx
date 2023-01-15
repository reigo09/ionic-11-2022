import { IonButtons, IonContent,IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem,IonInput, IonLabel, IonList, IonThumbnail } from '@ionic/react';

const Page = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}} >Glutes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Glutes</IonTitle>
          </IonToolbar>
        </IonHeader>


       
        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Glute day 1 </IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/bbhipthrust.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. BB hip thrust 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/SLRDL.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Single-leg RDL 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/kkk.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Cable kick-back 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Glute day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/hbs.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. B-stance hip thrust 4x10 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DBRDL.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. RDL 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/pepu.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Glute-focused back extension 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

     
        </IonList>
      </IonCardContent>
    </IonCard>








    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary" >Glute day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/bbhipthrust.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Paused hip thrust 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/bbbs.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. B-stance RDL 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/singlelegp.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Single-leg leg press 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>



      </IonContent>
    </IonPage>
  );
};

export default Page;