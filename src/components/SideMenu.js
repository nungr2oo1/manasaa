import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Collapse,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as VendorsIcon,
  Person as CustomersIcon,
  LocalOffer as DealsIcon,
  ConfirmationNumber as CouponsIcon,
  Category as CategoriesIcon,
  Notifications as NotificationsIcon,
  LocationOn as StoreLocationsIcon,
  CreditCard as SubscriptionsIcon,
  Chat as ChatIcon,
  Settings as AppConfigIcon,
  TrendingUp as RevenueIcon,
  AccountBalanceWallet as WalletIcon,
  Logout as LogoutIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import logoImage from '../asserts/Logo.png';

const drawerWidth = 280;

const SideMenu = ({ activeItem, onItemClick, mobileOpen, onMobileClose, isMobile }) => {
  const [revenueOpen, setRevenueOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'vendors', label: 'Vendors', icon: <VendorsIcon /> },
    { id: 'customers', label: 'Customers', icon: <CustomersIcon /> },
    { id: 'deals', label: 'Deals', icon: <DealsIcon /> },
    { id: 'coupons', label: 'Coupons', icon: <CouponsIcon /> },
    { id: 'categories', label: 'Categories', icon: <CategoriesIcon /> },
    { id: 'notifications', label: 'Notifications', icon: <NotificationsIcon /> },
    { id: 'store-locations', label: 'Store Locations', icon: <StoreLocationsIcon /> },
    { id: 'subscriptions', label: 'Subscriptions', icon: <SubscriptionsIcon /> },
    { id: 'chat', label: 'Chat', icon: <ChatIcon /> },
    { id: 'app-config', label: 'App Config', icon: <AppConfigIcon /> },
  ];

  const collapsibleItems = [
    {
      id: 'revenue',
      label: 'Revenue',
      icon: <RevenueIcon />,
      open: revenueOpen,
      onToggle: () => setRevenueOpen(!revenueOpen)
    },
    {
      id: 'wallet',
      label: 'Wallet',
      icon: <WalletIcon />,
      open: walletOpen,
      onToggle: () => setWalletOpen(!walletOpen)
    }
  ];

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout clicked');
  };

  const drawerContent = (
    <>
      {/* Logo Section */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <img 
          src={logoImage} 
          alt="Wah! Smart Deals Logo" 
          style={{ 
            height: '70px', 
            width: 'auto',
            objectFit: 'contain'
          }} 
        />
        {/* <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          Wah! Smart Deals
        </Typography> */}
      </Box>

      <Divider sx={{ backgroundColor: '#404040' }} />

      {/* Navigation Items */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => onItemClick(item.id)}
              sx={{
                mx: 1,
                borderRadius: 1,
                backgroundColor: activeItem === item.id ? '#ff6b35' : 'transparent',
                '&:hover': {
                  backgroundColor: activeItem === item.id ? '#ff6b35' : '#404040',
                },
                mb: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: activeItem === item.id ? 'white' : '#b0b0b0', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                sx={{ 
                  '& .MuiListItemText-primary': {
                    color: activeItem === item.id ? 'white' : '#b0b0b0',
                    fontWeight: activeItem === item.id ? 600 : 400,
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Collapsible Items */}
        {collapsibleItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={item.onToggle}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: '#404040',
                  },
                  mb: 0.5,
                }}
              >
                <ListItemIcon sx={{ color: '#b0b0b0', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      color: '#b0b0b0',
                    }
                  }}
                />
                {item.open ? <ExpandLess sx={{ color: '#b0b0b0' }} /> : <ExpandMore sx={{ color: '#b0b0b0' }} />}
              </ListItemButton>
            </ListItem>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, mx: 1, borderRadius: 1, mb: 0.5 }}>
                  <ListItemText 
                    primary="Sub-item 1"
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        color: '#b0b0b0',
                        fontSize: '0.9rem',
                      }
                    }}
                  />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, mx: 1, borderRadius: 1, mb: 0.5 }}>
                  <ListItemText 
                    primary="Sub-item 2"
                    sx={{ 
                      '& .MuiListItemText-primary': {
                        color: '#b0b0b0',
                        fontSize: '0.9rem',
                      }
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      <Divider sx={{ backgroundColor: '#404040' }} />

      {/* Logout Section */}
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              mx: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#404040',
              },
              mb: 2,
              mt: 1,
            }}
          >
            <ListItemIcon sx={{ color: '#b0b0b0', minWidth: 40 }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Log out"
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: '#b0b0b0',
                }
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#2c2c2c',
            color: 'white',
            border: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2c2c2c',
            color: 'white',
            border: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideMenu;
