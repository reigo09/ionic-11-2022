import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';


const Page = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}} >Shoulders</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Shoulders</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Shoulders  day 1</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/olg1.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Dumbbell shoulder press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg6.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Cable lateral raise 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg4.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Front raise 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg7.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Reverse cable flye 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>




    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Shoulders  day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/BB press.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. BB press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg3.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Upright barbell row 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg5.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Rear delt fly 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg8.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Front cable raise 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Shoulders day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/olg2.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Arnold press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/lendamine.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Side lateral raise 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/facepull.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Face pull 4x8</IonLabel>
          </IonItem>

         
        </IonList>
      </IonCardContent>
    </IonCard>




      </IonContent>
    </IonPage>
  );
};

export default Page;
