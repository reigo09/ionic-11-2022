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
          <IonTitle style ={{ color:"black","fontWeight":"bold"}}>Biceps</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Biceps</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Biceps day 1</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic1.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Standing cable curl 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic3.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Preacher hammer DB curl 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic4.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. One-arm DB preacher curl 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>




    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Biceps day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic5.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Incline hammer curl 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic7.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Standing barbell curl 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic6.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Spider curl 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Biceps day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/mbic.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Machine preacher curl 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic2.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Cable hammer curl (rope attachment) 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/bic8.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Overhead cable curl 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>




      </IonContent>
    </IonPage>
  );
};

export default Page;
