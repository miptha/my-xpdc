import { IonBackButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { notifications } from "ionicons/icons";
import './jenis.css'

const jenis: React.FC = () => (
    <IonPage>
        <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton color="primary" defaultHref='/profil/syaratscreen' ></IonBackButton>
        </IonButtons>
          <IonTitle className='ion-text-center' color="primary">Jenis Barang Terlarang</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="primary">
      <IonCard>
      <IonList>
      <IonItem className="jn">
            <div>
            <p >
                <IonRow>
                1. Barang Mudah Terbakar :
                </IonRow>
                <IonRow>
                a. flammable gas (gas yang mudah terbakar),
                </IonRow>
                <IonRow>
                b. nonflammable gas (gas tidak mudah terbakar),
                </IonRow>
                <IonRow>
                c. toxic gas (gas beracun), nontoxic gas (gas tanpa racun),
                </IonRow>
                <IonRow>
                d. Flammable liquid(cairan yang mudah terbakar),
                </IonRow>
                <IonRow>
                e. flammable solid (benda padat mudah terbakar),
                </IonRow>
                <IonRow>
                f. spontaniously combustible (benda yang mudah terbakar secara spontan),
                </IonRow>
                <IonRow>
                g. dangerous when wet (Benda yang berbahaya ketika basah)
                </IonRow>
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                2. Barang Mudah Meledak : Explosives (benda atau bahan peledak)
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                3. Alkohol : Minuman Mengandung Etil Akohol (MMEA)
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                4. Senjata Api dan Senjata Tajam : 
                <IonRow>a. Senjata runcing/tajam</IonRow>
                <IonRow>b. Benda-benda tajam, Alat pemukul, Pistol</IonRow> 
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                5. Obat- obatan terlarang : Narkotika, psikotropika dan sebagainya yang terlarang.
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                6. Limbah Berbahaya dan Beracun : Barang yang mudah rusak dan mencemari lingkungan.
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                7. Barang berharga : seperti Uang, surat berharga, emas, perak, permata, perhiasan kecuali memiliki sertifikasi dari izin resmi dari lembaga terkait.
            </p>
            </div>
      </IonItem>
      <IonItem>
            <div>
            <p >
                8. Binatang hidup dan tanaman : kecuali yang memiliki izin resmi pengiriman hewan dan tanaman
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p >
                9. Barang yang mengandung Pornografi dan melanggar norma kesusilaan.
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p>
                10. Barang biologis yang mudah busuk dan menularkan penyakit.
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p>
                11. Jasad manusia sebagian atau utuh.
            </p>
            </div>
      </IonItem>
      <IonItem className="jn">
            <div>
            <p>
                12. Barang-barang lainnya yang melanggar peraturan perundang-undangan.
            </p>
            </div>
      </IonItem>
    
    </IonList>
    </IonCard>
      </IonContent>
    </IonPage>
);

export default jenis;
