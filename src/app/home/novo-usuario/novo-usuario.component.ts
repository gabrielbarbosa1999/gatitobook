import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmarSenha } from './confirmarsenha.validator';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { senhaUsuario } from './senhausuario.validator';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  //Represar o estado do formulario
  novoUsuarioForm!: FormGroup;

  //Injetando o serviço para criação de forumlario Reativo
  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  //Executado apos a classe injetar todos os serviços da classe
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      //Passamos um objeto onde descrevemos os estados do elementos do formulario
      email: ['', [
        //Adicionando validações
        Validators.required, Validators.email
      ]],
      fullName: ['', [
        Validators.required, Validators.minLength(4)
      ]],
      userName: ['', [Validators.required, minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: ['', [Validators.required]],
      confPass: ['', [Validators.required]],
    },{
      validators: [senhaUsuario, confirmarSenha],
    })
  }

  cadastrar() {
    if(this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
