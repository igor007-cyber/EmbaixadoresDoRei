import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login/Login.css'

interface FormData {
  username: string
  nomeConselheiro: string
  nomeEmbaixada: string
  email: string
  quantidadePessoas: string
  cidade: string
  estado: string
  nomeIgreja: string
  senha: string
  confirmarSenha: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const STEPS = [
  { num: 1, label: 'Conta' },
  { num: 2, label: 'Embaixada' },
  { num: 3, label: 'Segurança' },
]

const STEP_TITLES   = ['Seus Dados',    'Sua Embaixada',         'Quase lá!']
const STEP_SUBTITLES = ['Junte-se aos Embaixadores do Rei', 'Conte-nos sobre sua embaixada', 'Crie uma senha segura']

const inputStyle = (filled: boolean): React.CSSProperties => ({
  width: '100%', height: '100%',
  background: filled ? 'rgba(246,181,0,0.1)' : 'rgba(255,255,255,0.05)',
  border: `2px solid ${filled ? '#F6B500' : 'rgba(255,255,255,0.2)'}`,
  borderRadius: '10px', outline: 'none',
  color: '#fff', fontSize: '16px', fontWeight: 500,
  padding: '0 15px', transition: 'all 0.3s',
  boxSizing: 'border-box' as const,
  boxShadow: filled ? '0 0 16px rgba(246,181,0,0.25)' : '0 4px 6px rgba(0,0,0,0.1)',
})

function Cadastro() {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>({
    username: '', nomeConselheiro: '', nomeEmbaixada: '',
    email: '', quantidadePessoas: '', cidade: '', estado: '',
    nomeIgreja: '', senha: '', confirmarSenha: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  function set(field: keyof FormData, value: string) {
    setForm(p => ({ ...p, [field]: value }))
    setErrors(p => ({ ...p, [field]: undefined }))
  }

  function validate(s: number): boolean {
    const e: FormErrors = {}
    if (s === 1) {
      if (!form.username.trim())        e.username        = 'Obrigatório'
      if (!form.nomeConselheiro.trim()) e.nomeConselheiro = 'Obrigatório'
      if (!form.nomeEmbaixada.trim())   e.nomeEmbaixada   = 'Obrigatório'
    }
    if (s === 2) {
      if (!form.email.trim())           e.email            = 'Obrigatório'
      else if (!/\S+@\S+\.\S+/.test(form.email)) e.email  = 'Email inválido'
      if (!form.quantidadePessoas)      e.quantidadePessoas = 'Selecione uma opção'
      if (!form.cidade.trim())          e.cidade           = 'Obrigatório'
      if (!form.estado.trim())          e.estado           = 'Obrigatório'
      if (!form.nomeIgreja.trim())      e.nomeIgreja       = 'Obrigatório'
    }
    if (s === 3) {
      if (!form.senha)                  e.senha            = 'Obrigatório'
      else if (form.senha.length < 6)   e.senha            = 'Mínimo 6 caracteres'
      if (!form.confirmarSenha)         e.confirmarSenha   = 'Obrigatório'
      else if (form.senha !== form.confirmarSenha) e.confirmarSenha = 'As senhas não coincidem'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validate(step)) setStep(s => s + 1)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validate(3)) {
      localStorage.setItem('embaixada_perfil', JSON.stringify({
        username:         form.username,
        nomeConselheiro:  form.nomeConselheiro,
        nomeEmbaixada:    form.nomeEmbaixada,
        email:            form.email,
        quantidadePessoas: form.quantidadePessoas,
        cidade:           form.cidade,
        estado:           form.estado,
        nomeIgreja:       form.nomeIgreja,
      }))
      navigate('/dashboard')
    }
  }

  // ── Shared styles ──────────────────────────────────────────────
  const errStyle: React.CSSProperties = {
    color: '#f87171', fontSize: '11px',
    position: 'absolute', bottom: '-17px', left: '4px',
  }
  const boxStyle = (marginTop = 18): React.CSSProperties => ({
    position: 'relative', width: '100%', height: '58px', marginTop,
  })

  return (
    <div className="login-page">
      <Link to="/" className="back-button">
        <i className="bx bx-arrow-back"></i> Voltar
      </Link>

      <div
        className={`main-container ${isLeaving ? '' : 'active'}`}
        style={{ height: '92vh', maxHeight: '900px' }}
      >
        <span className="bg-animate" />
        <span className="bg-2-animate" />

        {/* ── Form ───────────────────────────────────────────────── */}
        <div className="form-box register" style={{ overflowY: 'auto', paddingTop: 28, paddingBottom: 24 }}>

          {/* Step indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 20 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: step > s.num ? '#22C55E' : step === s.num ? '#F6B500' : 'rgba(255,255,255,0.08)',
                    border: `2px solid ${step > s.num ? '#22C55E' : step === s.num ? '#F6B500' : 'rgba(255,255,255,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step >= s.num ? '#000' : 'rgba(255,255,255,0.35)',
                    fontWeight: 700, fontSize: 15,
                    boxShadow: step === s.num ? '0 0 18px rgba(246,181,0,0.45)' : 'none',
                    transition: 'all 0.4s',
                  }}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.5px',
                    color: step > s.num ? '#22C55E' : step === s.num ? '#F6B500' : 'rgba(255,255,255,0.25)',
                    transition: 'all 0.4s', whiteSpace: 'nowrap',
                  }}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    width: 52, height: 2, marginBottom: 20,
                    background: step > s.num ? '#22C55E' : 'rgba(255,255,255,0.12)',
                    transition: 'all 0.4s',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Title */}
          <h2
            className="animation"
            style={{ '--i': 0, '--j': 0, fontSize: 28, marginBottom: 4 } as React.CSSProperties}
          >
            {STEP_TITLES[step - 1]}
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: 13, marginBottom: 10 }}>
            {STEP_SUBTITLES[step - 1]}
          </p>

          {/* ── STEP 1 ─────────────────────────────────────────── */}
          {step === 1 && (
            <form noValidate onSubmit={handleNext}>
              <div style={boxStyle(20)}>
                <div className="input-box animation" style={{ '--i': 1, '--j': 1, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="text" required value={form.username} onChange={e => set('username', e.target.value)} />
                  <label>Usuário</label>
                  <i className="bx bxs-user" />
                </div>
                {errors.username && <span style={errStyle}>{errors.username}</span>}
              </div>

              <div style={boxStyle(28)}>
                <div className="input-box animation" style={{ '--i': 2, '--j': 2, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="text" required value={form.nomeConselheiro} onChange={e => set('nomeConselheiro', e.target.value)} />
                  <label>Nome do Conselheiro</label>
                  <i className="bx bxs-crown" />
                </div>
                {errors.nomeConselheiro && <span style={errStyle}>{errors.nomeConselheiro}</span>}
              </div>

              <div style={boxStyle(28)}>
                <div className="input-box animation" style={{ '--i': 3, '--j': 3, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="text" required value={form.nomeEmbaixada} onChange={e => set('nomeEmbaixada', e.target.value)} />
                  <label>Nome da Embaixada</label>
                  <i className="bx bxs-flag" />
                </div>
                {errors.nomeEmbaixada && <span style={errStyle}>{errors.nomeEmbaixada}</span>}
              </div>

              <button type="submit" className="btn animation" style={{ '--i': 4, '--j': 4, marginTop: 32 } as React.CSSProperties}>
                Próximo →
              </button>
              <div className="reglog-text animation" style={{ '--i': 5, '--j': 5 } as React.CSSProperties}>
                <p>Você já tem Cadastro?{' '}
                  <a href="#" className="login-link" onClick={(e) => {
                    e.preventDefault()
                    setIsLeaving(true)
                    setTimeout(() => navigate('/login'), 1500)
                  }}>Login</a>
                </p>
              </div>
            </form>
          )}

          {/* ── STEP 2 ─────────────────────────────────────────── */}
          {step === 2 && (
            <form noValidate onSubmit={handleNext}>
              {/* Email */}
              <div style={boxStyle(18)}>
                <div className="input-box animation" style={{ '--i': 1, '--j': 1, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="email" required value={form.email} onChange={e => set('email', e.target.value)} />
                  <label>Email</label>
                  <i className="bx bxs-envelope" />
                </div>
                {errors.email && <span style={errStyle}>{errors.email}</span>}
              </div>

              {/* Quantidade de pessoas */}
              <div style={boxStyle(28)}>
                <select
                  value={form.quantidadePessoas}
                  onChange={e => set('quantidadePessoas', e.target.value)}
                  style={{
                    ...inputStyle(!!form.quantidadePessoas),
                    appearance: 'none', cursor: 'pointer',
                    padding: '0 44px 0 18px',
                    color: form.quantidadePessoas ? '#fff' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  <option value="" disabled style={{ background: '#0A0A1A' }}>Pessoas na embaixada</option>
                  <option value="0-20"    style={{ background: '#0A0A1A' }}>0 a 20 pessoas</option>
                  <option value="21-1000" style={{ background: '#0A0A1A' }}>21 a 1000 pessoas</option>
                </select>
                <i className="bx bxs-group" style={{
                  position: 'absolute', top: '50%', right: 16,
                  transform: 'translateY(-50%)', fontSize: 20, pointerEvents: 'none',
                  color: form.quantidadePessoas ? '#F6B500' : 'rgba(255,255,255,0.5)',
                }} />
                {errors.quantidadePessoas && <span style={errStyle}>{errors.quantidadePessoas}</span>}
              </div>

              {/* Cidade + Estado */}
              <div style={{ display: 'flex', gap: 10, marginTop: 28, position: 'relative' }}>
                <div style={{ position: 'relative', flex: 2, height: 58 }}>
                  <input
                    type="text" placeholder="Cidade"
                    value={form.cidade} onChange={e => set('cidade', e.target.value)}
                    style={inputStyle(!!form.cidade)}
                  />
                  {errors.cidade && <span style={{ ...errStyle, fontSize: 10 }}>{errors.cidade}</span>}
                </div>
                <div style={{ position: 'relative', flex: 1, height: 58 }}>
                  <input
                    type="text" placeholder="UF" maxLength={2}
                    value={form.estado}
                    onChange={e => set('estado', e.target.value.toUpperCase().slice(0, 2))}
                    style={{ ...inputStyle(!!form.estado), textAlign: 'center', letterSpacing: 3, padding: '0 8px' }}
                  />
                  {errors.estado && <span style={{ ...errStyle, fontSize: 10, left: 0 }}>{errors.estado}</span>}
                </div>
              </div>

              {/* Nome da Igreja */}
              <div style={boxStyle(28)}>
                <div className="input-box animation" style={{ '--i': 4, '--j': 4, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="text" required value={form.nomeIgreja} onChange={e => set('nomeIgreja', e.target.value)} />
                  <label>Nome da Igreja</label>
                  <i className="bx bxs-building" />
                </div>
                {errors.nomeIgreja && <span style={errStyle}>{errors.nomeIgreja}</span>}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
                <button type="button" onClick={() => setStep(1)} style={{
                  flex: 1, height: 52, background: 'rgba(255,255,255,0.07)',
                  border: '2px solid rgba(255,255,255,0.18)', borderRadius: 14,
                  color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
                  textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.3s',
                }}>
                  ← Voltar
                </button>
                <button type="submit" className="btn" style={{ flex: 2, marginTop: 0 }}>
                  Próximo →
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 3 ─────────────────────────────────────────── */}
          {step === 3 && (
            <form noValidate onSubmit={handleSubmit}>
              <div style={boxStyle(24)}>
                <div className="input-box animation" style={{ '--i': 1, '--j': 1, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="password" required value={form.senha} onChange={e => set('senha', e.target.value)} />
                  <label>Senha</label>
                  <i className="bx bxs-lock-alt" />
                </div>
                {errors.senha && <span style={errStyle}>{errors.senha}</span>}
              </div>

              <div style={boxStyle(32)}>
                <div className="input-box animation" style={{ '--i': 2, '--j': 2, margin: 0, height: '100%' } as React.CSSProperties}>
                  <input type="password" required value={form.confirmarSenha} onChange={e => set('confirmarSenha', e.target.value)} />
                  <label>Confirmar Senha</label>
                  <i className="bx bxs-lock" />
                </div>
                {errors.confirmarSenha && <span style={errStyle}>{errors.confirmarSenha}</span>}
              </div>

              {/* Resumo */}
              <div style={{
                marginTop: 36, padding: '14px 18px',
                background: 'rgba(246,181,0,0.06)',
                border: '1px solid rgba(246,181,0,0.2)',
                borderRadius: 12,
              }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>Resumo</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[
                    ['Usuário', form.username],
                    ['Conselheiro', form.nomeConselheiro],
                    ['Embaixada', form.nomeEmbaixada],
                    ['Cidade/UF', `${form.cidade}${form.estado ? ` / ${form.estado}` : ''}`],
                    ['Membros', form.quantidadePessoas === '0-20' ? '0 a 20 pessoas' : form.quantidadePessoas === '21-1000' ? '21 a 1000 pessoas' : ''],
                    ['Igreja', form.nomeIgreja],
                  ].map(([label, value]) => value && (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
                      <span style={{ color: '#fff', fontWeight: 600, maxWidth: '55%', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button type="button" onClick={() => setStep(2)} style={{
                  flex: 1, height: 52, background: 'rgba(255,255,255,0.07)',
                  border: '2px solid rgba(255,255,255,0.18)', borderRadius: 14,
                  color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
                  textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.3s',
                }}>
                  ← Voltar
                </button>
                <button type="submit" className="btn" style={{ flex: 2, marginTop: 0 }}>
                  Cadastrar ✓
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── Info panel ─────────────────────────────────────────── */}
        <div className="info-text register">
          <h2 className="animation" style={{ '--i': 0, '--j': 0 } as React.CSSProperties}>
            {step === 1 ? 'Bem-vindo!' : step === 2 ? 'Embaixada' : 'Quase lá!'}
          </h2>
          <p className="animation" style={{ '--i': 1, '--j': 1 } as React.CSSProperties}>
            {STEP_SUBTITLES[step - 1]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
