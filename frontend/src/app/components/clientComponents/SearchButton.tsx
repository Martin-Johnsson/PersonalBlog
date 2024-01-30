'use client';
import { useState } from 'react';

const SearchButton = () => {
  const [showSearchField, setShowSearchField] = useState(false);

  const handleOnSearchButtonClick = () => {
    setShowSearchField(!showSearchField);
  };

  return (
    <form>
      {!showSearchField ? (
        <button onClick={handleOnSearchButtonClick} name='searchButton'>
          Search Button
        </button>
      ) : (
        <input type='search' placeholder='Search...' name='searchField' />
      )}
    </form>
  );
};

export default SearchButton;
