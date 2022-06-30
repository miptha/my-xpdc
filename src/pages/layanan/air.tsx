import { IonBackButton, IonButtons, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Air: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
            <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Air Freight</IonTitle>
        </IonToolbar>
            </IonHeader>
            <IonContent color="warning">
                <IonImg src="assets/images/soon.png"></IonImg>
            </IonContent>
        </IonPage>
    )
}

 export default Air