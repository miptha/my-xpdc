import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoVimeo, logoWhatsapp, person, search, share } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Orderlist.css';

const Orderlist: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='beranda' ></IonBackButton>
        </IonButtons>
          <IonTitle color="primary" className="ion-text-center">Order list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard className='cari'>
            <IonItem>
            <IonLabel>Cari No.Tracking</IonLabel>
            <IonInput></IonInput>
            <IonButton><IonIcon icon={search} slot="end" className='icon-search'></IonIcon></IonButton>
          </IonItem>
          </IonCard>
          <IonItemDivider></IonItemDivider>
        <IonCard className='box'>
          <IonItem>No Tracking: XPDC2201918</IonItem>
          <IonItem>Tanggal Order: 27/06/2022</IonItem>
          <IonItem>Total Harga: Rp. 10.000.000</IonItem>
        </IonCard>
        <IonCard className='box'>
        <IonItem>No Tracking: XPDC2201919</IonItem>
          <IonItem>Tanggal Order: 28/06/2022</IonItem>
          <IonItem>Total Harga: Rp. 100.000.000</IonItem>
        </IonCard>
        <IonCard className='box'>
        <IonItem>No Tracking: XPDC22019120</IonItem>
          <IonItem>Tanggal Order: 29/06/2022</IonItem>
          <IonItem>Total Harga: Rp. 10.000.000</IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Orderlist;

