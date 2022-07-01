import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const lupapassword: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                    <IonBackButton defaultHref="/Login"></IonBackButton>
                    </IonButtons>
                    <IonTitle color="primary">Lupa Password</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
}

export default lupapassword