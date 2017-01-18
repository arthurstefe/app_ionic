import { Component, OnInit } from '@angular/core';
// Importa nosso service para conseguirmos falar com a API
import { UserService } from './user.service';
// Importa nosso Model
import {UserModel} from "./user.model";
// Importa o Router para podermos conseguir pegar o parâmetro id
import { Router, ActivatedRoute } from '@angular/router';


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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Esse método rola enquanto a página é carregada para preencher
  // a question caso seja edição
  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit user' : 'Create user';

      if (!id)
        return;

      this.userService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {});
    });
  }

  // Nós chamamos esse método no form quando estamos prontos para criar
  // uma questão ou editar
  save() {
    var result;

    if (this.user.id){
      result = this.userService.updateUser(this.user);
    } else {
      result = this.userService.addUser(this.user);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }

}
