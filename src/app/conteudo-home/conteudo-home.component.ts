import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IVendedor } from '../models/vendedor';

@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent implements OnInit {

  todos = 'TODOS';
  vendedorParaEdicao: IVendedor;
  arrayVendedores: IVendedor[] = [ // será substituido por serviço
    {cdvend: '2345-1244-agkk1', dsnome: 'test1', cdtab: 10, dtnasc: '27/08/2000'},
    {cdvend: '2515-af33-ag45b', dsnome: 'test2', cdtab: 30, dtnasc: '27/08/1980'},
  ];

  constructor() { }

  vendedorControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  vendedores: IVendedor[] = this.arrayVendedores;

  ngOnInit(): void {
  }

  editarVendedor() {
    console.log(this.vendedorParaEdicao);
  }

  mudouVendedor(vendedorSelecionado) {
    if (vendedorSelecionado === this.todos) {
      console.log('servico que busca todos clientes da base' + vendedorSelecionado);
    } else {
      this.vendedorParaEdicao = vendedorSelecionado; // caso de uso edição
      console.log(this.vendedorParaEdicao);
      // passar nome-id do vendedor para componente lista
      console.log(this.vendedorParaEdicao.dsnome); // passar dado para lista-cliente
    }
  }
}
