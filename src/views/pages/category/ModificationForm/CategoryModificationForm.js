import React from 'react'
import { useParams } from 'react-router-dom'
import { getCategory } from '../../../../database/Api'
import Form from '../../../../components/generic/Form'

const CategoryModificationForm = () => {
  const { id } = useParams()
  const category = getCategory(id)
  const properties = [
    {
      label: 'ID',
      name: 'id',
      type: 'disabled',
      selector: (category) => category.id,
    },
    {
      label: 'Désignation',
      name: 'name',
      type: 'text',
      selector: (category) => category.name,
      change: (e) => (category.name = e.target.value),
    },
  ]
  const submit = () => {
    console.log(category)
  }
  return <Form data={category} properties={properties} submit={submit} />
}
export default CategoryModificationForm
