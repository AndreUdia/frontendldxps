import { VendedorService } from './../services/vendedor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IVendedor } from '../models/vendedor';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-conteudo-home',
  templateUrl: './conteudo-home.component.html',
  styleUrls: ['./conteudo-home.component.css']
})
export class ConteudoHomeComponent implements OnInit {
  @ViewChild(ListaClientesComponent, { static: false })
  private childListaCliente: ListaClientesComponent;

  codigoVendedorSelecionado: boolean;
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
      this.childListaCliente.listarClientesPorVendedor(vendedorSelecionado.cdvend);
      this.codigoVendedorSelecionado = true;

      // posso passar o vendedor diretamente para edição ou só o código
      this.vendedorParaEdicao = vendedorSelecionado;
    }
  }
}
