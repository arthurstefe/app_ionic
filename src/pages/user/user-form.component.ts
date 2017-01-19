import { Component, OnInit } from '@angular/core';
// Importa nosso service para conseguirmos falar com a API
import { UserService } from './user.service';
// Importa nosso Model
import {UserModel} from "./user.model";

import { NavParams } from 'ionic-angular';

import { NavController} from 'ionic-angular';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  // Cria uma variável string para falarmos se é uma edição ou criação de Question
  title: string;
  // Pega nosso Model e coloca na variável question
  user: UserModel = new UserModel();

  constructor(
    //Declara nossas dependências
    private userService: UserService,
    params: NavParams,
    public nav: NavController
  ) {
      this.user = params.data.user ? params.data.user : this.user;
    }

  // Esse método rola enquanto a página é carregada para preencher
  // a question caso seja edição
  ngOnInit() {

      this.title = this.user.id ? 'Edit user' : 'Create user';

    }

  save(user) {
    var result;

    if (user.id){
      result = this.userService.updateUser(user);
    } else {
      result = this.userService.addUser(user);
    }

    //result.subscribe(data => this.router.navigate(['/']));
  }

  goBack() {
    this.nav.pop();
  }

}
