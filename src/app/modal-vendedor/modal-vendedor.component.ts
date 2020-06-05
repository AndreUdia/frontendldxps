import { IVendedor } from './../models/vendedor';
import { Component, OnInit, Inject } from '@angular/core';
import { VendedorService } from '../services/vendedor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalClienteComponent } from '../modal-cliente/modal-cliente.component';

@Component({
  selector: 'app-modal-vendedor',
  templateUrl: './modal-vendedor.component.html',
  styleUrls: ['./modal-vendedor.component.css']
})
export class ModalVendedorComponent implements OnInit {
  vendedores = [];

  constructor(
    private vendedorService: VendedorService,
    public dialogRef: MatDialogRef<ModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IVendedor) {}

  ngOnInit() {
    this.vendedorService.getVendedores()
      .subscribe(data => this.vendedores = data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  alterarDados() {
    const estrutura = {
      cdvend: this.data.cdvend,
      dsnome: this.data.dsnome,
      cdtab: this.data.cdtab,
      dtnasc: this.data.dtnasc
    };

    this.vendedorService.putVendedor(estrutura).subscribe();
  }

  excluirVendedor(cdvend: string) {
    this.vendedorService.deleteVendedor(cdvend).subscribe();
  }

}
