import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Avatar,
  Chip,
  LinearProgress,
  Fade,
  Skeleton,
  Tooltip,
  Badge,
  Fab,
  Zoom,
  Grow,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  TrendingUp,
  TrendingDown,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Analytics as AnalyticsIcon,
  Speed as SpeedIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  MarkEmailRead as MarkEmailReadIcon,
  Payment as PaymentIcon,
  PersonAdd as PersonAddIcon,
  Store as StoreIcon
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
  { year: '2000', customers: 1000 },
  { year: '2005', customers: 1500 },
  { year: '2010', customers: 2000 },
  { year: '2015', customers: 2500 },
  { year: '2020', customers: 3000 },
  { year: '2025', customers: 3500 }
];

const vendorData = [
  { name: 'Active', value: 7, color: '#4caf50' },
  { name: 'Pending', value: 3, color: '#ff9800' }
];

const dealsData = [
  { status: 'Active', count: 8 },
  { status: 'Under Review', count: 4 },
  { status: 'Deactive', count: 3 },
  { status: 'Paused', count: 2 },
  { status: 'Pending Payment', count: 2 },
  { status: 'Expired', count: 1 }
];

const couponData = [
  { name: 'Active/Generated', value: 35, color: '#4caf50' },
  { name: 'Cancelled', value: 15, color: '#f44336' }
];

const communityData = [
  { name: 'Members', value: 30, color: '#2196f3' },
  { name: 'Vendors', value: 20, color: '#ff9800' }
];

const revenueData = [
  { category: 'Total Revenue', amount: 7825, percentage: 100 },
  { category: 'Vendor Coupon Sales', amount: 3500, percentage: 45 },
  { category: 'Customer Coupon Sales', amount: 2500, percentage: 32 },
  { category: 'Vendor Upsell', amount: 1200, percentage: 15 },
  { category: 'Subscription', amount: 625, percentage: 8 }
];

const communicationData = [
  { name: 'Vendor Chats', value: 5, color: '#4caf50' },
  { name: 'Customer Chats', value: 3, color: '#2196f3' }
];

const walletData = [
  { name: 'Customer Wallet', value: 6, color: '#4caf50' },
  { name: 'Vendor Wallet', value: 4, color: '#ff9800' }
];

const notificationData = [
  { name: 'Opened', value: 5, color: '#4caf50' },
  { name: 'Read', value: 3, color: '#2196f3' }
];

