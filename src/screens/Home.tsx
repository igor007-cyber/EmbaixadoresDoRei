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
            {/* Título da Seção */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-blue-900">
                Conheça os Esportes dos 
                <span className="block text-yellow-500">Embaixadores do Rei</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
                Oferecemos uma ampla variedade de modalidades esportivas para todas as idades e níveis de habilidade. 
                Junte-se a nós e descubra o esporte perfeito para você! 
                Competições emocionantes, desenvolvimento de talentos e muito mais!
              </p>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1 - Futebol */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/8106490939eee9974a0f617dfe155564.jpg" 
                  alt="Futebol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Xadrez</h3>
                </div>
              </div>

              {/* Card 2 - Vôlei */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://novasantarosa.pr.gov.br/wp-content/uploads/2024/03/maior_bubRpEBE1uVrJwlFJwknmkTHWRDGvv7K.jpg" 
                  alt="Vôlei"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Futsal</h3>
                </div>
              </div>

              {/* Card 3 - Basquete */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://clubepaineiras.org.br/wp-content/uploads/2022/05/jogadores.jpg" 
                  alt="Basquete"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Futebol de campo</h3>
                </div>
              </div>

              {/* Card 4 - Tênis de Mesa */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://static.todamateria.com.br/upload/te/ni/tenis-de-mesa-og.jpg?class=ogImageSquare" 
                  alt="Tênis de Mesa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Tênis de Mesa</h3>
                </div>
              </div>

              {/* Card 5 - Atletismo */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://media.istockphoto.com/id/184629980/pt/foto/linha-de-corredores-no-in%C3%ADcio-de-uma-faixa.jpg?s=612x612&w=0&k=20&c=FQjo8VqnveNe_YyF89k2L1B9Rb8R38LWpna3zmPrlSU=" 
                  alt="Atletismo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Atletismo</h3>
                </div>
              </div>

              {/* Card 6 - Salto */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://conteudo.imguol.com.br/c/esporte/95/2021/07/31/alexsandro-melo-em-acao-nas-eliminatorias-do-salto-em-distancia-nas-olimpiadas-de-toquio-1627729536839_v2_1920x1285.jpg" 
                  alt="Salto em Distância"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Salto</h3>
                </div>
              </div>

              {/* Card 7 - Natação */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://conceitos.com/wp-content/uploads/Natacao.jpg" 
                  alt="Natação"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Natação</h3>
                </div>
              </div>

              {/* Card 8 - Handebol */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://images.tcdn.com.br/img/img_prod/1281743/noticia_73944177766fdd02088226.png" 
                  alt="Handebol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Dama</h3>
                </div>
              </div>

              {/* Card 9 - Dominó */}
              <div className="relative group overflow-hidden rounded-3xl h-80 cursor-pointer transition-transform duration-300 hover:scale-105">
                <img 
                  src="https://super.abril.com.br/wp-content/uploads/2018/07/521526bc865be241850004df619px-domino_game1.jpeg?quality=70&strip=info&w=619&h=440&crop=1" 
                  alt="Dominó"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-white text-3xl font-bold">Dominó</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Seção Competições Bíblicas */}
        <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Título da Seção */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight text-blue-900">
                Competições de 
                <span className="block text-[#F6B500]">Conhecimento Bíblico</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
                Desafie seu conhecimento e aprofunde sua fé através de competições dinâmicas e envolventes. 
                Explore diferentes categorias e teste suas habilidades bíblicas!
              </p>
            </div>

            {/* Grid de Cards - Layout Inspirado */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Coluna Esquerda - 2 Cards Grandes */}
              <div className="lg:col-span-1 space-y-6">
                {/* Card 1 - Conhecimentos gerais da Bíblia */}
                <div className="relative group overflow-hidden rounded-3xl h-96 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-blue-900 to-blue-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Geral</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Conhecimentos Gerais da Bíblia</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
                </div>

                {/* Card 2 - Conhecimentos gerais da Organização */}
                <div className="relative group overflow-hidden rounded-3xl h-96 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-purple-900 to-purple-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Organizacional</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Conhecimentos Gerais da Organização</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
                </div>
              </div>

              {/* Coluna Central - 2 Cards Grandes */}
              <div className="lg:col-span-1 space-y-6">
                {/* Card 3 - Agilidade Bíblica */}
                <div className="relative group overflow-hidden rounded-3xl h-96 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-green-900 to-green-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Velocidade</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Agilidade Bíblica</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
                </div>

                {/* Card 4 - Montagem Bíblica */}
                <div className="relative group overflow-hidden rounded-3xl h-96 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-red-900 to-red-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Prática</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Montagem Bíblica</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - 2 Cards Retangulares + Cards Menores */}
              <div className="lg:col-span-1 space-y-6">
                {/* Card 5 - Debate de Versículos */}
                <div className="relative group overflow-hidden rounded-3xl h-56 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-orange-900 to-orange-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-center p-8">
                    <p className="text-[#F6B500] text-xs font-bold uppercase tracking-wider mb-2">Categoria Debate</p>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Debate de Versículos</h3>
                    <button className="bg-white text-black px-5 py-2 rounded-lg text-xs font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Ver Mais
                    </button>
                  </div>
                </div>

                {/* Card 6 - Biografia Missionária */}
                <div className="relative group overflow-hidden rounded-3xl h-56 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-teal-900 to-teal-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-center p-8">
                    <p className="text-[#F6B500] text-xs font-bold uppercase tracking-wider mb-2">Categoria Biografia</p>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Biografia Missionária</h3>
                    <button className="bg-white text-black px-5 py-2 rounded-lg text-xs font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Ver Mais
                    </button>
                  </div>
                </div>

                {/* Card 7 - Biografia WAH */}
                <div className="relative group overflow-hidden rounded-3xl h-56 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-indigo-900 to-indigo-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-center p-8">
                    <p className="text-[#F6B500] text-xs font-bold uppercase tracking-wider mb-2">Categoria Biografia</p>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Biografia WAH</h3>
                    <button className="bg-white text-black px-5 py-2 rounded-lg text-xs font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Ver Mais
                    </button>
                  </div>
                </div>
              </div>

              {/* Cards Adicionais - Linha Inferior */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 8 - Biografia de Jesus */}
                <div className="relative group overflow-hidden rounded-3xl h-72 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-yellow-900 to-yellow-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Especial</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Biografia de Jesus</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
                </div>

                {/* Card 9 - Pregador do Evangelho */}
                <div className="relative group overflow-hidden rounded-3xl h-72 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-br from-pink-900 to-pink-700">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-[#F6B500] text-sm font-bold uppercase tracking-wider mb-2">Categoria Pregação</p>
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Pregador do Evangelho</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#F6B500] transition-colors w-fit">
                      Explorar Agora
                    </button>
                  </div>
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
                  <h3 className="text-white text-2xl font-bold uppercase">Group A</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">BAYERN</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">ATLÉTICO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">SALZBURG</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">LOKOMOTIV</span>
                  </div>
                </div>
              </div>

              {/* Grupo B */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group B</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">REAL MADRID</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">SHAKHTAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">INTER</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">MÖNCHENGLADBACH</span>
                  </div>
                </div>
              </div>

              {/* Grupo C */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group C</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">PORTO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">MAN. CITY</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">OLYMPIACOS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">MARSEILLE</span>
                  </div>
                </div>
              </div>

              {/* Grupo D */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group D</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">LIVERPOOL</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">AJAX</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">ATALANTA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">MIDTJYLLAND</span>
                  </div>
                </div>
              </div>

              {/* Grupo E */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group E</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">SEVILLA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">CHELSEA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">KRASNODAR</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">RENNES</span>
                  </div>
                </div>
              </div>

              {/* Grupo F */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group F</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">ZENIT</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">DORTMUND</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">LAZIO</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">CLUB BRUGGE</span>
                  </div>
                </div>
              </div>

              {/* Grupo G */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group G</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">JUVENTUS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">BARCELONA</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">DYNAMO KYIV</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">FERENCVÁROS</span>
                  </div>
                </div>
              </div>

              {/* Grupo H */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-[#F6B500]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F6B500]/30">
                  <h3 className="text-white text-2xl font-bold uppercase">Group H</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">PARIS</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">MANCHESTER UTD</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white font-semibold">LEIPZIG</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                      alt="Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
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

        {/* Torneios em Andamento */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(246,181,0,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F6B500]/20 border border-[#F6B500]/50 rounded-full text-[#F6B500] text-sm font-semibold">
                  <i className="bx bx-trending-up text-lg"></i>
                  AO VIVO AGORA
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 text-blue-900">
                TORNEIOS EM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] via-[#FFD700] to-[#F6B500]">
                  ANDAMENTO
                </span>
              </h2>
              <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
                Participe dos torneios mais disputados! Mostre suas habilidades e conquiste prêmios incríveis.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Card 1 - DAER */}
              <Link to="/torneios" className="group relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#F6B500]/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#F6B500]/30">
                  {/* Imagem */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-purple-900/30 to-black flex items-center justify-center p-6">
                    <img 
                      src="https://images.tcdn.com.br/img/img_prod/1151656/medalha_embaixadores_do_rei_futebol_169_1_5370ddda9a8fd52077af8bbb9b89157b.jpeg"
                      alt="DAER Championship"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded">
                        TORNEIO
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F6B500] transition-colors">
                      Torneio DAER 
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      O torneio mais prestigiado da temporada. Competidores de elite disputam o título supremo.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-[#F6B500]">
                          <i className="bx bxs-star"></i>
                          <span className="text-sm font-bold">4.95</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <i className="bx bx-user"></i>
                          <span className="text-sm">30 Embaixadas</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-white/10">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-[#F6B500] to-[#FFD700] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#F6B500]/50 transition-all transform hover:scale-105">
                        ENTRAR NO TORNEIO
                        <i className="bx bx-right-arrow-alt ml-1"></i>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F6B500]/20 to-transparent"></div>
                  </div>
                </div>
              </Link>

              {/* Card 2 - ERER */}
              <Link to="/torneios" className="group relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
                  {/* Imagem */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-cyan-900/30 to-black flex items-center justify-center p-6">
                    <img 
                      src="https://i.imgur.com/9O5Eozd.png"
                      alt="ERER Battle Royale"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded">
                        TORNEIO
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      Torneio ERER 
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      Batalha épica onde apenas os melhores sobrevivem. Estratégia e habilidade são essenciais.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-cyan-400">
                          <i className="bx bxs-star"></i>
                          <span className="text-sm font-bold">4.87</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <i className="bx bx-user"></i>
                          <span className="text-sm">50 embaixadas</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-white/10">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                        ENTRAR NO TORNEIO
                        <i className="bx bx-right-arrow-alt ml-1"></i>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                  </div>
                </div>
              </Link>

              {/* Card 3 - ONIER */}
              <Link to="/torneios" className="group relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30">
                  {/* Imagem */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-green-900/30 to-black flex items-center justify-center p-6">
                    <img 
                      src="https://images.tcdn.com.br/img/img_prod/1151656/180_trofu_catraca_metal_escudo_er_1_20250813155741_724222885fbc.jpeg"
                      alt="ONIER Arena"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                        TORNEIO
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      Copa ONIER
                    </h3>
                    
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      Perfeito para jogadores intermediários. Mostre seu potencial e suba no ranking.
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-green-400">
                          <i className="bx bxs-star"></i>
                          <span className="text-sm font-bold">4.72</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <i className="bx bx-user"></i>
                          <span className="text-sm">90 Embaixadas</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-white/10">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105">
                        ENTRAR NO TORNEIO
                        <i className="bx bx-right-arrow-alt ml-1"></i>
                      </button>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                  </div>
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link 
                to="/torneios" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F6B500] via-[#FFD700] to-[#F6B500] text-black text-lg font-black rounded-full hover:shadow-2xl hover:shadow-[#F6B500]/50 transition-all transform hover:scale-105 group"
              >
                VER TODOS OS TORNEIOS
                <i className="bx bx-right-arrow-alt text-2xl group-hover:translate-x-2 transition-transform"></i>
              </Link>
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
