import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { auth } from 'firebase';
// import { FirebaseAppName } from 'angularfire2';
// import { FirebaseApp } from 'angularfire2/firebase.app.module';
// import { firebaseConfig } from '../../app/app.module';

//service
import { ProfessionalsService } from '../../services/professionals.service';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  user: any = { "birthdate": "" };
  myDate: any;

  userData = null;
  mensage: string = '';
  displayName;
  providerFaceBook: any;
  userDataUpdate: any;
  correoVerificado: any;
  x: any = [];
  //camera
  uploads: any = [];
  //contador
  consultaFirebaseLogin: number = 1;
  //-sub
  userLogeadoSub: any;
  Userexists: any;
  constructor(
    public navCtrl: NavController,
    private fb: Facebook,
    private professionalsService: ProfessionalsService,
    public afAuth: AngularFireAuth,
  ) {
    //-identifica y redirecciona usuario logeado.
    this.user['birthdate'] = 'hola';
    this.usuarioLogeado();
    this.professionalsService.getIni();
    // this.audio();
  }

  isBigEnough(element) {
    // return element >= 15;
    console.log(element);
  }
  // audio(){
  //   this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
  //   this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);
  // }
  // onSuccess(){
  //   console.log(' success');
  // }
  // onError(){
  //   console.log('error');
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    // let people = ['jamie', 'jack', 'isaac'];
    // console.log(people); // 1
    // let jackIndex = people.findIndex(x => x === 'isaac');
    // console.log(jackIndex); // 1
    // let numbers = [1, 3,4];
    // console.log(numbers);
    // let oddNumber = numbers.find(x => x == 4);
    // console.log(oddNumber); // 1
    // this.x = [{ "id": 1 }, { "id": -2 }, { "id": 3 }];
    // console.log(this.x);
    // let y = this.x.find(x => x.id == 2 );
    // console.log(y); // 1
    // if(y != undefined){
    //   console.log(y.id); // 1
    // }
    // let z = this.x.findIndex(x => x.id == 2 );
    // console.log(z); // 1
  }

  facebookir() {
    // let goPagePrehome:boolean = true;
    // let userDB:any;
    this.fb.login(['public_profile', 'email'])
      .then((res) => {
        console.log('Logged into Facebook!', res);
        // alert(JSON.stringify(res));
        let credencial = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(credencial).then(
          (info) => {
            // alert(JSON.stringify(info));
            // alert(JSON.stringify(info.providerData['0']['email']));
            // alert(JSON.stringify(info['email']));
            // // alert(JSON.stringify(info.providerData['0']['email']));
            // // alert(JSON.stringify(info.providerData));
            // console.log(info);
            // console.log(info.providerData.email);
            // console.log(info.providerData);
            // if(info.providerData['0']['email'] != undefined){
            // this.userService.getUserEmailPerfil(info.providerData['0']['email']).subscribe(
            //   (emailBD)=>{
            //     alert(JSON.stringify(emailBD));
            //     if(emailBD == info.providerData.email){
            //     }
            //   });
            this.singup();
            // let getProfesionals=this.professionalsService.getProfessionals().subscribe((Jobers) => {
            //   // alert(JSON.stringify(Jobers));
            //   console.log(Jobers);
            //   Jobers.forEach((Job) =>{
            //   console.log('getProfesionals-S home');
            //     //console.log(user);
            //     // if(user['user_email'] == res.user.email){
            //     //     // console.log('res.user.email');
            //     //     // console.log(user);
            //     //     userDB = user;
            //     //     goPagePrehome= true;
            //     // }
            //     //dentro de res.user -> hay otros datos de usuario -> email?
            //     //if(user.providerData["0"].providerId == "facebook.com"){
            //         // if(Job['prof_email'] == info.providerData['0']['email']){
            //         //   // console.log('res.additionalUserInfo.profile.email');
            //         //   // console.log(user);
            //         //   console.log(Job);
            //         //   userDB = Job;
            //         //   goPagePrehome= false;
            //         // }
            //     //}
            //   });
            //   // console.log(userDB);
            //   // console.log(goPagePrehome);
            //   // if(goPagePrehome == false){
            //   //   // this.goNextPagePrehome(userDB);
            //   // }else{
            //   //   this.singup();
            //   // }

            //   getProfesionals.unsubscribe();
            //   console.log('getProfesionals-US home');
            // });
            // }
          }
        ).catch(e => {
          console.log('Error signInWithCredential', e);
          // alert(JSON.stringify(e));
          // alert('Error signInWithCredential');
        });
      })
      .catch(e => {
        console.log('Error zing into Facebook', e)
        // alert(JSON.stringify(e));
      });
  }

  // facebookir(){
  //   let goPagePrehome:boolean = false;
  //   let userDB:any;
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   provider.addScope('email');
  //   firebase.auth().signInWithPopup(provider)
  //     .then(res => {
  //       console.log(res);
  //       // console.info(JSON.stringify(res));
  //       // console.log(res.user.email);
  //       // console.log('res.additionalUserInfo.profile.email');
  //       // console.log(res.additionalUserInfo.profile.email);
  //       //console.log(res);
  //       let getProfesionals=this.professionalsService.getProfessionals().subscribe((Jobers) => {
  //         // console.log(Jobers);
  //         Jobers.forEach((Job) =>{
  //         console.log('getProfesionals-S home');
  //           // console.log(Job);
  //           // console.log(Job['user_email']);
  //           if(res.additionalUserInfo.providerId == "facebook.com"){
  //             // console.info(' additionUser facebook');
  //             if(Job['prof_email'] == res.additionalUserInfo.profile.email){
  //               console.info('Find User Datos');
  //               // console.log('res.additionalUserInfo.profile.email');
  //               // console.log(res.additionalUserInfo.profile.email);
  //               // console.log(res.additionalUserInfo.providerId);
  //               console.log(Job);
  //               userDB = Job;
  //               goPagePrehome= true;
  //             }
  //           }
  //         });
  //         console.log(userDB);
  //         console.log(goPagePrehome);
  //         if(goPagePrehome != false){
  //           this.goNextPagePrehome(userDB);
  //         }else{
  //           this.singup();
  //         }

  //         getProfesionals.unsubscribe();
  //         console.log('getProfesionals-US home');
  //       });
  //     });
  // }

  goNextPagePrehome(datos: any) {
    console.log(datos);
    //console.log(datos['$key']);

    this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
    console.log(this.userDataUpdate);
    console.log(this.afAuth.auth.currentUser.emailVerified);
    console.log(this.afAuth.auth.currentUser);
    console.log(this.correoVerificado);

    if (this.correoVerificado == false) {
      if (this.afAuth.auth.currentUser != null) {

        if (this.afAuth.auth.currentUser.emailVerified != false) {
          console.info('cambio estado login base de datos');

          this.professionalsService.setLogin(datos['$key'], true);
          localStorage.setItem('verificacion', datos['$key']);
          let Data = { 'datos': this.userDataUpdate }
          this.navCtrl.setRoot('ShowPage', Data);

        } else {
          // this.showAlertCorreoNoVerificado();
          this.cerrarSeccion();
        }
      }
    } else {
      localStorage.setItem('verificacion', datos['$key']);
      let Data = { 'datos': this.userDataUpdate }
      this.navCtrl.setRoot('ShowPage', Data);
    }
    // localStorage.setItem('verificacion', datos['$key']);
    // let Data = { 'datos': this.userDataUpdate }
    // this.navCtrl.setRoot('ShowPage', Data);
    // this.navCtrl.setRoot('ShowPage');
    this.desSubcribir();
  }

  login() {
    this.navCtrl.push('LoginPage');
    this.desSubcribir();
  }
  singup() {
    this.navCtrl.push('SingupPage');
    this.desSubcribir();
  }


  usuarioLogeado() {
    if (this.consultaFirebaseLogin == 1) {
      this.consultaFirebaseLogin = 2;
      console.log('contadorLoging' + this.consultaFirebaseLogin);
      this.userLogeadoSub = this.afAuth.authState.subscribe(userAuth => {
        console.log('find user menu');
        console.log(userAuth);
        if (userAuth) {
          if (userAuth != null) {
            if (userAuth.providerData["0"].providerId == 'password') {
              let email = userAuth.providerData["0"].email;
              console.log(email);
              this.Userexists = this.professionalsService.getProfessionalExists(email).subscribe((User) => {
                console.log('User Logueado');
                console.log(User);
                if (User['0']) {
                  if (User['0']['login'] != undefined) {
                    this.correoVerificado = User['0']['login'];
                  } else {
                    this.correoVerificado = false;
                  }
                  this.goNextPagePrehome(User['0']);
                  // if(this.Userexists != undefined){
                  this.userLogeadoSub.unsubscribe();
                  this.Userexists.unsubscribe();
                  console.log('unsubscribe');
                  // }
                }
              });
            } else {
              let faceUid = userAuth.uid;
              console.log(faceUid);
              this.Userexists = this.professionalsService.getProfessionalUidFace(faceUid).subscribe((User) => {
                console.log('User Logueado');
                console.log(User);
                if (User['0']) {
                  // if (User['0']['login'] != undefined) {
                  this.correoVerificado = true;
                  // }
                  this.goNextPagePrehome(User['0']);
                  // if(this.Userexists != undefined){
                  this.userLogeadoSub.unsubscribe();
                  this.Userexists.unsubscribe();
                  console.log('unsubscribe');
                  // }
                }
              });
            }
          } else {
            this.userLogeadoSub.unsubscribe();
            console.log('unsubscribe');
          }
        } else {
          this.userLogeadoSub.unsubscribe();
          console.log('unsubscribe');
        }
      });
    }
  }
  desSubcribir() {
    if (this.userLogeadoSub != undefined) { this.userLogeadoSub.unsubscribe(); }
    if (this.Userexists != undefined) { this.Userexists.unsubscribe(); }
  }

  cerrarSeccion() {
    this.afAuth.auth.signOut().then((value) => {
      console.log(value);
    }).catch((error) => console.info(error));
    localStorage.removeItem('verificacion');
    // this.navCtrl.setRoot('HomePage');
    // this.loadViewUser(undefined);
  }

}
