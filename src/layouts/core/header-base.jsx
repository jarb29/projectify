import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import { Iconify } from 'src/components/iconify';
import IconButton from '@mui/material/IconButton';
import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { MenuButton } from '../components/menu-button';
import { SignInButton } from '../components/sign-in-button';
import { AccountDrawer } from '../components/account-drawer';
import { SettingsButton } from '../components/settings-button';

import { LanguagePopover } from '../components/language-popover';
import { ContactsPopover } from '../components/contacts-popover';
import { WorkspacesPopover } from '../components/workspaces-popover';
import { NotificationsDrawer } from '../components/notifications-drawer';
import { toast } from 'src/components/snackbar';


// ----------------------------------------------------------------------

const StyledDivider = styled('span')(({ theme }) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': { bottom: -5, top: 'auto' },
}));

// ----------------------------------------------------------------------

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,

  slotsDisplay: {
    signIn = true,
    account = true,
    helpLink = true,
    settings = true,
    purchase = true,
    contacts = true,
    searchbar = true,
    workspaces = true,
    menuButton = true,
    localization = true,
    notifications = true,
  } = {},

  ...other
}) {
  const theme = useTheme();

  return (
    <HeaderSection
      sx={sx}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* -- Menu button -- */}
            {menuButton && (
              <MenuButton
                data-slot="menu-button"
                onClick={onOpenNav}
                sx={{
                  mr: 1,
                  ml: -1,
                  [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                }}
              />
            )}

            {/* -- Logo -- */}
            <Logo data-slot="logo" />

            {/* -- Divider -- */}
            <StyledDivider data-slot="divider" />

            {/* -- Workspace popover -- */}
            {workspaces && <WorkspacesPopover data-slot="workspaces" data={data?.workspaces} />}

            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          
          <>

            {slots?.rightAreaStart}


            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              {/* -- Help link -- */}
              {toast.warning('Projectify', {
                id: ' ',
                description: 'Born on 01/06/2024 as one of the best',
                closeButton: true,
                position:  'top-center'
              })
            }   
              {helpLink && (
                <Link
                  data-slot="help-link"
                  href={paths.faqs}
                  component={RouterLink}
                  color="inherit"
                  sx={{ typography: 'subtitle2' }}
                >
                  Need help?
                </Link>
              )}

              {/* -- Searchbar -- */}
              {searchbar && <Searchbar data-slot="searchbar" data={data?.nav} />}

              {/* -- Language popover -- */}
              {localization && <LanguagePopover data-slot="localization" data={data?.langs} />}

              {/* -- Notifications popover -- */}
              {notifications && (
                <NotificationsDrawer data-slot="notifications" data={data?.notifications} />
              )}

              {/* -- Contacts popover -- */}
              {contacts && <ContactsPopover data-slot="contacts" data={data?.contacts} />}

              {/* -- Settings button -- */}
              {/* {settings && <SettingsButton data-slot="settings" />} */}

              {/* -- Account drawer -- */}
              {account && <AccountDrawer data-slot="account" data={data?.account} />}

              {/* -- Sign in button -- */}
              {/* {signIn && <SignInButton />} */}

              {/* -- Purchase button -- */}
                <Button
                  data-slot="purchase"
                  variant="outline"
                  // rel="noopener"
                  target="_blank"
                  href='https://cyberingeniero.github.io/projectify/'
                  sx={{
                    marginRight: '-10px',
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                      display: 'inline-flex',
                    },
                  }}
                >
                  Docs
                </Button>
              <IconButton  
              variant="outlined"
              rel="noopener"
              href={paths.contact}

              sx={{
                display: 'none',
                marginRight: '-10px', // or use marginLeft on the next 
                marginLeft: '-10px', // or use marginLeft on the next 
                [theme.breakpoints.up(layoutQuery)]: {
                  display: 'inline-flex',
                },
              }}>
                <Iconify  icon="ion:logo-twitter" />
              </IconButton>

              <IconButton  
              // variant="outlined"
              target="_blank"
              // rel="noopener"
              href={paths.freeUI} 
              // color="inherit"
              sx={{
                display: 'none',
                [theme.breakpoints.up(layoutQuery)]: {
                  display: 'inline-flex',
                },
              }}>
                <Iconify icon="ion:logo-github"/>
              </IconButton>


              {/* {purchase && (
                <Button
                  data-slot="purchase"
                  variant="contained"
                  rel="noopener"
                  target="_blank"
                  href={paths.minimalStore}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                      display: 'inline-flex',
                    },
                  }}
                >
                  Purchase
                </Button>
              )} */}
            </Box>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
