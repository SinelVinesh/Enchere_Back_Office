import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCol, CFormInput, CRow } from '@coreui/react'
import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'

const List = ({ data, columns, title, selectable, linkFunction }) => {
  const [filteredData, setFiltered] = useState(data)
  const navigate = useNavigate()
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
  })
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <DataTable
              title={title}
              columns={columns}
              data={filteredData}
              selectableRows={selectable}
              pagination
              subHeader
              subHeaderComponent={filterBar}
              className={linkFunction ? 'clickable' : ''}
              onRowClicked={(row) => {
                if (linkFunction) navigate(linkFunction(row))
              }}
            />
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

List.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  selectable: PropTypes.bool,
  linkFunction: PropTypes.func,
}
export default List
