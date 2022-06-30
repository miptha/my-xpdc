import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";

const definisi: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/profil/syaratscreen' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Definisi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      <IonItem>
            <div>
            <p className="justify">
                1. PT. Xentra Platform Digital Cargo adalah perusahaan yang berbadan
                hukum yang bergerak di bidang jasa pengiriman yang selanjutnya disebut sebagai XPDC.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                2. Jasa Pengiriman adalah layanan yang disediakan oleh XPDC mencakup
                penjemputan dan pengantaran BARANG KIRIMAN dari satu tempat ke tempat lain.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                3. Nomor Pelacakan adalah nomor Jasa Pengiriman yang diterbitkan setelah
                pemesanan pengiriman dilakukan yang berisi informasi Barang Kiriman
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                4. Barang Kiriman adalah semua bentuk barang / paket, dokumen atau surat yang
                dikirim melalui XPDC.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                5. Pelanggan adalah individu yang melakukan pemesanan dan pembayaran Jasa
                Pengiriman XPDC.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                6. Pengirim adalah individu yang memberikan Barang Kiriman
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                7. XPDC berhak namun tidak wajib untuk membuka dan memeriksa BARANG KIRIMAN
                disertai dokumentasi tanpa pemberitahuan ke PELANGGAN/PENGIRIM/PENERIMA
                terlebih dahulu dengan alasan keselamatan, keamanan atau alasan sesuai regulasi lainnya.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                8. Pengirim adalah individu yang memberikan barang kiriman
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p className="justify">
                9. Penerima adalah individu yang menerima Barang Kiriman
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p>
                10. Expeditor adalah individu yang merupakan bagian dari XPDC yang bertugas
                melakukan penjemputan dan penghantaran BARANG KIRIMAN
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p>
                11. Barang Terlarang adalah BARANG KIRIMAN yang tidak diperbolehkan untuk
                dikirim menurut peraturan XPDC sesuai dengan lampiran dan ketentuan hukum serta
                perundang-undangan yang berlaku
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p>
                12. Keadaan Memaksa (force majeure) adalah keadaan yang diakibatkan baik karena
                bencana alam, keadaan darurat, atau hal lain yang tidak terukur dan / atau diluar
                kemampuan manusia sehingga barang mengalami kerusakan, keterlambatan atau
                kehilangan BARANG KIRIMAN
            </p>
            </div>
      </IonItem>
    <IonItem>
            <div>
            <p>
                13. Berat Aktual adalah berat yang diperoleh dari hasil penimbangan dari alat timbang
            </p>
            </div>
    </IonItem>
    <IonItem>
            <div>
            <p>
                14. Berat Volume adalah berat yang diperoleh dari pengukuran panjang, lebar, dan
                tinggi suatu barang dengan menggunakan rumus sebagai berikut :
                <IonRow>
                a. Mode darat/laut (kg) = (panjang x lebar x tinggi)/4000
                </IonRow>
                <IonRow>
                b. Mode Udara (kg) = (panjang x lebar x tinggi)/6.000
                </IonRow>
                <IonRow>
                c. Kubikasi (cbm) = (panjang x lebar x tinggi)/1.000.000
                </IonRow>
            </p>
            </div>
    </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
);

export default definisi;
