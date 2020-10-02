import React from 'react';
import { useSearch } from '../../hooks/search';

import { Container } from './styles';

const Header: React.FC = () => {
  const { setSearch } = useSearch();

  return (
    <Container>
      <button type="button">B</button>

      <input
        type="text"
        inputMode="text"
        placeholder="Search"
        autoCapitalize="none"
        onChange={text => setSearch(text.target.value)}
      />
    </Container>
  );
};

export default Header;
