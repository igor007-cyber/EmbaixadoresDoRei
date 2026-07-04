import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { supabase } from '../../lib/supabase'
import './Login.css'

function Login() {
  const [isActive, setIsActive] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: senha,
    })

    if (error) {
      setErro('Nao foi possivel entrar. Verifique seu email e senha.')
      setCarregando(false)
      return
    }

    navigate('/dashboard')
  }

  return (
    <div className="login-page">
      <Link to="/" className="back-button">
        <i className="bx bx-arrow-back"></i> Voltar
      </Link>

      <div className={`main-container ${isActive ? 'active' : ''}`}>
        <span className="bg-animate"></span>
        <span className="bg-2-animate"></span>

        <div className="form-box login">
          <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
            Login
          </h2>
          <form onSubmit={(e) => void handleSubmit(e)}>
            <div className="input-box animation" style={{ '--i': 1, '--j': 22 } as React.CSSProperties}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <label htmlFor="password">Senha</label>
              <i
                className={`bx ${mostrarSenha ? 'bxs-lock-open-alt' : 'bxs-lock-alt'}`}
                onClick={() => setMostrarSenha((v) => !v)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                role="button"
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
              ></i>
            </div>
            <div
              className="animation"
              style={{ '--i': 3, '--j': 24, textAlign: 'right', marginTop: 6 } as React.CSSProperties}
            >
              <a
                href="#"
                className="signup-link"
                style={{ fontSize: 13 }}
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/esqueceu-senha')
                }}
              >
                Esqueceu a senha?
              </a>
            </div>
            {erro && (
              <p
                className="animation"
                style={{ '--i': 3, '--j': 24, color: '#fca5a5', fontSize: 13, marginTop: 8 } as React.CSSProperties}
              >
                {erro}
              </p>
            )}
            <button
              type="submit"
              disabled={carregando}
              className="btn animation"
              style={{ '--i': 4, '--j': 25 } as React.CSSProperties}
            >
              {carregando ? 'Entrando...' : 'Login'}
            </button>
            <div className="reglog-text animation" style={{ '--i': 5, '--j': 26 } as React.CSSProperties}>
              <p>
                Voce nao tem uma conta?{' '}
                <a
                  href="#"
                  className="signup-link"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsActive(true)
                    setTimeout(() => navigate('/cadastro'), 1500)
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>
            Cadastro
          </h2>

          <div className="animation" style={{ '--i': 18, '--j': 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 0, margin: '24px 0' } as React.CSSProperties}>
            {[{ n: 1, l: 'Conta' }, { n: 2, l: 'Embaixada' }, { n: 3, l: 'Seguranca' }].map((s, i) => (
              <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.08)',
                      border: `2px solid ${s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.2)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: s.n === 1 ? '#000' : 'rgba(255,255,255,0.3)',
                      fontWeight: 700,
                      fontSize: 15,
                      boxShadow: s.n === 1 ? '0 0 18px rgba(246,181,0,0.45)' : 'none',
                    }}
                  >
                    {s.n}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>
                    {s.l}
                  </span>
                </div>
                {i < 2 && <div style={{ width: 52, height: 2, background: 'rgba(255,255,255,0.12)', marginBottom: 20 }} />}
              </div>
            ))}
          </div>

          {['Usuario', 'Nome do Conselheiro', 'Nome da Embaixada'].map((label, i) => (
            <div
              key={label}
              className="animation"
              style={{ '--i': 19 + i, '--j': 2 + i, position: 'relative', width: '100%', height: 56, margin: '16px 0', opacity: 0.5 } as React.CSSProperties}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '2px solid rgba(255,255,255,0.15)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 20px',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 15,
                }}
              >
                {label}
              </div>
            </div>
          ))}

          <div className="animation" style={{ '--i': 22, '--j': 5 } as React.CSSProperties}>
            <div
              style={{
                width: '100%',
                height: 52,
                marginTop: 16,
                background: 'linear-gradient(135deg, #F6B500, #ffcc33)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 1,
                textTransform: 'uppercase',
                opacity: 0.7,
              }}
            >
              Proximo →
            </div>
          </div>
        </div>

        <div className="info-text login">
          <h2 className="animation" style={{ '--i': 0, '--j': 20 } as React.CSSProperties}>
            Bem vindo de volta
          </h2>
          <p className="animation" style={{ '--i': 1, '--j': 21 } as React.CSSProperties}>
            Embaixadores do Rei
          </p>
        </div>

        <div className="info-text register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>
            Welcome!
          </h2>
          <p className="animation" style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>
            Join Embaixadores do Rei
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
