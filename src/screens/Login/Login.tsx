import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="login-page">
      {/* Botão Voltar */}
      <Link to="/" className="back-button">
        <i className="bx bx-arrow-back"></i> Voltar
      </Link>

      {/* Main section */}
      <div className={`main-container ${isActive ? 'active' : ''}`}>
        <span className="bg-animate"></span>
        <span className="bg-2-animate"></span>

        {/* Form section - Login */}
        <div className="form-box login">
          <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
            Login
          </h2>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/dashboard') }}>
            <div className="input-box animation" style={{ '--i': 1, '--j': 22 } as React.CSSProperties}>
              <input type="text" required />
              <label htmlFor="text">Username</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
              <input type="password" required />
              <label htmlFor="password">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 } as React.CSSProperties}>
              Login
            </button>
            <div className="reglog-text animation" style={{ '--i': 4, '--j': 25 } as React.CSSProperties}>
              <p>
                Você não tem uma conta?{' '}
                <a href="#" className="signup-link" onClick={(e) => {
                  e.preventDefault()
                  setIsActive(true)
                  setTimeout(() => navigate('/cadastro'), 1500)
                }}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Preview do novo cadastro (apenas para o efeito de transição) */}
        <div className="form-box register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>
            Cadastro
          </h2>

          {/* Step indicator preview */}
          <div className="animation" style={{ '--i': 18, '--j': 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 0, margin: '24px 0' } as React.CSSProperties}>
            {[{n:1,l:'Conta'},{n:2,l:'Embaixada'},{n:3,l:'Segurança'}].map((s, i) => (
              <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.08)',
                    border: `2px solid ${s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.n === 1 ? '#000' : 'rgba(255,255,255,0.3)',
                    fontWeight: 700, fontSize: 15,
                    boxShadow: s.n === 1 ? '0 0 18px rgba(246,181,0,0.45)' : 'none',
                  }}>{s.n}</div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: s.n === 1 ? '#F6B500' : 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>{s.l}</span>
                </div>
                {i < 2 && <div style={{ width: 52, height: 2, background: 'rgba(255,255,255,0.12)', marginBottom: 20 }} />}
              </div>
            ))}
          </div>

          {/* Campos fantasma */}
          {['Usuário', 'Nome do Conselheiro', 'Nome da Embaixada'].map((label, i) => (
            <div key={label} className="animation" style={{ '--i': 19 + i, '--j': 2 + i, position: 'relative', width: '100%', height: 56, margin: '16px 0', opacity: 0.5 } as React.CSSProperties}>
              <div style={{
                width: '100%', height: '100%',
                background: 'rgba(255,255,255,0.04)',
                border: '2px solid rgba(255,255,255,0.15)',
                borderRadius: 10, display: 'flex', alignItems: 'center',
                padding: '0 20px', color: 'rgba(255,255,255,0.4)', fontSize: 15,
              }}>{label}</div>
            </div>
          ))}

          <div className="animation" style={{ '--i': 22, '--j': 5 } as React.CSSProperties}>
            <div style={{
              width: '100%', height: 52, marginTop: 16,
              background: 'linear-gradient(135deg, #F6B500, #ffcc33)',
              borderRadius: 14, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#000', fontWeight: 700,
              fontSize: 16, letterSpacing: 1, textTransform: 'uppercase',
              opacity: 0.7,
            }}>
              Próximo →
            </div>
          </div>
        </div>

        {/* Info section */}
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

