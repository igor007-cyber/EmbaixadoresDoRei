import { useState } from 'react'
import { Link } from 'react-router-dom'

function Torneio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section com Imagem de Fundo */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://www.esportesbrasilia.com.br/noticias/wp-content/uploads/sports-wallpaper3.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          {/* Logo e Menu agrupados */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQQaJAJhuwSBNqXym91Tkm42ONxzO44jVg&s" 
                alt="Embaixadores do Rei Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain rounded-full"
              />
            </Link>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">
              <li>
                <Link to="/" className="text-white hover:text-[#F6B500] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white hover:text-[#F6B500] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/torneios" className="text-white hover:text-[#F6B500] transition-colors">
                  Torneios
                </Link>
              </li>
            </ul>
          </div>

          {/* Login/Cadastro Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-6 py-2 text-white hover:text-[#F6B500] transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              to="/cadastro" 
              className="px-6 py-2 bg-[#F6B500] text-black font-bold rounded-lg hover:bg-[#FFD700] transition-all"
            >
              Cadastro
            </Link>
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
                  <Link to="/" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link to="/torneios" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Torneios
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/cadastro" className="text-white hover:text-[#F6B500] transition-colors block py-2" onClick={() => setMenuOpen(false)}>
                    Cadastro
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="bx bx-trophy text-[#F6B500]"></i>
              <span className="text-white text-sm font-semibold">Torneios</span>
              <span className="text-white/60 text-sm">•</span>
              <span className="text-white/80 text-sm">Jan 1, 2025</span>
            </div>

            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Torneios e jogos em andamento
            </h1>

            {/* Descrição */}
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Veja os torneios e jogos em andamento da sua embaixada.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Categorias de Torneios
            </h2>
            <Link 
              to="/torneios" 
              className="text-gray-600 hover:text-[#F6B500] font-medium flex items-center gap-2 group"
            >
              Ver todos os torneios
              <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Futebol */}
            <Link to="/torneios" className="group relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                  alt="Futebol"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="bx bx-right-arrow-alt text-white text-2xl group-hover:rotate-45 transition-transform duration-300"></i>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">Esportes</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Verifique os jogos e resultados dos torneios de esportes das embaixadas.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2 - Conhecimento */}
            <Link to="/torneios" className="group relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
                  alt="Conhecimento"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="bx bx-right-arrow-alt text-white text-2xl group-hover:rotate-45 transition-transform duration-300"></i>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">Biblia</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Veja as competições de biblia das embaixadas e os resultados.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3 - Outros */}
            <Link to="/torneios" className="group relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                  alt="Outros"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="bx bx-right-arrow-alt text-white text-2xl group-hover:rotate-45 transition-transform duration-300"></i>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">Torneios</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Veja os torneios de outras modalidades das embaixadas e os resultados que esta em andamento e finalizados.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Torneios Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Torneios em Andamento e Finalizados
          </h2>

          {/* Torneios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Torneio 1 - Futebol - Em Andamento */}
            <Link to="/torneios/copa-embaixadores-2025" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">⚽ Futebol</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Copa Embaixadores do Rei 2025
                </h3>
                <p className="text-gray-600 text-sm">32 embaixadas participantes • Fase de Grupos</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 15 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 2 - Bíblia - Em Andamento */}
            <Link to="/biblia/quiz-biblico-nacional" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">📖 Bíblia</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Quiz Bíblico Nacional
                </h3>
                <p className="text-gray-600 text-sm">45 embaixadas participantes • Fase Eliminatória</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 10 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 3 - Futebol - Finalizado */}
            <Link to="/torneios/campeonato-regional-sul" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">⚽ Futebol</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs">Finalizado</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Campeonato Regional Sul
                </h3>
                <p className="text-gray-600 text-sm">16 embaixadas • Campeão: Embaixada Curitiba</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Concluído: 20 Dez 2024</span>
                </div>
              </div>
            </Link>

            {/* Torneio 4 - Bíblia - Em Andamento */}
            <Link to="/biblia/desafio-antigo-testamento" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">📖 Bíblia</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Desafio Antigo Testamento
                </h3>
                <p className="text-gray-600 text-sm">28 embaixadas participantes • Fase de Grupos</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 18 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 5 - Futebol - Em Andamento */}
            <Link to="/torneios/torneio-nordeste" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">⚽ Futebol</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Torneio Interestadual Nordeste
                </h3>
                <p className="text-gray-600 text-sm">24 embaixadas participantes • Quartas de Final</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 08 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 6 - Bíblia - Finalizado */}
            <Link to="/biblia/copa-conhecimento-2024" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">📖 Bíblia</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs">Finalizado</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Copa do Conhecimento 2024
                </h3>
                <p className="text-gray-600 text-sm">40 embaixadas • Campeão: Embaixada São Paulo</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Concluído: 15 Dez 2024</span>
                </div>
              </div>
            </Link>

            {/* Torneio 7 - Futebol - Finalizado */}
            <Link to="/torneios/supercopa-embaixadores" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">⚽ Futebol</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs">Finalizado</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  SuperCopa Embaixadores
                </h3>
                <p className="text-gray-600 text-sm">8 embaixadas • Campeão: Embaixada Rio de Janeiro</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Concluído: 28 Dez 2024</span>
                </div>
              </div>
            </Link>

            {/* Torneio 8 - Bíblia - Em Andamento */}
            <Link to="/biblia/desafio-novo-testamento" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">📖 Bíblia</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Desafio Novo Testamento
                </h3>
                <p className="text-gray-600 text-sm">35 embaixadas participantes • Oitavas de Final</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 12 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 9 - Futebol - Em Andamento */}
            <Link to="/torneios/liga-centro-oeste" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">⚽ Futebol</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs">Em Andamento</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Liga Centro-Oeste
                </h3>
                <p className="text-gray-600 text-sm">20 embaixadas participantes • Semifinais</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Início: 05 Jan 2025</span>
                </div>
              </div>
            </Link>

            {/* Torneio 10 - Bíblia - Finalizado */}
            <Link to="/biblia/maratona-biblica-2024" className="group relative border border-gray-200 rounded-xl overflow-hidden hover:border-[#F6B500] hover:shadow-lg transition-all block cursor-pointer">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://static.wixstatic.com/media/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg/v1/fill/w_640,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d1cc9_39eaffc34b8a453cba65c05db175227c~mv2_d_5168_2816_s_4_2.jpg"
                  alt="Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/85 to-white/90"></div>
              </div>
              <div className="relative flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">📖 Bíblia</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs">Finalizado</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#F6B500] transition-colors leading-tight">
                  Maratona Bíblica 2024
                </h3>
                <p className="text-gray-600 text-sm">50 embaixadas • Campeão: Embaixada Brasília</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>📅 Concluído: 30 Nov 2024</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

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

export default Torneio

