import { IonBackButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const syaratscreen: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Syarat dan Ketentuan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      <IonItem href='/profil/definisi'>
        <IonLabel>Definisi</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/profil/syaratpengiriman'>
        <IonLabel>Syarat Pengiriman</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/profil/jenis'>
        <IonLabel>Jenis-Jenis Barang Terlarang</IonLabel>
      </IonItem>
      </IonList>
      </IonContent>
    </IonPage>
);

export default syaratscreen;
