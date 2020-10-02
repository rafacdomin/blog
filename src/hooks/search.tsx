import React, { createContext, useState, useContext } from 'react';

interface SearchContextData {
  search: string;
  setSearch(text: string): void;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchContextData {
  return useContext(SearchContext);
}
