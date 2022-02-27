import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Uma tranferencia foi solicitada!!');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
  }
}
