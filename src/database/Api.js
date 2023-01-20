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

export function getAuctions() {
  const states = [
    { id: 0, name: 'En Cours' },
    { id: 1, name: 'Terminée' },
  ]
  const userIds = _.shuffle([...Array(30).keys()])
  return _.times(30, (index) => {
    return {
      id: index,
      user: {
        id: userIds[index],
        username: faker.internet.userName(faker.name.firstName(), faker.name.lastName()),
      },
      startDate: format(faker.date.past(), 'dd MMMM yyyy', { locale: fr }),
      endDate: format(faker.date.future(), 'dd MMMM yyyy', { locale: fr }),
      startPrice: faker.finance.amount(100000, null, 2),
      topBid: faker.finance.amount(100000, null, 2),
      state: states[_.random(0, 1)],
      title: faker.commerce.product(),
    }
  })
}

export function getAuction(id) {
  const states = [
    { id: 0, name: 'En Cours' },
    { id: 1, name: 'Terminée' },
  ]
  return {
    id: id,
    user: {
      id: _.random(0, 29),
      username: faker.internet.userName(faker.name.firstName(), faker.name.lastName()),
    },
    rawStartDate: faker.date.past(),
    startDate: format(faker.date.past(), 'dd MMMM yyyy', { locale: fr }),
    rawEndDate: faker.date.future(),
    endDate: format(faker.date.future(), 'dd MMMM yyyy', { locale: fr }),
    startPrice: faker.finance.amount(100000, null, 2),
    topBid: faker.finance.amount(100000, null, 2),
    state: states[_.random(0, 1)],
    title: faker.commerce.product(),
    description: faker.lorem.paragraphs(3),
    category: {
      id: _.random(0, 4),
      name: faker.commerce.department(),
    },
    pictures: _.times(_.random(3, 5), (index) => faker.image.food(null, null, true)),
    bids: _.times(10, (index) => {
      const rawDate = faker.date.past()
      return {
        id: index,
        user: {
          id: _.random(0, 29),
          username: faker.internet.userName(faker.name.firstName(), faker.name.lastName()),
        },
        amount: faker.finance.amount(100000, null, 2),
        rawDate: rawDate,
        date: format(rawDate, 'dd MMMM yyyy', { locale: fr }),
      }
    }),
  }
}

export function getCategories() {
  return _.times(5, (index) => {
    return {
      id: index,
      name: faker.commerce.department(),
    }
  })
}

export function getCategory(id) {
  return {
    id: _.random(0, 4),
    name: faker.commerce.department(),
  }
}

export function getSettings() {
  return _.times(5, (index) => {
    return {
      id: index,
      name: faker.name.jobTitle(),
      value: faker.random.alphaNumeric(_.random(10, 50)),
    }
  })
}

export function getSetting(id) {
  return {
    id: _.random(0, 4),
    name: faker.name.jobTitle(),
    value: faker.random.alphaNumeric(_.random(10, 50)),
    valueHistory: _.times(10, (index) => {
      return {
        id: index,
        value: faker.random.alphaNumeric(_.random(10, 50)),
        date: faker.date.past(),
        admin: {
          id: index,
          username: faker.internet.userName(),
        },
      }
    }),
  }
}
