import { IonBackButton, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const regular: React.FC =() => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton color="primary" defaultHref="/beranda"></IonBackButton>
                </IonButtons>
                <IonTitle className='ion-text-center' color="primary">Regular</IonTitle>
            </IonToolbar>
        </IonHeader>
    </IonPage>
);

export default regular;