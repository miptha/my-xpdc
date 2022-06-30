import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import './mandiri.css';

const mandiri: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton color="primary" defaultHref='/topup'>
                        </IonBackButton>
                        <IonTitle color="primary">Metode Pembayaran</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonItem><img src='assets/images/mandiri.svg' className='logo'></img>Bank Mandiri (Dicek Otomatis)</IonItem>
                    <IonItem>No. Rekening</IonItem>
                    <IonItem color="primary">155 200 XXX 300</IonItem>
                    <IonItem className="vr">Pembayaran ke Virtual Account di atas</IonItem>                
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default mandiri