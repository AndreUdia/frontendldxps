import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaClientesComponent } from './conteudo-home/lista-clientes/lista-clientes.component';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';
import { FormularioClienteComponent } from './conteudo-home/formulario-cliente/formulario-cliente.component';
import { FormularioVendedorComponent } from './conteudo-home/formulario-vendedor/formulario-vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    ConteudoHomeComponent,
    FormularioClienteComponent,
    FormularioVendedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
