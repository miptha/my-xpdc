import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, share } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './topup.css';

const topup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Isi Saldo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <img src="assets/images/people.jpg"></img>
        <IonCard className='isi'>
          <IonItem>
                  <img src='assets/images/mandiri.svg' className='logo'></img>
                  <IonLabel className='labeltext'><a href='/payment/mandiri'>Transfer Bank Mandiri</a></IonLabel>
                </IonItem>
                <IonItem>
                  <img src='assets/images/bca.svg' className='logo'></img>
                  <IonLabel className='labeltext'><a href='/payment/bca'>Transfer Bank BCA</a></IonLabel>
                </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default topup;
