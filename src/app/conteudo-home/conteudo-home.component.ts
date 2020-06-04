import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Animal { // será substituido por serviço
  name: string;
  sound: string;
}

@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent implements OnInit {

  todos = 'TODOS';
  vendedorParaEdicao = [];

  constructor() { }

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [ // será substituido por serviço
    {name: 'tst', sound: 'test!'},
    {name: 'tst', sound: 'test!'},
  ];

  ngOnInit(): void {
  }

  editarVendedor() {
    console.log(this.vendedorParaEdicao);
  }

  mudouVendedor(vendedorSelecionado) {
    this.vendedorParaEdicao = vendedorSelecionado;
    console.log(this.vendedorParaEdicao);
  }
}
