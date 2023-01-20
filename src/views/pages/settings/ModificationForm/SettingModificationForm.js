import React from 'react'
import { useParams } from 'react-router-dom'
import { getSetting } from '../../../../database/Api'
import Form from '../../../../components/generic/Form'

const SettingModificationForm = () => {
  const { id } = useParams()
  const setting = getSetting(id)
  const properties = [
    {
      label: 'ID',
      name: 'id',
      type: 'disabled',
      selector: (setting) => setting.id,
    },
    {
      label: 'Désignation',
      name: 'name',
      type: 'text',
      selector: (setting) => setting.name,
      change: (e) => (setting.name = e.target.value),
    },
  ]
  const submit = () => {
    console.log(setting)
  }
  return <Form data={setting} properties={properties} submit={submit} />
}
export default SettingModificationForm
