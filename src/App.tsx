import React from 'react';
import { createTheme } from '@coya/styles';

const App = () => {
  createTheme();
  return (
    <h1 style={{ color: 'var(--COLOR_PRIMARY)' }}>Coya Design Components</h1>
  );
};

export default App;
