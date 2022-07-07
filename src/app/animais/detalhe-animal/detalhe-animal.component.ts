import { Observable } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  //private activateRoute: ActivatedRoute Usado apra ter acesso ao ID do animal
  constructor(private animaisServive: AnimaisService, private activateRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.animalId = this.activateRoute.snapshot.params['animallId'];
    this.animal$ = this.animaisServive.buscaPorId(this.animalId);
  }

  curtir() {
    this.animaisServive.curtir(this.animalId).subscribe((curtida) => {
      if(curtida) {
        this.animal$ = this.animaisServive.buscaPorId(this.animalId);
      }
    })
  }

  excluir() {
    this.animaisServive.excluiAnimal(this.animalId).subscribe(() => {
      this.route.navigate(['/animais/'])
    }, (error) => console.log(error));
  }

}
