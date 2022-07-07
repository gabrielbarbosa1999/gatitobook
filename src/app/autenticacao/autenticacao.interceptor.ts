import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  //Tem o objetivo de interceptar todas ação http que sai do front end e assim podemos manipular a requisição antes de  ir para o servidor

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.tokenService.possuiToken()) {
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      //Padrao o request e imutavel
      //Fazendo o clone da requição para conseguir deixar ele mutavel
      request = request.clone({headers});
    }
    return next.handle(request);
  }
}
