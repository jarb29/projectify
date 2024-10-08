import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Terminal } from 'src/sections/home/terminal-component'; // Adjust the import path as necessary
import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomeMinimal({ sx, ...other }) {
  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <SectionTitle
        caption="Visualizing Success"
        title="Problems That Projectify!"
        txtGradient="Solve?"
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: { sm: 560, md: 400 },
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        {ITEMS.map((item) => (
          <Box
            component={m.div}
            key={item.title}
            variants={varFade({ distance: 24 }).inUp}
            gap={1}
            display="flex"
          >
            <SvgColor src={item.icon} sx={{ width: 40, height: 40 }} />
            <Stack spacing={1}>
              <Typography variant="h5" component="h6">
                {item.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const renderImg = (
    <Stack
      component={m.div}
      variants={varFade({ distance: 24 }).inRight}
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1, position: 'relative' }}
    >
      <Box
        sx={{
          left: 0,
          width: 720,
          borderRadius: 2,
          position: 'absolute',
          bgcolor: 'background.default',
          boxShadow: (theme) =>
            `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
          [stylesMode.dark]: {
            boxShadow: (theme) =>
              `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
          },
        }}
      >
        <Box
          component="img"
          alt="Home Chart"
          src={`${CONFIG.site.basePath}/assets/images/home/home-chart.webp`}
          sx={{ width: 720 }}
        />
      </Box>
    </Stack>
  );

  return (
    <Stack
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 5, md: 5 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative' }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            sx={{
              position: 'relative',
              zIndex: 9,
              alignItems: 'center', // Align items vertically
            }}
          >
            <Grid item xs={12} md={6} lg={7}>
              {renderDescription}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: { xs: 4, md: 8, lg: 12 },
                paddingBottom: { xs: 4, md: 0 }, // Add some bottom padding on small screens
              }}
            >
              <Terminal
                sx={{
                  width: '100%',
                  maxWidth: { xs: '100%', sm: '500px', md: '100%' },
                  mx: 'auto', // Center horizontally
                }}
              />

              {/* {renderImg} */}
            </Grid>
          </Grid>

          <CircleSvg
            variants={varFade().in}
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: { md: '10%', lg: '15%' },
              right: { md: '10%', lg: '15%' },
              width: { md: '30%', lg: '25%' },
              maxWidth: 400,
            }}
          />
        </Container>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const ITEMS = [
  {
    icon: `${CONFIG.site.basePath}/assets/icons/home/ic-make-brand.svg`,
    title: 'Structuring',
    description:
      'Projectify! automates this process, ensuring a consistent and professional structure.',
  },
  {
    icon: `${CONFIG.site.basePath}/assets/icons/home/ic-design.svg`,
    title: 'Environment Setup',
    description:
      'Projectify! creates virtual environments, configures the IDE, and prepares everything needed to start coding immediately.',
  },
  {
    icon: `${CONFIG.site.basePath}/assets/icons/home/ic-development.svg`,
    title: 'Testing',
    description:
      'Projectify! sets up pytest so you can start writing and running tests right away.',
  },
  {
    icon: `${CONFIG.site.basePath}/assets/icons/home/ic-development.svg`,
    title: 'Linter and Formatter',
    description:
      'Projectify! configures Ruff to ensure your code follows best practices and quality standards.',
  },
  {
    icon: `${CONFIG.site.basePath}/assets/icons/home/ic-development.svg`,
    title: 'Automatic Documentation',
    description:
      'MkDocs and mkdocstrings, makes easy to create useful and professional documentation.',
  },
];
