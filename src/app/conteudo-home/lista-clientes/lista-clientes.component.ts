import { ICliente } from '../../models/cliente';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  @Input() codigoVendedorSelecionado: string;

  CLIENTE_DATA: ICliente[];

  displayedColumns: string[] = ['nome', 'tipo', 'limite', 'selected']; // será substituido por serviço
  dataSource = [];

  constructor() { }

  ngOnInit(): void {
    this.dumpData();
    this.dataSource = this.CLIENTE_DATA;
  }

  // função auxiliar para exibir ou não botão
  checkRadio(radio): boolean {
    return radio._checked;
  }

  editarCliente(cliente) {

    // console.log(cliente);
    // dados do clientes vindo no clique -- será substituido por serviço
  }

  dumpData() {
    this.CLIENTE_DATA = [ // será substituido por serviço - filtrar todos ou vendedor
      {cdcl: 'gagk-gae3', dsnome: 'beutrano', idtipo: 'PF', cdvend: 'gagk-3kg6-gleg', dslim: 1500.00},
      {cdcl: 'gagk-gae3', dsnome: 'fulano', idtipo: 'PJ', cdvend: 'gagk-3kg6-gleg', dslim: 2300.00},
      {cdcl: 'gagk-gae3', dsnome: 'ciclano', idtipo: 'PF', cdvend: 'liag-0age-979d', dslim: 3290.00},
    ];
  }

  getCodigoVendedor() {
    return this.codigoVendedorSelecionado;
  }

}
