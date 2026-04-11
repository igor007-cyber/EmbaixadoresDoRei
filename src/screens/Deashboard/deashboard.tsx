import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

type View = 'inicio' | 'embaixadores' | 'conselheiros'

interface Embaixador {
  nome: string
  email: string
  idade: string
  telefone: string
  nomeResponsavel: string
  telefoneResponsavel: string
  manual: 'Arauto' | 'Escudeiro' | 'Sênior' | 'Emérito' | ''
}

interface Conselheiro {
  nome: string
  idade: string
  telefone: string
  temCurso: 'Sim' | 'Não' | ''
}

const emptyEmbaixador: Embaixador = {
  nome: '', email: '', idade: '', telefone: '',
  nomeResponsavel: '', telefoneResponsavel: '', manual: ''
}

const emptyConselheiro: Conselheiro = {
  nome: '', idade: '', telefone: '', temCurso: ''
}

function Deashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [view, setView] = useState<View>('inicio')

  const [embaixadores, setEmbaixadores] = useState<Embaixador[]>([])
  const [formEmbaixador, setFormEmbaixador] = useState<Embaixador>(emptyEmbaixador)
  const [editIndexEmbaixador, setEditIndexEmbaixador] = useState<number | null>(null)

  const [conselheiros, setConselheiros] = useState<Conselheiro[]>([])
  const [formConselheiro, setFormConselheiro] = useState<Conselheiro>(emptyConselheiro)
  const [editIndexConselheiro, setEditIndexConselheiro] = useState<number | null>(null)

  function navigate(v: View) {
    setView(v)
    setSidebarOpen(false)
  }

  function handleSubmitEmbaixador(e: React.FormEvent) {
    e.preventDefault()
    if (!formEmbaixador.manual) return
    if (editIndexEmbaixador !== null) {
      setEmbaixadores(prev => prev.map((item, i) => i === editIndexEmbaixador ? formEmbaixador : item))
      setEditIndexEmbaixador(null)
    } else {
      setEmbaixadores(prev => [...prev, formEmbaixador])
    }
    setFormEmbaixador(emptyEmbaixador)
  }

  function handleEditEmbaixador(index: number) {
    setFormEmbaixador(embaixadores[index])
    setEditIndexEmbaixador(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDeleteEmbaixador(index: number) {
    setEmbaixadores(prev => prev.filter((_, i) => i !== index))
    if (editIndexEmbaixador === index) {
      setEditIndexEmbaixador(null)
      setFormEmbaixador(emptyEmbaixador)
    }
  }

  function handleSubmitConselheiro(e: React.FormEvent) {
    e.preventDefault()
    if (!formConselheiro.temCurso) return
    if (editIndexConselheiro !== null) {
      setConselheiros(prev => prev.map((item, i) => i === editIndexConselheiro ? formConselheiro : item))
      setEditIndexConselheiro(null)
    } else {
      setConselheiros(prev => [...prev, formConselheiro])
    }
    setFormConselheiro(emptyConselheiro)
  }

  function handleEditConselheiro(index: number) {
    setFormConselheiro(conselheiros[index])
    setEditIndexConselheiro(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDeleteConselheiro(index: number) {
    setConselheiros(prev => prev.filter((_, i) => i !== index))
    if (editIndexConselheiro === index) {
      setEditIndexConselheiro(null)
      setFormConselheiro(emptyConselheiro)
    }
  }

  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#F6B500] transition"
  const labelClass = "block text-sm text-white/70 mb-1 font-medium"

  const SidebarContent = () => (
    <>
      <img src={logo} alt="Painel" className="mb-8 w-full object-contain" />
      <nav className="space-y-3 text-sm font-medium">
        <p onClick={() => navigate('inicio')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'inicio' ? 'bg-black/20' : ''}`}>
          🏠 Inicial
        </p>
        <p onClick={() => navigate('embaixadores')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'embaixadores' ? 'bg-black/20' : ''}`}>
          👑 Cadastro de Embaixadores
        </p>
        <p onClick={() => navigate('conselheiros')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'conselheiros' ? 'bg-black/20' : ''}`}>
          📋 Cadastro de Conselheiros
        </p>
        <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
          ✅ Presença
        </p>
        <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
          🏆 Criar Tabela de Torneio
        </p>
        <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
          📊 Progresso
        </p>
        <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
          📈 Dashboard
        </p>
        <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
          👤 Perfil
        </p>
      </nav>
      <Link
        to="/"
        className="mt-auto flex items-center gap-2 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition text-sm font-semibold text-center justify-center"
      >
        🚪 Sair
      </Link>
    </>
  )

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      <div className="flex h-screen">

        {/* Sidebar Desktop */}
        <aside className="hidden lg:flex w-64 bg-gradient-to-b from-[#F6B500] to-[#FFD700] text-black flex-col p-5 shadow-xl">
          <SidebarContent />
        </aside>

        {/* Sidebar Mobile Toggle */}
        <button
          className="lg:hidden fixed bottom-6 left-6 z-40 bg-gradient-to-r from-[#F6B500] to-[#FFD700] text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar Mobile Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-30">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)}></div>
            <aside className="relative w-64 h-full bg-gradient-to-b from-[#F6B500] to-[#FFD700] text-black flex flex-col p-5 shadow-xl">
              <SidebarContent />
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">

          {/* VIEW: INÍCIO */}
          {view === 'inicio' && (
            <>
              <h3 className="text-white/70 mb-4 font-semibold">Todos os Arquivos</h3>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="p-4 text-left text-sm text-white/70 font-semibold">Nome</th>
                        <th className="p-4 text-left text-sm text-white/70 font-semibold">Proprietário</th>
                        <th className="p-4 text-left text-sm text-white/70 font-semibold hidden sm:table-cell">Última Modificação</th>
                        <th className="p-4 text-left text-sm text-white/70 font-semibold hidden sm:table-cell">Tamanho</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cursor-pointer transition border-t border-white/5 hover:bg-white/5">
                        <td className="p-4 text-white">Weekly Reports.docx</td>
                        <td className="p-4 text-white/70">Caio</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">Hoje</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">20 MB</td>
                      </tr>
                      <tr className="cursor-pointer transition border-t border-white/5 hover:bg-white/5">
                        <td className="p-4 text-white">Design Checklist.xlsx</td>
                        <td className="p-4 text-white/70">Maria</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">Ontem</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">13 MB</td>
                      </tr>
                      <tr className="cursor-pointer transition border-t border-white/5 hover:bg-white/5">
                        <td className="p-4 text-white">Project.pdf</td>
                        <td className="p-4 text-white/70">João</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">2 dias atrás</td>
                        <td className="p-4 text-white/70 hidden sm:table-cell">5 MB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* VIEW: CADASTRO DE EMBAIXADORES */}
          {view === 'embaixadores' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-[#F6B500]">👑 Cadastro de Embaixadores</h2>

              <form onSubmit={handleSubmitEmbaixador} className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border mb-8 transition ${editIndexEmbaixador !== null ? 'border-[#F6B500]/50' : 'border-white/10'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nome</label>
                    <input required className={inputClass} placeholder="Nome completo" value={formEmbaixador.nome}
                      onChange={e => setFormEmbaixador(p => ({ ...p, nome: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input required type="email" className={inputClass} placeholder="email@exemplo.com" value={formEmbaixador.email}
                      onChange={e => setFormEmbaixador(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Idade</label>
                    <input required type="number" min="1" className={inputClass} placeholder="Idade" value={formEmbaixador.idade}
                      onChange={e => setFormEmbaixador(p => ({ ...p, idade: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Telefone</label>
                    <input required className={inputClass} placeholder="(00) 00000-0000" value={formEmbaixador.telefone}
                      onChange={e => setFormEmbaixador(p => ({ ...p, telefone: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Nome do Responsável</label>
                    <input required className={inputClass} placeholder="Nome do responsável" value={formEmbaixador.nomeResponsavel}
                      onChange={e => setFormEmbaixador(p => ({ ...p, nomeResponsavel: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Telefone do Responsável</label>
                    <input required className={inputClass} placeholder="(00) 00000-0000" value={formEmbaixador.telefoneResponsavel}
                      onChange={e => setFormEmbaixador(p => ({ ...p, telefoneResponsavel: e.target.value }))} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Manual</label>
                    <div className="flex gap-3 flex-wrap">
                      {(['Arauto', 'Escudeiro', 'Sênior', 'Emérito'] as const).map(m => (
                        <button key={m} type="button"
                          onClick={() => setFormEmbaixador(p => ({ ...p, manual: m }))}
                          className={`px-5 py-2 rounded-lg border font-medium transition ${formEmbaixador.manual === m ? 'bg-[#F6B500] border-[#F6B500] text-black' : 'border-white/20 text-white/70 hover:border-[#F6B500]'}`}>
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <button type="submit"
                    className="px-8 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] text-black font-bold rounded-lg transition">
                    {editIndexEmbaixador !== null ? 'Salvar' : 'Cadastrar'}
                  </button>
                  {editIndexEmbaixador !== null && (
                    <button type="button"
                      onClick={() => { setEditIndexEmbaixador(null); setFormEmbaixador(emptyEmbaixador) }}
                      className="px-8 py-2.5 border border-white/20 text-white/70 hover:bg-white/10 font-bold rounded-lg transition">
                      Cancelar
                    </button>
                  )}
                </div>
              </form>

              {embaixadores.length > 0 && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="p-3 text-left text-white/70">Nome</th>
                          <th className="p-3 text-left text-white/70 hidden sm:table-cell">Email</th>
                          <th className="p-3 text-left text-white/70">Idade</th>
                          <th className="p-3 text-left text-white/70 hidden md:table-cell">Telefone</th>
                          <th className="p-3 text-left text-white/70 hidden lg:table-cell">Responsável</th>
                          <th className="p-3 text-left text-white/70 hidden lg:table-cell">Tel. Responsável</th>
                          <th className="p-3 text-left text-white/70">Manual</th>
                          <th className="p-3 text-left text-white/70">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {embaixadores.map((e, i) => (
                          <tr key={i} className={`border-t border-white/5 hover:bg-white/5 ${editIndexEmbaixador === i ? 'bg-[#F6B500]/5' : ''}`}>
                            <td className="p-3 text-white">{e.nome}</td>
                            <td className="p-3 text-white/70 hidden sm:table-cell">{e.email}</td>
                            <td className="p-3 text-white/70">{e.idade}</td>
                            <td className="p-3 text-white/70 hidden md:table-cell">{e.telefone}</td>
                            <td className="p-3 text-white/70 hidden lg:table-cell">{e.nomeResponsavel}</td>
                            <td className="p-3 text-white/70 hidden lg:table-cell">{e.telefoneResponsavel}</td>
                            <td className="p-3">
                              <span className="px-2 py-1 bg-[#F6B500]/20 text-[#F6B500] rounded text-xs font-semibold">{e.manual}</span>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <button onClick={() => handleEditEmbaixador(i)}
                                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition font-medium">
                                  Editar
                                </button>
                                <button onClick={() => handleDeleteEmbaixador(i)}
                                  className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition font-medium">
                                  Apagar
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW: CADASTRO DE CONSELHEIROS */}
          {view === 'conselheiros' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-[#F6B500]">📋 Cadastro de Conselheiros</h2>

              <form onSubmit={handleSubmitConselheiro} className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border mb-8 transition ${editIndexConselheiro !== null ? 'border-[#F6B500]/50' : 'border-white/10'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nome</label>
                    <input required className={inputClass} placeholder="Nome completo" value={formConselheiro.nome}
                      onChange={e => setFormConselheiro(p => ({ ...p, nome: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Idade</label>
                    <input required type="number" min="1" className={inputClass} placeholder="Idade" value={formConselheiro.idade}
                      onChange={e => setFormConselheiro(p => ({ ...p, idade: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Telefone</label>
                    <input required className={inputClass} placeholder="(00) 00000-0000" value={formConselheiro.telefone}
                      onChange={e => setFormConselheiro(p => ({ ...p, telefone: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelClass}>Tem curso de conselheiro?</label>
                    <div className="flex gap-3">
                      {(['Sim', 'Não'] as const).map(op => (
                        <button key={op} type="button"
                          onClick={() => setFormConselheiro(p => ({ ...p, temCurso: op }))}
                          className={`px-6 py-2 rounded-lg border font-medium transition ${formConselheiro.temCurso === op ? 'bg-[#F6B500] border-[#F6B500] text-black' : 'border-white/20 text-white/70 hover:border-[#F6B500]'}`}>
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <button type="submit"
                    className="px-8 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] text-black font-bold rounded-lg transition">
                    {editIndexConselheiro !== null ? 'Salvar' : 'Cadastrar'}
                  </button>
                  {editIndexConselheiro !== null && (
                    <button type="button"
                      onClick={() => { setEditIndexConselheiro(null); setFormConselheiro(emptyConselheiro) }}
                      className="px-8 py-2.5 border border-white/20 text-white/70 hover:bg-white/10 font-bold rounded-lg transition">
                      Cancelar
                    </button>
                  )}
                </div>
              </form>

              {conselheiros.length > 0 && (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="p-3 text-left text-white/70">Nome</th>
                          <th className="p-3 text-left text-white/70">Idade</th>
                          <th className="p-3 text-left text-white/70 hidden sm:table-cell">Telefone</th>
                          <th className="p-3 text-left text-white/70">Curso de Conselheiro</th>
                          <th className="p-3 text-left text-white/70">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {conselheiros.map((c, i) => (
                          <tr key={i} className={`border-t border-white/5 hover:bg-white/5 ${editIndexConselheiro === i ? 'bg-[#F6B500]/5' : ''}`}>
                            <td className="p-3 text-white">{c.nome}</td>
                            <td className="p-3 text-white/70">{c.idade}</td>
                            <td className="p-3 text-white/70 hidden sm:table-cell">{c.telefone}</td>
                            <td className="p-3">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${c.temCurso === 'Sim' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {c.temCurso}
                              </span>
                            </td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <button onClick={() => handleEditConselheiro(i)}
                                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition font-medium">
                                  Editar
                                </button>
                                <button onClick={() => handleDeleteConselheiro(i)}
                                  className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition font-medium">
                                  Apagar
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default Deashboard
