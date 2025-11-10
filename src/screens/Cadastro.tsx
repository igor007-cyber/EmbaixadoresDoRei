import { Link } from 'react-router-dom'
import './Login/Login.css'

function Cadastro() {
  return (
    <div className="login-page">
      {/* Botão Voltar */}
      <Link to="/" className="back-button">
        <i className="bx bx-arrow-back"></i> Voltar
      </Link>

      {/* Main section */}
      <div className="main-container active">
        <span className="bg-animate"></span>
        <span className="bg-2-animate"></span>

        {/* Form section - Register */}
        <div className="form-box register">
          <h2 className="animation" style={{ '--i': 0, '--j': 0 } as React.CSSProperties}>
            Sign Up
          </h2>
          <form action="#">
            <div className="input-box animation" style={{ '--i': 1, '--j': 1 } as React.CSSProperties}>
              <input type="text" required />
              <label htmlFor="text">Username</label>
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 2, '--j': 2 } as React.CSSProperties}>
              <input type="email" required />
              <label htmlFor="email">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box animation" style={{ '--i': 3, '--j': 3 } as React.CSSProperties}>
              <input type="password" required />
              <label htmlFor="password">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn animation" style={{ '--i': 4, '--j': 4 } as React.CSSProperties}>
              Sign Up
            </button>
            <div className="reglog-text animation" style={{ '--i': 5, '--j': 5 } as React.CSSProperties}>
              <p>
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="login-link"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Info section */}
        <div className="info-text register">
          <h2 className="animation" style={{ '--i': 0, '--j': 0 } as React.CSSProperties}>
            Welcome!
          </h2>
          <p className="animation" style={{ '--i': 1, '--j': 1 } as React.CSSProperties}>
            Join Embaixadores do Rei
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
