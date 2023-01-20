import React from 'react'
import List from '../../generic/List'
import { getAuctions } from '../../../../database/Api'

const AuctionList = () => {
  const auctions = getAuctions()
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Utilisateur',
      selector: (row) => row.user.username,
      sortable: true,
    },
    {
      name: 'Titre',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Date de début',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Date de fin',
      selector: (row) => row.endDate,
      sortable: true,
    },
    {
      name: 'Mise de depart',
      selector: (row) => row.startPrice,
      sortable: true,
    },
    {
      name: 'Mise actuelle',
      selector: (row) => row.topBid,
      sortable: true,
    },
  ]

  return (
    <List
      title={'Liste des encheres'}
      columns={columns}
      selectable={false}
      data={auctions}
      linkBase={'auctions'}
      linkId={'id'}
    />
  )
}

export default AuctionList
