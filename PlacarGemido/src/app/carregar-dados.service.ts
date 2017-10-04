import { Injectable } from '@angular/core';

@Injectable()
export class CarregarDadosService {

  pessoa: any = {
    nome: "Marcelo",
    qtdGemidos: 44
  }

  pessoas: any[] = [];

  constructor() { }

  carregarDados() {
    this.pessoas.push(this.pessoa);     
    return this.pessoas;
  }

}
