import { VendedorService } from './../../services/vendedor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.css']
})
export class FormularioVendedorComponent implements OnInit {
  nomeFormGroup: FormGroup;
  tabelaFormGroup: FormGroup;
  dataNascFormGroup: FormGroup;

  constructor(
          private snackBar: MatSnackBar,
          private formBuilder: FormBuilder,
          private vendedorService: VendedorService,
        ) { }

  ngOnInit() {
    this.nomeFormGroup = this.formBuilder.group({
      nome: ['', Validators.required]
    });
    this.tabelaFormGroup = this.formBuilder.group({
      tabela: [0, Validators.required]
    });
    this.dataNascFormGroup = this.formBuilder.group({
      dataNascimento: ['']
    });
  }

  salvarVendedor() {
    const vendedorParaSalvar = {
      dsnome: this.nomeFormGroup.value.nome,
      cdtab: this.tabelaFormGroup.value.tabela,
      dtnasc: this.dataNascFormGroup.value.dataNascimento,
    };

    if (vendedorParaSalvar.dsnome === '' || vendedorParaSalvar.cdtab === '') {
      this.snackBar.open(`Gentileza preencher o Nome e Tabela de Preços`, 'Fechar', { duration: 3000});
    }

    this.vendedorService.postVendedor(vendedorParaSalvar)
      .subscribe(resp => {
        this.limparCampos(),
        this.snackBar.open(`Cadastro ${resp.body.dsnome} Salvo com Sucesso`, 'Fechar', { duration: 3000});
      });
  }

  limparCampos() {
    this.nomeFormGroup.reset();
    this.tabelaFormGroup.reset();
    this.dataNascFormGroup.reset();
  }

}
