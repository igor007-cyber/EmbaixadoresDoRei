import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [isActive, setIsActive] = useState(false)

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
          <form action="#">
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
                Don't have an account?{' '}
                <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); setIsActive(true); }}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Form section - Register */}
        <div className="form-box register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>
            Sign Up
          </h2>
          <form action="#">
            <div className="input-box animation" style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>
              <input type="text" required />
              <label htmlFor="text">Username</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 19, '--j': 2 } as React.CSSProperties}>
              <input type="email" required />
              <label htmlFor="email">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 20, '--j': 3 } as React.CSSProperties}>
              <input type="password" required />
              <label htmlFor="password">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 } as React.CSSProperties}>
              Sign Up
            </button>
            <div className="reglog-text animation" style={{ '--i': 22, '--j': 5 } as React.CSSProperties}>
              <p>
                Already have an account?{' '}
                <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); setIsActive(false); }}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Info section */}
        <div className="info-text login">
          <h2 className="animation" style={{ '--i': 0, '--j': 20 } as React.CSSProperties}>
            Welcome Back!
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

