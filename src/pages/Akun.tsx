import { IonAvatar, IonBadge, IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { bagCheck, cameraOutline, chevronForward, cube, notifications, receipt } from 'ionicons/icons';
import './Akun.css';

const Akun: React.FC = () => {
  return (
    <IonPage>
      <IonContent className='ion-content' >
      <IonFab vertical='top' horizontal='end'>
      <IonFabButton className='button-notif' href='notifikasi' color="primary">
      <IonIcon icon={notifications}></IonIcon>
    </IonFabButton>
    </IonFab>
    <IonGrid className="top">
					<IonRow>
						<IonCol size="12">
							<IonAvatar className="avatar">
								<img src="assets/icon/avatar.webp" />
							</IonAvatar>
							<div className="avatarUpload">
								<IonIcon icon={ cameraOutline } />
							</div>
						</IonCol>
					</IonRow>

					<IonRow className="profileHeader">
						<IonCol size="12" className="ion-text-center">
							<IonCardTitle color="light">Suherdianata</IonCardTitle>
							<IonCardSubtitle color="light">address@gmail.com</IonCardSubtitle>
						</IonCol>
					</IonRow>
				</IonGrid>
    {/* <IonCard className='element-profile'>
      {/* <IonImg src="assets/images/backgroundprofile.svg" alt="" className='img-profile'></IonImg> */}
      {/* <IonCard className='test'>
        <div className='col-1'>
          <img src='assets/images/foto.png' className='icon-foto'></img>
        </div>
        <div className='col-2'>
          <small>Suherdianata</small>
          <small>PT. Xena Pranadipa Dhia Cakra</small>
          <small>Account: 0000012121XPDC</small>
        </div>
      </IonCard>
    // </IonCard> */} 
    <IonCard>
     <IonRow className='ion-saldo' >
          <IonItem className='text1'><img src='assets/icon/SVG Uang.svg'></img><IonCol><div>Rp. 2.000.000<div>Jumlah Saldo Anda</div></div></IonCol></IonItem>
          <IonCol>
            <a href='/topup'>
              <img src='assets/icon/topup.png' className=''/>
            </a>  
            {/* <IonImg src="assets/icon/topup.svg" className='icon-saldo' alt=""></IonImg>  */}
          </IonCol>
          <IonCol>  
            <a href='/riwayat'>
              <img src='assets/icon/history.webp' className='' alt=""/>
            </a>
            {/* <IonImg src="assets/icon/history.png" className='icon-saldo' alt=""></IonImg>  */}
          </IonCol>
          <IonCol> 
            <a href='/refferal'>
              <img src='assets/icon/share.png' className='' alt=""></img>
            </a>
              {/* <IonImg src="assets/icon/SVG Share.svg" className='icon-saldo' alt=""></IonImg>  */}
             </IonCol>
      </IonRow>
      </IonCard>
    
    
      {/* <IonImg src='assets/icon/pengiriman.svg' class='icon-kirim'></IonImg> */}
        
        {/* <IonCard>
        <IonLabel className='pengiriman'>Pengiriman Saya</IonLabel>
        <IonRow className='icon-pengiriman'>
            <IonCol> <a href='www.google.com'><IonIcon className='icon-cube' icon={cube} ></IonIcon></a><IonBadge color="primary" className='badge-cube'>5</IonBadge> </IonCol>
            <IonCol> <a href='www.google.com'><img src="assets/icon/truck.png" className='icon-truck'></img></a><IonIcon><IonBadge color="primary" className='badge-cube'>5</IonBadge></IonIcon></IonCol> 
            <IonCol> <a href='www.google.com'><IonIcon className='icon-cube' icon={bagCheck}></IonIcon></a><IonBadge color="primary" className='badge-cube'>5</IonBadge> </IonCol>
        </IonRow>
        </IonCard>      */}
      
      <IonList>
        <IonCard className=''>
      <IonItem href='/profil/profil'>
        <IonLabel>Profil</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/profil/Alamat'>
        <IonLabel>Alamat</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      </IonCard>
      {/* <IonItemDivider></IonItemDivider> */}
      <IonCard className=''>
      <IonItem href='/profil/invoice'>
        <IonLabel>Invoice</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/Register'>
        <IonLabel>Refferal</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      </IonCard>
      {/* <IonItemDivider></IonItemDivider> */}
      <IonCard className=''>
      <IonItem href='/profil/tentangkami'>
        <IonLabel>Tentang Kami</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/profil/syarat'>
        <IonLabel>Syarat dan Ketentuan</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      <IonItem href='/Login'>
        <IonLabel>Keluar</IonLabel>
        {/* <IonIcon icon={chevronForward}></IonIcon> */}
      </IonItem>
      </IonCard>
    </IonList>
      
    </IonContent>
  
    </IonPage>
  );
};

export default Akun;
