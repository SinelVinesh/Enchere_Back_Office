import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CCol, CFormInput, CRow } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'
const SearchableDatatable = ({
  data,
  columns,
  title,
  selectable,
  linkBase,
  linkId,
  handleRowSelection,
  contextActions,
}) => {
  const [filteredData, setFiltered] = useState(data)
  const filterBar = React.useMemo(() => {
    const filterData = (text) => {
      const filtered = data.filter((entry) => {
        if (text === '') return true
        for (const column of columns) {
          const target = column.selector(entry).toString()
          if (target.match(new RegExp(text, 'i')) !== null) {
            return true
          }
        }
        return false
      })
      setFiltered(filtered)
    }

    return (
      <CCol sm={3} lg={2}>
        <CFormInput
          size="sm"
          type="text"
          placeholder="Rechercher..."
          onChange={(e) => filterData(e.target.value)}
        />
      </CCol>
    )
  }, [])
  const navigate = useNavigate()
  return (
    <CRow>
      <DataTable
        title={title}
        columns={columns}
        data={filteredData}
        selectableRows={selectable}
        onSelectedRowsChange={handleRowSelection}
        pagination
        subHeader
        contextActions={contextActions}
        subHeaderComponent={filterBar}
        className={linkBase ? 'clickable' : ''}
        onRowClicked={(row) => {
          if (linkBase) navigate(`/${linkBase}/${row[linkId]}`)
        }}
      />
    </CRow>
  )
}

SearchableDatatable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string,
  selectable: PropTypes.bool,
  linkBase: PropTypes.string,
  linkId: PropTypes.string,
  handleRowSelection: PropTypes.func,
  contextActions: PropTypes.object,
}

export default SearchableDatatable
