import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  vendedores = [{cdvend: '324546-313312-gaga', nome: 'andre'}]; // será substituido por serviço
  tipos = [
    {value: 'PF', viewValue: 'PF'},
    {value: 'PJ', viewValue: 'PJ'}
  ];

  constructor(private formBuilder: FormBuilder) { }

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
  }

  salvarCliente() {
    console.log(this.nomeFormGroup.value.nome);
    console.log(this.tipoPessoaFormGroup.value.tipo);
    console.log(this.vendedorFormGroup.value.vendedor);
    console.log(this.limiteFormGroup.value.limite);
    // Dados vindo do formulário, só salvar via serviço
  }

  mudouVendedor(vendedorSelecionado) {
    this.vendedorSelecionado = vendedorSelecionado;
    console.log(this.vendedorSelecionado);
  }

}
