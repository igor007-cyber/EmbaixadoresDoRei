import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Dados dos torneios bíblicos
const torneiosBiblicosData: { [key: string]: any } = {
  'quiz-biblico-nacional': {
    id: 'quiz-biblico-nacional',
    nome: 'Quiz Bíblico Nacional',
    tipo: 'Bíblia',
    status: 'Em Andamento',
    participantes: 45,
    fase: 'Fase Eliminatória',
    dataInicio: '10 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada Porto Alegre', time2: 'Embaixada Goiânia', placar1: 85, placar2: 72, data: '10 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Belo Horizonte', time2: 'Embaixada Vitória', placar1: 90, placar2: 88, data: '11 Jan', status: 'Finalizado' },
      { id: 3, time1: 'Embaixada Natal', time2: 'Embaixada João Pessoa', placar1: null, placar2: null, data: '20 Jan', status: 'Agendado' },
    ]
  },
  'desafio-antigo-testamento': {
    id: 'desafio-antigo-testamento',
    nome: 'Desafio Antigo Testamento',
    tipo: 'Bíblia',
    status: 'Em Andamento',
    participantes: 28,
    fase: 'Fase de Grupos',
    dataInicio: '18 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada Campinas', time2: 'Embaixada Sorocaba', placar1: 78, placar2: 65, data: '18 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Santos', time2: 'Embaixada Ribeirão Preto', placar1: null, placar2: null, data: '22 Jan', status: 'Agendado' },
    ]
  },
  'copa-conhecimento-2024': {
    id: 'copa-conhecimento-2024',
    nome: 'Copa do Conhecimento 2024',
    tipo: 'Bíblia',
    status: 'Finalizado',
    participantes: 40,
    campeao: 'Embaixada São Paulo',
    dataConclusao: '15 Dez 2024',
    jogos: [
      { id: 1, time1: 'Embaixada São Paulo', time2: 'Embaixada Rio de Janeiro', placar1: 95, placar2: 88, data: '10 Dez', status: 'Semifinal' },
      { id: 2, time1: 'Embaixada Brasília', time2: 'Embaixada Belo Horizonte', placar1: 82, placar2: 90, data: '10 Dez', status: 'Semifinal' },
      { id: 3, time1: 'Embaixada São Paulo', time2: 'Embaixada Belo Horizonte', placar1: 98, placar2: 92, data: '15 Dez', status: 'Final' },
    ]
  },
  'desafio-novo-testamento': {
    id: 'desafio-novo-testamento',
    nome: 'Desafio Novo Testamento',
    tipo: 'Bíblia',
    status: 'Em Andamento',
    participantes: 35,
    fase: 'Oitavas de Final',
    dataInicio: '12 Jan 2025',
    jogos: [
      { id: 1, time1: 'Embaixada Cuiabá', time2: 'Embaixada Campo Grande', placar1: 88, placar2: 75, data: '12 Jan', status: 'Finalizado' },
      { id: 2, time1: 'Embaixada Palmas', time2: 'Embaixada Boa Vista', placar1: null, placar2: null, data: '23 Jan', status: 'Agendado' },
    ]
  },
  'maratona-biblica-2024': {
    id: 'maratona-biblica-2024',
    nome: 'Maratona Bíblica 2024',
    tipo: 'Bíblia',
    status: 'Finalizado',
    participantes: 50,
    campeao: 'Embaixada Brasília',
    dataConclusao: '30 Nov 2024',
    jogos: [
      { id: 1, time1: 'Embaixada Brasília', time2: 'Embaixada Goiânia', placar1: 100, placar2: 94, data: '25 Nov', status: 'Semifinal' },
      { id: 2, time1: 'Embaixada Curitiba', time2: 'Embaixada Porto Alegre', placar1: 89, placar2: 96, data: '25 Nov', status: 'Semifinal' },
      { id: 3, time1: 'Embaixada Brasília', time2: 'Embaixada Porto Alegre', placar1: 105, placar2: 98, data: '30 Nov', status: 'Final' },
    ]
  },
}

