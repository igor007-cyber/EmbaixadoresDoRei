import type {
  Embaixador,
  Conselheiro,
  Reuniao,
  RegistrosPresenca,
  PresencaEntry,
} from './types'
import { MESES, diasNoMes } from './types'

interface PresencaProps {
  embaixadores: Embaixador[]
  conselheiros: Conselheiro[]
  mesAtual: number
  setMesAtual: React.Dispatch<React.SetStateAction<number>>
  anoAtual: number
  setAnoAtual: React.Dispatch<React.SetStateAction<number>>
  reunioes: Reuniao[]
  setReunioes: React.Dispatch<React.SetStateAction<Reuniao[]>>
  registros: RegistrosPresenca
  setRegistros: React.Dispatch<React.SetStateAction<RegistrosPresenca>>
  reuniaoSelecionada: string | null
  setReuniaoSelecionada: React.Dispatch<React.SetStateAction<string | null>>
  showFormReuniao: boolean
  setShowFormReuniao: React.Dispatch<React.SetStateAction<boolean>>
  novaReuniaoDias: number[]
  setNovaReuniaoDias: React.Dispatch<React.SetStateAction<number[]>>
  novaReuniaoHorario: string
  setNovaReuniaoHorario: React.Dispatch<React.SetStateAction<string>>
}

const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#F6B500] transition"
const labelClass = "block text-sm text-white/70 mb-1 font-medium"

