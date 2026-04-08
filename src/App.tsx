import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login/Login'
import Cadastro from './screens/Cadastro'
import Torneio from './screens/Torneio'
import Jogos from './components/Jogos'
import Biblia from './components/biblia'
import Deashboard from './screens/Deashboard/deashboard'

function App() {
  return (
    <Router basename="/EmbaixadoresDoRei">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/torneios" element={<Torneio />} />
        <Route path="/torneios/:id" element={<Jogos />} />
        <Route path="/biblia/:id" element={<Biblia />} />
        <Route path="/dashboard" element={<Deashboard />} />
      </Routes>
    </Router>
  )
}

export default App
