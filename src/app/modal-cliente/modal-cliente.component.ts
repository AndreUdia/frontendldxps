import { ClienteService } from './../services/cliente.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICliente } from '../models/cliente';


@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent implements OnInit{

  clientes = [];

  constructor(
    private clienteService: ClienteService,
    public dialogRef: MatDialogRef<ModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICliente) {}

  ngOnInit() {
    this.clienteService.getClientes()
      .subscribe(data => this.clientes = data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  alterarDados() {
    const estrutura = {
      dsnome: this.data.dsnome,
      idtipo: this.data.idtipo,
      cdvend: this.data.cdvend,
      dslim: this.data.dslim
    };

    this.clienteService.putCliente(estrutura).subscribe();
  }

  excluirCliente(cdcl: string) {
    this.clienteService.deleteCliente(cdcl).subscribe();
  }
}
