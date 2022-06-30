import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const ubahpassword: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton color="primary" defaultHref='/profil/profil'></IonBackButton>
                    </IonButtons>
                    <IonTitle className='ion-text-center' color="primary">Ubah Password</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonItem>Password</IonItem>
                    <IonItem>
                        <IonInput placeholder="Masukan Password"></IonInput>
                    </IonItem>
                    <IonButton className="button-simpan" expand="block"> Simpan</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default ubahpassword;