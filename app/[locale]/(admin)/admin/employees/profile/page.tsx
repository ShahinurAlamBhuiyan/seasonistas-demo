'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import DashboardHome from './dashboardHome'
import DashboardCompanyHome from './dashboardCompanyHome'

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState('Home')

  const renderContent = () => {
    switch (selectedView) {
      case 'Home':
        return <DashboardHome />
      case 'Company(D)':
        return <DashboardCompanyHome />
      case 'Community':
        return <Typography>✉️ Compose or view sent emails here</Typography>
      case 'Calendar':
        return <Typography>📝 Manage your drafts here</Typography>
      case 'Settings':
        return <Typography>⚙️ Settings coming soon</Typography>
      case 'Logout':
        return <Typography>🔒 Logging out...</Typography>
      default:
        return <Typography>Select a view</Typography>
    }
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {renderContent()}
    </Box>
  )
}
