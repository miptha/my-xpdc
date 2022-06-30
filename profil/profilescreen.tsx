import { IonBackButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const profilescreen: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Edit Akun </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
            <div>
                <p>
                    <IonRow>
                        
                    </IonRow>
                </p>
            </div>
        </IonCard>
      </IonContent>
    </IonPage>
);

export default profilescreen;