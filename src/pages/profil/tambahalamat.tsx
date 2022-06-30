import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const tambahalamat: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Tambah Alamat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
        
        <IonCard>
            <IonItem>
                <IonLabel position="stacked">Alamat</IonLabel>
                <IonInput placeholder="   Masukan Alamat"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Kota</IonLabel>
              <IonInput placeholder="   Masukan Kota"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Provinsi</IonLabel>
              <IonSelect placeholder="Provinsi">
              <IonSelectOption value="DKI Jakarta">DKI Jakarta</IonSelectOption>
              <IonSelectOption value="Banten">Banten</IonSelectOption>
              <IonSelectOption value="Sumatera Barat">Sumatera Barat</IonSelectOption>
              <IonSelectOption value="Jawa Barat">Jawa Barat</IonSelectOption>
              <IonSelectOption value="Sumatera Utara">Sumatera Utara</IonSelectOption>
              </IonSelect>       
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Kode Pos</IonLabel>
              <IonInput placeholder="   Masukan Kode Pos"></IonInput>
            </IonItem>
            <IonButton expand="block">Simpan</IonButton>

            
        </IonCard>
        
      </IonContent>
    </IonPage>
);

export default tambahalamat;
