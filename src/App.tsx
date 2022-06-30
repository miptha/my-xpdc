import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, headsetOutline, homeOutline, peopleOutline, receiptOutline, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/beranda';
import Tab2 from './pages/Bantuan';
import Tab3 from './pages/Akun';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tab4 from './pages/Orderlist';
import profil from './pages/profil/profil';
import Alamat from './pages/profil/Alamat';
import invoice from './pages/profil/invoice';
import undangan from './pages/profil/undangan';
import tentangkami from './pages/profil/tentangkami';
import syarat from './pages/profil/syaratscreen';
import keluar from './pages/profil/keluar';
import notifikasi from './pages/notifikasi';
import riwayat from './pages/riwayat';
import refferal from './pages/refferal';
import topup from './pages/topup';
import tambahalamat from './pages/profil/tambahalamat';
import syaratscreen from './pages/profil/syaratscreen';
import syaratpengiriman from './pages/profil/syaratpengiriman';
import definisi from './pages/profil/definisi';
import jenis from './pages/profil/jenis';
import profilescreen from './pages/profil/profilescreen';
import express from './pages/beranda/express';

import ubahnama from './pages/profil/ubahnama';
import ubahnomor from './pages/profil/ubahnomor';
import ubahemail from './pages/profil/ubahemail';
import ubahpassword from './pages/profil/ubahpassword';
import regular from './pages/beranda/regular';
import ringkaspengiriman from './pages/ringkaspengiriman';
import Login from './pages/Login';
import Register from './pages/Register';
import land from './pages/layanan/land';
import air from './pages/layanan/air';
import sea from './pages/layanan/sea';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/beranda">
            <Tab1 />
          </Route>
          <Route exact path="/Bantuan">
            <Tab2 />
          </Route>
          <Route path="/Akun">
            <Tab3 />
          </Route>
          <Route path="/Orderlist">
            <Tab4 />
          </Route>
          {/* Mengarahkan halaman baru */}
          <Route path="/profil/profil" component={profil} exact={true} />
          <Route path="/profil/Alamat" component={Alamat} exact={true} />
          <Route path="/profil/invoice" component={invoice} exact={true} />
          <Route path="/profil/undangan" component={undangan} exact={true} />
          <Route path="/profil/tentangkami" component={tentangkami} exact={true} />
          <Route path="/profil/syarat" component={syarat} exact={true} />
          <Route path="/profil/keluar" component={keluar} exact={true} />
          <Route path="/notifikasi" component={notifikasi} exact={true}/>
          <Route path="/riwayat" component={riwayat} exact={true}/>
          <Route path="/refferal" component={refferal} exact={true}/>
          <Route path="/topup" component={topup} exact={true}/>
          <Route path="/tambahalamat" component={tambahalamat} exact={true}/>
          <Route path="/profil/syaratscreen" component={syaratscreen} exact={true}/>
          <Route path="/profil/syaratpengiriman" component={syaratpengiriman} exact={true}/>
          <Route path="/profil/definisi" component={definisi} exact={true}/>
          <Route path="/profil/jenis" component={jenis} exact={true}/>
          <Route path="/profil/profilescreen" component={profilescreen} exact={true}/>
          <Route path="/beranda/express" component={express} exact={true}/>
          <Route path="/profil/ubahnama" component={ubahnama} exact={true}/>
          <Route path="/profil/ubahnomor" component={ubahnomor} exact={true}/>
          <Route path="/profil/ubahemail" component={ubahemail} exact={true}/>
          <Route path="/profil/ubahpassword" component={ubahpassword} exact={true}/>
          <Route path="/beranda/regular" component={regular} exact={true}/>
          <Route path="/ringkaspengiriman" component={ringkaspengiriman} exact={true}/>
          <Route path="/Login" component={Login} exact={true}/>
          <Route path="/Register" component={Register} exact={true}/>
          <Route path="/layanan/land" component={land} exact={true}/>
          <Route path="/layanan/air" component={air} exact={true}/>
          <Route path="/layanan/sea" component={sea} exact={true}/>
          <Route exact path="/">
            <Redirect to="/beranda" />
          </Route>
        </IonRouterOutlet>

        {/* mengarahkan tab */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="beranda" href="/beranda">
            <IonIcon icon={homeOutline} />
            <IonLabel>Beranda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Orderlist" href="/Orderlist">
            <IonIcon icon={receiptOutline} />
            <IonLabel>Order List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Bantuan" href="/Bantuan">
            <IonIcon icon={headsetOutline} />
            <IonLabel>Bantuan</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Akun" href="/Akun">
            <IonIcon icon={peopleOutline} />
            <IonLabel>Akun</IonLabel>
          </IonTabButton>
         
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
