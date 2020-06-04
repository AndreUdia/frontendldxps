import { VendedorService } from './../services/vendedor.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IVendedor } from '../models/vendedor';

@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent implements OnInit {

  codigoVendedorSelecionado: boolean; // resolve a questão de todos os clientes
  vendedorParaEdicao: IVendedor;

  todos = 'TODOS';

  constructor(private vendedorService: VendedorService) { }

  vendedorControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  vendedores: IVendedor[];

  ngOnInit(): void {
    this.codigoVendedorSelecionado = false;
    this.listarVendedores();
  }

  listarVendedores(){
    this.vendedorService.getVendedores().subscribe(data => this.vendedores = data);
  }

  editarVendedor() {
    console.log(this.vendedorParaEdicao);
  }

  mudouVendedor(vendedorSelecionado) {
    if (vendedorSelecionado === this.todos) {
      // console.log(this.codigoVendedorSelecionado);
      this.codigoVendedorSelecionado = true;
    } else {
      this.codigoVendedorSelecionado = true;

      // posso passar o vendedor diretamente para edição ou só o código
      this.vendedorParaEdicao = vendedorSelecionado;
    }
  }
}
