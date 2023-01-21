import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { login } from '../../../database/Api'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const Login = () => {
  const [user, setUser] = useState({ username: 'Jean', password: '123', email: 'Jean' })
  const navigate = useNavigate()
  const swal = withReactContent(Swal)
  const submit = () => {
    login(user)
      .then((data) => {
        localStorage.setItem('admin-token', JSON.stringify(data.token))
        console.log(localStorage.getItem('admin-token'))
        const swalData = {
          icon: 'success',
          title: 'Connexion réussie',
          timer: 1000,
          showConfirmButton: false,
        }
        swal.fire(swalData).then(() => {
          navigate('/dashboard')
        })
      })
      .catch((error) => {
        const swalData = {
          icon: 'error',
          title: 'Une erreur est survenue lors de la connexion',
          text: error.response.data.message,
        }
        swal.fire(swalData).then()
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-3">
                <CCardBody>
                  <CForm>
                    <h1>Connexion</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Nom d'utilisateur ou email"
                        autoComplete="username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value, email: e.target.value })
                        }
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={submit}>
                          Se connecter
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
