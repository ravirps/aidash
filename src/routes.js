import React from 'react'

const Charts = React.lazy(() => import('./views/components/charts/Charts'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
]

export default routes
