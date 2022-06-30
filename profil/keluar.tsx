import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const keluar: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Keluar</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
);

export default keluar;
