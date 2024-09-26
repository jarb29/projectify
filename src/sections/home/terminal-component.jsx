'use client';

import { useState, useEffect } from 'react';
import { ContentCopy, Check } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalSteps = ['pip install projectify', 'projectify init'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) => (prev < terminalSteps.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalSteps.length]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Box
      sx={{
        width: '95%',
        borderRadius: 2,
        overflow: 'hidden',
        bgcolor: 'grey.900',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        position: 'relative',
        boxShadow: 3,
        pb: 1,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'error.main' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'warning.main' }} />
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'success.main' }} />
          </Box>
          <Button
            onClick={copyToClipboard}
            sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
            aria-label="Copy to clipboard"
          >
            {copied ? <Check sx={{ fontSize: 20 }} /> : <ContentCopy sx={{ fontSize: 20 }} />}
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {terminalSteps.map((step, index) => (
            <Typography
              key={index}
              sx={{
                opacity: index > terminalStep ? 0 : 1,
                transition: 'opacity 0.3s',
              }}
            >
              <Box component="span" sx={{ color: 'success.main' }}>
                $
              </Box>{' '}
              {step}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
