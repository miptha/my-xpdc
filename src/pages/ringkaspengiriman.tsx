import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const ringkaspengiriman: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton color="primary" defaultHref='/beranda/express' ></IonBackButton>
                </IonButtons>
                    <IonTitle color="primary" className="ion-text-center">Ringkasan Pengiriman</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                <IonCard>
                    <IonTitle color="primary">Pengirim</IonTitle>
                    <IonCard>
                        <IonItem>Suherdianata</IonItem>
                        <IonItem>DKI Jakarta, Kota Jakarta Barat, Cengkareng, Duri, Kosambi, 11750</IonItem>
                        <IonItem>081 XXX XXX</IonItem>
                    </IonCard>
                </IonCard>
                <IonCard>
                    <IonTitle color="primary">Penerima</IonTitle>
                    <IonItem>Sesar Anthony Panjaitan</IonItem>
                    <IonItem>Lampung, Kabupaten Pringsewu, Gading Rejo, Yogyakarta, 35372</IonItem>
                    <IonItem>081 234 XXX</IonItem>
                </IonCard>
                <IonItem>Nama Barang: </IonItem>
                <IonItem>Harga Barang: </IonItem>
                <IonItem>Asuransi: </IonItem>
                <IonItem>Estimasi Jumlah Box: </IonItem>
                <IonItem>Estimasi Total Berat: </IonItem>
                <IonItem>Catatan Penjemputan: </IonItem>
                <IonItem> Mohon Hubungi pengirim sebelum penjemputan</IonItem>
                </IonCard>
                <IonCard>
                <IonItem>Jenis Layanan: </IonItem>
                <IonItem>Estimasi Waktu Pengiriman: </IonItem>
                <IonItem>Estimasi Biaya Pengiriman: </IonItem>
                <IonItem>Biaya Asuransi: </IonItem>
                <IonItem>Diskon Promo: </IonItem>
                <IonItem>Estimasi Total Biaya</IonItem>

                <IonButton color="primary" expand="block" href="/order">PESAN</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )

}
export default ringkaspengiriman