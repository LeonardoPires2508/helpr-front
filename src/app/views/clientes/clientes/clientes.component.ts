import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  dataSource: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.dataSource = clientes;
    })
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?")
      if(ok) {
        this.clienteService.delete(id).subscribe(() =>{
          alert("Cliente excluido!");
          this.initializeTable();
        });
      }
  }
}
