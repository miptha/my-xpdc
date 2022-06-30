import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const tentangkami: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/Akun' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Tentang Kami</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      <IonItem>
      <div>
            <p className="justify">
                <IonRow>
                PT. XENTRA PLATFORM DIGITAL CARGO (XPDC) merupakan pengembangan bisnis dalam
                </IonRow>
                <IonRow>
                Layanan pengiriman domestik berbasis aplikasi, mengubah cara pengiriman barang/ kargo secara signifikan di Indonesia (khususnya) menjadi lebih mudah dilakukan. 
                </IonRow>
                <IonRow>
                XPDC menawarkan model bisnis perusahaan platform logistik dengan network sendiri. Di mana dari proses first mile, transport, last mile dilakukan oleh tim yang menjadi bagian network XPDC. Dengan demikian, monitor pergerakan kargo bisa dilakukan real-time.
                </IonRow>
            </p>
            </div>
    
      </IonItem>
      <IonItem>
        <IonRow>
            6S Culture
            <IonRow>
            a. Sort: Memilah perihal proses yang kurang efisien agar dapat melakukan kegiatan logistik yang lebih ringkas, cepat dan aman.
            </IonRow>
            <IonRow>
            b. Straighten: Memastikan bahwa semua proses telah terorganisir dengan baik sesuai dengan tahapan dan aturan yang ditentukan. Hal ini sesuai dengan cara kerja XPDC yang tersusun dengan jelas dan baik.
            </IonRow>
            <IonRow>
            c. Shine: Berupaya untuk menjaga kebersihan tempat kerja, fasilitas lainnya termasuk armada yang kami gunakan untuk melakukan pengiriman secara teratur. Sehingga memastikan barang pelanggan diterima dengan baik dan bersih.
            </IonRow>
            <IonRow>
            d. Standardize: Menciptakan standarisasi peraturan dan proses dari ketiga poin sebelumnya. Menjadikan budaya yang dilakukan secara rutin setiap waktunya oleh tim XPDC.
            </IonRow>
            <IonRow>
            e. Safety: Menciptakan lingkungan kerja yang aman dan sehat adalah komitmen bersama dari XPDC. Memastikan tim XPDC peduli dan saling membantu dalam mengamankan pekerjaan yang dilakukan.
            </IonRow>
            <IonRow>
            f. Sustain: Mempertahankan budaya disiplin untuk aturan dan tahapan kerja yang sudah jelas dibentuk sebelumnya. Guna memastikan tim XPDC menjalankan tahapan proses kerja secara jelas.
            </IonRow>
        </IonRow>
      </IonItem>
      </IonList>
      </IonContent>
    </IonPage>
);

export default tentangkami;
