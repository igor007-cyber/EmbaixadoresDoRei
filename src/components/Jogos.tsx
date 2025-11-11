import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Dados completos dos grupos - Copa Embaixadores 2025
const gruposData: { [key: string]: any } = {
  'A': [
    { pos: 1, time: 'Embaixada São Paulo', p: 6, j: 2, v: 2, e: 0, d: 0, gp: 7, gc: 2, sg: 5, zona: 'classificado' },
    { pos: 2, time: 'Embaixada Salvador', p: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 2, sg: 2, zona: 'classificado' },
    { pos: 3, time: 'Embaixada Manaus', p: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 4, sg: -1, zona: '' },
    { pos: 4, time: 'Embaixada João Pessoa', p: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 7, sg: -6, zona: '' },
  ],
  'B': [
    { pos: 1, time: 'Embaixada Rio', p: 6, j: 2, v: 2, e: 0, d: 0, gp: 6, gc: 2, sg: 4, zona: 'classificado' },
    { pos: 2, time: 'Embaixada Fortaleza', p: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 3, sg: 0, zona: 'classificado' },
    { pos: 3, time: 'Embaixada Porto Alegre', p: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 4, sg: -1, zona: '' },
    { pos: 4, time: 'Embaixada Natal', p: 0, j: 2, v: 0, e: 0, d: 2, gp: 2, gc: 5, sg: -3, zona: '' },
  ],
  'C': [
    { pos: 1, time: 'Embaixada Curitiba', p: 6, j: 2, v: 2, e: 0, d: 0, gp: 8, gc: 2, sg: 6, zona: 'classificado' },
    { pos: 2, time: 'Embaixada Recife', p: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 3, sg: 1, zona: 'classificado' },
    { pos: 3, time: 'Embaixada Goiânia', p: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 5, sg: -2, zona: '' },
    { pos: 4, time: 'Embaixada Maceió', p: 0, j: 2, v: 0, e: 0, d: 2, gp: 2, gc: 7, sg: -5, zona: '' },
  ],
  'D': [
    { pos: 1, time: 'Embaixada Brasília', p: 6, j: 2, v: 2, e: 0, d: 0, gp: 5, gc: 2, sg: 3, zona: 'classificado' },
    { pos: 2, time: 'Embaixada Belo Horizonte', p: 4, j: 2, v: 1, e: 1, d: 0, gp: 5, gc: 3, sg: 2, zona: 'classificado' },
    { pos: 3, time: 'Embaixada Vitória', p: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 4, sg: -1, zona: '' },
    { pos: 4, time: 'Embaixada Aracaju', p: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 5, sg: -4, zona: '' },
  ],
  'E': [
    { pos: 1, time: 'Embaixada Florianópolis', p: 4, j: 2, v: 1, e: 1, d: 0, gp: 5, gc: 2, sg: 3, zona: 'classificado' },
    { pos: 2, time: 'Embaixada Campinas', p: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 3, sg: 1, zona: 'classificado' },
    { pos: 3, time: 'Embaixada Belém', p: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 3, sg: 0, zona: '' },
    { pos: 4, time: 'Embaixada Teresina', p: 1, j: 2, v: 0, e: 1, d: 1, gp: 2, gc: 6, sg: -4, zona: '' },
  ],
}

