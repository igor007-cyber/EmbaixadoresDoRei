import { useState } from 'react'

import type { Conselheiro } from './types'
import { emptyConselheiro } from './types'

interface CadastroConselheiroProps {
  conselheiros: Conselheiro[]
  onSave: (conselheiro: Conselheiro, editId: string | null) => Promise<void>
  onDelete: (id: string) => Promise<void>
  salvando: boolean
}

const inputClass =
  'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-[#F6B500] transition'
const labelClass = 'block text-sm text-white/70 mb-1 font-medium'

export default function CadastroConselheiro({
  conselheiros,
  onSave,
  onDelete,
  salvando,
}: CadastroConselheiroProps) {
  const [formConselheiro, setFormConselheiro] = useState<Conselheiro>(emptyConselheiro)
  const [editId, setEditId] = useState<string | null>(null)

  async function handleSubmitConselheiro(e: React.FormEvent) {
    e.preventDefault()
    if (!formConselheiro.temCurso) return

    await onSave(formConselheiro, editId)
    setEditId(null)
    setFormConselheiro(emptyConselheiro)
  }

  function handleEditConselheiro(conselheiro: Conselheiro) {
    setFormConselheiro(conselheiro)
    setEditId(conselheiro.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleDeleteConselheiro(id: string) {
    await onDelete(id)
    if (editId === id) {
      setEditId(null)
      setFormConselheiro(emptyConselheiro)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-[#F6B500]">Cadastro de Conselheiros</h2>

      <form
        onSubmit={(e) => void handleSubmitConselheiro(e)}
        className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border mb-8 transition ${editId ? 'border-[#F6B500]/50' : 'border-white/10'}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nome</label>
            <input
              required
              className={inputClass}
              placeholder="Nome completo"
              value={formConselheiro.nome}
              onChange={(e) => setFormConselheiro((p) => ({ ...p, nome: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelClass}>Idade</label>
            <input
              required
              type="number"
              min="1"
              className={inputClass}
              placeholder="Idade"
              value={formConselheiro.idade}
              onChange={(e) => setFormConselheiro((p) => ({ ...p, idade: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelClass}>Telefone</label>
            <input
              required
              className={inputClass}
              placeholder="(00) 00000-0000"
              value={formConselheiro.telefone}
              onChange={(e) => setFormConselheiro((p) => ({ ...p, telefone: e.target.value }))}
            />
          </div>
          <div>
            <label className={labelClass}>Tem curso de conselheiro?</label>
            <div className="flex gap-3">
              {(['Sim', 'Não'] as const).map((op) => (
                <button
                  key={op}
                  type="button"
                  onClick={() => setFormConselheiro((p) => ({ ...p, temCurso: op }))}
                  className={`px-6 py-2 rounded-lg border font-medium transition ${formConselheiro.temCurso === op ? 'bg-[#F6B500] border-[#F6B500] text-black' : 'border-white/20 text-white/70 hover:border-[#F6B500]'}`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <button
            type="submit"
            disabled={salvando}
            className="px-8 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] disabled:opacity-60 text-white font-bold rounded-lg transition"
          >
            {salvando ? 'Salvando...' : editId ? 'Salvar' : 'Cadastrar'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null)
                setFormConselheiro(emptyConselheiro)
              }}
              className="px-8 py-2.5 border border-white/20 text-white/70 hover:bg-white/10 font-bold rounded-lg transition"
            >
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
                {conselheiros.map((conselheiro) => (
                  <tr
                    key={conselheiro.id}
                    className={`border-t border-white/5 hover:bg-white/5 ${editId === conselheiro.id ? 'bg-[#F6B500]/5' : ''}`}
                  >
                    <td className="p-3 text-white">{conselheiro.nome}</td>
                    <td className="p-3 text-white/70">{conselheiro.idade}</td>
                    <td className="p-3 text-white/70 hidden sm:table-cell">
                      {conselheiro.telefone}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${conselheiro.temCurso === 'Sim' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                      >
                        {conselheiro.temCurso}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditConselheiro(conselheiro)}
                          className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-lg transition font-medium"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => void handleDeleteConselheiro(conselheiro.id)}
                          className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition font-medium"
                        >
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
  )
}
