import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

import type {
  Embaixador,
  Conselheiro,
  Reuniao,
  RegistrosPresenca,
  Atividade,
  Perfil,
} from './Menus/types'


import Inicial from './Menus/inicial'
import CadastroEmbaixadores from './Menus/cadastroEmbaixadores'
import CadastroConselheiro from './Menus/cadastroConselheiro'
import Presenca from './Menus/presenca'
import Atividades from './Menus/atividades'
import Progresso from './Menus/progresso'
import Torneio from './Menus/torneio'
import Grafico from './Menus/grafico'
import PerfilView from './Menus/perfil'

type View = 'inicio' | 'embaixadores' | 'conselheiros' | 'presenca' | 'atividades' | 'progresso' | 'torneio' | 'dashboard' | 'perfil'

function Deashboard() {
  const hoje = new Date()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [view, setView] = useState<View>('inicio')
  const [nomeEmbaixada, setNomeEmbaixada] = useState('')
  const [editandoNome, setEditandoNome] = useState(false)
  const [nomeTemp, setNomeTemp] = useState('')

  // Perfil — carrega do localStorage
  const perfilSalvo = localStorage.getItem('embaixada_perfil')
  const [perfil, setPerfil] = useState<Perfil>(
    perfilSalvo ? JSON.parse(perfilSalvo) : {
      username: '', nomeConselheiro: '', nomeEmbaixada: '',
      email: '', quantidadePessoas: '', cidade: '', estado: '', nomeIgreja: '',
    }
  )
  const [editandoPerfil, setEditandoPerfil] = useState(false)
  const [perfilTemp, setPerfilTemp] = useState<Perfil>(perfil)

  // Embaixadores
  const [embaixadores, setEmbaixadores] = useState<Embaixador[]>([])

  // Conselheiros
  const [conselheiros, setConselheiros] = useState<Conselheiro[]>([])

  // Atividades
  const [atividades, setAtividades] = useState<Atividade[]>([])
  const [embaixadorFiltro, setEmbaixadorFiltro] = useState<number | null>(null)
  const [novaAtividade, setNovaAtividade] = useState('')

  // Presença
  const [mesAtual, setMesAtual] = useState(hoje.getMonth())
  const [anoAtual, setAnoAtual] = useState(hoje.getFullYear())
  const [reunioes, setReunioes] = useState<Reuniao[]>([])
  const [registros, setRegistros] = useState<RegistrosPresenca>({})
  const [reuniaoSelecionada, setReuniaoSelecionada] = useState<string | null>(null)
  const [showFormReuniao, setShowFormReuniao] = useState(false)
  const [novaReuniaoDias, setNovaReuniaoDias] = useState<number[]>([])
  const [novaReuniaoHorario, setNovaReuniaoHorario] = useState('19:00')

  function navigate(v: View) {
    setView(v)
    setSidebarOpen(false)
  }

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
        <p onClick={() => navigate('presenca')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'presenca' ? 'bg-black/20' : ''}`}>
          ✅ Presença
        </p>
        <p onClick={() => navigate('atividades')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'atividades' ? 'bg-black/20' : ''}`}>
          🎯 Atividades
        </p>
        <p onClick={() => navigate('progresso')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'progresso' ? 'bg-black/20' : ''}`}>
          📊 Progresso
        </p>
        <p onClick={() => navigate('torneio')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'torneio' ? 'bg-black/20' : ''}`}>
          🏆 Criar Tabela de Torneio
        </p>
        <p onClick={() => navigate('dashboard')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'dashboard' ? 'bg-black/20' : ''}`}>
          📈 Dashboard
        </p>
        <p onClick={() => navigate('perfil')} className={`hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10 ${view === 'perfil' ? 'bg-black/20' : ''}`}>
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
          className="lg:hidden fixed top-4 left-4 z-40 bg-gradient-to-r from-[#F6B500] to-[#FFD700] text-black p-3 rounded-full shadow-lg hover:scale-110 transition"
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

          {view === 'inicio' && (
            <Inicial
              embaixadores={embaixadores}
              conselheiros={conselheiros}
              atividades={atividades}
              nomeEmbaixada={nomeEmbaixada}
              setNomeEmbaixada={setNomeEmbaixada}
              editandoNome={editandoNome}
              setEditandoNome={setEditandoNome}
              nomeTemp={nomeTemp}
              setNomeTemp={setNomeTemp}
            />
          )}

          {view === 'embaixadores' && (
            <CadastroEmbaixadores
              embaixadores={embaixadores}
              setEmbaixadores={setEmbaixadores}
            />
          )}

          {view === 'conselheiros' && (
            <CadastroConselheiro
              conselheiros={conselheiros}
              setConselheiros={setConselheiros}
            />
          )}

          {view === 'presenca' && (
            <Presenca
              embaixadores={embaixadores}
              conselheiros={conselheiros}
              mesAtual={mesAtual}
              setMesAtual={setMesAtual}
              anoAtual={anoAtual}
              setAnoAtual={setAnoAtual}
              reunioes={reunioes}
              setReunioes={setReunioes}
              registros={registros}
              setRegistros={setRegistros}
              reuniaoSelecionada={reuniaoSelecionada}
              setReuniaoSelecionada={setReuniaoSelecionada}
              showFormReuniao={showFormReuniao}
              setShowFormReuniao={setShowFormReuniao}
              novaReuniaoDias={novaReuniaoDias}
              setNovaReuniaoDias={setNovaReuniaoDias}
              novaReuniaoHorario={novaReuniaoHorario}
              setNovaReuniaoHorario={setNovaReuniaoHorario}
            />
          )}

          {view === 'atividades' && (
            <Atividades
              embaixadores={embaixadores}
              atividades={atividades}
              setAtividades={setAtividades}
              embaixadorFiltro={embaixadorFiltro}
              setEmbaixadorFiltro={setEmbaixadorFiltro}
              novaAtividade={novaAtividade}
              setNovaAtividade={setNovaAtividade}
            />
          )}

          {view === 'progresso' && (
            <Progresso
              embaixadores={embaixadores}
              atividades={atividades}
            />
          )}

          {view === 'torneio' && (
            <Torneio />
          )}

          {view === 'dashboard' && (
            <Grafico
              embaixadores={embaixadores}
              conselheiros={conselheiros}
              atividades={atividades}
            />
          )}

          {view === 'perfil' && (
            <PerfilView
              perfil={perfil}
              setPerfil={setPerfil}
              editandoPerfil={editandoPerfil}
              setEditandoPerfil={setEditandoPerfil}
              perfilTemp={perfilTemp}
              setPerfilTemp={setPerfilTemp}
            />
          )}

        </main>
      </div>
    </div>
  )
}

export default Deashboard
