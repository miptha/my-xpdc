import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const bca: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton color="primary" defaultHref='/topup'></IonBackButton>
                        <IonTitle color="primary">Metode Pembayaran</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonItem><img src="assets/images/bca.svg" className="logo"></img>Bank BCA (Dicek Otomatis)</IonItem>
                    <IonItem>No. Rekening</IonItem>
                    <IonItem color="primary">573 170 XXX 777</IonItem>
                    <IonItem className="vr">Pembayaran ke Virtual Account di atas</IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default bca