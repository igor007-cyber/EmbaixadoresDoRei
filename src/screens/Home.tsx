import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section com Video Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/nVXKHTTtmR0?autoplay=1&mute=1&loop=1&playlist=nVXKHTTtmR0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          {/* Logo e Menu agrupados */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                alt="Embaixadores do Rei Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-full"
              />
            </a>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">
              <li>
                <a href="/" className="text-white hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-white hover:text-cyan-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/torneios" className="text-white hover:text-cyan-300 transition-colors">
                  Torneios
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Mobile */}
          <button 
            className="lg:hidden text-white z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu Mobile Dropdown */}
          {menuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
              <ul className="flex flex-col p-4 space-y-4">
                <li>
                  <Link to="/" className="text-white hover:text-cyan-300 transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-white hover:text-cyan-300 transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/torneios" className="text-white hover:text-cyan-300 transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Torneios
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white hover:text-cyan-300 transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/cadastro" className="text-white hover:text-cyan-300 transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Cadastro
                  </Link>
                </li>
              </ul>
            </div>
          )}
          
          {/* Botões Desktop */}
          <div className="hidden lg:flex gap-2 xl:gap-4">
            <Link 
              to="/login" 
              className="px-4 xl:px-6 py-2 text-sm font-medium text-white hover:text-cyan-300 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/cadastro" 
              className="px-4 xl:px-6 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
            >
              Cadastro
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-[calc(100vh-80px)] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 leading-tight">
            EMBAIXADORES
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">DO REI</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 md:mb-8 tracking-wider">
            Plataforma de Torneios
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 w-full sm:w-auto">
            <a 
              href="/torneios" 
              className="px-6 md:px-8 py-3 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/30 backdrop-blur-sm text-center"
            >
              Ver Torneios
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white">
        <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 - Outreach */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop" 
                  alt="Outreach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Outreach</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 2 - Worship */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop" 
                  alt="Worship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Worship</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 3 - Leadership */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop" 
                  alt="Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Leadership</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 4 - Life Groups */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop" 
                  alt="Life Groups"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Life Groups</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 5 - Youth */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&h=400&fit=crop" 
                  alt="Youth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Youth</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 6 - Kids */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop" 
                  alt="Kids"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold mb-4">Kids</h3>
                  <button className="text-white text-sm font-semibold hover:text-[#F6B500] transition-colors w-fit">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Seção Tabela de Campeonato */}
        <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-20 bg-[#0A0A1A]">
          <div className="max-w-6xl mx-auto">
            {/* Header da Seção */}
            <div className="text-center mb-12">
              <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">TABLE</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">PREMIER LEAGUE</h2>
              <p className="text-white/60 text-lg">Formato de exibição dos torneios e campeonatos</p>
            </div>

            {/* Tabela */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#F6B500]/20">
              {/* Tabela Desktop */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/10 border-b border-white/10">
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-6 py-4 text-left">POS</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-6 py-4 text-left">CLUB</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">P</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">W</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">D</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">L</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">F</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">A</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-4 text-center">GD</th>
                      <th className="text-white/60 text-xs font-semibold uppercase tracking-wider px-6 py-4 text-center">PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Linha 1 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">1</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">FC United</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">39</td>
                      <td className="px-4 py-4 text-center text-white/80">29</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">29</td>
                      <td className="px-4 py-4 text-center text-white/80">76</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[#F6B500] font-bold text-lg">90</span>
                      </td>
                    </tr>
                    {/* Linha 2 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">2</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">FC Manchester</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">38</td>
                      <td className="px-4 py-4 text-center text-white/80">25</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">27</td>
                      <td className="px-4 py-4 text-center text-white/80">75</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[#F6B500] font-bold text-lg">80</span>
                      </td>
                    </tr>
                    {/* Linha 3 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">3</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">West Ham United</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">31</td>
                      <td className="px-4 py-4 text-center text-white/80">23</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">24</td>
                      <td className="px-4 py-4 text-center text-white/80">75</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[#F6B500] font-bold text-lg">80</span>
                      </td>
                    </tr>
                    {/* Linha 4 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">4</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">Blackburn</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">29</td>
                      <td className="px-4 py-4 text-center text-white/80">26</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">25</td>
                      <td className="px-4 py-4 text-center text-white/80">74</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-[#F6B500] font-bold text-lg">80</span>
                      </td>
                    </tr>
                    {/* Linha 5 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">5</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">Tottenham</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">28</td>
                      <td className="px-4 py-4 text-center text-white/80">24</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">26</td>
                      <td className="px-4 py-4 text-center text-white/80">73</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-white/60 font-bold text-lg">45</span>
                      </td>
                    </tr>
                    {/* Linha 6 */}
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">6</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">Feyenoord</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">34</td>
                      <td className="px-4 py-4 text-center text-white/80">24</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">30</td>
                      <td className="px-4 py-4 text-center text-white/80">72</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-white/60 font-bold text-lg">45</span>
                      </td>
                    </tr>
                    {/* Linha 7 */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-white font-bold">7</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">FC Napoli</span>
                      </td>
                      <td className="px-4 py-4 text-center text-white/80">35</td>
                      <td className="px-4 py-4 text-center text-white/80">27</td>
                      <td className="px-4 py-4 text-center text-white/80">4</td>
                      <td className="px-4 py-4 text-center text-white/80">2</td>
                      <td className="px-4 py-4 text-center text-white/80">106</td>
                      <td className="px-4 py-4 text-center text-white/80">28</td>
                      <td className="px-4 py-4 text-center text-white/80">70</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-white/60 font-bold text-lg">45</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Tabela Mobile */}
              <div className="md:hidden">
                {[
                  { pos: 1, club: 'FC United', p: 39, w: 29, pts: 90 },
                  { pos: 2, club: 'FC Manchester', p: 38, w: 25, pts: 80 },
                  { pos: 3, club: 'West Ham United', p: 31, w: 23, pts: 80 },
                  { pos: 4, club: 'Blackburn', p: 29, w: 26, pts: 80 },
                  { pos: 5, club: 'Tottenham', p: 28, w: 24, pts: 45 },
                  { pos: 6, club: 'Feyenoord', p: 34, w: 24, pts: 45 },
                  { pos: 7, club: 'FC Napoli', p: 35, w: 27, pts: 45 },
                ].map((team) => (
                  <div key={team.pos} className="border-b border-white/5 p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold text-lg">{team.pos}</span>
                        <span className="text-white font-semibold">{team.club}</span>
                      </div>
                      <span className={`font-bold text-lg ${team.pts >= 80 ? 'text-[#F6B500]' : 'text-white/60'}`}>
                        {team.pts}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-white/60">P: <span className="text-white">{team.p}</span></span>
                      <span className="text-white/60">W: <span className="text-white">{team.w}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão Ver Tabela Completa */}
            <div className="text-center mt-10">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Full Table
              </button>
            </div>
          </div>
        </section>

        {/* Seção Bracket de Torneio */}
        <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-20 bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Header da Seção */}
            <div className="text-center mb-12">
              <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">TOURNAMENT</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">FORMATO ELIMINATÓRIO</h2>
              <p className="text-white/60 text-lg">Visualização em chave de confrontos diretos</p>
            </div>

            {/* Bracket Desktop */}
            <div className="hidden lg:block overflow-x-auto">
              <div className="min-w-[1200px] mx-auto">
                {/* Grid do Bracket */}
                <div className="grid grid-cols-7 gap-4">
                  
                  {/* Coluna 1 - Oitavas (8 times) */}
                  <div className="flex flex-col justify-around h-[1200px]">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo A</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo B</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo C</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo D</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo E</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo F</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo G</span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2º</span>
                        </div>
                        <span className="text-white font-semibold text-sm">Grupo H</span>
                      </div>
                    </div>
                  </div>

                  {/* Coluna 2 - Conexões visuais */}
                  <div className="flex flex-col justify-around h-[1200px]">
                    <div className="h-[120px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                    <div className="h-[120px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                    <div className="h-[120px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                    <div className="h-[120px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                  </div>

                  {/* Coluna 3 - Quartas (4 confrontos) */}
                  <div className="flex flex-col justify-around h-[1200px]">
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 1</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 2</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 3</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 4</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 5</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 6</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 7</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Vencedor 8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna 4 - Conexões */}
                  <div className="flex flex-col justify-around h-[1200px]">
                    <div className="h-[200px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                    <div className="h-[200px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                  </div>

                  {/* Coluna 5 - Semifinais (2 confrontos) */}
                  <div className="flex flex-col justify-around h-[1200px]">
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Semi 1</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Semi 2</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Semi 3</span>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-[#F6B500] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                          <span className="text-white/60 text-sm">Semi 4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coluna 6 - Conexão Final */}
                  <div className="flex flex-col justify-center h-[1200px]">
                    <div className="h-[400px] flex items-center">
                      <div className="w-full h-0.5 bg-white/20"></div>
                    </div>
                  </div>

                  {/* Coluna 7 - Final */}
                  <div className="flex flex-col justify-center h-[1200px]">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#F6B500]/20 to-transparent border-2 border-[#F6B500] rounded-lg p-6 shadow-lg shadow-[#F6B500]/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#F6B500]/20 rounded-full"></div>
                          <span className="text-white font-bold">Finalista 1</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-[#F6B500]/20 to-transparent border-2 border-[#F6B500] rounded-lg p-6 shadow-lg shadow-[#F6B500]/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#F6B500]/20 rounded-full"></div>
                          <span className="text-white font-bold">Finalista 2</span>
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <div className="inline-flex items-center gap-2 bg-[#F6B500] text-black font-bold px-6 py-2 rounded-full">
                          <i className="bx bx-trophy text-xl"></i>
                          <span className="text-sm uppercase">Final</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bracket Mobile - Lista Simplificada */}
            <div className="lg:hidden space-y-6">
              {/* Oitavas */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#F6B500]"></span>
                  Oitavas de Final
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['1º Grupo A', '2º Grupo B', '1º Grupo C', '2º Grupo D', '1º Grupo E', '2º Grupo F', '1º Grupo G', '2º Grupo H'].map((team, i) => (
                    <div key={i} className="bg-white/5 border border-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                        <span className="text-white text-sm font-semibold">{team}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quartas */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#F6B500]"></span>
                  Quartas de Final
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                        <span className="text-white/60 text-sm">Vencedor {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Semifinais */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#F6B500]"></span>
                  Semifinais
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white/5 border border-white/20 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                        <span className="text-white/60 text-sm">Semifinalista {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="bx bx-trophy text-[#F6B500] text-2xl"></i>
                  Final
                </h3>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-gradient-to-r from-[#F6B500]/20 to-transparent border-2 border-[#F6B500] rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#F6B500]/20 rounded-full"></div>
                        <span className="text-white font-bold">Finalista {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Seção Fase de Grupos */}
        <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-20 bg-[#0A0A1A]">
          <div className="max-w-7xl mx-auto">
            {/* Header da Seção */}
            <div className="text-center mb-12">
              <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">GROUP STAGE</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">FASE DE GRUPOS</h2>
              <p className="text-white/60 text-lg">Organização automática dos times em grupos conforme quantidade de participantes</p>
            </div>

            {/* Grid de Grupos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Grupo A */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">A</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group A</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      BY
                    </div>
                    <span className="text-white font-semibold">BAYERN</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      AT
                    </div>
                    <span className="text-white font-semibold">ATLÉTICO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SZ
                    </div>
                    <span className="text-white font-semibold">SALZBURG</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      LM
                    </div>
                    <span className="text-white font-semibold">LOKOMOTIV</span>
                  </div>
                </div>
              </div>

              {/* Grupo B */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">B</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group B</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-900 text-xs font-bold">
                      RM
                    </div>
                    <span className="text-white font-semibold">REAL MADRID</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SD
                    </div>
                    <span className="text-white font-semibold">SHAKHTAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      IN
                    </div>
                    <span className="text-white font-semibold">INTER</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                      MG
                    </div>
                    <span className="text-white font-semibold">MÖNCHENGLADBACH</span>
                  </div>
                </div>
              </div>

              {/* Grupo C */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">C</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group C</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      PO
                    </div>
                    <span className="text-white font-semibold">PORTO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      MC
                    </div>
                    <span className="text-white font-semibold">MAN. CITY</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      OL
                    </div>
                    <span className="text-white font-semibold">OLYMPIACOS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      OM
                    </div>
                    <span className="text-white font-semibold">MARSEILLE</span>
                  </div>
                </div>
              </div>

              {/* Grupo D */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">D</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group D</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      LV
                    </div>
                    <span className="text-white font-semibold">LIVERPOOL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      AJ
                    </div>
                    <span className="text-white font-semibold">AJAX</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      AT
                    </div>
                    <span className="text-white font-semibold">ATALANTA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-black text-xs font-bold">
                      MD
                    </div>
                    <span className="text-white font-semibold">MIDTJYLLAND</span>
                  </div>
                </div>
              </div>

              {/* Grupo E */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">E</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group E</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SE
                    </div>
                    <span className="text-white font-semibold">SEVILLA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      CH
                    </div>
                    <span className="text-white font-semibold">CHELSEA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      KR
                    </div>
                    <span className="text-white font-semibold">KRASNODAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      RE
                    </div>
                    <span className="text-white font-semibold">RENNES</span>
                  </div>
                </div>
              </div>

              {/* Grupo F */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">F</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group F</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ZE
                    </div>
                    <span className="text-white font-semibold">ZENIT</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-black text-xs font-bold">
                      DO
                    </div>
                    <span className="text-white font-semibold">DORTMUND</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      LA
                    </div>
                    <span className="text-white font-semibold">LAZIO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      CB
                    </div>
                    <span className="text-white font-semibold">CLUB BRUGGE</span>
                  </div>
                </div>
              </div>

              {/* Grupo G */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">G</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group G</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold">
                      JU
                    </div>
                    <span className="text-white font-semibold">JUVENTUS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-yellow-400 text-xs font-bold">
                      BA
                    </div>
                    <span className="text-white font-semibold">BARCELONA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      DK
                    </div>
                    <span className="text-white font-semibold">DYNAMO KYIV</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      FE
                    </div>
                    <span className="text-white font-semibold">FERENCVÁROS</span>
                  </div>
                </div>
              </div>

              {/* Grupo H */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <div className="w-12 h-12 bg-[#F6B500] rounded-full flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">H</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold uppercase">Group H</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      PS
                    </div>
                    <span className="text-white font-semibold">PARIS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      MU
                    </div>
                    <span className="text-white font-semibold">MANCHESTER UTD</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      LE
                    </div>
                    <span className="text-white font-semibold">LEIPZIG</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      IB
                    </div>
                    <span className="text-white font-semibold">ISTANBUL BAŞAKŞEHIR</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Informação Adicional */}
            <div className="mt-12 text-center">
              <p className="text-white/60 text-lg max-w-3xl mx-auto">
                Os grupos são formados automaticamente com base na quantidade de times cadastrados. 
                O sistema distribui equitativamente os participantes para garantir competições balanceadas.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A1A] border-t border-[#F6B500]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo e Nome */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                alt="Embaixadores do Rei Logo" 
                className="h-12 w-auto object-contain rounded-full"
              />
              <h2 className="text-2xl font-bold text-white">EMBAIXADORES DO REI</h2>
            </div>
            <p className="text-white/60 text-sm">Plataforma de Torneios</p>
          </div>

          {/* Menu Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#F6B500] transition-colors text-sm font-medium uppercase">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/80 hover:text-[#F6B500] transition-colors text-sm font-medium uppercase">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/torneios" className="text-white/80 hover:text-[#F6B500] transition-colors text-sm font-medium uppercase">
                  Torneios
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white/80 hover:text-[#F6B500] transition-colors text-sm font-medium uppercase">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-white/80 hover:text-[#F6B500] transition-colors text-sm font-medium uppercase">
                  Cadastro
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F6B500] flex items-center justify-center transition-all duration-300 group"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook text-white text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F6B500] flex items-center justify-center transition-all duration-300 group"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter text-white text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F6B500] flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram text-white text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F6B500] flex items-center justify-center transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin text-white text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F6B500] flex items-center justify-center transition-all duration-300 group"
              aria-label="YouTube"
            >
              <i className="bx bxl-youtube text-white text-xl group-hover:scale-110 transition-transform"></i>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Copyright © 2025 Embaixadores do Rei - Todos os direitos reservados
            </p>
            <p className="text-white/40 text-xs mt-2">
              Desenvolvido com ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
