import React, { useState } from 'react'
import { getReloads } from 'database/Api'
import DataTable from 'react-data-table-component'
import { CButton, CCard, CCardBody, CCol, CFormInput, CRow } from '@coreui/react'
const Reloads = () => {
  const data = getReloads()
  const [filteredData, setFiltered] = useState(data)
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
      name: 'Montant (Ar)',
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: 'Date du rechargement',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Etat',
      selector: (row) => row.state.name,
      sortable: true,
    },
  ]
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

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <DataTable
              title="Liste des demandes de recharge de compte"
              columns={columns}
              data={filteredData}
              selectableRows
              selectableRowDisabled={(row) => row.state.id !== 1}
              pagination
              subHeader
              subHeaderComponent={filterBar}
            />
          </CRow>
          <CRow className="align-items-end">
            <CCol className="align-items-end" sm={6}>
              <CButton color="success" size="sm">
                Valider
              </CButton>
              <CButton color="danger" size="sm">
                Refuser
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Reloads
