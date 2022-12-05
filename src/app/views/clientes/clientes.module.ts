import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
