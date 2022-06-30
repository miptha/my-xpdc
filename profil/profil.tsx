import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const profil: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Profil Saya</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    
      {/* <IonImg src="assets/images/backgroundprofile.svg" alt="" className='img-profile'></IonImg> */}
      {/* <IonCard className=''>
        <IonCol>
      <div className="col-1" >
          <img src='assets/images/foto.png' className='icon-foto'></img>
        </div>
        </IonCol>
        <IonCol>
        <div className='col-2'>
          <small>Suherdianata</small> 
        </div>
        </IonCol>
        </IonCard> */}
      <IonCard>
        <IonLabel>Akun Saya</IonLabel>
      <IonItem href="/profil/ubahnama">
        <IonLabel>Nama</IonLabel>
      </IonItem>
      <IonItem href="/profil/ubahnomor">
        <IonLabel>Handphone</IonLabel>
      </IonItem>
      <IonItem href="/profil/ubahemail">
        <IonLabel>Email</IonLabel>
      </IonItem>
      <IonItem href="">
        <IonLabel>Akun Sosial Media</IonLabel>
      </IonItem>
      <IonItem href="/profil/ubahpassword">
        <IonLabel>Ubah Password</IonLabel>
      </IonItem>
      </IonCard>
      </IonContent>
    </IonPage>
);

export default profil;
