import { UsuarioService } from './usuario/usuario.service';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Indica para o mecanimos de dependencia do angular que esta classe pode ser injetada em outro componente ou em outro serviço
//Recebe o objeto que tem a propiedade providedIn: 'root' = Este serviço quando injetado por um componente, o angular instancia este objeto uma vez só e nao precisa se procupar em importar etc...
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient, private usuarioServive: UsuarioService) {}

  //Observable e um objeto que quando a requisição completar ele vai retornar um objeto que foi definido dentro dele
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    //Retorna a requisição
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
      {observe: 'response'}
    ).pipe(
      //Não interessa o resultado so quer fazer a operação
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioServive.salvaToken(authToken);
      })
    )
  }
}
