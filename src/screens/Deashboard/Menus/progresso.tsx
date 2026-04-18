import type { Embaixador, Atividade } from './types'

interface ProgressoProps {
  embaixadores: Embaixador[]
  atividades: Atividade[]
}

export default function Progresso({ embaixadores, atividades }: ProgressoProps) {
  function atividadesDoEmbaixador(index: number) {
    return atividades.filter(a => a.embaixadorIndex === index)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
          📊 Progresso
        </h2>
        <p className="text-white/40 text-sm mt-1">Visão geral do desempenho dos embaixadores</p>
      </div>

      {embaixadores.length === 0 ? (
        <div className="text-center py-20 text-white/20">
          <p className="text-5xl mb-4">📊</p>
          <p className="font-medium">Nenhum embaixador cadastrado ainda.</p>
        </div>
      ) : (
        <>
          {/* Cards de resumo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {(['Arauto','Escudeiro','Sênior','Emérito'] as const).map(manual => {
              const count = embaixadores.filter(e => e.manual === manual).length
              return (
                <div key={manual} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-[#F6B500]">{count}</p>
                  <p className="text-white/50 text-xs mt-1 font-medium">{manual}</p>
                </div>
              )
            })}
          </div>

          {/* Tabela de progresso */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/8 border-b border-white/10">
                  <tr>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">#</th>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Nome</th>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Manual</th>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Feitas</th>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Total</th>
                    <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider min-w-36">Progresso</th>
                  </tr>
                </thead>
                <tbody>
                  {embaixadores.map((emb, idx) => {
                    const lista = atividadesDoEmbaixador(idx)
                    const feitas = lista.filter(a => a.feito).length
                    const total = lista.length
                    const pct = total > 0 ? Math.round((feitas / total) * 100) : 0
                    return (
                      <tr key={idx} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 text-white/20 text-xs font-mono">{String(idx + 1).padStart(2, '0')}</td>
                        <td className="p-4 text-white font-medium">{emb.nome}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-[#F6B500]/15 text-[#F6B500] rounded-full text-xs font-bold">
                            👑 {emb.manual}
                          </span>
                        </td>
                        <td className="p-4 text-green-400 font-bold">{feitas}</td>
                        <td className="p-4 text-white/50">{total}</td>
                        <td className="p-4">
                          {total === 0 ? (
                            <span className="text-white/20 text-xs">Sem atividades</span>
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="flex-1 bg-white/10 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full transition-all duration-500 ${pct >= 75 ? 'bg-green-400' : pct >= 40 ? 'bg-[#F6B500]' : 'bg-red-400'}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className={`text-xs font-bold w-9 text-right ${pct >= 75 ? 'text-green-400' : pct >= 40 ? 'text-[#F6B500]' : 'text-red-400'}`}>
                                {pct}%
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
