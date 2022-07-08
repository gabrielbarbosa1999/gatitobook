import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    //Adicionando o resolve
    resolve: {
      animais: ListaAnimaisResolver,
    }
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  },
  {
    //Criando uma rota variavel
    path: ':animallId',
    component: DetalheAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
