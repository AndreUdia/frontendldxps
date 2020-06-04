import { ClienteService } from './../../services/cliente.service';
import { ICliente } from '../../models/cliente';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  @Input() codigoVendedorSelecionado: string;

  displayedColumns: string[] = ['nome', 'tipo', 'limite', 'selected']; // será substituido por serviço
  dataSource = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.getClientes().subscribe(data => this.dataSource = data);
  }

  // função auxiliar para exibir ou não botão
  checkRadio(radio): boolean {
    return radio._checked;
  }

  editarCliente(cliente) {
    // console.log(cliente);
    // dados do clientes vindo no clique -- será substituido por serviço
  }

  getCodigoVendedor() {
    return this.codigoVendedorSelecionado;
  }

  validaCampo() {
    console.log(this.codigoVendedorSelecionado);
    if (this.dataSource !== [] && this.codigoVendedorSelecionado !== '') {
      return true;
    } else {
      return false;
    }
  }

}
