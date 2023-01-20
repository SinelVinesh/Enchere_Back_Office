import React from 'react'
import { getSettings } from '../../../../database/Api'
import List from '../../../../components/generic/List'
const SettingList = () => {
  const settings = getSettings()
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Nom',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Valeur',
      selector: (row) => row.value,
      sortable: true,
    },
  ]
  return (
    <List
      title={'Liste des paramètres'}
      columns={columns}
      selectable={false}
      data={settings}
      linkFunction={(row) => `/settings/${row.id}`}
    />
  )
}

export default SettingList
