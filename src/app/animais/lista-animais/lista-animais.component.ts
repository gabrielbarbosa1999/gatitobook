import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  //Somente declarando
  animais!: Animais;

  constructor(
    /*
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
    */
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activateRouter.params.subscribe(param => {
      this.animais = this.activateRouter.snapshot.data['animais'];
    })

    /*
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      //Caso o userName for undifined ou null atribui ''
      const userName = usuario.name ?? '';
      this.animaisService.listadoUsuario(userName).subscribe((animais) => {
        this.animais = animais;
      });
    });
    */

    /*Codigo nao e mais utilizado pois usamos resolver

   //Utilizando RXJS para simplificar
   this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //Troca o fluxo pega o fluxo de usuario e troca para o de animais
    switchMap((usuario) => {
      //Caso o userName for undifined ou null atribui ''
      const userName = usuario.name ?? '';
      return this.animaisService.listadoUsuario(userName);
    })
   )

  */

  }

}
