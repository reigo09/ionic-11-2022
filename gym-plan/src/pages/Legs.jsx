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
          <IonTitle style ={{ color:"black","fontWeight":"bold"}} >Legs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Legs</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Leg day 1 </IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/bbsquat.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. BB squat 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/legex.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Leg extension 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/legcurl.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Leg curl 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/legpress.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Leg press 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DBcalf.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>5. DB calf raise 4x8</IonLabel>
          </IonItem>

        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Leg day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/BBfrontsquat.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. BB front squat 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/RD.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Romanian deadlift 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/singlelegpress.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Single-leg leg press 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/calfpress.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Calf press 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>








    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary" >Leg day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/hack.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Hack Squat 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/BBL.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. BB lunge
             4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/SLRDL.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Single-leg RDL 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/seatedcalf.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Seated calf raise 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Page;
