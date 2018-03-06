import {Professor} from './professor.model';
export class Disciplina {
  codigo: number;
  nome: string;
  prof: Professor;
  descricao: string;

  constructor(cod:number, nome: string, prof:Professor, descricao?: string) {
    this.codigo = cod;
    this.nome = nome;
    this.prof = prof;
    this.descricao = descricao;
  }
}
