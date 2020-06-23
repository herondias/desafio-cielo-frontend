import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service';
import { LancamentoModel } from 'src/app/models/extrato.interface';
import { ExtratoModel } from '../../models/extrato.interface';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  extrato: ExtratoModel;
  constructor(private extratoService: ExtratoService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.extrato = await this.extratoService.getAll().toPromise();
  }
}
