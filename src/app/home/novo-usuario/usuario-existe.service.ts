import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    //Conforme o usuario for digitando e converte na requisao
    //Com a requisição pega o resultado true ou false e converte no objeto de erro ou em null
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(
          (nomeUsuario) =>
            this.novoUsarioService.verificarUsuarioExistente(nomeUsuario)),
          map((usuarioExiste) =>
            usuarioExiste ? { usuarioExistente: true } : null
          ),
          first()
        );
    };
  }
}
