import { useEffect, useMemo, useState } from 'react'

import { supabase } from '../../../lib/supabase'

interface AdminProfile {
  id: string
  username: string
  nomeConselheiro: string
  nomeEmbaixada: string
  email: string
  cidade: string
  estado: string
  nomeIgreja: string
  quantidadePessoas: string
  role: 'admin' | 'usuario'
}

interface AdminConselheiro {
  id: string
  nome: string
  idade: number
  telefone: string
  temCurso: string
  profile_id: string
}

interface AdminProgresso {
  embaixador_id: string
  profile_id: string
  nome: string
  manual: string
  total_atividades: number
  atividades_feitas: number
  progresso_percentual: number
}

export default function Admin() {
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [profiles, setProfiles] = useState<AdminProfile[]>([])
  const [conselheiros, setConselheiros] = useState<AdminConselheiro[]>([])
  const [progressos, setProgressos] = useState<AdminProgresso[]>([])
  const [busca, setBusca] = useState('')
  const [expandido, setExpandido] = useState<string | null>(null)

  useEffect(() => {
    async function carregar() {
      setCarregando(true)
      setErro('')

      const [profilesRes, conselheirosRes, progressoRes] = await Promise.all([
        supabase
          .from('profiles')
          .select(
            'id, username, nomeConselheiro:nome_conselheiro, nomeEmbaixada:nome_embaixada, email, cidade, estado, nomeIgreja:nome_igreja, quantidadePessoas:quantidade_pessoas, role',
          )
          .order('nome_embaixada'),
        supabase
          .from('conselheiros')
          .select('id, nome, idade, telefone, temCurso:tem_curso, profile_id')
          .order('nome'),
        supabase
          .from('progresso_embaixadores')
          .select('embaixador_id, profile_id, nome, manual, total_atividades, atividades_feitas, progresso_percentual')
          .order('nome'),
      ])

      if (profilesRes.error || conselheirosRes.error || progressoRes.error) {
        setErro('Nao foi possivel carregar os dados administrativos.')
        setCarregando(false)
        return
      }

      setProfiles((profilesRes.data ?? []) as AdminProfile[])
      setConselheiros((conselheirosRes.data ?? []) as AdminConselheiro[])
      setProgressos((progressoRes.data ?? []) as AdminProgresso[])
      setCarregando(false)
    }

    void carregar()
  }, [])

  const embaixadasVisiveis = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return profiles
    return profiles.filter(
      (p) =>
        p.nomeEmbaixada.toLowerCase().includes(termo) ||
        p.nomeConselheiro.toLowerCase().includes(termo) ||
        p.email.toLowerCase().includes(termo) ||
        p.cidade.toLowerCase().includes(termo),
    )
  }, [profiles, busca])

  const totalEmbaixadores = progressos.length
  const totalConselheiros = conselheiros.length
  const totalEmbaixadas = profiles.length
  const mediaProgresso = useMemo(() => {
    if (progressos.length === 0) return 0
    const soma = progressos.reduce((acc, p) => acc + p.progresso_percentual, 0)
    return Math.round(soma / progressos.length)
  }, [progressos])

  function embaixadoresDoProfile(profileId: string) {
    return progressos.filter((p) => p.profile_id === profileId)
  }

  function conselheirosDoProfile(profileId: string) {
    return conselheiros.filter((c) => c.profile_id === profileId)
  }

  if (carregando) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-white/70">
        Carregando dados administrativos...
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
            Administrador
          </h2>
          <p className="text-white/40 text-sm mt-1">
            Painel geral de todas as embaixadas cadastradas
          </p>
        </div>
        <span className="ml-auto px-3 py-1 rounded-full bg-[#F6B500]/15 text-[#F6B500] text-xs font-bold border border-[#F6B500]/30">
          Acesso restrito
        </span>
      </div>

      {erro && (
        <div className="mb-6 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {erro}
        </div>
      )}

      {/* Cartões de resumo */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Embaixadas', valor: totalEmbaixadas, emoji: '🏛️' },
          { label: 'Embaixadores', valor: totalEmbaixadores, emoji: '🎖️' },
          { label: 'Conselheiros', valor: totalConselheiros, emoji: '🧑‍🏫' },
          { label: 'Progresso médio', valor: `${mediaProgresso}%`, emoji: '📈' },
        ].map((card) => (
          <div key={card.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-2xl mb-1">{card.emoji}</p>
            <p className="text-3xl font-extrabold text-[#F6B500]">{card.valor}</p>
            <p className="text-white/50 text-xs mt-1 font-medium">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Busca */}
      <div className="mb-4">
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por embaixada, conselheiro, e-mail ou cidade..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F6B500]/50"
        />
      </div>

      {embaixadasVisiveis.length === 0 ? (
        <div className="text-center py-20 text-white/20">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-medium">Nenhuma embaixada encontrada.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {embaixadasVisiveis.map((profile) => {
            const embs = embaixadoresDoProfile(profile.id)
            const cons = conselheirosDoProfile(profile.id)
            const aberto = expandido === profile.id
            const media =
              embs.length === 0
                ? 0
                : Math.round(embs.reduce((acc, e) => acc + e.progresso_percentual, 0) / embs.length)

            return (
              <div key={profile.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandido(aberto ? null : profile.id)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors bg-transparent! border-0!"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F6B500] to-[#FFD700] flex items-center justify-center text-black font-extrabold shrink-0">
                    {profile.nomeEmbaixada.charAt(0).toUpperCase() || '?'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white truncate">{profile.nomeEmbaixada}</p>
                      {profile.role === 'admin' && (
                        <span className="px-2 py-0.5 rounded-full bg-[#F6B500]/15 text-[#F6B500] text-[10px] font-bold shrink-0">
                          ADMIN
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs truncate">
                      {profile.nomeConselheiro} · {profile.cidade}/{profile.estado}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-center shrink-0">
                    <div>
                      <p className="text-sm font-bold text-white">{embs.length}</p>
                      <p className="text-[10px] text-white/40">Emb.</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{cons.length}</p>
                      <p className="text-[10px] text-white/40">Cons.</p>
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${media >= 75 ? 'text-green-400' : media >= 40 ? 'text-[#F6B500]' : 'text-red-400'}`}>
                        {media}%
                      </p>
                      <p className="text-[10px] text-white/40">Média</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${aberto ? 'rotate-90' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {aberto && (
                  <div className="border-t border-white/10 p-4 space-y-4">
                    {/* Dados da embaixada */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">E-mail</p>
                        <p className="text-white/80 break-all">{profile.email}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">Igreja</p>
                        <p className="text-white/80">{profile.nomeIgreja}</p>
                      </div>
                      <div>
                        <p className="text-white/30 uppercase tracking-wider mb-0.5">Usuário</p>
                        <p className="text-white/80">{profile.username}</p>
                      </div>
                    </div>

                    {/* Progresso dos embaixadores */}
                    <div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                        Embaixadores ({embs.length})
                      </p>
                      {embs.length === 0 ? (
                        <p className="text-white/20 text-sm">Nenhum embaixador cadastrado.</p>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-white/30 text-[11px] uppercase tracking-wider">
                                <th className="py-2 text-left font-semibold">Nome</th>
                                <th className="py-2 text-left font-semibold">Manual</th>
                                <th className="py-2 text-left font-semibold">Feitas</th>
                                <th className="py-2 text-left font-semibold min-w-32">Progresso</th>
                              </tr>
                            </thead>
                            <tbody>
                              {embs.map((emb) => {
                                const pct = emb.progresso_percentual
                                return (
                                  <tr key={emb.embaixador_id} className="border-t border-white/5">
                                    <td className="py-2.5 text-white font-medium">{emb.nome}</td>
                                    <td className="py-2.5">
                                      <span className="px-2 py-0.5 bg-[#F6B500]/15 text-[#F6B500] rounded-full text-[11px] font-bold">
                                        {emb.manual}
                                      </span>
                                    </td>
                                    <td className="py-2.5 text-white/60">
                                      {emb.atividades_feitas}/{emb.total_atividades}
                                    </td>
                                    <td className="py-2.5">
                                      <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-white/10 rounded-full h-2">
                                          <div
                                            className={`h-2 rounded-full transition-all duration-500 ${pct >= 75 ? 'bg-green-400' : pct >= 40 ? 'bg-[#F6B500]' : 'bg-red-400'}`}
                                            style={{ width: `${pct}%` }}
                                          />
                                        </div>
                                        <span
                                          className={`text-xs font-bold w-9 text-right ${pct >= 75 ? 'text-green-400' : pct >= 40 ? 'text-[#F6B500]' : 'text-red-400'}`}
                                        >
                                          {pct}%
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>

                    {/* Conselheiros */}
                    <div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                        Conselheiros ({cons.length})
                      </p>
                      {cons.length === 0 ? (
                        <p className="text-white/20 text-sm">Nenhum conselheiro cadastrado.</p>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {cons.map((con) => (
                            <div
                              key={con.id}
                              className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs"
                            >
                              <p className="text-white font-medium">{con.nome}</p>
                              <p className="text-white/40">
                                {con.idade} anos · Curso: {con.temCurso || '—'}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
