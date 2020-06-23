export interface DadosBancariosModel {
  nomeBanco: string;
  codigoBanco: number;
  numeroAgencia: number;
  numeroContaCorrente: string;
}

export interface LancamentoModel {
  dataLancamento: Date;
  descricao: string;
  numero: number;
  situacao: string;
  dataConfirmacao: Date;
  dadosBancarios: DadosBancariosModel;
  valorFinal: number;
}

export interface ExtratoModel {
  lancamentos: LancamentoModel[];
}
