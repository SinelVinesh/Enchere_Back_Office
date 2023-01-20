import React, { useState } from 'react'
import Form from '../../../../components/generic/Form'
import { CButton } from '@coreui/react'
import { Delete } from '@mui/icons-material'

const SettingAddForm = () => {
  let [settings, setSettings] = useState([])
  let [fakeId, setFakeId] = useState(0)
  const [selectedRows, setSelectedRows] = useState([])
  const [setting, setSetting] = useState({ name: '', value: '' })
  const properties = [
    {
      label: 'Désignation',
      name: 'name',
      type: 'text',
      selector: (setting) => setting.name,
      change: (e) => setSetting({ ...setting, name: e.target.value }),
    },
    {
      label: 'Valeur initiale',
      name: 'initiale-value',
      type: 'text',
      selector: (setting) => setting.value,
      change: (e) => setSetting({ ...setting, value: e.target.value }),
    },
  ]
  const add = () => {
    setSettings([...settings, { id: fakeId, name: setting.name, value: setting.value }])
    setFakeId(fakeId + 1)
  }

  const addSelected = ({ selectedRows }) => {
    setSelectedRows(selectedRows)
  }
  const submit = () => {
    console.log(settings)
  }
  const deleteButton = React.useMemo(() => {
    const handleDelete = () => {
      setSettings(
        settings.filter((cat) => selectedRows.find((row) => row.id === cat.id) === undefined),
      )
    }
    return (
      <CButton key={'delete'} onClick={handleDelete} color={'danger'}>
        <Delete />
      </CButton>
    )
  }, [settings, selectedRows])
  return (
    <Form
      data={setting}
      properties={properties}
      submit={submit}
      multiple
      multipleData={settings}
      add={add}
      key={settings.length}
      multipleSelectionHandler={addSelected}
      contextActions={deleteButton}
    />
  )
}

export default SettingAddForm
