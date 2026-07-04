import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login/Login'
import Cadastro from './screens/Cadastro'
import EsqueceuSenha from './screens/EsqueceuSenha/esqueceuSenha'
import Torneio from './screens/Torneio'
import Jogos from './components/Jogos'
import Biblia from './components/biblia'
import Deashboard from './screens/Deashboard/deashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
        <Route path="/torneios" element={<Torneio />} />
        <Route path="/torneios/:id" element={<Jogos />} />
        <Route path="/biblia/:id" element={<Biblia />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Deashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
