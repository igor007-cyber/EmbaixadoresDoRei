export type PerfilRole = 'admin' | 'usuario'

export interface Perfil {
  id: string
  username: string
  nomeConselheiro: string
  nomeEmbaixada: string
  email: string
  quantidadePessoas: string
  cidade: string
  estado: string
  nomeIgreja: string
  role: PerfilRole
}

export interface Embaixador {
  id: string
  nome: string
  email: string
  idade: string
  telefone: string
  nomeResponsavel: string
  telefoneResponsavel: string
  manual: 'Arauto' | 'Escudeiro' | 'Sênior' | 'Emérito' | 'Futuro Membro' | ''
}

export interface Conselheiro {
  id: string
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
  embaixadorId: string
  feito: boolean
}

export const emptyPerfil: Perfil = {
  id: '',
  username: '',
  nomeConselheiro: '',
  nomeEmbaixada: '',
  email: '',
  quantidadePessoas: '',
  cidade: '',
  estado: '',
  nomeIgreja: '',
  role: 'usuario',
}

export const emptyEmbaixador: Embaixador = {
  id: '',
  nome: '',
  email: '',
  idade: '',
  telefone: '',
  nomeResponsavel: '',
  telefoneResponsavel: '',
  manual: '',
}

export const emptyConselheiro: Conselheiro = {
  id: '',
  nome: '',
  idade: '',
  telefone: '',
  temCurso: '',
}

export const MESES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export function diasNoMes(mes: number, ano: number) {
  return new Date(ano, mes + 1, 0).getDate()
}
