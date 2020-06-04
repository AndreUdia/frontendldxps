import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { FormularioVendedorComponent } from './formulario-vendedor/formulario-vendedor.component';

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
    MaterialModule,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
