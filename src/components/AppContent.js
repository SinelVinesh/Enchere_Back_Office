import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import { isBefore } from 'date-fns'

const AppContent = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('admin-token') === null) {
      navigate('/login')
    }
    if (
      isBefore(
        new Date(JSON.parse(sessionStorage.getItem('admin-token'))?.expirationDate),
        new Date(),
      )
    ) {
      sessionStorage.removeItem('admin-token')
      navigate('/login')
    }
  }, [navigate])
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
