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
                {/* <IonToolbar color="primary">
                    <IonTitle>My XPDC</IonTitle>
                </IonToolbar> */}
                
            </IonHeader>   
            <IonContent color="primary" className="ion-padding">
            <IonLabel className="lb">Selamat datang kembali,</IonLabel>
            <img src="assets/images/login.png" className="icon-log"></img>
            {/* <IonCard className="card-login"> */}
                        <IonCard className="card1">
                        <IonItem >
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput placeholder="  Masukan Email"><IonImg src="assets/icon/email.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                        </IonItem>
                        </IonCard>
                        <IonCard className="card1">
                            <IonItem className="it">
                                <IonLabel position="stacked">Password</IonLabel>
                                <IonInput placeholder="  Masukan Password" ><IonImg src="assets/icon/psswd.svg" slot='start' className='icon-loc'></IonImg></IonInput>
                            </IonItem>
                        </IonCard>
                        <IonItem color="primary" className="lupa">Lupa password?</IonItem>
                        <IonButton className="login-button" href="/beranda" color="light">Masuk</IonButton>
                        <IonItem color="primary" className="atau">Atau</IonItem>
                        <br></br>
                        <br></br>
                        <br></br>
                        <IonCard className="google">
                        <IonItem href="">      
                        <IonCol className="text-center">
                        <img className="img" src="assets/images/google.png"></img>
                        <br></br>
                        <IonLabel >
                        Masuk dengan Google
                     </IonLabel>  
                 </IonCol>    
            </IonItem>
            </IonCard>
                <IonItem color="primary" className="row">
                    <IonRow className="row">
                    <div>Belum memiliki akun? </div>
                    <div><a href="/Register">Daftar</a></div>
                    </IonRow>
                </IonItem>
            {/* </IonCard> */}
          
            </IonContent>
        </IonPage>
      );
    };
    
    export default Login;