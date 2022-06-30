import { IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, share } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Bantuan.css';

const Bantuan: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Bantuan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {/*-- fab placed in the center of the content with a list on each side --*/}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="https://api.whatsapp.com/send?phone=+628117000133&text=Hi XPDC" >
            <IonIcon icon={logoWhatsapp} />
          </IonFabButton>
      
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Bantuan;
