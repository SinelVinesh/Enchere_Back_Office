import React from 'react'
import Form from '../../../../components/generic/Form'
import { useParams } from 'react-router-dom'
import { getAuction, getCategories } from '../../../../database/Api'
import { format } from 'date-fns'
const AuctionModificationForm = () => {
  const { id } = useParams()
  const auction = getAuction(id)
  const categories = getCategories()
  const categoriesOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))
  const properties = [
    {
      label: 'Titre',
      name: 'title',
      type: 'text',
      selector: (auction) => auction.title,
      change: (e) => (auction.title = e.target.value),
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textArea',
      selector: (auction) => auction.description,
      change: (e) => (auction.description = e.target.value),
    },
    {
      label: 'Categorie',
      name: 'category',
      type: 'select',
      selector: (auction) => auction.category.id,
      options: categoriesOptions,
      change: (e) => {
        auction.category.id = e.target.value
        console.log(auction.category.id)
        auction.category.name = categories.find((category) => category.id === e.target.value).name
      },
    },
    {
      label: 'Etat',
      name: 'state',
      type: 'disabled',
      selector: (auction) => auction.state.name,
    },
    {
      label: 'Utilisateur',
      name: 'user',
      type: 'disabled',
      selector: (auction) => auction.user.username,
    },
    {
      label: 'Date de début',
      name: 'startDate',
      type: 'datetime-local',
      selector: (auction) => format(new Date(auction.rawStartDate), "yyyy-MM-dd'T'HH:mm"),
      change: (e) => (auction.startDate = new Date(e.target.value)),
    },
    {
      label: 'Date de fin',
      name: 'endDate',
      type: 'datetime-local',
      selector: (auction) => format(new Date(auction.rawEndDate), "yyyy-MM-dd'T'HH:mm"),
      change: (e) => (auction.endDate = new Date(e.target.value)),
    },
    {
      label: 'Mise de départ',
      name: 'startPrice',
      type: 'number',
      selector: (auction) => auction.startPrice,
      change: (e) => (auction.startPrice = e.target.value),
    },
    {
      label: 'Images',
      name: 'pictures',
      type: 'image-gallery',
      selector: (auction) => auction.pictures,
      change: (links) => {
        auction.pictures = links
      },
    },
  ]
  const submit = () => {
    console.log(auction)
  }
  return <Form data={auction} properties={properties} submit={submit} />
}

export default AuctionModificationForm