// Dados dos torneios esportivos
const torneiosData: { [key: string]: any } = {
  'copa-embaixadores-2025': {
    id: 'copa-embaixadores-2025',
    nome: 'Copa Embaixadores do Rei 2025',
    tipo: 'Futebol',
    status: 'Em Andamento',
    participantes: 32,
    fase: 'Fase de Grupos',
    dataInicio: '15 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada São Paulo', time2: 'Embaixada Rio', placar1: 2, placar2: 1, data: '15 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Curitiba', time2: 'Embaixada Brasília', placar1: 3, placar2: 3, data: '16 Jan', status: 'Finalizado' },
      { id: 3, time1: 'Embaixada Salvador', time2: 'Embaixada Recife', placar1: null, placar2: null, data: '18 Jan', status: 'Agendado' },
      { id: 4, time1: 'Embaixada Fortaleza', time2: 'Embaixada Manaus', placar1: null, placar2: null, data: '19 Jan', status: 'Agendado' },
    ]
  },
  'campeonato-regional-sul': {
    id: 'campeonato-regional-sul',
    nome: 'Campeonato Regional Sul',
    tipo: 'Futebol',
    status: 'Finalizado',
    participantes: 16,
    campeao: 'Embaixada Curitiba',
    dataConclusao: '20 Dez 2024',
    jogos: [
      { id: 1, time1: 'Embaixada Curitiba', time2: 'Embaixada Florianópolis', placar1: 3, placar2: 1, data: '15 Dez', status: 'Semifinal' },
      { id: 2, time1: 'Embaixada Porto Alegre', time2: 'Embaixada Londrina', placar1: 2, placar2: 2, data: '15 Dez', status: 'Semifinal (4-3 pênaltis)' },
      { id: 3, time1: 'Embaixada Curitiba', time2: 'Embaixada Porto Alegre', placar1: 4, placar2: 2, data: '20 Dez', status: 'Final' },
    ]
  },
  'torneio-nordeste': {
    id: 'torneio-nordeste',
    nome: 'Torneio Interestadual Nordeste',
    tipo: 'Futebol',
    status: 'Em Andamento',
    participantes: 24,
    fase: 'Quartas de Final',
    dataInicio: '08 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada Salvador', time2: 'Embaixada Recife', placar1: 2, placar2: 0, data: '15 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Fortaleza', time2: 'Embaixada Natal', placar1: 1, placar2: 1, data: '16 Jan', status: 'Finalizado' },
      { id: 3, time1: 'Embaixada Maceió', time2: 'Embaixada Aracaju', placar1: null, placar2: null, data: '21 Jan', status: 'Agendado' },
    ]
  },
  'supercopa-embaixadores': {
    id: 'supercopa-embaixadores',
    nome: 'SuperCopa Embaixadores',
    tipo: 'Futebol',
    status: 'Finalizado',
    participantes: 8,
    campeao: 'Embaixada Rio de Janeiro',
    dataConclusao: '28 Dez 2024',
    jogos: [
      { id: 1, time1: 'Embaixada Rio de Janeiro', time2: 'Embaixada São Paulo', placar1: 3, placar2: 2, data: '28 Dez', status: 'Final' },
    ]
  },
  'liga-centro-oeste': {
    id: 'liga-centro-oeste',
    nome: 'Liga Centro-Oeste',
    tipo: 'Futebol',
    status: 'Em Andamento',
    participantes: 20,
    fase: 'Semifinais',
    dataInicio: '05 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada Goiânia', time2: 'Embaixada Brasília', placar1: 2, placar2: 1, data: '17 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Cuiabá', time2: 'Embaixada Campo Grande', placar1: null, placar2: null, data: '24 Jan', status: 'Agendado' },
    ]
  },
}

