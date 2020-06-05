import { IVendedor } from './../models/vendedor';
import { ModalVendedorComponent } from './../modal-vendedor/modal-vendedor.component';
import { VendedorService } from './../services/vendedor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { MatDialog } from '@angular/material/dialog';


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

  constructor(
    private vendedorService: VendedorService,
    public dialog: MatDialog,
  ) { }

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

  mudouVendedor(vendedorSelecionado) {
    if (vendedorSelecionado === this.todos) {
      this.codigoVendedorSelecionado = true;
    } else {
      this.childListaCliente.listarClientesPorVendedor(vendedorSelecionado.cdvend);
      this.codigoVendedorSelecionado = true;
      this.vendedorParaEdicao = vendedorSelecionado;
    }
  }

  // logica modal dialogo edição vendedor - Faltou alguns detalhes
  editarVendedor() {
    let vendedor: IVendedor;
    this.vendedorService.getVendedoresPorCodigo(this.codigoVendedorSelecionado)
      .subscribe(res => vendedor = res);
    const dialogRef = this.dialog.open(ModalVendedorComponent, {
      width: '300px',
      data: {
        // cdvend: vendedor.cdvend,
        // dsnome: vendedor.dsnome,
        // cdtab: vendedor.cdtab,
        // dsnasc: vendedor.dtnasc
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
