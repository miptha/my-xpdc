import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const regular: React.FC =() => (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton color="primary" defaultHref="/beranda"></IonBackButton>
                </IonButtons>
                <IonTitle className='ion-text-center' color="primary">Regular</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonTitle>Informasi Pengiriman</IonTitle>
                <IonItem>Nama Pengirim: Suherdianata</IonItem>
                <IonItem>Nomor Pengirim: 081 XXX XXX</IonItem>
                <IonItem>Alamat Pengirim: DKI Jakarta, Kota Jakarta Barat, Cengkareng, Duri, Kosambi, 11750</IonItem>
            </IonCard>
            <IonCard>
                <IonTitle>Informasi Penerima</IonTitle>
                <IonItem>Nama Penerima: Sesar Anthony Panjaitan</IonItem>
                <IonItem>Nomor Penerima: 081 XXX XXX</IonItem>
                <IonItem>Alamat Penerima: Lampung, Kabupaten Pringsewu, Gading Rejo, Yogyakarta, 35372</IonItem>
            </IonCard>
            <IonCard>
                <IonTitle>Informasi Barang</IonTitle>
                <IonItem>Nama Barang: </IonItem>
                <IonItem>Harga Barang: </IonItem>
                <IonItem>Jumlah Box: </IonItem>
            </IonCard>
            <IonButton expand="block" href="/ringkaspengiriman">Lanjutkan</IonButton>
        </IonContent>
    </IonPage>
);

export default regular;