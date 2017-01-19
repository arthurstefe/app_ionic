import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from '../pages/user/users.component';
import { UserService } from '../pages/user/user.service';
import { UserFormComponent } from '../pages/user/user-form.component';

import { NavController} from 'ionic-angular';


@NgModule({
  declarations: [
    MyApp,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    UsersComponent,
    UserFormComponent
  ],
  providers: [
    {provide: ErrorHandler,
    useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
