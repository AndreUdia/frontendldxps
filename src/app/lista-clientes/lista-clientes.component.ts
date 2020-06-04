import { Component, OnInit } from '@angular/core';

export interface PeriodicElement { // será substituido por serviço
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [ // será substituido por serviço
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'tipo', 'limite', 'selected']; // será substituido por serviço
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  // função auxiliar para exibir ou não botão
  checkRadio(radio): boolean {
    return radio._checked;
  }

  editarCliente(cliente) {
    console.log(cliente);
    // dados do clientes vindo no clique -- será substituido por serviço
  }
}
