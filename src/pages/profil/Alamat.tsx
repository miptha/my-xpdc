import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { add, notifications } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import './Alamat.css';

const Alamat: React.FC = () => {
        const modal = useRef<HTMLIonModalElement>(null);
        const page = useRef(null);

        const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

        useEffect(() => {
            setPresentingElement(page.current);
        }, []);

        function dismiss() {
            modal.current?.dismiss();
        }

    return(
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
            <IonItem>
            <div >
                <h6>Alamat: Perumahan Pondok Arum Blok G7 No.22G</h6>
            </div>
            </IonItem>
            <IonItem>
            <div >
                <h6>Kota: Tangerang</h6>
            </div>
            </IonItem>
            <IonItem>
            <div>
                <h6>Provinsi: Banten</h6>
            </div>
            </IonItem>
            <IonItem>
            <div>
                <h6>Kode Pos: 15112</h6>
            </div>
            </IonItem>
            <IonItem>
            <div>
                <h6>No Handphone: 089 670 xxx xxx</h6>
            </div>
            </IonItem>
            </IonCol>
        </IonCard>
        <IonFab vertical="bottom" horizontal="end" id="open-modal">
            <IonFabButton id="open-modal">
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>
        </IonFab>

        <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle color="primary">Tambah Alamat Baru</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" color="primary">
         
            <IonCard >
            <IonList >
              <IonItem >
                <IonLabel position="stacked">Nama</IonLabel>
                <IonInput placeholder="   Masukan Nama"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">No. Handphone</IonLabel>
                <IonInput placeholder="   Masukan No. Handphone"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Alamat</IonLabel>
                <IonInput placeholder="   Masukan Alamat"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Lokasi</IonLabel>
                <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="  Masukan lokasi"></IonSearchbar>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput placeholder="   Masukan Email"></IonInput>
              </IonItem>
              <IonButton expand="block">Simpan</IonButton>
            </IonList>
            </IonCard>
          </IonContent>
         
        </IonModal>
       
    </IonContent>
    </IonPage>
    )
    };
    
export default Alamat;
