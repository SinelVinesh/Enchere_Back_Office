import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CCard, CCardBody, CCol, CFormInput, CRow } from '@coreui/react'
import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'

const List = (props) => {
  const [filteredData, setFiltered] = useState(props.data)
  const navigate = useNavigate()
  const filterBar = React.useMemo(() => {
    const filterData = (text) => {
      const filtered = props.data.filter((entry) => {
        if (text === '') return true
        for (const column of props.columns) {
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
              title={props.title}
              columns={props.columns}
              data={filteredData}
              selectableRows={props.selectable}
              pagination
              subHeader
              subHeaderComponent={filterBar}
              className={props.linkBase ? 'clickable' : ''}
              onRowClicked={(row) => {
                if (props.linkBase) navigate(`/${props.linkBase}/${row[props.linkId]}`)
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
  linkBase: PropTypes.string,
  linkId: PropTypes.string,
}
export default List
