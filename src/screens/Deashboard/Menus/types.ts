export interface Perfil {
  username: string
  nomeConselheiro: string
  nomeEmbaixada: string
  email: string
  quantidadePessoas: string
  cidade: string
  estado: string
  nomeIgreja: string
}

export interface Embaixador {
  nome: string
  email: string
  idade: string
  telefone: string
  nomeResponsavel: string
  telefoneResponsavel: string
  manual: 'Arauto' | 'Escudeiro' | 'Sênior' | 'Emérito' | ''
}

export interface Conselheiro {
  nome: string
  idade: string
  telefone: string
  temCurso: 'Sim' | 'Não' | ''
}

export interface Reuniao {
  id: string
  dia: number
  horario: string
  mes: number
  ano: number
}

export interface PresencaEntry {
  presente: boolean
  versiculo: boolean
}

export type RegistrosPresenca = Record<string, Record<string, PresencaEntry>>

export interface Atividade {
  id: string
  descricao: string
  embaixadorIndex: number
  feito: boolean
}

export const emptyEmbaixador: Embaixador = {
  nome: '', email: '', idade: '', telefone: '',
  nomeResponsavel: '', telefoneResponsavel: '', manual: ''
}

export const emptyConselheiro: Conselheiro = {
  nome: '', idade: '', telefone: '', temCurso: ''
}

export const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

export function diasNoMes(mes: number, ano: number) {
  return new Date(ano, mes + 1, 0).getDate()
}
