import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px', 
    }}>
      <TextField
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon className="search-icon" onClick={handleSearch} />
            </InputAdornment>
          ),
          style: {
            padding: '3px', 
            fontSize: '16px', 
            borderRadius: '5px', 
            border: '1px solid #ccc',
            width: '400px', 
          },
        }}
      />
    </div>
  );
};

export default Search;
