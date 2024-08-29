import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Card } from './pages/Demo/Card';

const theme = createTheme({ palette: { mode: 'light' } });

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card />
    </ThemeProvider>
  );
};
