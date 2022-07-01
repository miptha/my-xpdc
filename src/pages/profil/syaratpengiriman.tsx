import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";
import './syaratpengiriman.css'

const syaratpengiriman: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/profil/syaratscreen' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Syarat Pengiriman</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
      <IonCard>
      <IonList>
      <IonItem className="syt">
            <div>
            <p>
                1. Semua harga dan peraturan dianggap sah dan disepakati oleh Pelanggan, apabila
                Pelanggan sudah menyetujui syarat dan ketentuan pengiriman setelah melakukan
                pemesanan Jasa Pengiriman.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                2. Pelanggan wajib memberitahukan dengan jelas dan benar isi dan nilai Barang
                Kiriman. Keterangan yang tidak benar mengenai hal tersebut sepenuhnya menjadi
                tanggung jawab Pelanggan. XPDC tidak bertanggung jawab atas kerugian/kejadian
                yang timbul akibat kesalahan informasi yang diberikan.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                3. Pengirim wajib mengemas Barang Kirimannya nya dengan baik untuk melindungi
                isi Barang Kiriman nya selama pengangkutan. Apabila timbul suatu kerugian yang
                disebabkan karena pengemasan yang kurang sempurna, maka kerugian tersebut bukan
                menjadi tanggung jawab XPDC.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                4. Biaya Jasa Pengiriman XPDC dihitung menggunakan dengan metode perhitungan
                yang mana akan digunakan salah satu yang terbesar antara berat aktual atau berat dimensi
                dan setiap Barang Kiriman dapat ditimbang dan diukur ulang kembali oleh XPDC.
                Apabila terdapat penambahan berat yang diakibatkan oleh adanya proses pengemasan
                tambahan yang dilakukan oleh XPDC, maka yang digunakan sebagai acuan dalam
                penagihan adalah berat setelah dikemas ulang.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                5. Pelanggan bertanggung jawab untuk melindungi Barang Kiriman dengan
                asuransi yang memadai dan menanggung biaya premi yang berlaku. Ganti rugi untuk
                barang yang diasuransikan adalah sesuai dengan ketentuan asuransi yang berlaku di
                XPDC. Apabila Pelanggan tidak membeli asuransi, maka penggantian atas
                Barang Kiriman yang hilang atau rusak, akan diberikan sesuai dengan syarat dan
                ketentuan yang berlaku.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                6. Apabila tidak ada ada keluhan dari Penerima pada saat Barang Kiriman
                diserahkan, maka Barang Kiriman dianggap telah diterima dengan baik dan benar.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                7. XPDC berhak namun tidak wajib untuk membuka dan memeriksa Barang Kiriman
                disertai dokumentasi tanpa pemberitahuan ke Pelanggan/Pengirim/Penerima
                terlebih dahulu dengan alasan keselamatan, keamanan atau alasan sesuai regulasi lainnya.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                8. XPDC tidak bertanggung jawab atas kerugian yang timbul dari keadaan di luar kendali
                atau Force Majeure termasuk kehilangan dan kerusakan atas Isi Barang Kiriman
                baik dari segi jenis atau jumlah dan kerugian lainnya yang secara materi atau non-materi
                yang terkait dengan keterlambatan proses Jasa Pengiriman.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p >
                9. Dalam hal Barang Kiriman hilang akibat dari kelalaian XPDC, Pelanggan
                berhak mengajukan klaim paling lambat 3 (tiga) hari setelah XPDC menyatakan bahwa
                benar Barang Kiriman tidak dapat ditemukan. Apabila Pelanggan tidak
                mengajukan klaim atas kehilangan Barang Kiriman dalam waktu yang sudah
                ditentukan, maka hak untuk mengajukan klaim dinyatakan tidak berlaku.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p>
            10. Pengajuan klaim dilakukan oleh Pelanggan dengan mengirimkan pernyataan tertulis
            dengan melampirkan dokumen pendukung sebagai syarat klaim berupa:
            <IonRow>
                a. ldentitas pelanggan yang masih berlaku
            </IonRow>
            <IonRow>
                b. Nomor pelacakan barang kiriman
            </IonRow>
            <IonRow>
                c. Detail isi barang kiriman
            </IonRow>
            <IonRow>
                d. Foto Kemasan dan Foto isi Barang kiriman
            </IonRow>
            <IonRow>
                e. Apabila diasuransikan harus disertakan dengan Premi Asuransi Pengiriman
                barang
            </IonRow>
            <IonRow>
                <br></br>
                Dan dikirim ke kantor pusat XPDC yang beralamat di :
            </IonRow>
            <IonRow className="syt">
            PT. Xentra Platform Digital Cargo<br></br>
            Ruko Duta Niaga 2 No. 8 Jalan Husein Sastranegara<br></br>
            Kel. Jurumudi Kec. Benda Kota Tangerang<br></br>
            Banten Indonesia 15124
            </IonRow>
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p>
            11. Selain perjanjian atau syarat dan ketentuan yang tertulis pada Nomor Pelacakan
            ini, XPDC tidak dapat dituntut dan dibebani dengan perjanjian atau dasar hukum lainnya
            kecuali dengan perjanjian tertulis yang disetujui oleh penanggung jawab XPDC yang
            berwenang.
            </p>
            </div>
      </IonItem>
      <IonItem className="syt">
            <div>
            <p>
            12. Selain perjanjian atau syarat dan ketentuan yang tertulis pada Nomor Pelacakan
            ini, XPDC tidak dapat dituntut dan dibebani dengan perjanjian atau dasar hukum lainnya
            kecuali dengan perjanjian tertulis yang disetujui oleh penanggung jawab XPDC yang
            berwenang.
            </p>
            </div>
      </IonItem>
    <IonItem className="syt">
            <div>
            <p>
                Pembatalan Jasa Pengiriman dibagi menjadi 2 (dua) :
                <IonRow>
                a. Pembatalan Jasa Pengiriman pada saat Barang Kiriman dijemput,
                maka akan dikenakan biaya pembatalan (cancelation fee) minimum sebesar 30%
                (Tiga Puluh Persen) dari total biaya Jasa Pengiriman.
                </IonRow>
                <IonRow>
                b. Pembatalan Jasa Pengiriman yang sudah dibayarkan tidak dapat
                dikembalikan apabila Barang Kiriman telah diproses di Service Centre.
                Dengan ini pihak Pelanggan menyatakan bahwa dapat menerima dan
                menyetujui syarat-syarat dan ketentuan tersebut.
                </IonRow>
            </p>
            </div>
    </IonItem>
    </IonList>
    </IonCard>
      </IonContent>
    </IonPage>
);

export default syaratpengiriman;
