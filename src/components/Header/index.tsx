import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSearch } from '../../hooks/search';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { setSearch, search } = useSearch();

  const handleButtonClick = useCallback(() => {
    setSearch('');
    history.push('/');
  }, [history, setSearch]);

  const handleTextChange = useCallback(
    text => {
      setSearch(text.target.value);

      if (location.pathname !== '/') {
        history.push('/');
      }
    },
    [setSearch, location, history],
  );

  return (
    <Container>
      <button type="button" onClick={handleButtonClick}>
        B
      </button>

      <input
        type="text"
        inputMode="text"
        placeholder="Search"
        autoCapitalize="none"
        value={search}
        onChange={text => handleTextChange(text)}
      />
    </Container>
  );
};

export default Header;
