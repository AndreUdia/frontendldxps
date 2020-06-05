import { VendedorService } from './../../services/vendedor.service';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IVendedor } from 'src/app/models/vendedor';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {
  nomeFormGroup: FormGroup;
  tipoPessoaFormGroup: FormGroup;
  vendedorFormGroup: FormGroup;
  limiteFormGroup: FormGroup;
  vendedorSelecionado = [];
  vendedores: IVendedor[];
  tipos = [
    {value: 'PF', viewValue: 'PF'},
    {value: 'PJ', viewValue: 'PJ'}
  ];

  constructor(
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private clienteService: ClienteService,
        private vendedorService: VendedorService,
      ) { }

  ngOnInit() {
    this.nomeFormGroup = this.formBuilder.group({
      nome: ['', Validators.required]
    });
    this.tipoPessoaFormGroup = this.formBuilder.group({
      tipo: ['PF', Validators.required]
    });
    this.vendedorFormGroup = this.formBuilder.group({
      vendedor: ['']
    });
    this.limiteFormGroup = this.formBuilder.group({
      limite: [0, Validators.required]
    });

    this.listarVendedores();
  }

  listarVendedores(){
    this.vendedorService.getVendedores().subscribe(data => this.vendedores = data);
  }

  mudouVendedor(vendedorSelecionado) {
    this.vendedorSelecionado = vendedorSelecionado;
    console.log(this.vendedorSelecionado);
  }

  salvarCliente() {
    let clienteParaSalvar: any;

    if (this.nomeFormGroup.value === '' || this.limiteFormGroup.value === '' || this.vendedorFormGroup.value.vendedor === '') {
      this.snackBar.open(`Gentileza preencher o Nome, Vendedor e Limite de Crédito`, 'Fechar', { duration: 3000});
    } else {
      clienteParaSalvar = {
        dsnome: this.nomeFormGroup.value.nome,
        idtipo: this.tipoPessoaFormGroup.value.tipo,
        cdvend: this.vendedorFormGroup.value.vendedor.cdvend,
        dslim: this.limiteFormGroup.value.limite,
      };

      this.clienteService.postCliente(clienteParaSalvar)
      .subscribe(resp => {
        this.limparCampos(),
        this.snackBar.open(`Cadastro ${resp.body.dsnome} Salvo com Sucesso`, 'Fechar', { duration: 3000});
      });
    }


  }

  limparCampos() {
    this.nomeFormGroup.reset();
    this.tipoPessoaFormGroup.reset();
    this.vendedorFormGroup.reset();
    this.limiteFormGroup.reset();
  }
}
