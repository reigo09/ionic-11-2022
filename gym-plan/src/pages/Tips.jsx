import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';





const Tips = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle style ={{ color:"black","fontWeight":"bold"}} >Tips</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>How to choose a weight?</IonCardTitle>
          <IonCardSubtitle>If the plan says 8 repetitions, choose a weight that allows you to do 7-9 reps.</IonCardSubtitle>
        </IonCardHeader>


      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>What body parts could be trained together on the same day?</IonCardTitle>
          <IonCardSubtitle>It depends on how often you go to the gym.</IonCardSubtitle>
        </IonCardHeader>


      </IonCard>

      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>Here is an example of how you can divide the plan if you train twice a week.</IonCardTitle>
          <IonCardSubtitle>First day: Chest, Back, Triceps </IonCardSubtitle>
          <IonCardSubtitle> Second day: Legs, Shoulders, Biceps </IonCardSubtitle>
        </IonCardHeader>


      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Here is an example of how you can divide the plan if you train 3 times a week.</IonCardTitle>
          <IonCardSubtitle>First day: Chest, Back, Triceps</IonCardSubtitle>
          <IonCardSubtitle>Second day: Legs, Shoulders </IonCardSubtitle>
          <IonCardSubtitle>Third day: Chest, Back, Biceps</IonCardSubtitle>
        </IonCardHeader>


      </IonCard>

      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>Here is an example of how you can divide the plan if you train 4 times a week.</IonCardTitle>
          <IonCardSubtitle>First day: Chest, Back, Triceps</IonCardSubtitle>
          <IonCardSubtitle>Second day: Legs, Shoulders</IonCardSubtitle>
          <IonCardSubtitle>Third day: Chest, Back, Biceps</IonCardSubtitle>
          <IonCardSubtitle>Fourth day: Legs/Glutes, Shoulders</IonCardSubtitle>
        </IonCardHeader>


      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>Here is an example of how you can divide the plan if you train 5 times a week.</IonCardTitle>
          <IonCardSubtitle>First day: Chest, Biceps, Triceps</IonCardSubtitle>
          <IonCardSubtitle>Second day: Back, Shoulders</IonCardSubtitle>
          <IonCardSubtitle>Third day: Legs/Glutes</IonCardSubtitle>
          <IonCardSubtitle>Fourth day: Chest, Biceps, Triceps</IonCardSubtitle>
          <IonCardSubtitle>Fifth day: Back, Shoulders</IonCardSubtitle>
        </IonCardHeader>


      </IonCard>



        
      </IonContent>
    </IonPage>
  );
};

export default Tips;
