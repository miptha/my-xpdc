import { IonBackButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const undangan: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Undangan Saya</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className='ion-content'>
            <IonCard>
                
            </IonCard>
    </IonContent>
    </IonPage>
);

export default undangan;
