import { useState } from 'react'

const imagens = [
  'https://i.imgur.com/YL190rG.png',
  'https://i.imgur.com/0UeaxP0.png',
  'https://i.imgur.com/pJ6rUrJ.png',
  'https://i.imgur.com/huXyFvm.png',
]

const esportes = [
  'Futsal',
  'Futebol de campo',
  'Vôlei',
  'Basquete',
  'Xadrez',
  'Dama',
  'Dominó',
  'Atletismo',
  'Natação',
  'Tênis de mesa',
]

type Aba = 'andamento' | 'encerrados' | 'cadastro'

export default function Torneio() {
  const [aba, setAba] = useState<Aba>('andamento')
  const [cardSelecionado, setCardSelecionado] = useState<number | null>(null)
  const [nomeTorneio, setNomeTorneio] = useState('')
  const [esporte, setEsporte] = useState('')
  const [times, setTimes] = useState<string[]>([])
  const [novoTime, setNovoTime] = useState('')

  const baseBtn =
    'px-4 py-2 rounded-lg text-sm font-semibold transition border'
  const ativo =
    'bg-gradient-to-r from-[#F6B500] to-[#FFD700] text-black border-transparent shadow-[0_0_15px_rgba(246,181,0,0.35)]'
  const inativo =
    'bg-white/5 text-white/80 border-white/10 hover:border-[#F6B500]/50 hover:text-white'

  function resetarFormulario() {
    setCardSelecionado(null)
    setNomeTorneio('')
    setEsporte('')
    setTimes([])
    setNovoTime('')
  }

  function adicionarTime() {
    const nome = novoTime.trim()
    if (!nome) return
    setTimes((prev) => [...prev, nome])
    setNovoTime('')
  }

  function removerTime(index: number) {
    setTimes((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700] mb-6">
        🏆 Tabela de Torneio
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setAba('andamento')}
          className={`${baseBtn} ${aba === 'andamento' ? ativo : inativo}`}
        >
          ⚔️ Jogos em andamento
        </button>
        <button
          onClick={() => setAba('encerrados')}
          className={`${baseBtn} ${aba === 'encerrados' ? ativo : inativo}`}
        >
          📜 Torneios encerrados
        </button>
        <button
          onClick={() => {
            setAba('cadastro')
            resetarFormulario()
          }}
          className={`${baseBtn} ${aba === 'cadastro' ? ativo : inativo}`}
        >
          📝 Cadastro de jogos
        </button>
      </div>

      {aba === 'andamento' && (
        <div className="flex justify-center mt-10">
          <div className="max-w-lg w-full rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-white/70">
              Nenhum jogo em andamento.
            </p>
            <p className="text-white/40 text-sm mt-2">
              Assim que um jogo começar, ele aparecerá aqui.
            </p>
          </div>
        </div>
      )}

      {aba === 'encerrados' && (
        <div className="flex justify-center mt-10">
          <div className="max-w-lg w-full rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-white/70">
              Nenhum torneio encerrado até o momento.
            </p>
            <p className="text-white/40 text-sm mt-2">
              Quando um torneio for finalizado, a tabela aparecerá aqui.
            </p>
          </div>
        </div>
      )}

      {aba === 'cadastro' && cardSelecionado === null && (
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-2 gap-3 max-w-lg w-full">
            {imagens.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCardSelecionado(i)}
                className="block rounded-xl overflow-hidden border border-white/10 hover:border-[#F6B500]/50 transition hover:scale-[1.02]"
              >
                <img
                  src={src}
                  alt={`Cadastro ${i + 1}`}
                  className="w-full object-contain bg-black"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {aba === 'cadastro' && cardSelecionado !== null && (
        <div className="flex justify-center mt-4">
          <div className="max-w-xl w-full rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={imagens[cardSelecionado]}
                alt="Torneio"
                className="w-20 h-20 object-contain bg-black rounded-lg border border-white/10"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
                  Cadastro do Torneio
                </h3>
                <p className="text-white/50 text-sm">
                  Preencha as informações do jogo
                </p>
              </div>
              <button
                type="button"
                onClick={resetarFormulario}
                className="text-white/50 hover:text-white transition text-sm"
              >
                ← Voltar
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Nome do torneio
                </label>
                <input
                  type="text"
                  value={nomeTorneio}
                  onChange={(e) => setNomeTorneio(e.target.value)}
                  placeholder="Ex: Copa da Embaixada 2026"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-[#F6B500]/60 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Esporte
                </label>
                <select
                  value={esporte}
                  onChange={(e) => setEsporte(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:border-[#F6B500]/60 focus:outline-none"
                >
                  <option value="">Selecione um esporte</option>
                  {esportes.map((esp) => (
                    <option key={esp} value={esp} className="bg-black">
                      {esp}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Times participantes
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={novoTime}
                    onChange={(e) => setNovoTime(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        adicionarTime()
                      }
                    }}
                    placeholder="Nome do time"
                    className="flex-1 px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:border-[#F6B500]/60 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={adicionarTime}
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white text-sm hover:border-[#F6B500]/50 transition"
                  >
                    + Adicionar
                  </button>
                </div>

                {times.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {times.map((time, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10"
                      >
                        <span className="text-white text-sm">
                          {i + 1}. {time}
                        </span>
                        <button
                          type="button"
                          onClick={() => removerTime(i)}
                          className="text-red-400 hover:text-red-300 text-xs"
                        >
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="button"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#F6B500] to-[#FFD700] text-black font-bold shadow-[0_0_15px_rgba(246,181,0,0.35)] hover:brightness-110 transition"
              >
                🏆 Gerar Torneio
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
