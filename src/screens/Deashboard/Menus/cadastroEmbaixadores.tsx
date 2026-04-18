import { useState } from 'react'
import type { Embaixador } from './types'
import { emptyEmbaixador } from './types'

interface CadastroEmbaixadoresProps {
  embaixadores: Embaixador[]
  setEmbaixadores: React.Dispatch<React.SetStateAction<Embaixador[]>>
}

const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#F6B500] transition"
const labelClass = "block text-sm text-white/70 mb-1 font-medium"

export default function CadastroEmbaixadores({ embaixadores, setEmbaixadores }: CadastroEmbaixadoresProps) {
  const [formEmbaixador, setFormEmbaixador] = useState<Embaixador>(emptyEmbaixador)
  const [editIndexEmbaixador, setEditIndexEmbaixador] = useState<number | null>(null)

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

  return (
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
          <button type="submit" className="px-8 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] text-black font-bold rounded-lg transition">
            {editIndexEmbaixador !== null ? 'Salvar' : 'Cadastrar'}
          </button>
          {editIndexEmbaixador !== null && (
            <button type="button" onClick={() => { setEditIndexEmbaixador(null); setFormEmbaixador(emptyEmbaixador) }}
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
                        <button onClick={() => handleEditEmbaixador(i)} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition font-medium">Editar</button>
                        <button onClick={() => handleDeleteEmbaixador(i)} className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition font-medium">Apagar</button>
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
  )
}
