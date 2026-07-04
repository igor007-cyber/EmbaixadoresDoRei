import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { supabase } from '../../lib/supabase'
import '../Login/Login.css'

type Modo = 'solicitar' | 'redefinir'

function EsqueceuSenha() {
  const navigate = useNavigate()
  const [modo, setModo] = useState<Modo>('solicitar')

  // Solicitar link
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  // Redefinir senha
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [sucesso, setSucesso] = useState(false)

  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  // Quando o usuario chega pelo link do email, o Supabase abre uma sessao
  // de recuperacao e dispara o evento PASSWORD_RECOVERY.
  useEffect(() => {
    if (window.location.hash.includes('type=recovery')) {
      setModo('redefinir')
    }

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setModo('redefinir')
      }
    })

    return () => data.subscription.unsubscribe()
  }, [])

  async function handleSolicitar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    const redirectTo = `${window.location.origin}${base}/esqueceu-senha`

    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo,
    })

    setCarregando(false)

    if (error) {
      setErro('Nao foi possivel enviar o email. Verifique o endereco e tente novamente.')
      return
    }

    setEnviado(true)
  }

  async function handleRedefinir(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErro('')

    if (senha.length < 6) {
      setErro('A senha deve ter no minimo 6 caracteres.')
      return
    }
    if (senha !== confirmarSenha) {
      setErro('As senhas nao coincidem.')
      return
    }

    setCarregando(true)
    const { error } = await supabase.auth.updateUser({ password: senha })
    setCarregando(false)

    if (error) {
      setErro('Nao foi possivel alterar a senha. O link pode ter expirado, solicite um novo.')
      return
    }

    setSucesso(true)
  }

  return (
    <div className="login-page">
      <Link to="/login" className="back-button">
        <i className="bx bx-arrow-back"></i> Voltar
      </Link>

      <div className="main-container">
        <span className="bg-animate"></span>
        <span className="bg-2-animate"></span>

        <div className="form-box login">
          {modo === 'solicitar' && !enviado && (
            <>
              <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
                Recuperar Senha
              </h2>
              <form onSubmit={(ev) => void handleSolicitar(ev)}>
                <p
                  className="animation"
                  style={{ '--i': 1, '--j': 22, color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 8, textAlign: 'center' } as React.CSSProperties}
                >
                  Digite seu email e enviaremos um link para redefinir sua senha.
                </p>
                <div className="input-box animation" style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                  <i className="bx bxs-envelope"></i>
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
                  {carregando ? 'Enviando...' : 'Enviar link'}
                </button>
                <div className="reglog-text animation" style={{ '--i': 5, '--j': 26 } as React.CSSProperties}>
                  <p>
                    Lembrou a senha?{' '}
                    <a
                      href="#"
                      className="login-link"
                      onClick={(ev) => {
                        ev.preventDefault()
                        navigate('/login')
                      }}
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </>
          )}

          {modo === 'solicitar' && enviado && (
            <>
              <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
                Email enviado
              </h2>
              <p
                className="animation"
                style={{ '--i': 1, '--j': 22, color: 'rgba(255,255,255,0.7)', fontSize: 14, textAlign: 'center', lineHeight: 1.6, marginTop: 16 } as React.CSSProperties}
              >
                Enviamos um link de recuperacao para <strong>{email}</strong>. Abra seu email e
                clique no link para criar uma nova senha.
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="btn animation"
                style={{ '--i': 2, '--j': 23 } as React.CSSProperties}
              >
                Voltar para o Login
              </button>
            </>
          )}

          {modo === 'redefinir' && !sucesso && (
            <>
              <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
                Nova Senha
              </h2>
              <form onSubmit={(ev) => void handleRedefinir(ev)}>
                <div className="input-box animation" style={{ '--i': 1, '--j': 22 } as React.CSSProperties}>
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    required
                    value={senha}
                    onChange={(ev) => setSenha(ev.target.value)}
                  />
                  <label htmlFor="password">Nova senha</label>
                  <i
                    className={`bx ${mostrarSenha ? 'bxs-lock-open-alt' : 'bxs-lock-alt'}`}
                    onClick={() => setMostrarSenha((v) => !v)}
                    style={{ cursor: 'pointer', pointerEvents: 'auto' }}
                    role="button"
                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                  ></i>
                </div>
                <div className="input-box animation" style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    required
                    value={confirmarSenha}
                    onChange={(ev) => setConfirmarSenha(ev.target.value)}
                  />
                  <label htmlFor="confirmarSenha">Confirmar senha</label>
                  <i className="bx bxs-lock"></i>
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
                  {carregando ? 'Salvando...' : 'Alterar senha'}
                </button>
              </form>
            </>
          )}

          {modo === 'redefinir' && sucesso && (
            <>
              <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>
                Senha alterada
              </h2>
              <p
                className="animation"
                style={{ '--i': 1, '--j': 22, color: 'rgba(255,255,255,0.7)', fontSize: 14, textAlign: 'center', lineHeight: 1.6, marginTop: 16 } as React.CSSProperties}
              >
                Sua senha foi alterada com sucesso. Agora voce ja pode entrar com a nova senha.
              </p>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="btn animation"
                style={{ '--i': 2, '--j': 23 } as React.CSSProperties}
              >
                Ir para o Login
              </button>
            </>
          )}
        </div>

        <div className="info-text login">
          <h2 className="animation" style={{ '--i': 0, '--j': 20 } as React.CSSProperties}>
            Recuperacao
          </h2>
          <p className="animation" style={{ '--i': 1, '--j': 21 } as React.CSSProperties}>
            Embaixadores do Rei
          </p>
        </div>
      </div>
    </div>
  )
}

export default EsqueceuSenha
