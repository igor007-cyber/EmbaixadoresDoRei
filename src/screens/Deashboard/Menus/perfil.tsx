import type { Perfil } from './types'

interface PerfilProps {
  perfil: Perfil
  setPerfil: React.Dispatch<React.SetStateAction<Perfil>>
  editandoPerfil: boolean
  setEditandoPerfil: React.Dispatch<React.SetStateAction<boolean>>
  perfilTemp: Perfil
  setPerfilTemp: React.Dispatch<React.SetStateAction<Perfil>>
}

export default function PerfilView({
  perfil,
  setPerfil,
  editandoPerfil,
  setEditandoPerfil,
  perfilTemp,
  setPerfilTemp,
}: PerfilProps) {
  const campos: { label: string; key: keyof Perfil; type?: string; icon: string }[] = [
    { label: 'Usuário',              key: 'username',          icon: '👤' },
    { label: 'Nome do Conselheiro',  key: 'nomeConselheiro',   icon: '👑' },
    { label: 'Nome da Embaixada',    key: 'nomeEmbaixada',     icon: '🏛️' },
    { label: 'Email',                key: 'email', type:'email', icon: '✉️' },
    { label: 'Nome da Igreja',       key: 'nomeIgreja',        icon: '⛪' },
    { label: 'Cidade',               key: 'cidade',            icon: '📍' },
    { label: 'Estado (UF)',          key: 'estado',            icon: '🗺️' },
  ]

  function salvarPerfil() {
    localStorage.setItem('embaixada_perfil', JSON.stringify(perfilTemp))
    setPerfil(perfilTemp)
    setEditandoPerfil(false)
  }

  function cancelarEdicao() {
    setPerfilTemp(perfil)
    setEditandoPerfil(false)
  }

  const qtdLabel = perfil.quantidadePessoas === '0-20'
    ? '0 a 20 pessoas'
    : perfil.quantidadePessoas === '21-1000'
    ? '21 a 1000 pessoas'
    : '—'

  const initials = (perfil.nomeConselheiro || perfil.username || '?')
    .split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
            👤 Perfil
          </h2>
          <p className="text-white/40 text-sm mt-1">Suas informações de cadastro</p>
        </div>
        {!editandoPerfil ? (
          <button
            onClick={() => { setPerfilTemp(perfil); setEditandoPerfil(true) }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#F6B500] hover:bg-[#FFD700] text-black font-bold rounded-xl transition shadow-lg shadow-[#F6B500]/20"
          >
            ✏️ Editar Perfil
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={salvarPerfil}
              className="px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition"
            >
              ✓ Salvar
            </button>
            <button
              onClick={cancelarEdicao}
              className="px-5 py-2.5 border border-white/20 text-white/60 hover:bg-white/10 font-bold rounded-xl transition"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      {/* Avatar card */}
      <div className="bg-gradient-to-br from-[#F6B500]/15 to-transparent border border-[#F6B500]/20 rounded-2xl p-6 mb-6 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#F6B500] flex items-center justify-center text-black text-2xl font-extrabold flex-shrink-0 shadow-lg shadow-[#F6B500]/30">
          {initials || '?'}
        </div>
        <div>
          <p className="text-white text-xl font-bold">{perfil.nomeConselheiro || '—'}</p>
          <p className="text-white/50 text-sm">@{perfil.username || '—'}</p>
          <p className="text-[#F6B500] text-sm font-semibold mt-1">🏛️ {perfil.nomeEmbaixada || '—'}</p>
        </div>
      </div>

      {/* Seção: Dados Pessoais */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-4">
        <div className="px-5 py-3 border-b border-white/10 bg-white/5">
          <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest">Dados Pessoais</h3>
        </div>
        <div className="divide-y divide-white/5">
          {campos.slice(0, 4).map(({ label, key, type, icon }) => (
            <div key={key} className="flex items-center gap-4 px-5 py-4">
              <span className="text-lg w-6 flex-shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                {editandoPerfil ? (
                  <input
                    type={type ?? 'text'}
                    value={perfilTemp[key]}
                    onChange={e => setPerfilTemp(p => ({ ...p, [key]: e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#F6B500] transition"
                  />
                ) : (
                  <p className="text-white font-medium text-sm truncate">{perfil[key] || '—'}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção: Embaixada */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-4">
        <div className="px-5 py-3 border-b border-white/10 bg-white/5">
          <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest">Embaixada</h3>
        </div>
        <div className="divide-y divide-white/5">
          {campos.slice(4).map(({ label, key, icon }) => (
            <div key={key} className="flex items-center gap-4 px-5 py-4">
              <span className="text-lg w-6 flex-shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                {editandoPerfil ? (
                  <input
                    type="text"
                    value={perfilTemp[key]}
                    maxLength={key === 'estado' ? 2 : undefined}
                    onChange={e => setPerfilTemp(p => ({ ...p, [key]: key === 'estado' ? e.target.value.toUpperCase().slice(0,2) : e.target.value }))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#F6B500] transition"
                  />
                ) : (
                  <p className="text-white font-medium text-sm">{perfil[key] || '—'}</p>
                )}
              </div>
            </div>
          ))}

          {/* Quantidade de pessoas */}
          <div className="flex items-center gap-4 px-5 py-4">
            <span className="text-lg w-6 flex-shrink-0">👥</span>
            <div className="flex-1">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">Membros</p>
              {editandoPerfil ? (
                <select
                  value={perfilTemp.quantidadePessoas}
                  onChange={e => setPerfilTemp(p => ({ ...p, quantidadePessoas: e.target.value }))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#F6B500] transition"
                >
                  <option value="" style={{ background: '#0A0A1A' }}>Selecione</option>
                  <option value="0-20"    style={{ background: '#0A0A1A' }}>0 a 20 pessoas</option>
                  <option value="21-1000" style={{ background: '#0A0A1A' }}>21 a 1000 pessoas</option>
                </select>
              ) : (
                <p className="text-white font-medium text-sm">{qtdLabel}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {!perfil.username && (
        <div className="text-center py-8 text-white/20">
          <p className="text-3xl mb-2">📋</p>
          <p className="text-sm">Nenhum dado encontrado. Faça o cadastro primeiro.</p>
        </div>
      )}
    </div>
  )
}
