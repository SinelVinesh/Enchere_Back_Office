import React from 'react'
import { getAuctionsStats, getSalesStats } from 'database/Api'
import { CCard, CCardBody, CCol, CRow, CWidgetStatsA } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const Statistics = () => {
  const salesStats = getSalesStats()
  const auctionsStats = getAuctionsStats()
  const widgets = [
    {
      title: "Chiffre d'affaire total",
      value: salesStats.totalSales,
      color: 'success',
    },
    {
      title: 'Commission moyenne par enchère',
      value: salesStats.commissionAverage,
      color: 'info',
    },
    {
      title: "Nombre total d'enchère concluses",
      value: auctionsStats.totalAuctions,
      color: 'info',
    },
    {
      title: 'Enchère la plus basse',
      value: auctionsStats.leastValuable,
      color: 'warning',
    },
    {
      title: 'Echère la plus haute',
      value: auctionsStats.mostValuable,
      color: 'success',
    },
  ]
  const salesLineChartData = {
    labels: salesStats.dailySales.map((data) => data.date),
    data: salesStats.dailySales.map((data) => data.amount),
  }
  const auctionsChartData = {
    labels: auctionsStats.dailyAuctionCreated.map((data) => data.date),
    data: [
      auctionsStats.dailyAuctionCreated.map((data) => data.amount),
      auctionsStats.dailyAuctionsFinished.map((data) => data.amount),
    ],
  }
  const lineChartBaseOption = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
  }

  return (
    <>
      <CRow>
        {widgets.map((widget) => {
          return (
            <>
              <CCol sm={6} lg={3}>
                <CWidgetStatsA
                  className="mb-4"
                  color={widget.color}
                  value={widget.value}
                  title={widget.title}
                />
              </CCol>
            </>
          )
        })}
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 className="card-title mb-0">Chiffre d&apos;affaire journalier</h4>
              <div className="small test-medium-emphasis">Janvier - Février 2022</div>
            </CCol>
          </CRow>
          <CRow>
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: salesLineChartData.labels,
                datasets: [
                  {
                    label: 'Ventes journalieres',
                    backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                    borderColor: getStyle('--cui-info'),
                    pointHoverBackgroundColor: getStyle('--cui-info'),
                    borderWidth: 2,
                    data: salesLineChartData.data,
                  },
                ],
              }}
              options={lineChartBaseOption}
            />
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 className="card-title mb-0">Enchères d&apos;affaire journalier</h4>
              <div className="small test-medium-emphasis">Janvier - Février 2022</div>
            </CCol>
          </CRow>
          <CRow>
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: auctionsChartData.labels,
                datasets: [
                  {
                    label: 'Créée',
                    backgroundColor: hexToRgba(getStyle('--cui-purple'), 10),
                    borderColor: getStyle('--cui-purple'),
                    pointHoverBackgroundColor: getStyle('--cui-purple'),
                    borderWidth: 2,
                    data: auctionsChartData.data[0],
                  },
                  {
                    label: 'Terminé',
                    backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                    borderColor: getStyle('--cui-info'),
                    pointHoverBackgroundColor: getStyle('--cui-info'),
                    borderWidth: 2,
                    data: auctionsChartData.data[1],
                  },
                ],
              }}
              options={lineChartBaseOption}
            />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Statistics
