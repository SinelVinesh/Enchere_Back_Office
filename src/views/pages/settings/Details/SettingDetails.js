import React from 'react'
import { useParams } from 'react-router-dom'
import { getSetting } from '../../../../database/Api'
import Details from '../../../../components/generic/Details'
import { format, isBefore } from 'date-fns'
import { fr } from 'date-fns/locale'

const SettingDetails = () => {
  const { id } = useParams()
  const setting = getSetting(id)
  setting.valueHistory = setting.valueHistory.sort((a, b) => (isBefore(a.date, b.date) ? 1 : -1))

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
    },
    {
      name: 'Valeur',
      selector: (row) => row.value,
    },
    {
      name: 'Administrateur',
      selector: (row) => row.admin.username,
    },
    {
      name: 'Date de modification',
      selector: (row) => format(row.date, 'dd MMMM yyyy', { locale: fr }),
    },
  ]
  const properties = [
    { selector: (setting) => setting.id, label: 'ID', type: 'text' },
    { selector: (setting) => setting.name, label: 'Désignation', type: 'text' },
    { selector: (setting) => setting.value, label: 'Valeur actuelle', type: 'text' },
    {
      selector: (setting) => setting.valueHistory,
      label: 'Historiques des valeurs',
      type: 'table',
      columns: columns,
    },
  ]
  return <Details title={`Détail de ${setting.name}`} data={setting} properties={properties} />
}

export default SettingDetails
