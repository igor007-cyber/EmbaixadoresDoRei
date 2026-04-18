const imagens = [
  'https://i.imgur.com/YL190rG.png',
  'https://i.imgur.com/0UeaxP0.png',
  'https://i.imgur.com/pJ6rUrJ.png',
  'https://i.imgur.com/huXyFvm.png',
]

export default function Torneio() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700] mb-6">
        🏆 Tabela de Torneio
      </h2>
      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-2 gap-3 max-w-lg w-full">
          {imagens.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="block rounded-xl overflow-hidden border border-white/10 hover:border-[#F6B500]/50 transition hover:scale-[1.02]">
              <img src={src} alt={`Tabela ${i + 1}`} className="w-full object-contain bg-black" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
