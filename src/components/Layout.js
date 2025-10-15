import React, { useState } from 'react';
import { Box } from '@mui/material';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';
import Vendors from './Vendors';
import UnderConstruction from './UnderConstruction';

const Layout = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
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
      <SideMenu activeItem={activeItem} onItemClick={handleItemClick} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          position: 'relative',
          width:"100%"
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Layout;
