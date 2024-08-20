import { useState } from 'react';
import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'Project Structure Creation?',
    answer: (
      <Typography>
        Generates the basic project structure 
        {/* <Link
          href="https://support.mui.com/hc/en-us/articles/360008775240-How-do-I-get-access-to-an-item-I-purchased"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          with predefined folders and files
        </Link> */}
        with predefined folders and files.
      </Typography>
    ),
  },
  {
    question: 'Base Files Configuration?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li>Configures essential files like pyproject.toml, .gitignore, Makefile, among others.</li>
        <li> .gitignore.</li>
        <li>
          <strong>Makefile</strong> among others.
        </li>
        {/* <li>
          <strong>Extended</strong> license used in charge products, collect fees from users
          (SAAS...).
        </li> */}
        {/* <li> */}
          {/* Learn more about the */}
          {/* <Link
            href="https://docs.minimals.cc/package/"
            target="_blank"
            rel="noopener"
            sx={{ mx: 0.5 }}
          >
            package & license
          </Link> */}
        {/* </li> */}
      </Box>
    ),
  },
  {
    question: 'Virtual Environment Setup?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> Creates a virtual environment with the specified Python version using uv.</li>
        {/* <li> You get 12 months of free updates.</li> */}
      </Box>
    ),
  },
  {
    question: 'Git Initialization?',
    answer: (
      <Typography>
        {`Initializes a Git repository `}
        {/* Learn more about the
        <Link
          href="https://mui.com/material-ui/getting-started/supported-platforms/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          supported platforms
        </Link> */}
      </Typography>
    ),
  },
  {
    question: 'Necessary Packages Installation?',
    answer: (
      <Typography>
          Installs packages like ruff, pre-commit, mkdocs, mkdocstrings.
      </Typography>
    ),
  },
  {
    question: 'IDE Configuration?',
    answer: (
      <Typography>
        Configures popular IDEs (VSCode, PyCharm).
        {/* <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this Paid version. */}
      </Typography>
    ),
  },
  {
    question: 'Documentation Generation?',
    answer: (
      <Typography>
        Automatically generates documentation for your modules.
        {/* <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this Paid version. */}
      </Typography>
    ),
  },
  {
    question: 'Testing Configuration?',
    answer: (
      <Typography>
       Sets up pytest for unit testing.
        {/* <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this Paid version. */}
      </Typography>
    ),
  },
  {
    question: 'Linter and Formatter?',
    answer: (
      <Typography>
        Configures Ruff to maintain code quality.
        {/* <Link
          href="https://mui.com/store/items/minimal-dashboard-free/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          open source
        </Link>
        dashboard template which should give you an overview of the code quality and folder
        structure. Keep in mind that some aspects may differ from this Paid version. */}
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {
  const [expanded, setExpanded] = useState(FAQs[0].question);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderDescription = (
    <SectionTitle
      caption="Key Attributes"
      title="We’ve got "
      txtGradient="You"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = (
    <Stack
      spacing={1}
      sx={{
        mt: 8,
        mx: 'auto',
        maxWidth: 720,
        mb: { xs: 5, md: 8 },
      }}
    >
      {FAQs.map((item, index) => (
        <Accordion
          key={item.question}
          component={m.div}
          variants={varFade({ distance: 24 }).inUp}
          expanded={expanded === item.question}
          onChange={handleChange(item.question)}
          sx={{
            borderRadius: 2,
            transition: (theme) =>
              theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
            '&::before': { display: 'none' },
            '&:hover': {
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
            },
            '&:first-of-type, &:last-of-type': { borderRadius: 2 },
            [`&.${accordionClasses.expanded}`]: {
              m: 0,
              borderRadius: 2,
              boxShadow: 'none',
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            [`& .${accordionSummaryClasses.root}`]: {
              py: 3,
              px: 2.5,
              minHeight: 'auto',
              [`& .${accordionSummaryClasses.content}`]: {
                m: 0,
                [`&.${accordionSummaryClasses.expanded}`]: { m: 0 },
              },
            },
            [`& .${accordionDetailsClasses.root}`]: { px: 2.5, pt: 0, pb: 3 },
          }}
        >
          <AccordionSummary
            expandIcon={
              <Iconify
                width={20}
                icon={expanded === item.question ? 'mingcute:minimize-line' : 'mingcute:add-line'}
              />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6"> {item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );

  const renderContact = (
    <Stack
      alignItems="center"
      sx={{
        px: 3,
        py: 8,
        textAlign: 'center',
        background: (theme) =>
          `linear-gradient(270deg, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}, ${varAlpha(theme.vars.palette.grey['500Channel'], 0)})`,
      }}
    >
      <m.div variants={varFade().in}>
        <Typography variant="h4">Still have questions?</Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          Please contact us
        </Typography>
      </m.div>

      <m.div variants={varFade().in}>
        <Button
          color="inherit"
          variant="contained"
          href="mailto:npinoa.ai@gmail.com?subject=Question from Customer"
          startIcon={<Iconify icon="fluent:mail-24-filled" />}
        >
          Contact us
        </Button>
      </m.div>
    </Stack>
  );

  return (
    <Stack component="section" sx={{ ...sx }} {...other}>
      <MotionViewport sx={{ py: 10, position: 'relative' }}>
        <TopLines />

        <Container>
          {renderDescription}
          {renderContent}
        </Container>

        <Stack sx={{ position: 'relative' }}>
          <BottomLines />
          {renderContact}
        </Stack>
      </MotionViewport>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function TopLines() {
  return (
    <>
      <Stack
        spacing={8}
        alignItems="center"
        sx={{
          top: 64,
          left: 80,
          position: 'absolute',
          transform: 'translateX(-15px)',
        }}
      >
        <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
        <FloatTriangleDownIcon
          sx={{
            position: 'static',
            opacity: 0.24,
            width: 30,
            height: 15,
          }}
        />
      </Stack>
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );
}

function BottomLines() {
  return (
    <>
      <FloatLine sx={{ top: 0, left: 0 }} />
      <FloatLine sx={{ bottom: 0, left: 0 }} />
      <FloatPlusIcon sx={{ top: -8, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
    </>
  );
}
