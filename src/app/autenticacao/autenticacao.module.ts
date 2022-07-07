import { AutenticacaoInterceptor } from './autenticacao.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //Mostrando para o angular que todas requição ira passar por este interceptor
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      //Isso mostra que iremos ter multiplos interceptors
      multi: true,
    }
  ]
})
export class AutenticacaoModule { }
