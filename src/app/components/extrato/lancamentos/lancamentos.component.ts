import { Component, OnInit, Input } from '@angular/core';
import { LancamentoModel } from 'src/app/models/extrato.interface';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {
  cols: any[];
  @Input() lancamentos: LancamentoModel[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      {title: 'Data do lançamento', field: 'dataLancamento', width: '15%', align: 'center'},
      {title: 'Descrição', field: 'descricao', width: '10%', align: 'left'},
      {title: 'Número', field: 'numero', width: '10%', align: 'center'},
      {title: 'Situação', field: 'situacao', width: '8%', align: 'center '},
      {title: 'Data de confirmação', field: 'dataConfirmacao', width: '15%', align: 'center'},
      {title: 'Dados bancários', field: 'dadosBancarios', width: '32%', align: 'left'},
      {title: 'Valor final', field: 'valorFinal', width: '10%', align: 'right'},
    ];
  }
}
