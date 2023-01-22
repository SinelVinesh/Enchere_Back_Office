import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import axios from 'axios'

/* urls */
const host = 'http://localhost:8080'
// 'https://auctions-app.up.railway.app'
// auth
const loginUrl = `${host}/admin/login`
const logoutUrl = `${host}/admin/logout`
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
// statistics
const turnoverUrl = `${host}/statistics/turnover`
const auctionsStatsUrl = `${host}/statistics/auctions`

/* api calls */
// Generic
export const getCall = (url, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: `Bearer ${localStorage.getItem('admin-token')}` } }
  }
  return axios
    .get(url, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const postCall = (url, data, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: 'Bearer ' + localStorage.getItem('admin-token') } }
  }
  return axios
    .post(url, data, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

export const putCall = (url, data, auth = false) => {
  let config = {}
  if (auth) {
    config = { headers: { Authorization: 'Bearer ' + localStorage.getItem('admin-token') } }
  }
  return axios
    .put(url, data, config)
    .then((res) => (res.status === 200 ? res : Promise.reject(res)))
    .then((res) => res.data.data)
}

// Authentication
export const login = (user) => {
  return postCall(loginUrl, user)
}
export const logout = () => {
  return getCall(logoutUrl, true)
}

// Auctions
export function getAuctions() {
  return getCall(auctionsUrl, true)
}
export function getAuction(id) {
  return getCall(auctionUrl(id), true)
}
export function updateAuction(id, data) {
  return putCall(auctionUrl(id), data, true)
}

// Categories
export function getCategories() {
  return getCall(categoriesUrl)
}
export function getCategory(id) {
  return getCall(categoryUrl(id), true)
}

export function updateCategory(id, data) {
  return putCall(categoryUrl(id), data, true)
}

export function addCategory(category) {
  return postCall(categoriesUrl, category, true)
}

// Reloads
export function getReloads() {
  return getCall(reloadsUrl, true)
}
export function validateReloads(reload) {
  return postCall(reloadValidationUrl, reload, true)
}

// Settings
export function getSettings() {
  return getCall(settingsUrl, true)
}
export function getSetting(id) {
  return getCall(settingUrl(id), true)
}

export function updateSetting(id, data) {
  return putCall(settingUrl(id), data, true)
}

export function addSetting(category) {
  return postCall(settingsUrl, category, true)
}

export function getTurnoverStats() {
  return getCall(turnoverUrl, true)
}

export function getAuctionsStats() {
  return getCall(auctionsStatsUrl, true)
}
