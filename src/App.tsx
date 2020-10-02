import React from 'react';
import { SearchProvider } from './hooks/search';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SearchProvider>
        <Routes />
      </SearchProvider>
    </>
  );
};

export default App;
