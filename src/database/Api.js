import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import axios from 'axios'

/* urls */
const host = 'http://localhost:8080'
// auth
const loginUrl = `${host}/admin/login`
// auctions
const auctionsUrl = `${host}/auctions`
const auctionUrl = (id) => `${auctionsUrl}/${id}`
// categories
const categoriesUrl = `${host}/categories`
const categoryUrl = (id) => `${categoriesUrl}/${id}`
// reloads
const reloadsUrl = `${host}/reloads`
const reloadValidationUrl = `${reloadsUrl}/validations`
// settings
const settingsUrl = `${host}/settings`
const settingUrl = (id) => `${settingsUrl}/${id}`

/* api calls */
// Generic
export const getCall = (url) => {
  return axios
    .get(url)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const postCall = (url, data) => {
  return axios
    .post(url, data)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const putCall = (url, data) => {
  return axios
    .put(url, data)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

// Authentication
export const login = (user) => {
  return postCall(loginUrl, user)
}

// Auctions
export function getAuctions() {
  return getCall(auctionsUrl)
}
export function getAuction(id) {
  return getCall(auctionUrl(id))
}
export function updateAuction(id, data) {
  return putCall(auctionUrl(id), data)
}

// Categories
export function getCategories() {
  return getCall(categoriesUrl)
}
export function getCategory(id) {
  return getCall(categoryUrl(id))
}

export function updateCategory(id, data) {
  return putCall(categoryUrl(id), data)
}

export function addCategory(category) {
  return postCall(categoriesUrl, category)
}

// Reloads
export function getReloads() {
  return getCall(reloadsUrl)
}
export function validateReloads(reload) {
  return postCall(reloadValidationUrl, reload)
}

// Settings
export function getSettings() {
  return getCall(settingsUrl)
}
export function getSetting(id) {
  return getCall(settingUrl(id))
}

export function updateSetting(id, data) {
  return putCall(settingUrl(id), data)
}

export function addSetting(category) {
  return postCall(settingsUrl, category)
}

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
