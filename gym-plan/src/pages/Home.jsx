import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';





const Home = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}}>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard >
<div className= "keskele" > 
 <img alt="Silhouette of mountains" src="https://static.vecteezy.com/system/resources/thumbnails/000/539/724/small/dumbbell_2__28b_w_29.jpg" />
</div>
     
      
      <IonCardHeader>
        <IonCardTitle color ="tertiary"> GymPlan</IonCardTitle>
        <IonCardSubtitle style = {{color:"black"}}>Why use our training plans?</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent  style = {{color:"black"}}>
      Our goal is for you to have professional training plans to help you achieve your goals.
      We have over 80 exercises to choose from.
        </IonCardContent>
        
        </IonCard>

        <IonCard >
<div className= "keskele" > 
 <img alt="Silhouette of mountains" src="/assets/pildid/plan Small.jpeg" />
</div>
     
      
     
        
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
