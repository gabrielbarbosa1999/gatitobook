import { Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  //!: para que ela seja atribuida depois
  formularioAniaml!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(private animalService: AnimaisService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formularioAniaml = this.formBuilder.group({
      file: ['' , Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const allowComments = this.formularioAniaml.get('allowComments')?.value ?? false;
    const description = this.formularioAniaml.get('description')?.value ?? '';
    //Lendo cada passo da requisição e fazendo o upload
    this.animalService.upload(description, allowComments, this.file).pipe(
      finalize(() => this.router.navigate(['animais']))
    ).subscribe((event: HttpEvent<any>) => {
      if(event.type == HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentualConcluido = Math.round(100*(event.loaded / total));
      }
    }, (error) => console.log(error));
  }

  gravaArquivo(arquivo: any): void {
    //Pegando o primeiro arquivo que vem do input
    const [file] = arquivo?.files;
    this.file = file;
    //Lendo o arquivo para fazer o preview
    const reader = new FileReader();
    reader.onload = (event:any) => (this.preview=event.target.result);
    reader.readAsDataURL(file);
  }

}
