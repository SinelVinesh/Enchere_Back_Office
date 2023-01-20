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
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
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
    component: CNavItem,
    name: 'Catégories',
    to: '/categories',
    icon: <Category className={'nav-icon'} />,
  },
  {
    component: CNavItem,
    name: 'Paramètres',
    to: '/settings',
    icon: <Settings className={'nav-icon'} />,
  },
]

export default _nav
