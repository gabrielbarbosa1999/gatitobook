import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
})
export class CartaoComponent implements OnInit {
  //Recebe como propiedade de quem chamar este componente
  @Input() titulo = '';

  constructor() {}

  ngOnInit(): void {}
}
