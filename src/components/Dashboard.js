import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Group as GroupIcon,
  LocalOffer as LocalOfferIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  Category as CategoryIcon,
  Notifications as NotificationsIcon,
  LocationOn as LocationOnIcon,
  CreditCard as CreditCardIcon,
  Chat as ChatIcon,
  Settings as SettingsIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  Logout as LogoutIcon,
  ShoppingBag as ShoppingBagIcon,
  TrendingDown as TrendingDownIcon
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

// Sample data for charts
const customerTrendData = [
  { year: '2000', customers: 20 },
  { year: '2005', customers: 35 },
  { year: '2010', customers: 50 },
  { year: '2015', customers: 70 },
  { year: '2020', customers: 10 },
  { year: '2025', customers: 80 }
];

const vendorData = [
  { name: 'Active', value: 8, color: '#ff6b35' },
  { name: 'Pending Approval', value: 2, color: '#9c27b0' }
];

const dealsData = [
  { status: 'Active', count: 8, color: '#ff6b35' },
  { status: 'Deactive', count: 3, color: '#9c27b0' },
  { status: 'Paused', count: 1, color: '#2196f3' },
  { status: 'Under Review', count: 0, color: '#ffeb3b' },
  { status: 'Pending Payment', count: 0, color: '#4caf50' },
  { status: 'Expired', count: 2, color: '#f44336' }
];

const couponData = [
  { name: 'Active', value: 30, color: '#ff6b35' },
  { name: 'Redeemed', value: 10, color: '#9c27b0' },
  { name: 'Cancelled', value: 10, color: '#f44336' }
];

const communityData = [
  { name: 'Members', value: 30, color: '#ff6b35' },
  { name: 'Vendors', value: 20, color: '#9c27b0' }
];

const revenueData = [
  { category: 'Vendor Coupon Sales', amount: 200, color: '#ff6b35' },
  { category: 'Customer Coupon Sales', amount: 250, color: '#ff6b35' },
  { category: 'Vendor Upsell', amount: 150, color: '#ff6b35' },
  { category: 'Subscription', amount: 0, color: '#9c27b0' }
];

const communicationData = [
  { name: 'Vendor Chats', value: 8, color: '#ff6b35' },
  { name: 'Customer Chats', value: 0, color: '#9c27b0' }
];

const walletData = [
  { name: 'Customer Wallet', value: 8, color: '#ff6b35' },
  { name: 'Vendor Wallet', value: 2, color: '#9c27b0' }
];

const notificationData = [
  { name: 'Opened', value: 8, color: '#ff6b35' },
  { name: 'Read', value: 0, color: '#9c27b0' }
];

