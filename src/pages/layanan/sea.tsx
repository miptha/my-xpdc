import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Sea: React.FC = () => {
    return (
        <IonPage>
              <IonHeader>
            <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Sea Freight</IonTitle>
        </IonToolbar>
            </IonHeader>
            <IonContent color="warning">
                <IonImg src="assets/images/soon.png"></IonImg>
            </IonContent>
        </IonPage>
    )
}

export default Sea 