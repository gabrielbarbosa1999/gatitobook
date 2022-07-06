import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent  {

  //$ inidica que esta variavel e um obsevable
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