const Sidebar = () => {
  const menuItems = [
    { icon: DashboardIcon, label: 'Dashboard', active: true },
    { icon: PeopleIcon, label: 'Vendors' },
    { icon: GroupIcon, label: 'Customers' },
    { icon: LocalOfferIcon, label: 'Deals' },
    { icon: ConfirmationNumberIcon, label: 'Coupons' },
    { icon: CategoryIcon, label: 'Categories' },
    { icon: NotificationsIcon, label: 'Notifications' },
    { icon: LocationOnIcon, label: 'Store Locations' },
    { icon: CreditCardIcon, label: 'Subscriptions' },
    { icon: ChatIcon, label: 'Chat' },
    { icon: SettingsIcon, label: 'App Config' },
    { icon: TrendingUpIcon, label: 'Revenue' },
    { icon: AccountBalanceWalletIcon, label: 'Wallet' }
  ];

  return (
    <Box sx={{
      width: 280,
      height: '100vh',
      backgroundColor: '#2c3e50',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <Box sx={{ p: 3, borderBottom: '1px solid #34495e' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ShoppingBagIcon sx={{ fontSize: 32, color: '#ff6b35' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
            Wah! Smart Deals
          </Typography>
        </Box>
      </Box>

      {/* User Profile */}
      <Box sx={{ p: 2, borderBottom: '1px solid #34495e' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: '#ff6b35' }}>
            <PeopleIcon />
          </Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>Admin User</Typography>
            <Typography variant="caption" sx={{ color: '#bdc3c7' }}>admin@wahdeals.com</Typography>
          </Box>
        </Box>
      </Box>

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, px: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              backgroundColor: item.active ? '#ff6b35' : 'transparent',
              '&:hover': {
                backgroundColor: item.active ? '#ff6b35' : '#34495e'
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
              <item.icon />
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '0.9rem',
                fontWeight: item.active ? 600 : 400
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Logout */}
      <Box sx={{ p: 2, borderTop: '1px solid #34495e' }}>
        <ListItem sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#34495e' } }}>
          <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText 
            primary="Log out"
            primaryTypographyProps={{ fontSize: '0.9rem' }}
          />
        </ListItem>
      </Box>
    </Box>
  );
};

const MetricCard = ({ title, value, trend, trendValue, trendColor }) => (
  <Card sx={{ 
    height: '100%', 
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  }}>
    <CardContent sx={{ p: 2 }}>
      <Typography variant="h6" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1a1a1a' }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {trend === 'up' ? (
          <TrendingUpIcon sx={{ color: trendColor, fontSize: 20 }} />
        ) : (
          <TrendingDownIcon sx={{ color: trendColor, fontSize: 20 }} />
        )}
        <Typography variant="body2" sx={{ color: trendColor, fontWeight: 600 }}>
          {trendValue}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const WidgetCard = ({ title, children }) => (
  <Card sx={{ 
    height: '100%', 
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: '1px solid #e0e0e0'
  }}>
    <CardContent sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
          {title}
        </Typography>
        <Chip 
          label="Live" 
          size="small" 
          sx={{ 
            backgroundColor: '#4caf50',
            color: 'white',
            fontSize: '0.7rem'
          }} 
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      {/* Sidebar */}
      {/* <Sidebar /> */}
      
      {/* Main Content */}
      <Box sx={{ 
        flexGrow: 1, 
        // marginLeft: '280px',
        backgroundColor: '#f5f5f5',
        padding: 3
      }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: '#ff6b35' }}>
              <PeopleIcon />
            </Avatar>
          </Box>
        </Box>

        {/* Summary Cards */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 3, md: 4 }, 
          mb: { xs: 4, md: 5 }, 
          position: 'relative', 
          zIndex: 1,
          width: '100%'
        }}>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
            <MetricCard
              title="Total Earnings"
              value="$7,825"
              trend="up"
              trendValue="+22%"
              trendColor="#ff6b35"
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
            <MetricCard
              title="Total Deals"
              value="15.5K"
              trend="up"
              trendValue="+49%"
              trendColor="#4caf50"
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
            <MetricCard
              title="Today Earnings"
              value="920"
              trend="down"
              trendValue="-25%"
              trendColor="#f44336"
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
            <MetricCard
              title="Today Converted Deals"
              value="28%"
              trend="up"
              trendValue="+1.9%"
              trendColor="#ff6b35"
            />
          </Box>
        </Box>

        {/* Dashboard Widgets */}
        <Grid container spacing={3}>
          {/* Customers Widget */}
          {/* <Grid item xs={12} lg={4}>
            <WidgetCard title="Customers">
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Total Customer</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>80</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>PPU</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>70</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Subscriber</Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>10</Typography>
              </Box>
              <Box sx={{ height: 200 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={customerTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="customers" stroke="#ff6b35" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </WidgetCard>
          </Grid> */}

          {/* Vendors Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Vendors">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>10</Typography>
                <Typography variant="body2" color="text.secondary">Total Vendors</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={vendorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {vendorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>8</Typography>
                  <Typography variant="body2" color="text.secondary">Active / Generated</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#9c27b0' }}>2</Typography>
                  <Typography variant="body2" color="text.secondary">Pending Approval</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>

          {/* Deals Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Deals">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>20</Typography>
                <Typography variant="body2" color="text.secondary">Total Deals</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dealsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <RechartsTooltip />
                    <Bar dataKey="count" fill="#ff6b35" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {dealsData.map((deal, index) => (
                  <Chip
                    key={index}
                    label={`${deal.status}: ${deal.count}`}
                    size="small"
                    sx={{ 
                      backgroundColor: deal.color,
                      color: 'white',
                      fontSize: '0.7rem'
                    }}
                  />
                ))}
              </Box>
            </WidgetCard>
          </Grid>

          {/* Wah! Revenue Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Wah! Revenue">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>$600</Typography>
                <Typography variant="body2" color="text.secondary">Total Revenue</Typography>
              </Box>
              {revenueData.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">{item.category}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>${item.amount}</Typography>
                  </Box>
                  <Box sx={{ 
                    height: 8, 
                    backgroundColor: '#e0e0e0', 
                    borderRadius: 4,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{ 
                      height: '100%', 
                      width: `${(item.amount / 250) * 100}%`, 
                      backgroundColor: item.color,
                      borderRadius: 4
                    }} />
                  </Box>
                </Box>
              ))}
            </WidgetCard>
          </Grid>

          {/* Coupons Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Coupons">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>50</Typography>
                <Typography variant="body2" color="text.secondary">Total Coupons</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={couponData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {couponData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>30</Typography>
                  <Typography variant="body2" color="text.secondary">Active/Generated</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#f44336' }}>10</Typography>
                  <Typography variant="body2" color="text.secondary">Cancelled</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>

          {/* Communities Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Communities">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>50</Typography>
                <Typography variant="body2" color="text.secondary">Total Communities</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={communityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {communityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>30</Typography>
                  <Typography variant="body2" color="text.secondary">Total Members</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#9c27b0' }}>20</Typography>
                  <Typography variant="body2" color="text.secondary">Total Vendors</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>

          {/* Communication Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Communication">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>8</Typography>
                <Typography variant="body2" color="text.secondary">Total Chats</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={communicationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {communicationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>8</Typography>
                  <Typography variant="body2" color="text.secondary">Vendor Chats</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#9c27b0' }}>0</Typography>
                  <Typography variant="body2" color="text.secondary">Customer Chats</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>

          {/* Wallet Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Wallet">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>10</Typography>
                <Typography variant="body2" color="text.secondary">Wallet</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={walletData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {walletData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>8</Typography>
                  <Typography variant="body2" color="text.secondary">Customer Wallet</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#9c27b0' }}>2</Typography>
                  <Typography variant="body2" color="text.secondary">Vendor Wallet</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>

          {/* Notifications Widget */}
          <Grid item xs={12} lg={4}>
            <WidgetCard title="Notifications">
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>8</Typography>
                <Typography variant="body2" color="text.secondary">Notifications</Typography>
              </Box>
              <Box sx={{ height: 200, mb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={notificationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      dataKey="value"
                      stroke="#fff"
                      strokeWidth={2}
                    >
                      {notificationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ff6b35' }}>8</Typography>
                  <Typography variant="body2" color="text.secondary">Opened</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#9c27b0' }}>0</Typography>
                  <Typography variant="body2" color="text.secondary">Read</Typography>
                </Box>
              </Box>
            </WidgetCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
