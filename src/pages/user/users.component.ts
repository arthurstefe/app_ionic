import { Component, OnInit } from '@angular/core';
// Importa nosso Service
import { UserService } from './user.service';
// Importa nosso model
import {UserModel} from "./user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  private users: UserModel[] = [];

  constructor(private userService: UserService) { }

  // Pega a listagem de Users ao iniciar
  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
  }

  // Apaga o User
  deleteUser(users) {
    if (confirm("Você tem certeza que quer deletar o user " + users.login + "?")) {
      var index = this.users.indexOf(users);
      this.users.splice(index, 1);

      this.userService.deleteUser(users.id)
        .subscribe(null);
    }
  }

}
