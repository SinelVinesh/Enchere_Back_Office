import React from 'react'


// Pages
const Statistics = React.lazy(() => import('./views/pages/statistics/Statistics'))
const Reloads = React.lazy(() => import('./views/pages/reloads/Reloads'))
const AuctionList = React.lazy(() => import('./views/pages/auctions/List/AuctionList'))
const AuctionDetails = React.lazy(() => import('./views/pages/auctions/Details/AuctionDetails'))
const AuctionModificationForm = React.lazy(() =>
  import('./views/pages/auctions/ModificationForm/AuctionModificationForm'),
)
const CategoryList = React.lazy(() => import('./views/pages/category/List/CategoryList'))
const CategoryDetails = React.lazy(() => import('./views/pages/category/Details/CategoryDetails'))
const CategoryModificationForm = React.lazy(() =>
  import('./views/pages/category/ModificationForm/CategoryModificationForm'),
)
const CategoryAddForm = React.lazy(() => import('./views/pages/category/AddForm/CategoryAddForm'))
const SettingList = React.lazy(() => import('./views/pages/settings/List/SettingList'))
const SettingDetails = React.lazy(() => import('./views/pages/settings/Details/SettingDetails'))
const SettingModificationForm = React.lazy(() =>
  import('./views/pages/settings/ModificationForm/SettingModificationForm'),
)
const SettingAddForm = React.lazy(() => import('./views/pages/settings/AddForm/SettingAddForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Statistics', element: Statistics },
  { path: '/reloads', name: 'Reloads', element: Reloads },
  { path: '/auctions', name: 'Enchères', element: AuctionList },
  { path: '/auctions/:id', name: 'Enchères', element: AuctionDetails },
  { path: '/auctions/:id/modify', name: 'Modify Auction', element: AuctionModificationForm },
  { path: '/categories', name: 'Catégorie', element: CategoryList },
  { path: '/categories/:id', name: 'Catégorie', element: CategoryDetails },
  { path: '/categories/:id/modify', name: 'Catégorie', element: CategoryModificationForm },
  { path: '/categories/new', name: 'Ajout catégorie', element: CategoryAddForm },
  { path: '/settings', name: 'Paramètre', element: SettingList },
  { path: '/settings/:id', name: 'Paramètre', element: SettingDetails },
  { path: '/settings/:id/modify', name: 'Paramètre', element: SettingModificationForm },
  { path: '/settings/new', name: 'Ajout paramètre', element: SettingAddForm },
]

export default routes
