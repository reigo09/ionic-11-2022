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
          <IonTitle style ={{ color:"black","fontWeight":"bold"}} >Triceps</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Triceps</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Triceps day 1</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric6.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Close-grip bench press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric4.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Cable one-arm tricep extension 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric5.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Dips 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>




    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Triceps day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric1.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Cable rope pressdown 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric7.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Skull crusher 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/ttt.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Overhead triceps extension 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Triceps day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric123.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Incline DB tricep extension 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric3.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Standing overhead cable triceps extension 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="assets/pildid/tric2.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Cable rear drive 4x8</IonLabel>
          </IonItem>


        </IonList>
      </IonCardContent>
    </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Page;
