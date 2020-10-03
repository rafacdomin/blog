import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './hooks/search';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SearchProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </SearchProvider>
    </>
  );
};

export default App;
