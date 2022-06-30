import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import './Register.css';
const Register: React.FC= () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton color="primary" defaultHref='/Login' ></IonBackButton>
                <IonTitle className='ion-text-center' color="primary">Daftar Akun</IonTitle>
            </IonButtons>    
            <div className="text-center"><a href="/Login">Masuk</a></div>
        </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonImg src="assets/images/cargo.jpg"></IonImg>
            <IonCard className="card-regis">
                {/* <IonCard> */}
                        <IonItem>
                            <IonLabel position="stacked">Nama</IonLabel>
                            <IonInput placeholder="  Masukan Nama"><IonImg src="assets/icon/nama.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                        </IonItem>
                        <IonItem >
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput placeholder="  Masukan Email"><IonImg src="assets/icon/email.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                        </IonItem>
                        <IonItem >
                                <IonLabel position="stacked">Password</IonLabel>
                                <IonInput placeholder="  Masukan Password"><IonImg src="assets/icon/psswd.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                            </IonItem>
                      
                        {/* </IonCard>
                        <IonCard> */}
                        <IonItem >
                            <IonLabel position="stacked">Nomor Handphone</IonLabel>
                            <IonInput placeholder="  Masukan Nomor Handphone"><IonImg src="assets/icon/telepon.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                        </IonItem>
                        {/* </IonCard>
                        <IonCard> */}
                       
                        {/* </IonCard>
                        <IonCard> */}
                           
                        {/* </IonCard>
                        <IonCard> */}
                            <IonItem >
                                <IonLabel position="stacked">Kode Refferal</IonLabel>
                                <IonInput placeholder="  Masukan Kode Refferal (opsional)"><IonImg src="assets/icon/refferal.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                            </IonItem>
                            <IonButton className="regis">Register</IonButton>
                           
                            
                        </IonCard>
                        
                       
                        {/* </IonCard>  */}
            
              
        </IonContent>
    </IonPage>

);
};
export default Register;