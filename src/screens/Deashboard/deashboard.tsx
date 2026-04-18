import { useState, type ReactNode } from 'react'
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
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

  const nomeEmbaixadaSidebar = perfil.nomeEmbaixada || nomeEmbaixada || 'Embaixada'

  const menuItems: { key: View; label: string; icon: ReactNode }[] = [
    {
      key: 'inicio',
      label: 'Inicial',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.121 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
        </svg>
      ),
    },
    {
      key: 'embaixadores',
      label: 'Cadastro de Embaixadores',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.375m-1.5-1.5h.75c.414 0 .75.336.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
    },
    {
      key: 'conselheiros',
      label: 'Cadastro de Conselheiros',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      key: 'presenca',
      label: 'Presença',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'atividades',
      label: 'Atividades',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 7.5m5.96 6.87a14.926 14.926 0 01-5.841 2.58m-.119-8.054a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      key: 'progresso',
      label: 'Progresso',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      key: 'torneio',
      label: 'Criar Tabela de Torneio',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      ),
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
    },
    {
      key: 'perfil',
      label: 'Perfil',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => {
    const collapsed = !mobile && sidebarCollapsed
    return (
      <>
        {/* Header: logo + embaixada name + collapse toggle */}
        <div className={`flex ${collapsed ? 'flex-col items-center gap-3' : 'items-center justify-between gap-2'} mb-6`}>
          <div className={`flex items-center gap-3 min-w-0 ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-11 h-11 rounded-xl bg-black/90 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="font-extrabold text-sm text-black leading-tight truncate">
                  {nomeEmbaixadaSidebar}
                </p>
                <p className="text-[11px] text-black/60 leading-tight truncate">Embaixada</p>
              </div>
            )}
          </div>
          {!mobile && (
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-8 h-8 rounded-full bg-[#0a0a1a]! hover:bg-[#0a0a1a]/85! flex items-center justify-center text-white shadow-md transition shrink-0 p-0! border-0!"
              title={collapsed ? 'Expandir' : 'Recolher'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${collapsed ? '' : 'rotate-180'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>

        {/* Nav items */}
        <nav className="space-y-1.5 text-sm font-semibold flex-1">
          {menuItems.map(item => {
            const active = view === item.key
            return (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl transition-all bg-[#0a0a1a]! ${
                  active
                    ? 'text-[#FFD700] shadow-md ring-1 ring-[#FFD700]/40'
                    : 'text-white hover:bg-[#0a0a1a]/85!'
                }`}
              >
                {item.icon}
                {!collapsed && <span className="truncate text-left">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* Footer: Logout */}
        <div className="mt-4 pt-4 border-t border-black/10">
          <Link
            to="/"
            title={collapsed ? 'Sair' : undefined}
            className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl bg-[#0a0a1a] text-white hover:bg-[#0a0a1a]/85 transition-all text-sm font-semibold`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            {!collapsed && <span>Sair</span>}
          </Link>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      <div className="flex h-screen">

        {/* Sidebar Desktop */}
        <aside className={`hidden lg:flex ${sidebarCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-[#F6B500] to-[#FFD700] text-black flex-col p-4 shadow-xl transition-all duration-300`}>
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
            <aside className="relative w-64 h-full bg-gradient-to-b from-[#F6B500] to-[#FFD700] text-black flex flex-col p-4 shadow-xl">
              <SidebarContent mobile />
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
