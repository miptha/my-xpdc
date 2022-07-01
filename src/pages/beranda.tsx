import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonModal, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { checkmarkCircleSharp, chevronDown, chevronDownCircle, locateOutline, locationOutline, notifications, people, pin, receipt, search, searchCircleOutline, searchOutline, warning, wifi, wine } from 'ionicons/icons';
import React, {useState, useRef, useEffect } from 'react';
import './beranda.css';


const useBeranda: React.FunctionComponent = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const modal1 = useRef<HTMLIonModalElement>(null);
  const modal2 = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);
  

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  const slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true,
    autoplay: {
          delay: 1000,
          disableOnInteraction: false,
    }
  };

  return (
    <IonPage ref={page}>
          <IonHeader>
    </IonHeader>
      <IonContent className='ion-content' color="primary">
      <IonFab vertical='top' horizontal='end'>
      <IonFabButton className='button-notif' href='/notifikasi'>
      <IonIcon icon={notifications} ></IonIcon>
    </IonFabButton>
    </IonFab>
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <IonImg src="assets/images/banner.jpeg" alt=""></IonImg>
      </IonSlide>
      <IonSlide>
      <IonImg src="assets/images/banner2.jpeg" alt=""></IonImg>
      </IonSlide>
      <IonSlide>
      <IonImg src="assets/images/banner5.jpeg" alt=""></IonImg>
      </IonSlide>
    </IonSlides>
   
      <IonCard>
      <IonRow className='ion-saldo'>
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
        <IonCard>
            <IonItem>
            <IonLabel>Cek Resi</IonLabel>
            <IonInput></IonInput>
            <IonButton><IonIcon icon={search} slot="end" className='icon-search'></IonIcon></IonButton>
          </IonItem>
          </IonCard>
          <IonLabel className='label'>CEK ONGKIR</IonLabel>
          <IonCard>
            <IonItem>
              <IonLabel>Asal</IonLabel>
              <IonImg src="assets/icon/location.webp" slot='start' className='icon-loc'></IonImg>
              <IonSelect placeholder="Alamat">
              <IonSelectOption value="Jakarta">Jakarta</IonSelectOption>
              <IonSelectOption value="Batam">Batam</IonSelectOption>
              <IonSelectOption value="Palembang">Palembang</IonSelectOption>
            </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Tujuan</IonLabel>
              <IonImg src="assets/icon/location1.webp" slot='start' className='icon-loc'></IonImg>
              <IonSelect placeholder="Alamat">
              <IonSelectOption value="Jakarta">Jakarta</IonSelectOption>
              <IonSelectOption value="Batam">Batam</IonSelectOption>
              <IonSelectOption value="Palembang">Palembang</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Jumlah</IonLabel>
              <IonImg src="assets/icon/box.webp" slot='start' className='ion-box'></IonImg>
              <IonInput></IonInput>
              <IonLabel>Berat</IonLabel>
              <IonImg src="assets/icon/box.webp" slot='center' className='ion-box'></IonImg>
              <IonInput></IonInput>
            </IonItem>
          <IonItem>
            <IonLabel>Dimensi</IonLabel>
            {/* <IonToggle value="dimensi" onChange={() => {}} /> */}
          </IonItem>
            <IonItem id="dimensi">
              <IonLabel className='ion-isi'>Panjang</IonLabel>
              <IonImg src="assets/icon/dimensi.svg" slot='start' className='icon-loc'></IonImg>
              <IonInput></IonInput>
              <IonLabel className='ion-isi'>Lebar</IonLabel>
              <IonInput></IonInput>
              <IonLabel className='ion-isi'>Tinggi</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonCard>
            <IonButton id="open-modal" expand="block">Cek Harga</IonButton>
            <IonModal id="example-modal" ref={modal} trigger="open-modal">
          <IonContent>
            <IonToolbar>
              <IonTitle color="primary" className='ion-text-center'>Pilih Layanan</IonTitle>
              <IonButtons slot="end">
                <IonButton color="dark" onClick={() => dismiss()}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <IonList>
              <IonCard>
              <IonItem href='/beranda/express'>
                <IonAvatar slot="start">
                  <IonImg src="assets/icon/express.png" />
                </IonAvatar>
                <IonLabel>
                  <h1>Layanan Express</h1>
                  <h2 className="text-h2">Gratis Pickup</h2>
                  <p>Estimated Pengiriman 1-5 hari</p>
                  <p>Total Harga: Rp. 200.000.000</p>
                </IonLabel>
              </IonItem>
              </IonCard>
                <IonCard>
              <IonItem href='/beranda/regular'>
                <IonAvatar slot="start">
                  <IonImg src="assets/icon/regular.png" />
                </IonAvatar>
                <IonLabel>
                <h1>Layanan Regular</h1>
                  <h2 className="text-h2">Gratis Pickup</h2>
                  <p>Estimated Pengiriman 5-10 hari</p>
                  <p>Total Harga: Rp. 200.000.000</p>
                </IonLabel>
              </IonItem>
              </IonCard>
            </IonList>
          </IonContent>
        </IonModal>
            </IonCard>
          
          </IonCard>
           <IonLabel className='label'>LAYANAN</IonLabel>
          <IonRow>
            <IonCard><IonCol className='button-menu'> <IonImg src="assets/icon/land.svg" className='icon-land' alt=""></IonImg> <a href='/layanan/land'><IonLabel className='label-menu-button' >Land Freight</IonLabel> </a></IonCol></IonCard>
            <IonCard><IonCol className='button-menu'> <IonImg src="assets/icon/air.svg" className='icon-air' alt=""></IonImg> <a href='/layanan/air'><IonLabel className='label-menu-button' >Air Freight</IonLabel> </a></IonCol></IonCard> 
            <IonCard><IonCol className='button-menu'> <IonImg src="assets/icon/sea.svg" className='icon-sea' alt=""></IonImg> <a href='/layanan/sea'><IonLabel className='label-menu-button' >Sea Freight</IonLabel> </a></IonCol></IonCard> 
            </IonRow>
            </IonContent>
          
    </IonPage>
  )
}
    
    export default useBeranda;

