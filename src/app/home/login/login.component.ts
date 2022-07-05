import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService:AutenticacaoService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    //Observable = Encapsula um operação neste casso uma operação assincrona e quando esta operação completa retorn sucesso ou erro
    //subscribe = No momento que esta requição for completada ele retorna dentro do subscript
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['animais']);
    },(error) => {
      alert("Usuário ou senha inválido");
      console.log(error);
    }
    )
  }
}
