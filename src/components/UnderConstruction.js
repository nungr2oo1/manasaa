import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Fade,
  Chip,
  LinearProgress,
  Button,
  Stack
} from '@mui/material';
import {
  Construction as ConstructionIcon,
  Schedule as ScheduleIcon,
  Rocket as RocketIcon,
  CheckCircle as CheckCircleIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

const UnderConstruction = ({ pageName = "Page", estimatedCompletion = "Coming Soon" }) => {
  const features = [
    { name: "Advanced Analytics", completed: true },
    { name: "Real-time Data", completed: true },
    { name: "User Management", completed: false },
    { name: "Custom Reports", completed: false },
    { name: "API Integration", completed: false },
    { name: "Mobile Optimization", completed: false }
  ];

  const completedFeatures = features.filter(f => f.completed).length;
  const progressPercentage = (completedFeatures / features.length) * 100;

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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in timeout={800}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '80vh',
            textAlign: 'center'
          }}>
            {/* Main Construction Card */}
            <Card sx={{ 
              maxWidth: 600,
              width: '100%',
              borderRadius: 4, 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              position: 'relative',
              overflow: 'hidden',
              mb: 4,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ff6b35, #2196f3, #4caf50)',
                opacity: 0.8
              }
            }}>
              <CardContent sx={{ p: { xs: 4, sm: 5, md: 6 } }}>
                {/* Construction Icon */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mb: 3,
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                    '100%': { transform: 'scale(1)' }
                  }
                }}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
                    boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)'
                  }}>
                    <ConstructionIcon sx={{ 
                      color: 'white', 
                      fontSize: { xs: 40, sm: 48, md: 56 } 
                    }} />
                  </Box>
                </Box>

                {/* Page Title */}
                <Typography variant="h3" sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}>
                  {pageName}
                </Typography>

                {/* Under Construction Text */}
                <Typography variant="h5" sx={{ 
                  color: '#ff6b35', 
                  fontWeight: 700, 
                  mb: 3,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}>
                  Under Construction
                </Typography>

                {/* Description */}
                <Typography variant="body1" sx={{ 
                  color: 'text.secondary', 
                  mb: 4, 
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.6,
                  maxWidth: 500,
                  mx: 'auto'
                }}>
                  We're working hard to bring you an amazing experience. This page is currently being developed with cutting-edge features and modern design.
                </Typography>

                {/* Estimated Completion */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: 1.5, 
                  mb: 4,
                  p: 2,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                  border: '1px solid rgba(33, 150, 243, 0.2)'
                }}>
                  <ScheduleIcon sx={{ color: '#2196f3', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ 
                    color: '#2196f3', 
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}>
                    Estimated Completion: {estimatedCompletion}
                  </Typography>
                </Box>

                {/* Back to Dashboard Button */}
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ArrowBackIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.location.reload()}
                >
                  Back to Dashboard
                </Button>
              </CardContent>
            </Card>

            {/* Progress Card */}
            <Card sx={{ 
              maxWidth: 500,
              width: '100%',
              borderRadius: 4, 
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <RocketIcon sx={{ color: '#4caf50', fontSize: 28 }} />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700, 
                    color: '#1a1a1a',
                    fontSize: '1.25rem'
                  }}>
                    Development Progress
                  </Typography>
                </Box>

                {/* Progress Bar */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      Overall Progress
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#4caf50' }}>
                      {Math.round(progressPercentage)}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={progressPercentage} 
                    sx={{ 
                      height: 10, 
                      borderRadius: 5,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #4caf50, #45a049)',
                        borderRadius: 5
                      }
                    }} 
                  />
                </Box>

                {/* Features List */}
                <Stack spacing={2}>
                  {features.map((feature, index) => (
                    <Box key={index} sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      p: 1.5,
                      borderRadius: 2,
                      background: feature.completed ? 
                        'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)' :
                        'linear-gradient(135deg, rgba(158, 158, 158, 0.1) 0%, rgba(158, 158, 158, 0.05) 100%)',
                      border: `1px solid ${feature.completed ? 'rgba(76, 175, 80, 0.2)' : 'rgba(158, 158, 158, 0.2)'}`
                    }}>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600,
                        color: feature.completed ? '#4caf50' : '#9e9e9e'
                      }}>
                        {feature.name}
                      </Typography>
                      {feature.completed ? (
                        <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                      ) : (
                        <Chip 
                          label="Pending" 
                          size="small" 
                          sx={{ 
                            background: 'linear-gradient(135deg, #ff9800, #f57c00)',
                            color: 'white',
                            fontSize: '0.75rem',
                            height: 24,
                            fontWeight: 600
                          }} 
                        />
                      )}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default UnderConstruction;
