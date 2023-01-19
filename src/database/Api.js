import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
export function getSalesStats() {
  return {
    dailySales: [
      { date: '2022-01-10', amount: 350000 },
      { date: '2022-01-11', amount: 275000 },
      { date: '2022-01-12', amount: 150000 },
      { date: '2022-01-13', amount: 125000 },
      { date: '2022-01-14', amount: 150000 },
    ],
    totalSales: 1050000,
    commissionAverage: 250500,
  }
}

export function getAuctionsStats() {
  return {
    dailyAuctionsFinished: [
      { date: '2022-01-10', amount: 23 },
      { date: '2022-01-11', amount: 0 },
      { date: '2022-01-12', amount: 5 },
      { date: '2022-01-13', amount: 12 },
      { date: '2022-01-14', amount: 7 },
    ],
    dailyAuctionCreated: [
      { date: '2022-01-10', amount: 10 },
      { date: '2022-01-11', amount: 14 },
      { date: '2022-01-12', amount: 7 },
      { date: '2022-01-13', amount: 5 },
      { date: '2022-01-14', amount: 10 },
    ],
    totalAuctions: 3206,
    leastValuable: 45000,
    mostValuable: 2750000,
  }
}

export function getReloads() {
  const states = [
    { id: 1, name: 'En attente de validation' },
    { id: 2, name: 'Validée' },
    { id: 3, name: 'Refusée' },
  ]
  const userIds = _.shuffle([...Array(30).keys()])
  return _.times(30, (index) => {
    return {
      id: index,
      user: {
        id: userIds[index],
        username: faker.internet.userName(faker.name.firstName(), faker.name.lastName()),
      },
      amount: faker.finance.amount(100000, null, 2),
      date: format(faker.date.past(), 'dd MMMM yyyy', { locale: fr }),
      state: states[_.random(0, 2)],
    }
  })
}