function Biblia() {
  const { id } = useParams<{ id: string }>()
  const [menuOpen, setMenuOpen] = useState(false)
  
  const torneio = id ? torneiosBiblicosData[id] : null

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
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/torneios" className="inline-flex items-center gap-2 text-white hover:text-[#FFD700] mb-6 transition-colors">
            <i className="bx bx-arrow-back text-2xl"></i>
            <span className="font-semibold">Voltar para Torneios</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold">
                  📖 {torneio.tipo}
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
              <div className="flex flex-wrap items-center gap-6 text-white/90">
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
            {/* Tabela de Classificação */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-800">
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
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase">Embaixada</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">P</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">J</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">V</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">E</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">D</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">PF</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">PC</th>
                      <th className="px-2 py-3 text-center text-xs font-bold text-gray-600 uppercase">SP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { pos: 1, time: 'Embaixada São Paulo', p: 45, j: 20, v: 14, e: 3, d: 3, pf: 1842, pc: 1618, sp: 224, zona: 'classificado' },
                      { pos: 2, time: 'Embaixada Rio', p: 43, j: 20, v: 13, e: 4, d: 3, pf: 1838, pc: 1720, sp: 118, zona: 'classificado' },
                      { pos: 3, time: 'Embaixada Curitiba', p: 40, j: 20, v: 12, e: 4, d: 4, pf: 1735, pc: 1622, sp: 113, zona: 'classificado' },
                      { pos: 4, time: 'Embaixada Brasília', p: 38, j: 20, v: 11, e: 5, d: 4, pf: 1733, pc: 1621, sp: 112, zona: 'classificado' },
                      { pos: 5, time: 'Embaixada Salvador', p: 36, j: 20, v: 11, e: 3, d: 6, pf: 1630, pc: 1624, sp: 6, zona: 'classificado' },
                      { pos: 6, time: 'Embaixada Recife', p: 34, j: 20, v: 10, e: 4, d: 6, pf: 1628, pc: 1625, sp: 3, zona: 'classificado' },
                      { pos: 7, time: 'Embaixada Fortaleza', p: 32, j: 20, v: 9, e: 5, d: 6, pf: 1627, pc: 1624, sp: 3, zona: 'classificado' },
                      { pos: 8, time: 'Embaixada Manaus', p: 30, j: 20, v: 9, e: 3, d: 8, pf: 1626, pc: 1626, sp: 0, zona: 'classificado' },
                      { pos: 9, time: 'Embaixada Porto Alegre', p: 28, j: 20, v: 8, e: 4, d: 8, pf: 1625, pc: 1628, sp: -3, zona: '' },
                      { pos: 10, time: 'Embaixada Goiânia', p: 26, j: 20, v: 7, e: 5, d: 8, pf: 1624, pc: 1629, sp: -5, zona: '' },
                      { pos: 11, time: 'Embaixada Belo Horizonte', p: 24, j: 20, v: 7, e: 3, d: 10, pf: 1622, pc: 1630, sp: -8, zona: '' },
                      { pos: 12, time: 'Embaixada Vitória', p: 22, j: 20, v: 6, e: 4, d: 10, pf: 1621, pc: 1632, sp: -11, zona: '' },
                      { pos: 13, time: 'Embaixada Natal', p: 20, j: 20, v: 5, e: 5, d: 10, pf: 1619, pc: 1633, sp: -14, zona: 'eliminado' },
                      { pos: 14, time: 'Embaixada João Pessoa', p: 18, j: 20, v: 5, e: 3, d: 12, pf: 1618, pc: 1635, sp: -17, zona: 'eliminado' },
                      { pos: 15, time: 'Embaixada Maceió', p: 16, j: 20, v: 4, e: 4, d: 12, pf: 1617, pc: 1637, sp: -20, zona: 'eliminado' },
                      { pos: 16, time: 'Embaixada Aracaju', p: 14, j: 20, v: 3, e: 5, d: 12, pf: 1615, pc: 1640, sp: -25, zona: 'eliminado' },
                    ].map((time) => (
                      <tr key={time.pos} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm ${
                            time.zona === 'classificado' ? 'bg-purple-500 text-white' :
                            time.zona === 'eliminado' ? 'bg-red-500 text-white' :
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
                        <td className="px-2 py-3 text-center text-gray-600">{time.pf}</td>
                        <td className="px-2 py-3 text-center text-gray-600">{time.pc}</td>
                        <td className="px-2 py-3 text-center">
                          <span className={`font-semibold ${time.sp > 0 ? 'text-green-600' : time.sp < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                            {time.sp > 0 ? '+' : ''}{time.sp}
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
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-gray-600">Classificados (1º ao 8º)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Eliminados (13º ao 16º)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Próximos Confrontos */}
            {statusEmAndamento && (
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <i className="bx bx-calendar-event"></i>
                    Próximos Confrontos
                  </h2>
                </div>
                
                <div className="p-6 space-y-4">
                  {torneio.jogos.filter((j: any) => j.status === 'Agendado').slice(0, 4).map((jogo: any) => (
                    <div key={jogo.id} className="border-l-4 border-purple-500 pl-4 py-2 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">{jogo.time1}</p>
                        </div>
                        <div className="mx-4 text-center">
                          <span className="text-sm font-bold text-purple-600">VS</span>
                        </div>
                        <div className="flex-1 text-right">
                          <p className="font-bold text-gray-900">{jogo.time2}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                        <span><i className="bx bx-calendar mr-1"></i>{jogo.data}</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
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

          {/* Coluna Lateral - Top Pontuadores */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden sticky top-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <i className="bx bxs-star"></i>
                  Top Pontuadores
                </h2>
              </div>
              
              <div className="p-4 space-y-3">
                {[
                  { pos: 1, nome: 'Maria Santos', time: 'Emb. São Paulo', pontos: 485 },
                  { pos: 2, nome: 'José Silva', time: 'Emb. Brasília', pontos: 478 },
                  { pos: 3, nome: 'Ana Costa', time: 'Emb. Rio', pontos: 465 },
                  { pos: 4, nome: 'Carlos Oliveira', time: 'Emb. Curitiba', pontos: 452 },
                  { pos: 5, nome: 'Paula Lima', time: 'Emb. Salvador', pontos: 448 },
                  { pos: 6, nome: 'Rafael Mendes', time: 'Emb. Recife', pontos: 442 },
                  { pos: 7, nome: 'Juliana Rocha', time: 'Emb. Fortaleza', pontos: 438 },
                  { pos: 8, nome: 'Lucas Ferreira', time: 'Emb. Manaus', pontos: 435 },
                ].map((pontuador) => (
                  <div key={pontuador.pos} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      pontuador.pos === 1 ? 'bg-purple-600 text-white' :
                      pontuador.pos === 2 ? 'bg-purple-400 text-white' :
                      pontuador.pos === 3 ? 'bg-purple-300 text-white' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {pontuador.pos}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">{pontuador.nome}</p>
                      <p className="text-xs text-gray-500">{pontuador.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-purple-600">{pontuador.pontos}</p>
                      <p className="text-xs text-gray-500">pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas (apenas para finalizados) */}
        {!statusEmAndamento && (
          <div className="mt-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
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
                <i className="bx bx-book text-4xl text-[#F6B500] mb-2"></i>
                <p className="text-white/60 text-sm mb-1">Total de Confrontos</p>
                <p className="text-xl font-bold">{torneio.jogos.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Biblia

