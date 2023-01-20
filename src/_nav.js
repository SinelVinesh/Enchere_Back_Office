import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { Category, Dashboard, Gavel, Settings } from '@mui/icons-material'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Dashboard className={'nav-icon'} />,
  },
  {
    component: CNavItem,
    name: 'Enchères',
    to: '/auctions',
    icon: <Gavel className={'nav-icon'} />,
  },
  {
    component: CNavGroup,
    name: 'Catégories',
    icon: <Category className={'nav-icon'} />,
    items: [
      {
        component: CNavItem,
        name: 'Liste des catégories',
        to: '/categories',
      },
      {
        component: CNavItem,
        name: 'Ajouter une catégorie',
        to: '/categories/new',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Paramètres',
    to: '/settings',
    icon: <Settings className={'nav-icon'} />,
  },
]

export default _nav
