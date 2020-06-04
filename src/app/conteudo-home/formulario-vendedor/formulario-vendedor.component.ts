import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-vendedor',
  templateUrl: './formulario-vendedor.component.html',
  styleUrls: ['./formulario-vendedor.component.css']
})
export class FormularioVendedorComponent implements OnInit {
  nomeFormGroup: FormGroup;
  tabelaFormGroup: FormGroup;
  dataNascFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.nomeFormGroup.value.nome);
    console.log(this.tabelaFormGroup.value.tabela);
    console.log(this.dataNascFormGroup.value.dataNascimento);
    // Dados vindo do formulário, só salvar via serviço
  }

}
