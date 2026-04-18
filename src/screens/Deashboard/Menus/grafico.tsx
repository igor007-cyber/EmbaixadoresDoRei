import { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'
import type { Embaixador, Conselheiro, Atividade } from './types'

interface GraficoProps {
  embaixadores: Embaixador[]
  conselheiros: Conselheiro[]
  atividades: Atividade[]
}

export default function Grafico({ embaixadores, conselheiros, atividades }: GraficoProps) {
  const pieRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const pieChart = useRef<ApexCharts | null>(null)
  const lineChart = useRef<ApexCharts | null>(null)

  useEffect(() => {
    if (!pieRef.current) return
    pieChart.current?.destroy()

    const total = embaixadores.length + conselheiros.length
    const series = total === 0 ? [1] : [embaixadores.length, conselheiros.length]
    const labels = total === 0 ? ['Sem dados'] : ['Embaixadores', 'Conselheiros']

    pieChart.current = new ApexCharts(pieRef.current, {
      series,
      labels,
      chart: { type: 'pie', height: 320, background: 'transparent', animations: { enabled: true } },
      colors: total === 0 ? ['#ffffff20'] : ['#F6B500', '#3B82F6'],
      legend: { position: 'bottom', labels: { colors: '#ffffff99' }, fontSize: '13px' },
      dataLabels: {
        style: { fontSize: '13px', fontWeight: 'bold', colors: ['#000'] },
        dropShadow: { enabled: false },
      },
      tooltip: { theme: 'dark' },
      stroke: { width: 0 },
      plotOptions: { pie: { dataLabels: { offset: -5 } } },
    })
    pieChart.current.render()
    return () => { pieChart.current?.destroy() }
  }, [embaixadores.length, conselheiros.length])

  useEffect(() => {
    if (!lineRef.current) return
    lineChart.current?.destroy()

    const nomes = embaixadores.map(e => e.nome.split(' ')[0])
    const totais = embaixadores.map((_, i) => atividades.filter(a => a.embaixadorIndex === i).length)
    const feitas = embaixadores.map((_, i) => atividades.filter(a => a.embaixadorIndex === i && a.feito).length)

    lineChart.current = new ApexCharts(lineRef.current, {
      series: [
        { name: 'Total de Atividades', data: totais },
        { name: 'Atividades Feitas', data: feitas },
      ],
      chart: {
        type: 'line', height: 320, background: 'transparent',
        toolbar: { show: false },
        animations: { enabled: true },
      },
      colors: ['#F6B500', '#22C55E'],
      stroke: { curve: 'smooth', width: 3 },
      markers: { size: 5 },
      xaxis: {
        categories: nomes.length > 0 ? nomes : ['Sem dados'],
        labels: { style: { colors: '#ffffff60', fontSize: '12px' } },
        axisBorder: { color: '#ffffff15' },
        axisTicks: { color: '#ffffff15' },
      },
      yaxis: {
        labels: { style: { colors: '#ffffff60', fontSize: '12px' } },
        min: 0,
        forceNiceScale: true,
      },
      grid: { borderColor: '#ffffff10', strokeDashArray: 4 },
      legend: { labels: { colors: '#ffffff99' }, fontSize: '13px' },
      tooltip: { theme: 'dark' },
    })
    lineChart.current.render()
    return () => { lineChart.current?.destroy() }
  }, [embaixadores, atividades])

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F6B500] to-[#FFD700]">
          📈 Dashboard
        </h2>
        <p className="text-white/40 text-sm mt-1">Visão geral em tempo real</p>
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-[#F6B500]">{embaixadores.length}</p>
          <p className="text-white/50 text-xs mt-1 font-medium">Embaixadores</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-blue-400">{conselheiros.length}</p>
          <p className="text-white/50 text-xs mt-1 font-medium">Conselheiros</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-white">{atividades.length}</p>
          <p className="text-white/50 text-xs mt-1 font-medium">Total Atividades</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-green-400">{atividades.filter(a => a.feito).length}</p>
          <p className="text-white/50 text-xs mt-1 font-medium">Atividades Feitas</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pizza */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-bold mb-1">Membros por Categoria</h3>
          <p className="text-white/40 text-xs mb-4">Embaixadores vs Conselheiros</p>
          <div ref={pieRef} />
        </div>

        {/* Linha */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-bold mb-1">Atividades por Embaixador</h3>
          <p className="text-white/40 text-xs mb-4">Total cadastradas vs concluídas</p>
          <div ref={lineRef} />
        </div>
      </div>
    </div>
  )
}