export default function Presenca({
  embaixadores,
  conselheiros,
  mesAtual,
  setMesAtual,
  anoAtual,
  setAnoAtual,
  reunioes,
  setReunioes,
  registros,
  setRegistros,
  reuniaoSelecionada,
  setReuniaoSelecionada,
  showFormReuniao,
  setShowFormReuniao,
  novaReuniaoDias,
  setNovaReuniaoDias,
  novaReuniaoHorario,
  setNovaReuniaoHorario,
}: PresencaProps) {
  const todasPessoas = [
    ...embaixadores.map((e, i) => ({ key: `emb-${i}`, nome: e.nome, tipo: 'Embaixador', manual: e.manual })),
    ...conselheiros.map((c, i) => ({ key: `con-${i}`, nome: c.nome, tipo: 'Conselheiro', manual: '' })),
  ]

  const reunioesFiltradas = reunioes
    .filter(r => r.mes === mesAtual && r.ano === anoAtual)
    .sort((a, b) => a.dia - b.dia || a.horario.localeCompare(b.horario))

  function handleAddReuniao() {
    if (novaReuniaoDias.length === 0 || !novaReuniaoHorario) return
    const novas = novaReuniaoDias.map(dia => ({
      id: `${anoAtual}-${mesAtual}-${dia}-${novaReuniaoHorario}-${Date.now()}-${dia}`,
      dia,
      horario: novaReuniaoHorario,
      mes: mesAtual,
      ano: anoAtual,
    }))
    setReunioes(prev => [...prev, ...novas])
    setNovaReuniaoDias([])
    setShowFormReuniao(false)
    setReuniaoSelecionada(novas[novas.length - 1].id)
  }

  function toggleDia(dia: number) {
    setNovaReuniaoDias(prev =>
      prev.includes(dia) ? prev.filter(d => d !== dia) : [...prev, dia]
    )
  }

  function handleDeleteReuniao(id: string) {
    setReunioes(prev => prev.filter(r => r.id !== id))
    if (reuniaoSelecionada === id) setReuniaoSelecionada(null)
    setRegistros(prev => { const next = { ...prev }; delete next[id]; return next })
  }

  function getEntry(reuniaoId: string, pessoaKey: string): PresencaEntry {
    return registros[reuniaoId]?.[pessoaKey] ?? { presente: false, versiculo: false }
  }

  function togglePresenca(pessoaKey: string) {
    if (!reuniaoSelecionada) return
    setRegistros(prev => {
      const entry = prev[reuniaoSelecionada]?.[pessoaKey] ?? { presente: false, versiculo: false }
      return { ...prev, [reuniaoSelecionada]: { ...prev[reuniaoSelecionada], [pessoaKey]: { ...entry, presente: !entry.presente } } }
    })
  }

  function toggleVersiculo(pessoaKey: string) {
    if (!reuniaoSelecionada) return
    setRegistros(prev => {
      const entry = prev[reuniaoSelecionada]?.[pessoaKey] ?? { presente: false, versiculo: false }
      return { ...prev, [reuniaoSelecionada]: { ...prev[reuniaoSelecionada], [pessoaKey]: { ...entry, versiculo: !entry.versiculo } } }
    })
  }

  function prevMes() {
    if (mesAtual === 0) { setMesAtual(11); setAnoAtual(a => a - 1) }
    else setMesAtual(m => m - 1)
    setReuniaoSelecionada(null)
  }

  function nextMes() {
    if (mesAtual === 11) { setMesAtual(0); setAnoAtual(a => a + 1) }
    else setMesAtual(m => m + 1)
    setReuniaoSelecionada(null)
  }

  function presentsCount(reuniaoId: string) {
    return todasPessoas.filter(p => registros[reuniaoId]?.[p.key]?.presente).length
  }

  function versiculoCount(reuniaoId: string) {
    return todasPessoas.filter(p => registros[reuniaoId]?.[p.key]?.versiculo).length
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
            ✅ Controle de Presença
          </h2>
          <p className="text-white/40 text-sm mt-1">
            {todasPessoas.length} pessoa{todasPessoas.length !== 1 ? 's' : ''} cadastrada{todasPessoas.length !== 1 ? 's' : ''}
            {todasPessoas.length > 0 && ` · ${embaixadores.length} embaixador${embaixadores.length !== 1 ? 'es' : ''} · ${conselheiros.length} conselheiro${conselheiros.length !== 1 ? 's' : ''}`}
          </p>
        </div>
        <button
          onClick={() => { setShowFormReuniao(v => !v); setNovaReuniaoDias([]) }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] text-black font-bold rounded-xl transition shadow-lg shadow-[#F6B500]/20 whitespace-nowrap"
        >
          + Nova Reunião
        </button>
      </div>

      {/* Month Navigator */}
      <div className="flex items-center gap-4 mb-5 bg-white/5 rounded-2xl p-4 border border-white/10">
        <button onClick={prevMes} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-bold text-lg leading-none">◀</button>
        <span className="flex-1 text-center text-lg font-bold capitalize tracking-wide">
          {MESES[mesAtual]} {anoAtual}
        </span>
        <button onClick={nextMes} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-bold text-lg leading-none">▶</button>
      </div>

      {/* Form Nova Reunião */}
      {showFormReuniao && (
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#F6B500]/40 mb-6 shadow-xl shadow-[#F6B500]/5">
          <h3 className="font-bold text-[#F6B500] mb-1">📅 Nova Reunião</h3>
          <p className="text-white/40 text-xs mb-4">
            {MESES[mesAtual]} {anoAtual} — selecione um ou mais dias
            {novaReuniaoDias.length > 0 && <span className="ml-2 text-[#F6B500] font-semibold">{novaReuniaoDias.length} selecionado{novaReuniaoDias.length > 1 ? 's' : ''}</span>}
          </p>
          {/* Cabeçalho dias da semana */}
          <div className="grid grid-cols-7 gap-1.5 mb-1">
            {['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d => (
              <div key={d} className="py-1 text-center text-xs font-bold text-white/30 uppercase tracking-wider">{d}</div>
            ))}
          </div>
          {/* Grade de dias */}
          <div className="grid grid-cols-7 gap-1.5 mb-5">
            {Array.from({ length: new Date(anoAtual, mesAtual, 1).getDay() }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: diasNoMes(mesAtual, anoAtual) }, (_, i) => i + 1).map(d => (
              <button
                key={d}
                type="button"
                onClick={() => toggleDia(d)}
                className={`py-2 rounded-lg text-sm font-semibold transition ${novaReuniaoDias.includes(d)
                  ? 'bg-[#F6B500] text-black shadow-lg shadow-[#F6B500]/30 scale-105'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-end">
            <div className="w-full sm:w-48">
              <label className={labelClass}>Horário</label>
              <input
                type="time"
                value={novaReuniaoHorario}
                onChange={e => setNovaReuniaoHorario(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleAddReuniao}
                disabled={novaReuniaoDias.length === 0}
                className="px-6 py-2.5 bg-[#F6B500] text-black font-bold rounded-lg hover:bg-[#FFD700] transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Adicionar
              </button>
              <button
                onClick={() => setShowFormReuniao(false)}
                className="px-6 py-2.5 border border-white/20 text-white/60 font-bold rounded-lg hover:bg-white/10 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Meeting chips */}
      {reunioesFiltradas.length > 0 ? (
        <div className="flex gap-2 flex-wrap mb-6">
          {reunioesFiltradas.map(r => {
            const pCount = presentsCount(r.id)
            const vCount = versiculoCount(r.id)
            const isSelected = reuniaoSelecionada === r.id
            return (
              <div key={r.id} className="flex items-center gap-1">
                <button
                  onClick={() => setReuniaoSelecionada(isSelected ? null : r.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${isSelected
                    ? 'bg-[#F6B500] text-black border-[#F6B500] shadow-lg shadow-[#F6B500]/20'
                    : 'bg-white/10 text-white border-white/20 hover:border-[#F6B500]/60 hover:bg-white/15'
                  }`}
                >
                  <span>📅 Dia {r.dia} • {r.horario}</span>
                  {todasPessoas.length > 0 && (
                    <>
                      <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold ${isSelected ? 'bg-black/20 text-black' : 'bg-green-500/20 text-green-400'}`}>
                        ✓ {pCount}
                      </span>
                      <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full font-bold ${isSelected ? 'bg-black/20 text-black' : 'bg-[#F6B500]/20 text-[#F6B500]'}`}>
                        📖 {vCount}
                      </span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleDeleteReuniao(r.id)}
                  className="p-1.5 text-red-400/60 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition text-sm"
                  title="Remover reunião"
                >
                  ✕
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        !showFormReuniao && (
          <div className="text-center py-16 text-white/20">
            <p className="text-5xl mb-4">📅</p>
            <p className="font-medium">Nenhuma reunião em {MESES[mesAtual]}.</p>
            <p className="text-sm mt-1">Clique em "Nova Reunião" para adicionar.</p>
          </div>
        )
      )}

      {/* Tabela de Presença */}
      {reuniaoSelecionada && (() => {
        const reuniao = reunioes.find(r => r.id === reuniaoSelecionada)!
        const presentes = presentsCount(reuniaoSelecionada)
        const versiculos = versiculoCount(reuniaoSelecionada)
        const total = todasPessoas.length
        const pct = total > 0 ? Math.round((presentes / total) * 100) : 0

        return (
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Stats bar */}
            <div className="bg-gradient-to-r from-[#F6B500]/15 via-white/5 to-transparent border-b border-white/10 p-5">
              <div className="flex flex-wrap gap-6 items-center">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Reunião</p>
                  <p className="text-white font-bold mt-0.5">Dia {reuniao.dia} de {MESES[mesAtual]} • {reuniao.horario}</p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Presentes</p>
                    <p className="text-green-400 font-extrabold text-xl mt-0.5">{presentes}<span className="text-white/30 text-sm font-normal">/{total}</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Versículo</p>
                    <p className="text-[#F6B500] font-extrabold text-xl mt-0.5">{versiculos}<span className="text-white/30 text-sm font-normal">/{total}</span></p>
                  </div>
                </div>
                {total > 0 && (
                  <div className="flex-1 min-w-32">
                    <div className="flex justify-between text-xs text-white/40 mb-1">
                      <span>Frequência</span>
                      <span className="font-bold text-white/60">{pct}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-500 ${pct >= 75 ? 'bg-green-400' : pct >= 50 ? 'bg-[#F6B500]' : 'bg-red-400'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {total === 0 ? (
              <div className="text-center py-16 text-white/20 bg-white/5">
                <p className="text-4xl mb-3">👥</p>
                <p className="font-medium">Nenhuma pessoa cadastrada ainda.</p>
                <p className="text-sm mt-1">Cadastre embaixadores ou conselheiros primeiro.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider w-8">#</th>
                      <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Nome</th>
                      <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Tipo</th>
                      <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Presença</th>
                      <th className="p-4 text-left text-white/40 font-semibold text-xs uppercase tracking-wider">Versículo da Bíblia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todasPessoas.map((p, i) => {
                      const entry = getEntry(reuniaoSelecionada, p.key)
                      return (
                        <tr
                          key={p.key}
                          className={`border-t border-white/5 transition-colors ${entry.presente ? 'bg-green-500/5' : 'bg-transparent'}`}
                        >
                          <td className="p-4 text-white/20 text-xs font-mono">{String(i + 1).padStart(2, '0')}</td>
                          <td className="p-4">
                            <span className="text-white font-medium">{p.nome}</span>
                          </td>
                          <td className="p-4 hidden sm:table-cell">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${p.tipo === 'Embaixador'
                              ? 'bg-[#F6B500]/15 text-[#F6B500]'
                              : 'bg-blue-500/15 text-blue-400'
                            }`}>
                              {p.tipo === 'Embaixador' ? `👑 ${p.manual}` : '📋 Conselheiro'}
                            </span>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => togglePresenca(p.key)}
                              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${entry.presente
                                ? 'bg-green-500 text-white shadow-lg shadow-green-500/25 hover:bg-green-600 scale-105'
                                : 'bg-white/8 text-white/35 hover:bg-white/15 hover:text-white/60 border border-white/10'
                              }`}
                            >
                              {entry.presente ? '✓ Presente' : '✗ Ausente'}
                            </button>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => toggleVersiculo(p.key)}
                              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${entry.versiculo
                                ? 'bg-[#F6B500] text-black shadow-lg shadow-[#F6B500]/25 hover:bg-[#FFD700] scale-105'
                                : 'bg-white/8 text-white/35 hover:bg-white/15 hover:text-white/60 border border-white/10'
                              }`}
                            >
                              {entry.versiculo ? '📖 Falou' : '📖 Não falou'}
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      })()}
    </div>
  )
}
