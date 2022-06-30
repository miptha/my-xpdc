import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, share } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './notifikasi.css';

const notifikasi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Notifikasi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    
      </IonContent>
    </IonPage>
  );
};

export default notifikasi;
