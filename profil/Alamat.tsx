import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { add, notifications } from "ionicons/icons";

const Alamat: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
            </IonButtons>
            <IonTitle className='ion-text-center' color="primary">Alamat Saya</IonTitle>
        </IonToolbar>
        </IonHeader>
    <IonContent className='ion-content'>
        <IonCard>
        <IonLabel className='ion-alamat'>Detail Alamat</IonLabel>
            <IonCol>
            <div >
                <h6>Alamat: Perumahan Pondok Arum Blok G7 No.22G</h6>
            </div>
            <div >
                <h6>Kota: Tangerang</h6>
            </div>
            <div>
                <h6>Provinsi: Banten</h6>
            </div>
            <div>
                <h6>Kode Pos: 15112</h6>
            </div>
            <div>
                <h6>No Handphone: 089 670 xxx xxx</h6>
            </div>
            </IonCol>
        </IonCard>
        <IonFab vertical="bottom" horizontal="end">
            <IonFabButton href="/tambahalamat">
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>
        </IonFab>
    </IonContent>
    </IonPage>
);

export default Alamat;