function Jogos() {
  const { id } = useParams<{ id: string }>()
  const [menuOpen, setMenuOpen] = useState(false)
  const [grupoExpandido, setGrupoExpandido] = useState<string | null>(null)
  
  const torneio = id ? torneiosData[id] : null

  if (!torneio) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Torneio não encontrado</h1>
          <Link to="/torneios" className="text-[#F6B500] hover:underline">
            Voltar para Torneios
          </Link>
        </div>
      </div>
    )
  }

  const statusEmAndamento = torneio.status === 'Em Andamento'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="relative z-20 bg-black flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link to="/" className="flex items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
              alt="Embaixadores do Rei Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-full"
            />
          </Link>

          <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">
            <li>
              <Link to="/" className="text-white hover:text-[#F6B500] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-white hover:text-[#F6B500] transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/torneios" className="text-white hover:text-[#F6B500] transition-colors">
                Torneios
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/login" 
            className="px-6 py-2 text-white hover:text-[#F6B500] transition-colors font-medium"
          >
            Login
          </Link>
          <Link 
            to="/cadastro" 
            className="px-6 py-2 bg-[#F6B500] text-black font-bold rounded-lg hover:bg-[#FFD700] transition-all"
          >
            Cadastro
          </Link>
        </div>

        <button 
          className="lg:hidden text-white z-30"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
            <ul className="flex flex-col p-4 space-y-4">
              <li>
                <Link to="/" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/torneios" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                  Torneios
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                  Cadastro
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Header do Torneio */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/torneios" className="inline-flex items-center gap-2 text-[#F6B500] hover:text-[#FFD700] mb-6 transition-colors">
            <i className="bx bx-arrow-back text-2xl"></i>
            <span className="font-semibold">Voltar para Torneios</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-full font-semibold ${
                  torneio.tipo === 'Futebol' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {torneio.tipo === 'Futebol' ? '⚽' : '📖'} {torneio.tipo}
                </span>
                <span className={`px-4 py-2 rounded-full font-semibold text-sm ${
                  statusEmAndamento 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {torneio.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {torneio.nome}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <i className="bx bx-group text-xl"></i>
                  <span>{torneio.participantes} embaixadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="bx bx-calendar text-xl"></i>
                  <span>{statusEmAndamento ? `Início: ${torneio.dataInicio}` : `Concluído: ${torneio.dataConclusao}`}</span>
                </div>
                {statusEmAndamento && (
                  <div className="flex items-center gap-2">
                    <i className="bx bx-trophy text-xl"></i>
                    <span>{torneio.fase}</span>
                  </div>
                )}
              </div>
            </div>

            {!statusEmAndamento && torneio.campeao && (
              <div className="bg-gradient-to-r from-[#F6B500] to-[#FFD700] p-6 rounded-2xl text-center">
                <i className="bx bxs-trophy text-5xl text-black mb-2"></i>
                <p className="text-black font-bold text-sm mb-1">CAMPEÃO</p>
                <p className="text-black text-xl font-black">{torneio.campeao}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal - Tabela e Jogos */}
          <div className="lg:col-span-2 space-y-8">
            {/* Fase de Grupos - Copa Embaixadores 2025 */}
            {torneio.id === 'copa-embaixadores-2025' && statusEmAndamento && (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <i className="bx bx-grid-alt"></i>
                    Fase de Grupos
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Grupo A */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F6B500] transition-all cursor-pointer hover:shadow-lg">
                      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Grupo A</h3>
                        <button 
                          onClick={() => setGrupoExpandido('A')}
                          className="px-3 py-1 bg-[#101828] text-white text-sm font-semibold rounded hover:bg-[#FFD700] transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">#</th>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">Time</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">P</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">J</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">SG</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { pos: 1, time: 'Embaixada São Paulo', p: 6, j: 2, sg: 5, zona: 'classificado' },
                            { pos: 2, time: 'Embaixada Salvador', p: 4, j: 2, sg: 2, zona: 'classificado' },
                            { pos: 3, time: 'Embaixada Manaus', p: 2, j: 2, sg: -1, zona: '' },
                            { pos: 4, time: 'Embaixada João Pessoa', p: 0, j: 2, sg: -6, zona: '' },
                          ].map((time) => (
                            <tr key={time.pos} className="hover:bg-gray-50 text-sm">
                              <td className="px-3 py-2">
                                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                                  time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {time.pos}
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                                    alt="Logo" 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-semibold text-gray-900 text-sm">{time.time}</span>
                                </div>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="font-bold text-gray-900 text-base">{time.p}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="text-gray-600 font-medium">{time.j}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                                  {time.sg > 0 ? '+' : ''}{time.sg}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Grupo B */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F6B500] transition-all cursor-pointer hover:shadow-lg">
                      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Grupo B</h3>
                        <button 
                          onClick={() => setGrupoExpandido('B')}
                          className="px-3 py-1 bg-[#101828] text-white text-sm font-semibold rounded hover:bg-[#FFD700] transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">#</th>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">Time</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">P</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">J</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">SG</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { pos: 1, time: 'Embaixada Rio', p: 6, j: 2, sg: 4, zona: 'classificado' },
                            { pos: 2, time: 'Embaixada Fortaleza', p: 3, j: 2, sg: 0, zona: 'classificado' },
                            { pos: 3, time: 'Embaixada Porto Alegre', p: 3, j: 2, sg: -1, zona: '' },
                            { pos: 4, time: 'Embaixada Natal', p: 0, j: 2, sg: -3, zona: '' },
                          ].map((time) => (
                            <tr key={time.pos} className="hover:bg-gray-50 text-sm">
                              <td className="px-3 py-2">
                                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                                  time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {time.pos}
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                                    alt="Logo" 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-semibold text-gray-900 text-sm">{time.time}</span>
                                </div>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="font-bold text-gray-900 text-base">{time.p}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="text-gray-600 font-medium">{time.j}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                                  {time.sg > 0 ? '+' : ''}{time.sg}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Grupo C */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F6B500] transition-all cursor-pointer hover:shadow-lg">
                      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Grupo C</h3>
                        <button 
                          onClick={() => setGrupoExpandido('C')}
                          className="px-3 py-1 bg-[#101828] text-white text-sm font-semibold rounded hover:bg-[#FFD700] transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">#</th>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">Time</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">P</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">J</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">SG</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { pos: 1, time: 'Embaixada Curitiba', p: 6, j: 2, sg: 6, zona: 'classificado' },
                            { pos: 2, time: 'Embaixada Recife', p: 4, j: 2, sg: 1, zona: 'classificado' },
                            { pos: 3, time: 'Embaixada Goiânia', p: 2, j: 2, sg: -2, zona: '' },
                            { pos: 4, time: 'Embaixada Maceió', p: 0, j: 2, sg: -5, zona: '' },
                          ].map((time) => (
                            <tr key={time.pos} className="hover:bg-gray-50 text-sm">
                              <td className="px-3 py-2">
                                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                                  time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {time.pos}
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                                    alt="Logo" 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-semibold text-gray-900 text-sm">{time.time}</span>
                                </div>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="font-bold text-gray-900 text-base">{time.p}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="text-gray-600 font-medium">{time.j}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                                  {time.sg > 0 ? '+' : ''}{time.sg}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Grupo D */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F6B500] transition-all cursor-pointer hover:shadow-lg">
                      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Grupo D</h3>
                        <button 
                          onClick={() => setGrupoExpandido('D')}
                          className="px-3 py-1 bg-[#101828] text-white text-sm font-semibold rounded hover:bg-[#FFD700] transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">#</th>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">Time</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">P</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">J</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">SG</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { pos: 1, time: 'Embaixada Brasília', p: 6, j: 2, sg: 3, zona: 'classificado' },
                            { pos: 2, time: 'Embaixada Belo Horizonte', p: 4, j: 2, sg: 2, zona: 'classificado' },
                            { pos: 3, time: 'Embaixada Vitória', p: 2, j: 2, sg: -1, zona: '' },
                            { pos: 4, time: 'Embaixada Aracaju', p: 0, j: 2, sg: -4, zona: '' },
                          ].map((time) => (
                            <tr key={time.pos} className="hover:bg-gray-50 text-sm">
                              <td className="px-3 py-2">
                                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                                  time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {time.pos}
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                                    alt="Logo" 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-semibold text-gray-900 text-sm">{time.time}</span>
                                </div>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="font-bold text-gray-900 text-base">{time.p}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="text-gray-600 font-medium">{time.j}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                                  {time.sg > 0 ? '+' : ''}{time.sg}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Grupo E */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#F6B500] transition-all cursor-pointer hover:shadow-lg">
                      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Grupo E</h3>
                        <button 
                          onClick={() => setGrupoExpandido('E')}
                          className="px-3 py-1 bg-[#101828] text-white text-sm font-semibold rounded hover:bg-[#FFD700] transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">#</th>
                            <th className="px-3 py-2 text-left text-xs font-bold text-gray-600">Time</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">P</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">J</th>
                            <th className="px-2 py-2 text-center text-xs font-bold text-gray-600">SG</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { pos: 1, time: 'Embaixada Florianópolis', p: 4, j: 2, sg: 3, zona: 'classificado' },
                            { pos: 2, time: 'Embaixada Campinas', p: 4, j: 2, sg: 1, zona: 'classificado' },
                            { pos: 3, time: 'Embaixada Belém', p: 2, j: 2, sg: 0, zona: '' },
                            { pos: 4, time: 'Embaixada Teresina', p: 1, j: 2, sg: -4, zona: '' },
                          ].map((time) => (
                            <tr key={time.pos} className="hover:bg-gray-50 text-sm">
                              <td className="px-3 py-2">
                                <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                                  time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  {time.pos}
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                                    alt="Logo" 
                                    className="w-6 h-6 rounded-full object-cover"
                                  />
                                  <span className="font-semibold text-gray-900 text-sm">{time.time}</span>
                                </div>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="font-bold text-gray-900 text-base">{time.p}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className="text-gray-600 font-medium">{time.j}</span>
                              </td>
                              <td className="px-2 py-2 text-center">
                                <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                                  {time.sg > 0 ? '+' : ''}{time.sg}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Legenda */}
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-gray-600">Classificados para as Oitavas de Final (1º e 2º de cada grupo)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tabela de Classificação - Oculta para Copa Embaixadores 2025 */}
            {torneio.id !== 'copa-embaixadores-2025' && (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-gray-900 to-black">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <i className="bx bx-trophy"></i>
                    Classificação Geral
                  </h2>
                </div>
                
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase">#</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase">Time</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">P</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">J</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">V</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">E</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">D</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">GP</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">GC</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">SG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { pos: 1, time: 'Embaixada São Paulo', p: 45, j: 20, v: 14, e: 3, d: 3, gp: 42, gc: 18, sg: 24, zona: 'libertadores' },
                      { pos: 2, time: 'Embaixada Rio', p: 43, j: 20, v: 13, e: 4, d: 3, gp: 38, gc: 20, sg: 18, zona: 'libertadores' },
                      { pos: 3, time: 'Embaixada Curitiba', p: 40, j: 20, v: 12, e: 4, d: 4, gp: 35, gc: 22, sg: 13, zona: 'libertadores' },
                      { pos: 4, time: 'Embaixada Brasília', p: 38, j: 20, v: 11, e: 5, d: 4, gp: 33, gc: 21, sg: 12, zona: 'libertadores' },
                      { pos: 5, time: 'Embaixada Salvador', p: 36, j: 20, v: 11, e: 3, d: 6, gp: 30, gc: 24, sg: 6, zona: 'sulamericana' },
                      { pos: 6, time: 'Embaixada Recife', p: 34, j: 20, v: 10, e: 4, d: 6, gp: 28, gc: 25, sg: 3, zona: 'sulamericana' },
                      { pos: 7, time: 'Embaixada Fortaleza', p: 32, j: 20, v: 9, e: 5, d: 6, gp: 27, gc: 24, sg: 3, zona: 'sulamericana' },
                      { pos: 8, time: 'Embaixada Manaus', p: 30, j: 20, v: 9, e: 3, d: 8, gp: 26, gc: 26, sg: 0, zona: 'sulamericana' },
                      { pos: 9, time: 'Embaixada Porto Alegre', p: 28, j: 20, v: 8, e: 4, d: 8, gp: 25, gc: 28, sg: -3, zona: '' },
                      { pos: 10, time: 'Embaixada Goiânia', p: 26, j: 20, v: 7, e: 5, d: 8, gp: 24, gc: 29, sg: -5, zona: '' },
                      { pos: 11, time: 'Embaixada Belo Horizonte', p: 24, j: 20, v: 7, e: 3, d: 10, gp: 22, gc: 30, sg: -8, zona: '' },
                      { pos: 12, time: 'Embaixada Vitória', p: 22, j: 20, v: 6, e: 4, d: 10, gp: 21, gc: 32, sg: -11, zona: '' },
                      { pos: 13, time: 'Embaixada Natal', p: 20, j: 20, v: 5, e: 5, d: 10, gp: 19, gc: 33, sg: -14, zona: 'rebaixamento' },
                      { pos: 14, time: 'Embaixada João Pessoa', p: 18, j: 20, v: 5, e: 3, d: 12, gp: 18, gc: 35, sg: -17, zona: 'rebaixamento' },
                      { pos: 15, time: 'Embaixada Maceió', p: 16, j: 20, v: 4, e: 4, d: 12, gp: 17, gc: 37, sg: -20, zona: 'rebaixamento' },
                      { pos: 16, time: 'Embaixada Aracaju', p: 14, j: 20, v: 3, e: 5, d: 12, gp: 15, gc: 40, sg: -25, zona: 'rebaixamento' },
                    ].map((time) => (
                      <tr key={time.pos} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${
                            time.zona === 'libertadores' ? 'bg-blue-500 text-white' :
                            time.zona === 'sulamericana' ? 'bg-green-500 text-white' :
                            time.zona === 'rebaixamento' ? 'bg-red-500 text-white' :
                            'bg-gray-200 text-gray-700'
                          }`}>
                            {time.pos}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-semibold text-gray-900">{time.time}</span>
                        </td>
                        <td className="px-2 py-3 text-center font-bold text-gray-900">{time.p}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.j}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.v}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.e}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.d}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.gp}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.gc}</td>
                        <td className="px-2 py-3 text-center">
                          <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                            {time.sg > 0 ? '+' : ''}{time.sg}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legenda */}
              <div className="bg-gray-50 p-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-gray-600">Libertadores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-600">Sul-Americana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Rebaixamento</span>
                  </div>
                </div>
              </div>
              </div>
            )}

            {/* Próximos Jogos */}
            {statusEmAndamento && (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <i className="bx bx-calendar-event"></i>
                    Próxima Rodada
                  </h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {torneio.jogos.filter((j: any) => j.status === 'Agendado').slice(0, 4).map((jogo: any) => (
                    <div key={jogo.id} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">{jogo.time1}</p>
                        </div>
                        <div className="mx-4 text-center">
                          <span className="text-sm font-bold text-blue-600">VS</span>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="font-bold text-gray-900">{jogo.time2}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                        <span><i className="bx bx-calendar mr-1"></i>{jogo.data}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                          {jogo.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resultados */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <i className="bx bx-check-circle"></i>
                  {statusEmAndamento ? 'Últimos Resultados' : 'Resultados Finais'}
                </h2>
              </div>
              
              <div className="p-6 space-y-4">
                {torneio.jogos.filter((j: any) => j.placar1 !== null).map((jogo: any) => (
                  <div key={jogo.id} className="border-l-4 border-green-500 pl-4 py-2 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900">{jogo.time1}</p>
                      </div>
                      <div className="mx-4 bg-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className={`text-2xl font-black ${jogo.placar1 > jogo.placar2 ? 'text-green-600' : 'text-gray-900'}`}>
                            {jogo.placar1}
                          </span>
                          <span className="text-xl font-bold text-gray-400">×</span>
                          <span className={`text-2xl font-black ${jogo.placar2 > jogo.placar1 ? 'text-green-600' : 'text-gray-900'}`}>
                            {jogo.placar2}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 text-right">
                        <p className="font-bold text-gray-900">{jogo.time2}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span><i className="bx bx-calendar mr-1"></i>{jogo.data}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                        {jogo.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Lateral - Artilharia */}
          <div className="space-y-8">
            {/* Artilharia */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden sticky top-4">
              <div className="bg-gradient-to-r from-[#F6B500] to-[#FFD700] p-4">
                <h2 className="text-xl font-bold text-black flex items-center gap-2">
                  <i className="bx bxs-trophy"></i>
                  Artilharia
                </h2>
              </div>
              
              <div className="p-4 space-y-3">
                {[
                  { pos: 1, nome: 'Pedro Silva', time: 'Emb. São Paulo', gols: 12 },
                  { pos: 2, nome: 'João Santos', time: 'Emb. Rio', gols: 11 },
                  { pos: 3, nome: 'Lucas Almeida', time: 'Emb. Curitiba', gols: 10 },
                  { pos: 4, nome: 'Rafael Costa', time: 'Emb. Brasília', gols: 9 },
                  { pos: 5, nome: 'Gabriel Oliveira', time: 'Emb. Salvador', gols: 8 },
                  { pos: 6, nome: 'Matheus Ferreira', time: 'Emb. Recife', gols: 7 },
                  { pos: 7, nome: 'Felipe Rocha', time: 'Emb. Fortaleza', gols: 7 },
                  { pos: 8, nome: 'André Lima', time: 'Emb. Manaus', gols: 6 },
                ].map((artilheiro) => (
                  <div key={artilheiro.pos} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      artilheiro.pos === 1 ? 'bg-[#F6B500] text-black' :
                      artilheiro.pos === 2 ? 'bg-gray-300 text-gray-800' :
                      artilheiro.pos === 3 ? 'bg-orange-400 text-white' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {artilheiro.pos}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">{artilheiro.nome}</p>
                      <p className="text-xs text-gray-500">{artilheiro.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-[#F6B500]">{artilheiro.gols}</p>
                      <p className="text-xs text-gray-500">gols</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas (apenas para finalizados) */}
        {!statusEmAndamento && (
          <div className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Estatísticas do Torneio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <i className="bx bxs-trophy text-4xl text-[#F6B500] mb-2"></i>
                <p className="text-white/60 text-sm mb-1">Campeão</p>
                <p className="text-xl font-bold">{torneio.campeao}</p>
              </div>
              <div className="text-center">
                <i className="bx bx-group text-4xl text-[#F6B500] mb-2"></i>
                <p className="text-white/60 text-sm mb-1">Participantes</p>
                <p className="text-xl font-bold">{torneio.participantes} embaixadas</p>
              </div>
              <div className="text-center">
                <i className="bx bx-football text-4xl text-[#F6B500] mb-2"></i>
                <p className="text-white/60 text-sm mb-1">Total de Jogos</p>
                <p className="text-xl font-bold">{torneio.jogos.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Grupo Expandido */}
      {grupoExpandido && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setGrupoExpandido(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Modal */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-6 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">Grupo {grupoExpandido}</h2>
                  <p className="text-white/60 text-sm">Copa Embaixadores do Rei 2025 • Fase de Grupos</p>
                </div>
                <button
                  onClick={() => setGrupoExpandido(null)}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <i className="bx bx-x text-2xl"></i>
                </button>
              </div>
            </div>

            {/* Tabela Completa */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase">#</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase">Time</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">P</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">J</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">V</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">E</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">D</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">GP</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">GC</th>
                      <th className="px-3 py-3 text-center text-xs font-bold text-gray-600 uppercase">SG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {gruposData[grupoExpandido].map((time: any) => (
                      <tr key={time.pos} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4">
                          <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-sm ${
                            time.zona === 'classificado' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                          }`}>
                            {time.pos}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                              alt="Logo" 
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="font-semibold text-gray-900 text-base">{time.time}</span>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-center font-bold text-gray-900 text-base">{time.p}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.j}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.v}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.e}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.d}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.gp}</td>
                        <td className="px-3 py-4 text-center text-gray-600">{time.gc}</td>
                        <td className="px-3 py-4 text-center">
                          <span className={`font-semibold ${time.sg > 0 ? 'text-green-600' : time.sg < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                            {time.sg > 0 ? '+' : ''}{time.sg}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legenda */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Legenda:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm text-gray-600">
                  <div><span className="font-bold text-gray-900">P</span> - Pontos</div>
                  <div><span className="font-bold text-gray-900">J</span> - Jogos</div>
                  <div><span className="font-bold text-gray-900">V</span> - Vitórias</div>
                  <div><span className="font-bold text-gray-900">E</span> - Empates</div>
                  <div><span className="font-bold text-gray-900">D</span> - Derrotas</div>
                  <div><span className="font-bold text-gray-900">GP</span> - Gols Pró</div>
                  <div><span className="font-bold text-gray-900">GC</span> - Gols Contra</div>
                  <div><span className="font-bold text-gray-900">SG</span> - Saldo de Gols</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-700">Classificados para as Oitavas de Final</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jogos

