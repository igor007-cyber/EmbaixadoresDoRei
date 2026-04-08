import { useState } from 'react'
import { Link } from 'react-router-dom'

function Deashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">

      <div className="flex h-screen">

        {/* Sidebar Desktop */}
        <aside className="hidden lg:flex w-64 bg-gradient-to-b from-[#F6B500] to-[#FFD700] text-black flex-col p-5 shadow-xl">
          <h1 className="text-2xl font-bold mb-8 tracking-wide">Painel</h1>

          <nav className="space-y-3 text-sm font-medium">
            <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
              🏠 Inicial
            </p>
            <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
              👑 Cadastro de Embaixadores
            </p>
            <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10">
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
              <h1 className="text-2xl font-bold mb-8 tracking-wide">Painel</h1>

              <nav className="space-y-3 text-sm font-medium">
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  🏠 Inicial
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  👑 Cadastro de Embaixadores
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  📋 Cadastro de Conselheiros
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  ✅ Presença
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  🏆 Criar Tabela de Torneio
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  📊 Progresso
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  📈 Dashboard
                </p>
                <p className="hover:translate-x-1 transition cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-black/10" onClick={() => setSidebarOpen(false)}>
                  👤 Perfil
                </p>
              </nav>

              <Link
                to="/"
                className="mt-auto flex items-center gap-2 p-2 rounded-lg bg-black/20 hover:bg-black/30 transition text-sm font-semibold text-center justify-center"
              >
                🚪 Sair
              </Link>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">

          {/* All Files */}
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

        </main>
      </div>
    </div>
  )
}

export default Deashboard
