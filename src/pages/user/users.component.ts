import { Component } from '@angular/core';
// Importa nosso Service
import { UserService } from './user.service';
// Importa nosso model
import {UserModel} from "./user.model";
// Importa nosso Form
import {UserFormComponent} from "./user-form.component";

import { NavController} from 'ionic-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {

  private users: UserModel[] = [];

  constructor(
    private userService: UserService,
    public nav: NavController
  ) {
      this.init();
   }

  // Pega a listagem de Users ao iniciar
  init() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
  }

  openPage(user) {
    this.nav.push(UserFormComponent, { user: user });
  }

  // Apaga o User
  deleteUser(user) {
    if (confirm("Você tem certeza que quer deletar o user " + user.login + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.userService.deleteUser(user.id);
    }
  }

}
