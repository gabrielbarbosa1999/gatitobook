import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  //Quando utilizado o componente sera criado o atributo chamado mensagem que sera passado para o componente
  @Input()
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
