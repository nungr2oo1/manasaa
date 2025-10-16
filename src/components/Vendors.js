import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  TablePagination,
  Tooltip,
  Fade,
  Grow
} from '@mui/material';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  LocalOffer as DealsIcon,
  ConfirmationNumber as CouponsIcon,
  AttachMoney as RevenueIcon,
  Add as AddIcon,
  ViewColumn as ViewColumnIcon,
  FilterList as FilterListIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  Chat as ChatIcon,
  Delete as DeleteIcon,
  KeyboardArrowDown as ArrowDownIcon
} from '@mui/icons-material';

// Sample vendor data
const sampleVendors = [
  {
    id: 1,
    vendorId: '562890',
    businessName: 'Wah! Smart Deals',
    address: '403, Grant Drive Wyle, Txn 75098',
    contactName: 'Joss Alas',
    status: 'ACTIVE',
    communitiesCount: 10,
    walletBalance: 300,
    deals: 6,
    branches: 5
  },
  {
    id: 2,
    vendorId: '562890',
    businessName: 'Wah! Smart Deals',
    address: '403, Grant Drive Wyle, Txn 75098',
    contactName: 'Joss Alas',
    status: 'DEACTIVATE',
    communitiesCount: 20,
    walletBalance: 120,
    deals: 6,
    branches: 5
  },
  {
    id: 3,
    vendorId: '562890',
    businessName: 'Wah! Smart Deals',
    address: '403, Grant Drive Wyle, Txn 75098',
    contactName: 'Joss Alas',
    status: 'DEACTIVATE',
    communitiesCount: 10,
    walletBalance: 120,
    deals: 6,
    branches: 5
  },
  {
    id: 4,
    vendorId: '562890',
    businessName: 'Wah! Smart Deals',
    address: '403, Grant Drive Wyle, Txn 75098',
    contactName: 'Joss Alas',
    status: 'DEACTIVATE',
    communitiesCount: 10,
    walletBalance: 120,
    deals: 6,
    branches: 95
  },
  {
    id: 5,
    vendorId: '562890',
    businessName: 'Wah! Smart Deals',
    address: '403, Grant Drive Wyle, Txn 75098',
    contactName: 'Joss Alas',
    status: 'DEACTIVATE',
    communitiesCount: 10,
    walletBalance: 120,
    deals: 6,
    branches: 5
  }
];

const SummaryCard = ({ title, value, icon, color = '#ff6b35' }) => (
  <Fade in timeout={600}>
    <Card sx={{ 
      height: '100%', 
      borderRadius: 3,  
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      border: '1px solid rgba(0,0,0,0.05)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
        transform: 'translateY(-2px)'
      }
    }}>
      <CardContent sx={{ 
        p: { xs: 2, sm: 3 }, 
        textAlign: 'center' 
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          mb: { xs: 1.5, sm: 2 },
          p: { xs: 1, sm: 1.5 },
          borderRadius: '50%',
          backgroundColor: `${color}15`,
          width: { xs: 50, sm: 60 },
          height: { xs: 50, sm: 60 },
          mx: 'auto'
        }}>
          {React.cloneElement(icon, { 
            sx: { 
              fontSize: { xs: 24, sm: 28 }, 
              color: color,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            } 
          })}
        </Box>
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          mb: 1,
          fontSize: { xs: '2rem', sm: '2.5rem' },
          background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {value}
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'text.secondary',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          fontWeight: 600,
          letterSpacing: '0.02em'
        }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Fade>
);

const Vendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [statusMenuAnchor, setStatusMenuAnchor] = useState(null);
  const [columnsMenuAnchor, setColumnsMenuAnchor] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleStatusMenuOpen = (event) => {
    setStatusMenuAnchor(event.currentTarget);
  };

  const handleStatusMenuClose = () => {
    setStatusMenuAnchor(null);
  };

  const handleColumnsMenuOpen = (event) => {
    setColumnsMenuAnchor(event.currentTarget);
  };

  const handleColumnsMenuClose = () => {
    setColumnsMenuAnchor(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusChip = (status) => {
    const isActive = status === 'ACTIVE';
    return (
      <Chip
        label={status}
        size="small"
        sx={{
          backgroundColor: isActive ? '#4caf50' : '#f44336',
          color: 'white',
          fontWeight: 600,
          fontSize: '0.75rem',
          height: 28,
          '& .MuiChip-label': { px: 1.5 }
        }}
      />
    );
  };

  const filteredVendors = sampleVendors.filter(vendor => {
    const matchesSearch = 
      vendor.vendorId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.contactName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || 
      (statusFilter === 'Active' && vendor.status === 'ACTIVE') ||
      (statusFilter === 'Pending' && vendor.status === 'DEACTIVATE');
    
    return matchesSearch && matchesStatus;
  });

  const paginatedVendors = filteredVendors.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <Typography variant="h4" sx={{ 
          fontWeight: 800, 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
          letterSpacing: '-0.02em'
        }}>
          Vendors
        </Typography>
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
          <Grow in timeout={600}>
            <div>
              <SummaryCard
                title="Total Vendors"
                value="5"
                icon={<PersonIcon />}
                color="#ff6b35"
              />
            </div>
          </Grow>
        </Box>
        <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
          <Grow in timeout={800}>
            <div>
              <SummaryCard
                title="Total Deals"
                value="4"
                icon={<DealsIcon />}
                color="#4caf50"
              />
            </div>
          </Grow>
        </Box>
        <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
          <Grow in timeout={1000}>
            <div>
              <SummaryCard
                title="Total Coupons"
                value="600"
                icon={<CouponsIcon />}
                color="#2196f3"
              />
            </div>
          </Grow>
        </Box>
        <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
          <Grow in timeout={1200}>
            <div>
              <SummaryCard
                title="Total Revenue"
                value="$250"
                icon={<RevenueIcon />}
                color="#ff9800"
              />
            </div>
          </Grow>
        </Box>
      </Box>

      {/* Table Controls */}
      <Box sx={{ 
        mb: 3, 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 2, 
        alignItems: { xs: 'stretch', md: 'center' },
        position: 'relative',
        zIndex: 1
      }}>
        <TextField
          placeholder="Search By Vendor Id, Business Name Or Contact Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flexGrow: 1,
            maxWidth: { xs: '100%', md: '400px' },
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.95)'
              },
              '&.Mui-focused': {
                backgroundColor: 'white'
              }
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
        
        <Button
          variant="outlined"
          startIcon={<ViewColumnIcon />}
          endIcon={<ArrowDownIcon />}
          onClick={handleColumnsMenuOpen}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)',
            color: 'text.primary',
            fontWeight: 600,
            padding: "13px",
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(0,0,0,0.2)'
            }
          }}
        >
          Add/Remove Columns
        </Button>

        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          endIcon={<ArrowDownIcon />}
          onClick={handleStatusMenuOpen}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)',
            color: 'text.primary',
            fontWeight: 600,
            padding: "13px",
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(0,0,0,0.2)'
            }
          }}
        >
          {statusFilter} Statuses
        </Button>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
            fontWeight: 600,
            px: 3,
            padding: "13px 24px",
            '&:hover': {
              background: 'linear-gradient(135deg, #e55a2b 0%, #ff7a55 100%)',
              boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Add Vendor
        </Button>
      </Box>

      {/* Status Filter Menu */}
      <Menu
        anchorEl={statusMenuAnchor}
        open={Boolean(statusMenuAnchor)}
        onClose={handleStatusMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.1)'
          }
        }}
      >
        <MenuItem 
          onClick={() => { setStatusFilter('All'); handleStatusMenuClose(); }}
          sx={{ fontWeight: statusFilter === 'All' ? 600 : 400 }}
        >
          All
        </MenuItem>
        <MenuItem 
          onClick={() => { setStatusFilter('Active'); handleStatusMenuClose(); }}
          sx={{ fontWeight: statusFilter === 'Active' ? 600 : 400 }}
        >
          Active
        </MenuItem>
        <MenuItem 
          onClick={() => { setStatusFilter('Pending'); handleStatusMenuClose(); }}
          sx={{ fontWeight: statusFilter === 'Pending' ? 600 : 400 }}
        >
          Pending
        </MenuItem>
      </Menu>

      {/* Columns Menu */}
      <Menu
        anchorEl={columnsMenuAnchor}
        open={Boolean(columnsMenuAnchor)}
        onClose={handleColumnsMenuClose}
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.1)'
          }
        }}
      >
        <MenuItem onClick={handleColumnsMenuClose}>Show All Columns</MenuItem>
        <MenuItem onClick={handleColumnsMenuClose}>Hide Address</MenuItem>
        <MenuItem onClick={handleColumnsMenuClose}>Hide Branches</MenuItem>
        <MenuItem onClick={handleColumnsMenuClose}>Customize Columns</MenuItem>
      </Menu>

      {/* Vendor Table */}
      <Fade in timeout={1000}>
        <Card sx={{ 
          borderRadius: 4, 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Vendor ID</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Business Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Contact Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Communities Count</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Wallet Balance</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Deals</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Branches</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: 'text.primary' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedVendors.map((vendor, index) => (
                  <TableRow 
                    key={vendor.id}
                    sx={{ 
                      '&:hover': { 
                        backgroundColor: 'rgba(0,0,0,0.02)' 
                      },
                      '&:last-child td, &:last-child th': { 
                        border: 0 
                      }
                    }}
                  >
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Typography sx={{ 
                        color: '#ff6b35', 
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}>
                        {vendor.vendorId}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{vendor.businessName}</TableCell>
                    <TableCell sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                      {vendor.address}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{vendor.contactName}</TableCell>
                    <TableCell>{getStatusChip(vendor.status)}</TableCell>
                    <TableCell>{vendor.communitiesCount}</TableCell>
                    <TableCell>
                      <Typography sx={{ 
                        color: '#ff6b35', 
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}>
                        ${vendor.walletBalance}
                      </Typography>
                    </TableCell>
                    <TableCell>{vendor.deals}</TableCell>
                    <TableCell>{vendor.branches}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <Tooltip title="View">
                          <IconButton size="small" sx={{ 
                            color: '#2196f3',
                            '&:hover': { backgroundColor: 'rgba(33, 150, 243, 0.1)' }
                          }}>
                            <ViewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton size="small" sx={{ 
                            color: '#ff9800',
                            '&:hover': { backgroundColor: 'rgba(255, 152, 0, 0.1)' }
                          }}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Chat">
                          <IconButton size="small" sx={{ 
                            color: '#4caf50',
                            '&:hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' }
                          }}>
                            <ChatIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton size="small" sx={{ 
                            color: '#f44336',
                            '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.1)' }
                          }}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredVendors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              borderTop: '1px solid rgba(0,0,0,0.1)',
              backgroundColor: 'rgba(0,0,0,0.02)',
              '& .MuiTablePagination-toolbar': {
                paddingLeft: 3,
                paddingRight: 3
              },
              '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                fontWeight: 600
              }
            }}
          />
        </Card>
      </Fade>
    </Box>
  );
};

export default Vendors;
