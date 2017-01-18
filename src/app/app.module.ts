import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { UsersComponent } from '../pages/user/users.component';
import { UserService } from '../pages/user/user.service';
import { UserFormComponent } from '../pages/user/user-form.component';

// Importa o modulo de rotas do Angular 2
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MyApp,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    routing
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
    {provide: ErrorHandler,
    useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
