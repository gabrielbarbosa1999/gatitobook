import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Quando o usuario aceessar o site sem nenhuma subrota definida ele vai acessar a pagina de home
    //pathMatch informa para o Angular retirar os espaços da URL
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    //O momento que o usuario aceesar esta rota, vai executar esta função para requisitar o modulo sobre demanda
    //Somente quando o usuario acessar a rota
    //Função import retorna uma promise
    //Que recebe o modulo
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),

    //As rotas auxiliares não ficam aqui ficam no modulo
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((m) => m.AnimaisModule),
  }
];
//Lazy Loading = Carregamento sobre demanda
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
