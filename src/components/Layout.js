import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';
import Vendors from './Vendors';
import UnderConstruction from './UnderConstruction';

const Layout = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Close mobile menu when item is clicked
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPageName = (itemId) => {
    const pageNames = {
      'vendors': 'Vendors Management',
      'customers': 'Customer Analytics',
      'deals': 'Deals Management',
      'coupons': 'Coupon System',
      'categories': 'Category Management',
      'notifications': 'Notification Center',
      'store-locations': 'Store Locations',
      'subscriptions': 'Subscription Management',
      'chat': 'Chat System',
      'app-config': 'App Configuration',
      'revenue': 'Revenue Analytics',
      'wallet': 'Wallet Management'
    };
    return pageNames[itemId] || 'Page';
  };

  const getEstimatedCompletion = (itemId) => {
    const estimates = {
      'vendors': 'Q2 2024',
      'customers': 'Q1 2024',
      'deals': 'Q2 2024',
      'coupons': 'Q1 2024',
      'categories': 'Q3 2024',
      'notifications': 'Q1 2024',
      'store-locations': 'Q2 2024',
      'subscriptions': 'Q3 2024',
      'chat': 'Q2 2024',
      'app-config': 'Q4 2024',
      'revenue': 'Q1 2024',
      'wallet': 'Q2 2024'
    };
    return estimates[itemId] || 'Coming Soon';
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'vendors':
        return <Vendors />;
      default:
        return (
          <UnderConstruction 
            pageName={getPageName(activeItem)}
            estimatedCompletion={getEstimatedCompletion(activeItem)}
          />
        );
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      {/* Mobile App Bar */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - 280px)` },
            ml: { md: '280px' },
            backgroundColor: '#2c2c2c',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: theme.zIndex.drawer + 1
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              Wah! Smart Deals
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <SideMenu 
        activeItem={activeItem} 
        onItemClick={handleItemClick}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        isMobile={isMobile}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          position: 'relative',
          width: '100%',
          pt: isMobile ? '64px' : 0, // Add top padding for mobile app bar
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Layout;
