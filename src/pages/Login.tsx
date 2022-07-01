import { IonButton, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { logoGoogle, text } from "ionicons/icons";
import { useState } from "react";
import './Login.css';

const Login: React.FC = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // function loginUser() {
    //     console.log(email,password)
    // }
    return (
        <IonPage color="primary">
            
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Selamat datang kembali di My XPDC</IonTitle>
                </IonToolbar>
                
            </IonHeader>   
            <IonContent color="light" className="ion-padding">
            {/* <IonLabel className="lb">Selamat datang kembali,</IonLabel> */}
            <img src="assets/images/login.png" className="icon-log"></img>
            {/* <IonCard className="card-login"> */}
            <div className="card1">
                        <IonCard className="">
                        <IonItem >
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput placeholder="Masukan Email" className="input"><IonImg src="assets/icon/email.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                        </IonItem>
                        </IonCard>
                        <IonCard className="">
                            <IonItem className="it">
                                <IonLabel position="stacked">Password</IonLabel>
                                <IonInput placeholder="Masukan Password" className="input"><IonImg src="assets/icon/psswd.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                            </IonItem>
                        </IonCard>
                        <div className="dv">
                      <a className="lp" href="/lupapassword">Lupa Password?</a>
                       <IonButton className="masuk" color="primary" expand="block">Masuk</IonButton>
                       <IonLabel>Atau</IonLabel>
                       <IonButton className="google" color="light"><img src="assets/images/google.svg" width="35"></img>Masuk dengan Google</IonButton>
                       <a className="blm">Belum memiliki akun?  <a href="/Register" className="reg">Daftar disini</a></a>
                      
                       </div>
                    
                </div>
                
          
            </IonContent>
        </IonPage>
      );
    };
    
    export default Login;