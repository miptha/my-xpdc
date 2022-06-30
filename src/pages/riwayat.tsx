import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cash, cashOutline, cashSharp, logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, share, wallet, walletOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './riwayat.css';
import topup from './topup';

const riwayat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Riwayat Transaksi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className='card-besar'>
          <IonLabel className='text'>Riwayat Transaksi</IonLabel>
          <IonCard>
          <IonRow>
          <IonCol><a href='/riwayat'>
              <IonIcon  className='icon' icon={wallet}></IonIcon>
            </a></IonCol>
          <IonCol>
            <IonRow>Top Up Saldo</IonRow>
            <IonRow><IonLabel >Nominal: </IonLabel>Rp. 200.000.000</IonRow>
            <IonRow><IonLabel>Tanggal Transaksi: </IonLabel>Senin, 13 Juni 2022</IonRow>
          </IonCol>
          </IonRow>
          </IonCard>
          <IonCard>
          <IonRow>
          <IonCol><a href='/riwayat'>
              <IonIcon className='icon' icon={cashOutline}></IonIcon>
            </a></IonCol>
          <IonCol>
            <IonRow>Saldo Keluar</IonRow>
            <IonRow><IonLabel>Nominal: </IonLabel>Rp. 200.000.000</IonRow>
            <IonRow><IonLabel>Tanggal Transaksi: </IonLabel>Senin, 13 Juni 2022</IonRow>
          </IonCol>
          </IonRow>
          </IonCard>
          <IonCard>
          <IonRow>
          <IonCol><a href='/riwayat'>
              <IonIcon className='icon' icon={wallet}></IonIcon>
            </a></IonCol>
          <IonCol>
            <IonRow>Top Up Saldo</IonRow>
            <IonRow><IonLabel>Nominal: </IonLabel>Rp. 200.000.000</IonRow>
            <IonRow><IonLabel>Tanggal Transaksi: </IonLabel>Senin, 13 Juni 2022</IonRow>
          </IonCol>
          </IonRow>
          </IonCard>
          </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default riwayat;
