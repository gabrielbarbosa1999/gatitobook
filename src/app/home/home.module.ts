import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //Impotando o modolu de formulario do angular
    FormsModule,
    MensagemModule
  ],
  exports:[
    //Modulo exporta o HomeComponent e expoe ele
    HomeComponent
  ]
})

//Modulo é a principal forma de organizar o codigo em uma aplicação Angular

//Tipos de Modulos
//Featcher Modolu de funcionalida
//Criar todos componentes e servicos relacionado exclusivamente ao home neste modulo, isola ate mesmo as rotas deste modulo


export class HomeModule { }
