import type { Embaixador, Conselheiro, Atividade } from './types'

interface InicialProps {
  embaixadores: Embaixador[]
  conselheiros: Conselheiro[]
  atividades: Atividade[]
  nomeEmbaixada: string
  setNomeEmbaixada: (v: string) => void
  editandoNome: boolean
  setEditandoNome: (v: boolean) => void
  nomeTemp: string
  setNomeTemp: (v: string) => void
}

export default function Inicial({
  embaixadores,
  conselheiros,
  atividades,
  nomeEmbaixada,
  setNomeEmbaixada,
  editandoNome,
  setEditandoNome,
  nomeTemp,
  setNomeTemp,
}: InicialProps) {
  return (
    <div>
      {/* Saudação */}
      <div className="mb-8">
        {editandoNome ? (
          <div className="flex items-center gap-3 flex-wrap">
            <input
              autoFocus
              className="text-2xl font-extrabold bg-transparent border-b-2 border-[#F6B500] text-white outline-none placeholder-white/30 pb-1 min-w-48"
              placeholder="Nome da embaixada..."
              value={nomeTemp}
              onChange={e => setNomeTemp(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') { setNomeEmbaixada(nomeTemp); setEditandoNome(false) }
                if (e.key === 'Escape') setEditandoNome(false)
              }}
            />
            <button
              onClick={() => { setNomeEmbaixada(nomeTemp); setEditandoNome(false) }}
              className="px-4 py-1.5 bg-[#F6B500] text-black font-bold rounded-lg text-sm hover:bg-[#FFD700] transition"
            >
              Salvar
            </button>
            <button
              onClick={() => setEditandoNome(false)}
              className="px-4 py-1.5 border border-white/20 text-white/60 font-bold rounded-lg text-sm hover:bg-white/10 transition"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Olá,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
                Embaixada {nomeEmbaixada || '—'}
              </span>
              !
            </h1>
            <button
              onClick={() => { setNomeTemp(nomeEmbaixada); setEditandoNome(true) }}
              className="p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/10 transition text-xs"
              title="Editar nome da embaixada"
            >
              ✏️
            </button>
          </div>
        )}
        <p className="text-white/40 text-sm mt-2">Bem-vindo ao painel de controle</p>
      </div>

      {/* Cards de contagem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#F6B500]/20 to-[#F6B500]/5 border border-[#F6B500]/30 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#F6B500] font-bold text-sm uppercase tracking-wider">👑 Embaixadores</span>
            <span className="text-4xl font-extrabold text-white">{embaixadores.length}</span>
          </div>
          <div className="w-full h-px bg-[#F6B500]/20 mb-3" />
          <p className="text-white/40 text-xs">{embaixadores.length === 0 ? 'Nenhum cadastrado' : `${embaixadores.length} cadastrado${embaixadores.length > 1 ? 's' : ''}`}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">📋 Conselheiros</span>
            <span className="text-4xl font-extrabold text-white">{conselheiros.length}</span>
          </div>
          <div className="w-full h-px bg-blue-500/20 mb-3" />
          <p className="text-white/40 text-xs">{conselheiros.length === 0 ? 'Nenhum cadastrado' : `${conselheiros.length} cadastrado${conselheiros.length > 1 ? 's' : ''}`}</p>
        </div>
      </div>

      {/* Listas lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lista de embaixadores */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h3 className="font-bold text-white text-sm">👑 Embaixadores do Rei</h3>
            <span className="text-xs text-white/40">{embaixadores.length} no total</span>
          </div>
          {embaixadores.length === 0 ? (
            <div className="p-8 text-center text-white/20 text-sm">Nenhum embaixador cadastrado</div>
          ) : (
            <ul className="divide-y divide-white/5 max-h-72 overflow-y-auto">
              {embaixadores.map((e, i) => (
                <li key={i} className="flex items-center justify-between px-5 py-3 hover:bg-white/5 transition">
                  <div>
                    <p className="text-white font-medium text-sm">{e.nome}</p>
                    <p className="text-white/40 text-xs">{e.email}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-[#F6B500]/15 text-[#F6B500] rounded-full text-xs font-bold">
                    {e.manual}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Lista de conselheiros */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h3 className="font-bold text-white text-sm">📋 Conselheiros</h3>
            <span className="text-xs text-white/40">{conselheiros.length} no total</span>
          </div>
          {conselheiros.length === 0 ? (
            <div className="p-8 text-center text-white/20 text-sm">Nenhum conselheiro cadastrado</div>
          ) : (
            <ul className="divide-y divide-white/5 max-h-72 overflow-y-auto">
              {conselheiros.map((c, i) => (
                <li key={i} className="flex items-center justify-between px-5 py-3 hover:bg-white/5 transition">
                  <div>
                    <p className="text-white font-medium text-sm">{c.nome}</p>
                    <p className="text-white/40 text-xs">Idade: {c.idade} · Tel: {c.telefone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${c.temCurso === 'Sim' ? 'bg-green-500/15 text-green-400' : 'bg-white/10 text-white/40'}`}>
                    {c.temCurso === 'Sim' ? 'Com curso' : 'Sem curso'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Atividades pendentes */}
      {(() => {
        const pendentes = atividades.filter(a => !a.feito)
        return (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="font-bold text-white text-sm">⏳ Atividades Pendentes</h3>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${pendentes.length > 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                {pendentes.length} pendente{pendentes.length !== 1 ? 's' : ''}
              </span>
            </div>
            {pendentes.length === 0 ? (
              <div className="p-8 text-center text-white/20 text-sm">
                <p className="text-2xl mb-2">✅</p>
                Todas as atividades foram concluídas!
              </div>
            ) : (
              <ul className="divide-y divide-white/5 max-h-64 overflow-y-auto">
                {pendentes.map(at => {
                  const emb = embaixadores[at.embaixadorIndex]
                  return (
                    <li key={at.id} className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 transition">
                      <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{at.descricao}</p>
                        <p className="text-white/40 text-xs mt-0.5">
                          {emb ? `👑 ${emb.nome} · ${emb.manual}` : 'Embaixador removido'}
                        </p>
                      </div>
                      <span className="text-xs text-red-400/70 font-medium whitespace-nowrap">Não feito</span>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })()}
    </div>
  )
}
