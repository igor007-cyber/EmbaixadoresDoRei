import type { Atividade, Embaixador } from './types'

interface AtividadesProps {
  embaixadores: Embaixador[]
  atividades: Atividade[]
  embaixadorFiltro: string | null
  setEmbaixadorFiltro: React.Dispatch<React.SetStateAction<string | null>>
  novaAtividade: string
  setNovaAtividade: React.Dispatch<React.SetStateAction<string>>
  onAddAtividade: (embaixadorId: string) => Promise<void>
  onToggleAtividade: (id: string, feito: boolean) => Promise<void>
  onDeleteAtividade: (id: string) => Promise<void>
}

export default function Atividades({
  embaixadores,
  atividades,
  embaixadorFiltro,
  setEmbaixadorFiltro,
  novaAtividade,
  setNovaAtividade,
  onAddAtividade,
  onToggleAtividade,  
  onDeleteAtividade,
}: AtividadesProps) {
  async function handleAddAtividade() {
    if (!novaAtividade.trim() || !embaixadorFiltro) return
    await onAddAtividade(embaixadorFiltro)
    setNovaAtividade('')
  }

  function atividadesDoEmbaixador(embaixadorId: string) {
    return atividades.filter((atividade) => atividade.embaixadorId === embaixadorId)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
          Atividades
        </h2>
        <p className="text-white/40 text-sm mt-1">
          Registre e acompanhe as atividades de cada embaixador
        </p>
      </div>

      {embaixadores.length === 0 ? (
        <div className="text-center py-20 text-white/20">
          <p className="text-5xl mb-4">👑</p>
          <p className="font-medium">Nenhum embaixador cadastrado ainda.</p>
          <p className="text-sm mt-1">Cadastre embaixadores primeiro.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {embaixadores.map((emb) => {
            const lista = atividadesDoEmbaixador(emb.id)
            const feitas = lista.filter((atividade) => atividade.feito).length
            const pct = lista.length > 0 ? Math.round((feitas / lista.length) * 100) : 0
            const isOpen = embaixadorFiltro === emb.id

            return (
              <div
                key={emb.id}
                className={`rounded-2xl border transition-all ${isOpen ? 'border-[#F6B500]/40 bg-white/8' : 'border-white/10 bg-white/5'}`}
              >
                <button
                  onClick={() => setEmbaixadorFiltro(isOpen ? null : emb.id)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-white text-base">{emb.nome}</span>
                      <span className="px-2 py-0.5 bg-[#F6B500]/20 text-[#F6B500] rounded-full text-xs font-bold">
                        👑 {emb.manual}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 max-w-40 bg-white/10 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all ${pct >= 75 ? 'bg-green-400' : pct >= 40 ? 'bg-[#F6B500]' : 'bg-white/30'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/40">
                        {feitas}/{lista.length} feitas
                      </span>
                    </div>
                  </div>
                  <span className={`text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 border-t border-white/10 pt-4">
                    <div className="flex gap-2 mb-4">
                      <input
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#F6B500] transition text-sm"
                        placeholder="Descrição da atividade..."
                        value={novaAtividade}
                        onChange={(e) => setNovaAtividade(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && void handleAddAtividade()}
                      />
                      <button
                        onClick={() => void handleAddAtividade()}
                        disabled={!novaAtividade.trim()}
                        className="px-5 py-2 bg-[#F6B500] text-white font-bold rounded-lg hover:bg-[#FFD700] transition disabled:opacity-40 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                      >
                        + Adicionar
                      </button>
                    </div>

                    {lista.length === 0 ? (
                      <p className="text-white/25 text-sm text-center py-4">
                        Nenhuma atividade registrada. Adicione uma acima.
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {lista.map((atividade) => (
                          <div
                            key={atividade.id}
                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${atividade.feito ? 'border-green-500/30 bg-green-500/8' : 'border-white/10 bg-white/5'}`}
                          >
                            <button
                              onClick={() =>
                                void onToggleAtividade(atividade.id, !atividade.feito)
                              }
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${atividade.feito ? 'bg-green-500 border-green-500 shadow-lg shadow-green-500/30' : 'border-white/30 hover:border-[#F6B500]'}`}
                            >
                              {atividade.feito && (
                                <span className="text-white text-xs font-bold">✓</span>
                              )}
                            </button>
                            <span
                              className={`flex-1 text-sm transition-all ${atividade.feito ? 'line-through text-white/30' : 'text-white'}`}
                            >
                              {atividade.descricao}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${atividade.feito ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/40'}`}
                            >
                              {atividade.feito ? 'Feito' : 'Pendente'}
                            </span>
                            <button
                              onClick={() => void onDeleteAtividade(atividade.id)}
                              className="text-red-400/50 hover:text-red-400 hover:bg-red-500/10 p-1 rounded-lg transition text-xs"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