const MetricCard = ({ title, value, trend, trendValue, trendColor, icon, loading = false }) => (
  <Fade in timeout={600}>
    <Card sx={{ 
      height: '100%', 
      borderRadius: 4, 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 12px 50px rgba(0,0,0,0.15)',
        transform: 'translateY(-6px) scale(1.02)',
        '&::before': {
          opacity: 1,
          height: '4px'
        },
        '& .metric-value': {
          transform: 'scale(1.05)',
          color: trendColor
        },
        '& .metric-icon': {
          transform: 'rotate(5deg) scale(1.1)'
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${trendColor}20, ${trendColor})`,
        opacity: 0.7,
        transition: 'all 0.3s ease'
      }
    }}>
      <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, position: 'relative' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          mb: 3 
        }}>
          <Typography variant="h6" color="text.secondary" sx={{ 
            fontSize: { xs: '0.9rem', sm: '1rem' },
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '0.02em'
          }}>
            {title}
          </Typography>
          <Tooltip title="More options">
            <IconButton size="small" sx={{ 
              p: 0.8,
              backgroundColor: 'rgba(0,0,0,0.04)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.08)'
              }
            }}>
              <MoreVertIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>
        </Box>
        
        {loading ? (
          <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />
        ) : (
          <Typography 
            className="metric-value"
            variant="h4" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            {value}
          </Typography>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {loading ? (
            <Skeleton variant="circular" width={20} height={20} />
          ) : (
            <>
              {trend === 'up' ? (
                <TrendingUp 
                  className="metric-icon"
                  sx={{ 
                    color: trendColor, 
                    fontSize: { xs: 20, sm: 22 },
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    transition: 'all 0.3s ease'
                  }} 
                />
              ) : (
                <TrendingDown 
                  className="metric-icon"
                  sx={{ 
                    color: trendColor, 
                    fontSize: { xs: 20, sm: 22 },
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    transition: 'all 0.3s ease'
                  }} 
                />
              )}
              <Typography variant="body2" sx={{ 
                color: trendColor, 
                fontWeight: 700,
                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                backgroundColor: `${trendColor}15`,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                border: `1px solid ${trendColor}30`
              }}>
                {trendValue}
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  </Fade>
);

const WidgetCard = ({ title, children, live = true, loading = false }) => (
  <Fade in timeout={800}>
    <Card sx={{ 
      height: '100%', 
      borderRadius: 4, 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
        transform: 'translateY(-4px)',
        '&::before': {
          opacity: 1
        }
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #4caf50, #2196f3)',
        opacity: 0.7,
        transition: 'opacity 0.3s ease'
      }
    }}>
      <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3,
          flexShrink: 0
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            color: '#1a1a1a',
            letterSpacing: '0.02em'
          }}>
            {title}
          </Typography>
          {live && (
            <Chip 
              label="Live" 
              size="small" 
              sx={{ 
                background: 'linear-gradient(135deg, #4caf50, #45a049)',
                color: 'white',
                height: 28,
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
                '& .MuiChip-label': { 
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  px: 1.5
                }
              }} 
            />
          )}
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {loading ? (
            <Box>
              <Skeleton variant="text" width="80%" height={30} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
              <Skeleton variant="text" width="60%" height={20} />
            </Box>
          ) : (
            children
          )}
        </Box>
      </CardContent>
    </Card>
  </Fade>
);

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'New Vendor Approved',
      message: 'TechStore Pro has been approved and is now live',
      time: '2 minutes ago',
      icon: CheckCircleIcon,
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Payment Pending',
      message: '3 vendor payments are awaiting approval',
      time: '15 minutes ago',
      icon: WarningIcon,
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New Customer Registration',
      message: '25 new customers joined today',
      time: '1 hour ago',
      icon: PersonAddIcon,
      read: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Deal Completed',
      message: 'Restaurant Deal #RD-2024-001 has been completed',
      time: '2 hours ago',
      icon: PaymentIcon,
      read: true
    },
    {
      id: 5,
      type: 'error',
      title: 'System Alert',
      message: 'Server maintenance scheduled for tonight at 2 AM',
      time: '3 hours ago',
      icon: ErrorIcon,
      read: false
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate metric values on load
    const animateValues = () => {
      const values = {
        totalEarnings: 0,
        totalDeals: 0,
        todayEarnings: 0,
        todayConverted: 0
      };
      
      const targetValues = {
        totalEarnings: 7825,
        totalDeals: 15500,
        todayEarnings: 920,
        todayConverted: 28
      };
      
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setAnimatedValues({
          totalEarnings: Math.round(targetValues.totalEarnings * easeOutQuart),
          totalDeals: Math.round(targetValues.totalDeals * easeOutQuart),
          todayEarnings: Math.round(targetValues.todayEarnings * easeOutQuart),
          todayConverted: Math.round(targetValues.todayConverted * easeOutQuart)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedValues(targetValues);
        }
      }, stepDuration);
    };
    
    if (!isLoading) {
      setTimeout(animateValues, 500);
    }
  }, [isLoading]);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleNotificationRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Box sx={{ 
      flexGrow: 1, 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh', 
      width: '100%',
      padding: { xs: 2, sm: 3, md: 4 },
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: { xs: 4, md: 5 },
        px: { xs: 1, sm: 2 },
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            p: 1.5, 
            borderRadius: 3, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
          }}>
            <DashboardIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              letterSpacing: '-0.02em'
            }}>
              Dashboard
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'text.secondary',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              Welcome back! Here's what's happening today.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          {/* <Tooltip title="Refresh data">
            <IconButton 
              onClick={handleRefresh}
              disabled={isLoading}
              sx={{ 
                p: 1.5,
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <RefreshIcon sx={{ 
                color: '#667eea',
                animation: isLoading ? 'spin 1s linear infinite' : 'none',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' }
                }
              }} />
            </IconButton>
          </Tooltip> */}
          <Tooltip title="Notifications">
            <IconButton 
              onClick={handleNotificationClick}
              sx={{ 
                p: 1.5,
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <Badge badgeContent={unreadCount} color="error">
                <NotificationsIcon sx={{ color: '#667eea' }} />
              </Badge>
            </IconButton>
          </Tooltip>
          
          {/* Notifications Dropdown */}
          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            PaperProps={{
              sx: {
                width: 380,
                maxHeight: 500,
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.08)',
                mt: 1
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {/* Header */}
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                  Notifications
                </Typography>
                {unreadCount > 0 && (
                  <Button
                    size="small"
                    onClick={markAllAsRead}
                    sx={{
                      color: '#667eea',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(102, 126, 234, 0.1)'
                      }
                    }}
                  >
                    Mark all as read
                  </Button>
                )}
              </Box>
            </Box>

            {/* Notifications List */}
            <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
              {notifications.length === 0 ? (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <NotificationsIcon sx={{ fontSize: 48, color: '#ccc', mb: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    No notifications yet
                  </Typography>
                </Box>
              ) : (
                notifications.map((notification, index) => {
                  const IconComponent = notification.icon;
                  const getIconColor = (type) => {
                    switch (type) {
                      case 'success': return '#4caf50';
                      case 'warning': return '#ff9800';
                      case 'error': return '#f44336';
                      case 'info': return '#2196f3';
                      default: return '#666';
                    }
                  };

                  return (
                    <Box key={notification.id}>
                      <MenuItem
                        onClick={() => {
                          handleNotificationRead(notification.id);
                          handleNotificationClose();
                        }}
                        sx={{
                          p: 2,
                          backgroundColor: notification.read ? 'transparent' : 'rgba(102, 126, 234, 0.05)',
                          borderLeft: notification.read ? 'none' : '3px solid #667eea',
                          maxWidth: '100%',
                          overflow: 'hidden',
                          '&:hover': {
                            backgroundColor: 'rgba(102, 126, 234, 0.1)'
                          }
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <IconComponent 
                            sx={{ 
                              color: getIconColor(notification.type),
                              fontSize: 24
                            }} 
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                fontWeight: notification.read ? 500 : 700,
                                color: '#1a1a1a',
                                mb: 0.5,
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal',
                                maxWidth: '100%'
                              }}
                            >
                              {notification.title}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography 
                                variant="body2" 
                                color="text.secondary" 
                                sx={{ 
                                  fontSize: '0.85rem',
                                  lineHeight: 1.4,
                                  mb: 0.5,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  whiteSpace: 'normal',
                                  maxWidth: '100%'
                                }}
                              >
                                {notification.message}
                              </Typography>
                              <Typography 
                                variant="caption" 
                                color="text.secondary"
                                sx={{ 
                                  fontSize: '0.75rem',
                                  fontWeight: 500
                                }}
                              >
                                {notification.time}
                              </Typography>
                            </Box>
                          }
                        />
                        {!notification.read && (
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: '#667eea',
                              ml: 1
                            }}
                          />
                        )}
                      </MenuItem>
                      {index < notifications.length - 1 && (
                        <Divider sx={{ mx: 2 }} />
                      )}
                    </Box>
                  );
                })
              )}
            </Box>

            {/* Footer */}
            {notifications.length > 0 && (
              <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: '#667eea',
                    borderColor: '#667eea',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      borderColor: '#667eea'
                    }
                  }}
                >
                  View All Notifications
                </Button>
              </Box>
            )}
          </Menu>

          {/* <Tooltip title="Settings">
            <IconButton sx={{ 
              p: 1.5,
              backgroundColor: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
                transform: 'scale(1.05)'
              },
              transition: 'all 0.2s ease'
            }}>
              <SettingsIcon sx={{ color: '#667eea' }} />
            </IconButton>
          </Tooltip> */}
          <Avatar sx={{ 
            width: 44, 
            height: 44,
            border: '3px solid rgba(255,255,255,0.8)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <AccountCircleIcon sx={{ fontSize: 28 }} />
          </Avatar>
        </Box>
      </Box>

      {/* Metric Cards */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 4, md: 5 }, position: 'relative', zIndex: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Grow in timeout={600}>
            <div>
              <MetricCard
                title="Total Earnings"
                value={`$${animatedValues.totalEarnings?.toLocaleString() || '0'}`}
                trend="up"
                trendValue="+22%"
                trendColor="#ff6b35"
                loading={isLoading}
              />
            </div>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grow in timeout={800}>
            <div>
              <MetricCard
                title="Total Deals"
                value={`${animatedValues.totalDeals ? (animatedValues.totalDeals / 1000).toFixed(1) + 'K' : '0'}`}
                trend="up"
                trendValue="+49%"
                trendColor="#4caf50"
                loading={isLoading}
              />
            </div>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grow in timeout={1000}>
            <div>
              <MetricCard
                title="Today Earnings"
                value={`$${animatedValues.todayEarnings || '0'}`}
                trend="down"
                trendValue="-25%"
                trendColor="#f44336"
                loading={isLoading}
              />
            </div>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grow in timeout={1200}>
            <div>
              <MetricCard
                title="Today Converted Deals"
                value={`${animatedValues.todayConverted || '0'}%`}
                trend="up"
                trendValue="+1.9%"
                trendColor="#ff6b35"
                loading={isLoading}
              />
            </div>
          </Grow>
        </Grid>
      </Grid>

      {/* Dashboard Widgets */}
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1 }}>
        {/* Customers */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Customers" loading={isLoading}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>Total Customer</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>3,500</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>PPU</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>$2.25</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>Subscriber</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>1,200</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>New This Month</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>+245</Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>Active Rate</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>78%</Typography>
            </Box>
            <Box sx={{ mb: 3, p: 2, background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', borderRadius: 3, border: '1px solid rgba(255, 193, 7, 0.2)' }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 1.5, fontWeight: 600 }}>
                Gap Analysis: 2,300 non-subscribers (65.7%)
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={34.3} 
                sx={{ 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: '#ffcc02',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #4caf50, #45a049)',
                    borderRadius: 4
                  }
                }} 
              />
            </Box>
            <Box sx={{ height: 300, flexGrow: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customerTrendData} margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="year" 
                    fontSize={11} 
                    tick={{ fill: '#666' }}
                    axisLine={{ stroke: '#e0e0e0' }}
                  />
                  <YAxis 
                    fontSize={11} 
                    tick={{ fill: '#666' }}
                    axisLine={{ stroke: '#e0e0e0' }}
                  />
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="url(#customerGradient)" 
                    strokeWidth={4} 
                    dot={{ fill: '#2196f3', strokeWidth: 3, r: 5 }} 
                    activeDot={{ r: 7, stroke: '#2196f3', strokeWidth: 2 }}
                  />
                  <defs>
                    <linearGradient id="customerGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2196f3" />
                      <stop offset="100%" stopColor="#21cbf3" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Vendors */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Vendors" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>10</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Total Vendors</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vendorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {vendorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50', fontSize: '1.25rem' }}>7</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Active</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                border: '1px solid rgba(255, 152, 0, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff9800', fontSize: '1.25rem' }}>3</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Pending Approval</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Deals */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Deals" loading={isLoading}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 0.5, fontWeight: 500 }}>Total Deals</Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a1a' }}>20</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dealsData} layout="horizontal" margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    type="number" 
                    fontSize={11} 
                    tick={{ fill: '#666' }}
                    axisLine={{ stroke: '#e0e0e0' }}
                  />
                  <YAxis 
                    dataKey="status" 
                    type="category" 
                    width={100} 
                    fontSize={11} 
                    tick={{ fill: '#666' }}
                    axisLine={{ stroke: '#e0e0e0' }}
                  />
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="count" 
                    fill="url(#dealsGradient)" 
                    radius={[0, 6, 6, 0]} 
                  />
                  <defs>
                    <linearGradient id="dealsGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2196f3" />
                      <stop offset="100%" stopColor="#21cbf3" />
                    </linearGradient>
                  </defs>
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
                    background: deal.status === 'Active' ? 'linear-gradient(135deg, #4caf50, #45a049)' : 
                               deal.status === 'Under Review' ? 'linear-gradient(135deg, #ff9800, #f57c00)' :
                               deal.status === 'Deactive' ? 'linear-gradient(135deg, #f44336, #d32f2f)' : 
                               'linear-gradient(135deg, #9e9e9e, #757575)',
                    color: 'white',
                    fontSize: '0.75rem',
                    height: 28,
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    '& .MuiChip-label': { px: 1.5 }
                  }}
                />
              ))}
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Coupons */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Coupons" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>50</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Total Coupons</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={couponData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {couponData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50', fontSize: '1.25rem' }}>35</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Active/Generated</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.05) 100%)',
                border: '1px solid rgba(244, 67, 54, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#f44336', fontSize: '1.25rem' }}>15</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Cancelled</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Communities */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Communities" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>50</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Total Communities</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={communityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {communityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                border: '1px solid rgba(33, 150, 243, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#2196f3', fontSize: '1.25rem' }}>30</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Total Members</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                border: '1px solid rgba(255, 152, 0, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff9800', fontSize: '1.25rem' }}>20</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Total Vendors</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Wah! Revenue */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Wah! Revenue" loading={isLoading}>
            {revenueData.map((item, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.category}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>${item.amount.toLocaleString()}</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={item.percentage} 
                  sx={{ 
                    height: 12, 
                    borderRadius: 6,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #ff6b35, #ff8a65)',
                      borderRadius: 6
                    }
                  }} 
                />
              </Box>
            ))}
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Communication */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Communication" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>8</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Total Chats</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={communicationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {communicationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50', fontSize: '1.25rem' }}>5</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Vendor Chats</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                border: '1px solid rgba(33, 150, 243, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#2196f3', fontSize: '1.25rem' }}>3</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Customer Chats</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} md={6} lg={4}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Wallet" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>10</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Wallet</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={walletData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {walletData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50', fontSize: '1.25rem' }}>6</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Customer Wallet</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                border: '1px solid rgba(255, 152, 0, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff9800', fontSize: '1.25rem' }}>4</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Vendor Wallet</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6} lg={6}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Notifications" loading={isLoading}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '2.25rem' }}>8</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>Notifications</Typography>
            </Box>
            <Box sx={{ height: 300, flexGrow: 1, mb: 3 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={notificationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={3}
                    paddingAngle={2}
                  >
                    {notificationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2 }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50', fontSize: '1.25rem' }}>5</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Opened Notifications</Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: 1, 
                p: 1.5, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                border: '1px solid rgba(33, 150, 243, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#2196f3', fontSize: '1.25rem' }}>3</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', fontWeight: 500 }}>Read Notifications</Typography>
              </Box>
            </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6} lg={6}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Recent Activity" loading={isLoading}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 2, fontWeight: 500 }}>Latest System Events</Typography>
                  {[
                    { action: 'New vendor registered', time: '2 min ago', type: 'success' },
                    { action: 'Payment processed', time: '5 min ago', type: 'info' },
                    { action: 'Deal completed', time: '12 min ago', type: 'success' },
                    { action: 'User login', time: '18 min ago', type: 'info' },
                    { action: 'Coupon generated', time: '25 min ago', type: 'warning' }
                  ].map((activity, index) => (
                    <Box key={index} sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 2, 
                      p: 1.5, 
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(248,250,252,0.5) 100%)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        backgroundColor: activity.type === 'success' ? '#4caf50' : activity.type === 'warning' ? '#ff9800' : '#2196f3',
                        mr: 2
                      }} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.9rem' }}>
                          {activity.action}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Performance Metrics */}
        <Grid item xs={12} md={6} lg={6}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Performance Metrics" loading={isLoading}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 2, fontWeight: 500 }}>System Performance</Typography>
                  {[
                    { metric: 'Server Uptime', value: '99.9%', color: '#4caf50' },
                    { metric: 'Response Time', value: '120ms', color: '#2196f3' },
                    { metric: 'CPU Usage', value: '45%', color: '#ff9800' },
                    { metric: 'Memory Usage', value: '67%', color: '#f44336' },
                    { metric: 'Database Queries', value: '1.2s', color: '#9c27b0' }
                  ].map((metric, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.9rem' }}>
                          {metric.metric}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: metric.color, fontSize: '0.9rem' }}>
                          {metric.value}
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={metric.metric === 'Server Uptime' ? 99.9 : 
                               metric.metric === 'Response Time' ? 75 : 
                               metric.metric === 'CPU Usage' ? 45 : 
                               metric.metric === 'Memory Usage' ? 67 : 60} 
                        sx={{ 
                          height: 6, 
                          borderRadius: 3,
                          backgroundColor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)`,
                            borderRadius: 3
                          }
                        }} 
                      />
                    </Box>
                  ))}
                </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={6} lg={6}>
          <Grow in timeout={600}>
            <div>
              <WidgetCard title="Quick Actions" loading={isLoading}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem', mb: 2, fontWeight: 500 }}>Common Tasks</Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                    {[
                      { label: 'Add Vendor', icon: StoreIcon, color: '#4caf50' },
                      { label: 'Create Deal', icon: PaymentIcon, color: '#2196f3' },
                      { label: 'Generate Coupon', icon: MarkEmailReadIcon, color: '#ff9800' },
                      { label: 'View Reports', icon: AnalyticsIcon, color: '#9c27b0' }
                    ].map((action, index) => (
                      <Box key={index} sx={{ 
                        p: 2, 
                        borderRadius: 3, 
                        background: `linear-gradient(135deg, ${action.color}15, ${action.color}05)`,
                        border: `1px solid ${action.color}30`,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 4px 15px ${action.color}30`
                        }
                      }}>
                        <action.icon sx={{ color: action.color, fontSize: 28, mb: 1 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.85rem' }}>
                          {action.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </WidgetCard>
            </div>
          </Grow>
        </Grid>
      </Grid>

      {/* Scroll to Top FAB */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
              boxShadow: '0 6px 25px rgba(102, 126, 234, 0.4)',
              transform: 'scale(1.1)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowUpIcon />
        </Fab>
      </Zoom>

      {/* Performance Indicator */}
      {/* <Box sx={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 1000,
        display: { xs: 'none', md: 'block' }
      }}>
        <Tooltip title="Dashboard Performance">
          <Chip
            icon={<SpeedIcon />}
            label="98.5% Uptime"
            sx={{
              background: 'linear-gradient(135deg, #4caf50, #45a049)',
              color: 'white',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)',
              animation: 'pulse 3s infinite',
              '@keyframes pulse': {
                '0%': { opacity: 1 },
                '50%': { opacity: 0.7 },
                '100%': { opacity: 1 }
              }
            }}
          />
        </Tooltip>
      </Box> */}
    </Box>
  );
};

export default Dashboard;
