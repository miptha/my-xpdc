import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { text } from "ionicons/icons";
import { setCacheNameDetails } from "workbox-core";

const ubahnama: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="primary" defaultHref='/profil/profil' ></IonBackButton>
          </IonButtons>
            <IonTitle className='ion-text-center' color="primary">Ubah Nama</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonItem>Nama</IonItem>
          <IonItem>
            <IonInput placeholder="Masukan Nama" clearInput></IonInput>
          </IonItem>
          <IonButton className="button-simpan" expand="block">Simpan</IonButton>
                
            </IonCard>
        </IonContent>
        </IonPage>
    )
}

export default ubahnama;

function setNama(value: any) {
    throw new Error("Function not implemented.");
}

