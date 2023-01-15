import { IonButtons, IonContent, IonHeader,IonCheckbox, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle, IonItem,IonInput, IonLabel, IonList, IonThumbnail } from '@ionic/react';

const Page = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}}>Back</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Back</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Back day 1</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/pullup.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Pull-ups 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DB row.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Bent-over row 4x8<IonCheckbox slot="start"></IonCheckbox> <IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/M pullup.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Pull-down 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem> </IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/Straight.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Straight-arm pulldown 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>




    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Back day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DL.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Deadlift 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/Cable pullup.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Wide-grip lat pulldown 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/M Row.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Machine row 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DB pullover.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. DB pullover 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Back day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/upp row.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Neutral-grip lat pulldown 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/face pull.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Face pull 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/one arm lat.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. One-arm lat pulldown 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
        <IonInput placeholder="Enter comment"></IonInput>
      </IonItem></IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/cable row.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Seated row 4x8 <IonCheckbox slot="start"></IonCheckbox><IonItem>
        
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
