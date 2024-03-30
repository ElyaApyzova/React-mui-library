import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiLayout } from './components/MuiLayout';
import { MuiCard } from './components/MuiCard';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiTable } from './components/MuiTable';
import { MuiAlert } from './components/MuiAlert';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiLoadingButton } from './components/MuiLoadingButton';
/*import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';*/
/*import { MuiDateTimePicker } from './components/MuiDateTimePicker';*/
/*import { MuiDateRangePicker } from './components/MuiDateRangePicker';*/
import { MuiTabs } from './components/MuiTabs';
import { MuiTimeline }   from './components/MuiTimeline'
import { MuiMasonry } from './components/MuiMasonry';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})
function App() {
  return (
    /*<LocalizationProvider dateAdapter={AdapterDateFns}>*/
    <ThemeProvider theme={theme}>
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />
      <MuiAccordion />
      <MuiImageList />
      <MuiNavbar />
      <MuiLink />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog />
      <MuiProgress />
      <MuiSkeleton />
      <MuiLoadingButton />
      <MuiTabs />
      {/*<MuiDateTimePicker />*/}
      {/*<MuiDateRangePicker />*/}
    
    {/*</LocalizationProvider>*/}

    <MuiTimeline />
    <MuiMasonry />
    </div>
    </ThemeProvider>
  );
}

export default App;
