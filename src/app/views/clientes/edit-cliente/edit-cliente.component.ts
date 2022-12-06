import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  public cliente: Cliente = {
    nome: " ",
    cpf: " ",
    email: " ",
    telefone: " ",
    senha: " "
  };

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
    this.initializeFields();
  }

  private initializeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
      if(id) {
        this.clienteService.findById(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
  }

  public update(): void {
    
  }
}
