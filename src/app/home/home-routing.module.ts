import { AnimaisModule } from './../animais/animais.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [{
  //Assim que o usario acessar a rota home, cada elemento que criar aqui sera somente visto peor este modulo
  path: '',
  component: HomeComponent,
  //Elemento de SubRotas, dentro de home vamos ter sub rotas, aqui e um array de rotas
  children: [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'cadastro',
      component: NovoUsuarioComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
