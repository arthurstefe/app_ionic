import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule }   from '@angular/router';

// Importa seus componentes criados
import { UsersComponent } from '../pages/user/users.component';
import { UserFormComponent } from '../pages/user/user-form.component';


// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent},
  { path: 'users/:id/edit', component: UserFormComponent}
];

// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
