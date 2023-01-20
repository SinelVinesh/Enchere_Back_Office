import React from 'react'
import { getCategories } from '../../../../database/Api'
import List from '../../../../components/generic/List'
const CategoryList = () => {
  const categories = getCategories()
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
  ]
  return (
    <List
      title={'Liste des catégories'}
      columns={columns}
      selectable={false}
      data={categories}
      linkFunction={(row) => `/categories/${row.id}`}
    />
  )
}

export default CategoryList
