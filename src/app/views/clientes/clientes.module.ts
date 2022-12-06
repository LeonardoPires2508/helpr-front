import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';


@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent,
    EditClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClientesModule { }
