import React from 'react'
import { useParams } from 'react-router-dom'
import { getAuction } from '../../../../database/Api'
import Details from '../../../../components/generic/Details'
import { isBefore } from 'date-fns'

const AuctionDetails = () => {
  const { id } = useParams()
  const auction = getAuction(id)
  auction.bids = auction.bids.sort((a, b) => (isBefore(a.rawDate, b.rawDate) ? 1 : -1))
  const bidsColumns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: false,
    },
    {
      name: 'Utilisateur',
      selector: (row) => row.user.username,
      sortable: false,
    },
    {
      name: 'Montant',
      selector: (row) => row.amount,
      sortable: false,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: false,
    },
  ]
  const properties = [
    { selector: (auction) => auction.pictures, label: 'Photos', type: 'image' },
    { selector: (auction) => auction.id, label: 'ID', type: 'text' },
    { selector: (auction) => auction.description, label: 'Description', type: 'text' },
    { selector: (auction) => auction.category.name, label: 'Categorie', type: 'text' },
    { selector: (auction) => auction.user.username, label: 'Utilisateur', type: 'text' },
    { selector: (auction) => auction.state.name, label: 'Etat', type: 'text' },
    { selector: (auction) => auction.startDate, label: 'Date de début', type: 'text' },
    { selector: (auction) => auction.endDate, label: 'Date de fin', type: 'text' },
    { selector: (auction) => auction.startPrice, label: 'Mise de départ', type: 'text' },
    { selector: (auction) => auction.topBid, label: 'Mise actuelle', type: 'text' },
    {
      selector: (auction) => auction.bids,
      label: 'Historiques des offres',
      type: 'table',
      columns: bidsColumns,
    },
  ]
  return <Details title={auction.title} data={auction} properties={properties} />
}

export default AuctionDetails
