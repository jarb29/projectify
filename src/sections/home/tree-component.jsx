'use client';

import { useState } from 'react';
import { ContentCopy, Check, FolderOpen, InsertDriveFile } from '@mui/icons-material';
import { Box, Button, Typography, Fade } from '@mui/material';

export function TreeStructure() {
  const [copied, setCopied] = useState(false);
  const projectStructure = `Project Name
├── Dockerfile
├── Makefile
├── README.md
├── app
│   └── main.py
├── artifacts
├── data
├── docs
│   └── index.md
├── images
├── logs
├── mkdocs.yml
├── models
├── modules
│   └── __init__.py
├── notebooks
├── pyproject.toml
├── requirements.txt
├── scripts
│   └── generate_docs.py
├── tests
│   ├── __init__.py
│   └── test_example.py
└── utils
    └── __init__.py`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(projectStructure);
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
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            Project Structure
          </Typography>
          <Button
            onClick={copyToClipboard}
            sx={{
              color: 'grey.400',
              '&:hover': { color: 'primary.main' },
              transition: 'color 0.3s',
            }}
            aria-label="Copy to clipboard"
          >
            {copied ? <Check sx={{ fontSize: 20 }} /> : <ContentCopy sx={{ fontSize: 20 }} />}
          </Button>
        </Box>
        <Box sx={{ whiteSpace: 'pre-wrap' }}>
          {projectStructure.split('\n').map((line, index) => (
            <Fade in={true} timeout={300 + index * 50} key={index}>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  transition: 'background-color 0.3s',
                  borderRadius: 1,
                  py: 0.5,
                  px: 1,
                }}
              >
                {line.includes('└──') || line.includes('├──') ? (
                  line.includes('.') ? (
                    <InsertDriveFile sx={{ fontSize: 16, color: 'info.main' }} />
                  ) : (
                    <FolderOpen sx={{ fontSize: 16, color: 'warning.main' }} />
                  )
                ) : null}
                {line}
              </Typography>
            </Fade>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
