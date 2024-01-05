// src/UnderConstructionPage.js
import React from 'react';
import { Typography, Paper, IconButton } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';

const spinAnimation = (theme) => ({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(-360deg)',
    },
  },
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
  transition: 'transform 0.3s ease-in-out',
  animation: '$spin 2s linear infinite', // Apply the spin animation
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const AnimatedPaper = styled(Paper)(spinAnimation);

const BackButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
});

const Documentation = () => {
  const goBack = () => {
    // Add logic to navigate back to the previous page
    // Example: window.history.back();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <AnimatedPaper elevation={3}>
          <ConstructionIcon style={{ fontSize: 100, color: 'orange' }} />
          <Typography variant="h5" style={{ marginTop: '1rem' }}>
            This page is under construction.
          </Typography>
          <Typography variant="h5" style={{ marginTop: '1rem' }}>
            Do Visit Us Later!
          </Typography>
        </AnimatedPaper>
      </div>
      <BackButton onClick={goBack} aria-label="back">
        <ArrowBackIcon />
      </BackButton>
    </div>
  );
};

export default Documentation;
