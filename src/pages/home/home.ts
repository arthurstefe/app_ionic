import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalController } from 'ionic-angular';
import { Profile } from '../../pages/profile/profile';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: Array<any>;
  private url: string = "http://localhost:3000/users";

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public modalCtrl: ModalController
  ) {

    this.getUsers();

  }

  openModal(user) {
    let modal = this.modalCtrl.create(Profile, { user: user });
    modal.present();
  }

  getUsers(){
    return this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.users = data;
      });
  }

}
