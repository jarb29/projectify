import { useRef, useState, useEffect } from 'react';

import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { toast } from 'src/components/snackbar';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

export function HomeHero({ sx, ...other }) {
  const [render, setIRender] = useState(true);
  const theme = useTheme();

  const scroll = useScrollPercent();

  const mdUp = useResponsive('up', mdKey);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIRender(false);
    }, 2000); // time is in milliseconds, so 2000 sec = 2000 * 1000 ms

    // clean up function
    return () => clearTimeout(timer);
  }, []); // [] means run once after initial render

  const distance = mdUp ? scroll.percent : 0;

  const y1 = useTransformY(scroll.scrollY, distance * -7);
  const y2 = useTransformY(scroll.scrollY, distance * -6);
  const y3 = useTransformY(scroll.scrollY, distance * -5);
  const y4 = useTransformY(scroll.scrollY, distance * -4);
  const y5 = useTransformY(scroll.scrollY, distance * -3);

  const opacity = useTransform(
    scroll.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scroll.percent / 100).toFixed(1)) : 1]
  );

  const renderHeading = (
    <MInview>
      <Box
        component="h1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: { xs: 680, md: 800, lg: 1000 },
          fontFamily: theme.typography.fontSecondaryFamily,
          [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
        <Box component="span" sx={{ opacity: 0.24, textAlign: 'center' }}>
          Boost your
        </Box>
        <Box component="span" sx={{ textAlign: 'center' }}>
          productivity with
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '300px', sm: '400px', md: '600px', lg: '800px' },
            overflow: 'hidden',
            mt: 2,
          }}
        >
          <Box
            component={m.span}
            animate={{ backgroundPosition: '200% center' }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            sx={{
              ...textGradient(
                `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
              ),
              backgroundSize: '400%',
              display: 'block',
              width: '100%',
            }}
          >
            <Typography
              variant="h1"
              aria-label="Projectify"
              sx={{
                whiteSpace: 'nowrap',
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: {
                  xs: '3rem',
                  sm: '3rem',
                  md: 'clamp(3rem, 8vw, 7rem)',
                  lg: 'clamp(3rem, 9vw, 8rem)',
                },
                lineHeight: { xs: 1.2, md: 1 },
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: { md: '-0.02em' },
                textShadow: { md: '2px 2px 4px rgba(0,0,0,0.1)' },
              }}
            >
              Projectify!
            </Typography>
          </Box>
        </Box>
      </Box>
    </MInview>
  );

  const renderText = (
    <MInview>
      <Typography
        variant="body2"
        sx={{
          mx: 'auto',
          [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
          [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
        }}
      >
        The starting point for your next project based on
      </Typography>
      <Box
        component={m.span}
        animate={{ backgroundPosition: '200% center' }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          ...textGradient(
            `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
          ),
          backgroundSize: '400%',
          ml: { xs: 0.75, md: 1, xl: 1.5 },
        }}
      >
        Python
      </Box>
      <Typography
        variant="body2"
        sx={{
          mx: 'auto',
          [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
          [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
        }}
      >
        Easy customization to stay organized and helps.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mx: 'auto',
          [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
          [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
        }}
      >
        you build apps faster and better.
      </Typography>
    </MInview>
  );

  const renderRatings = (
    <MInview>
      <Box
        gap={1.5}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        sx={{ typography: 'subtitle2' }}
      >
        <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
          {[...Array(3)].map((_, index) => (
            <Avatar
              key={_mock.fullName(index + 1)}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </AvatarGroup>
        160000+ Users
      </Box>
    </MInview>
  );

  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
      <MInview>
        <Stack alignItems="center" spacing={2.5}>
          <Button
            component={RouterLink}
            href={paths.dashboard.root}
            color="inherit"
            size="large"
            variant="contained"
            startIcon={<Iconify width={24} icon="iconoir:flash" />}
          >
            <span>
              Live preview
              <Box
                component="small"
                sx={{
                  mt: '-3px',
                  opacity: 0.64,
                  display: 'flex',
                  fontSize: theme.typography.pxToRem(10),
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                v{CONFIG.site.version}
              </Box>
            </span>
          </Button>

          <Link
            color="inherit"
            variant="body2"
            target="_blank"
            rel="noopener"
            href={paths.freeUI}
            underline="always"
            sx={{ gap: 0.5, alignItems: 'center', display: 'inline-flex' }}
          >
            Get free version
            <Iconify width={16} icon="eva:external-link-fill" />
          </Link>
        </Stack>
      </MInview>

      <MInview>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          target="_blank"
          rel="noopener"
          href={paths.figma}
          startIcon={<Iconify width={24} icon="solar:figma-outline" />}
          sx={{ borderColor: 'text.primary' }}
        >
          Figma preview
        </Button>
      </MInview>
    </Box>
  );
  const renderIcons = (
    <Stack spacing={3} sx={{ textAlign: 'center' }}>
      <MInview>
        <Typography variant="overline" sx={{ opacity: 0.4 }}>
          Available For
        </Typography>
      </MInview>

      <Stack spacing={2.5} direction="row">
        {['js', 'ts', 'nextjs', 'vite', 'figma'].map((platform) => (
          <MInview key={platform}>
            {platform === 'nextjs' ? (
              <SvgColor
                src={`${CONFIG.site.basePath}/assets/icons/platforms/ic-${platform}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            ) : (
              <Box
                component="img"
                alt={platform}
                src={`${CONFIG.site.basePath}/assets/icons/platforms/ic-${platform}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            )}
          </MInview>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Stack
      ref={scroll.elementRef}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up(mdKey)]: {
          minHeight: 760,
          height: '100vh',
          maxHeight: 1440,
          display: 'block',
          willChange: 'opacity',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
        },
        ...sx,
      }}
      {...other}
    >
      {render &&
        toast.warning('Projectify', {
          duration: '2000',
          id: ' ',
          description: 'Born on 01/06/2024 ...........',
          position: 'top-center',
          closeButton: false,
          action: (
            <div>
              <Button
                size="small"
                color="warning"
                onClick={() => {
                  setIRender(false);
                  toast.dismiss(' ');
                }}
              >
                Close
              </Button>
            </div>
          ),
        })}
      <Box
        component={m.div}
        style={{ opacity }}
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: theme.transitions.create(['opacity']),
          [theme.breakpoints.up(mdKey)]: {
            height: 1,
            position: 'fixed',
            maxHeight: 'inherit',
          },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <m.div style={{ y: y1 }}>{renderHeading}</m.div>
            <m.div style={{ y: y2 }}>{renderText}</m.div>
          </Stack>
          <m.div style={{ y: y3 }}>{renderRatings}</m.div>
          {/* <m.div style={{ y: y4 }}>{renderButtons}</m.div> */}
          {/* <m.div style={{ y: y5 }}>{renderIcons}</m.div> */}
        </Container>

        <HeroBackground />
      </Box>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function MInview({ children, component = m.div }) {
  return (
    <Box component={component} variants={varFade({ distance: 24 }).inUp}>
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value, distance) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
