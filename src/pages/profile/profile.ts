import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
//import { User } from '../../pages/user/user';

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Usuário
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
    <ion-item>
      <ion-label floating>Login</ion-label>
      <ion-input [(ngModel)]="user.login" type="text" value="{{user.login}}"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label floating>Senha</ion-label>
      <ion-input [(ngModel)]="user.senha" type="text" value="{{user.senha}}"></ion-input>
    </ion-item>
  </ion-list>
  <div padding>
    <button ion-button color="primary" block (click)="update(user)">Atualizar</button>
  </div>
</ion-content>
`
})
export class Profile {

  private url: string = "http://localhost:3000/users";
  private user;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public http: Http,
    public modalCtrl: ModalController
  ) {

      this.user = this.params.get('user');

    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // create(user) {
  //   let param: { user: User } = { 'user': user };
  //   return this.http
  //     .post(this.url + '.json', param)
  //     .map(res => res.json())
  //     .subscribe(data => {
  //           alert('ok');
  //     }, error => {
  //         console.log(JSON.stringify(error.json()));
  //     });
  // }

  update(user) {
    return this.http
      .patch(this.url + '/' + user.id + '.json', {'user': user})
      .map(res => res.json())
      .subscribe(data => {
            alert('Usuário atualizado com sucesso!');
      }, error => {
          console.log(JSON.stringify(error.json()));
      });
  }



}
