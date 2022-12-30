import { IonButtons,IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import {StreamingMedia  } from '@awesome-cordova-plugins/streaming-media';

const Page = () => {

  // constructor(private streamingMedia: StreamingMedia) { }

  // let options: StreamingVideoOptions = {
  //   successCallback: () => { console.log('Video played') },
  //   errorCallback: (e) => { console.log('Error streaming') },
  //   orientation: 'landscape',
  //   shouldAutoClose: true,
  //   controls: false
  // };
  
  // this.streamingMedia.playVideo('https://path/to/video/stream', options);

const openVideo  =  () => { 
  let options = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: false
  };
StreamingMedia.playVideo("/assets/videos/bench press.mov",options)
  
};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}}>Chest</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chest</IonTitle>
          </IonToolbar>
        </IonHeader>


      <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Chest day 1 </IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img onClick = {openVideo}  alt="Silhouette of mountains" src="/assets/pildid/bench press.jpeg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Bench press 4x8</IonLabel><IonButton onClick={openVideo}>▶</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/CF.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Machine fly/cable fly 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DB pullover.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. DB pullover 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/CC.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Low cable crossover 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>






    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary">Chest day 2</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/inclinebp.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Incline bench press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DBFLY.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. DB chest fly 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/mbench.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Machine bench press 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/HEX.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Hex press 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>








    <IonCard>
      <IonCardHeader>
        <IonCardTitle color ="tertiary" >Chest day 3</IonCardTitle>
        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/decline.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>1. Decline bench press 4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/IDBBP.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>2. Incline DB bench press
             4x8</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/IDBFLY.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>3. Incline DB fly 4x8</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/pildid/DIP.jpg" />
            </IonThumbnail>
            <IonLabel text-wrap>4. Dips 4x8</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Page;
