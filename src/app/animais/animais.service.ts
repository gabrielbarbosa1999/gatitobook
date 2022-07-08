
import { TokenService } from './../autenticacao/token.service';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listadoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'}).pipe(
      //Se retorar 200 retorna true para o componente e se 304 retorna como false
      //Se for outro erro exibe o outro erro no console
      mapTo(true), catchError((erro) => {
        return erro.status == NOT_MODIFIED ? of(false) : throwError(erro);
      }));
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    //Empacotando os dados para ser enviado
    const formData = new FormData();

    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false')
    formData.append('imageFile', arquivo);

    //Monitorando o upload
    //Utilizando o objetos de opçoes para monitorar os eventos
    //E reporta em que etapa está a requisição atrasves do obeservable
    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    })
  }
}
