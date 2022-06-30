import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const invoice: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Invoice</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className='ion-content'>
            
    </IonContent>
    </IonPage>
);

export default invoice;
