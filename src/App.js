import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import Table from './components/Table';
import Search from './components/Search'; 
import DeleteIconButton from './components/DeleteIcon';


export default function App() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); 
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchData();
        setData(apiData);
        console.log(apiData)
      } catch (error) {
        console.error('Error in App component:', error);
      }
    };
    fetchDataFromApi();
  }, []);

  const handleDeleteRow = (id) => {
    const updatedData = data.filter((rowData) => rowData.id !== id);
    setData(updatedData);
  };

    // multiple delete
    const handleBulkDelete = () => {
      console.log("----->", selectedRows)
      const updatedData = data.filter((rowData) => !selectedRows.includes(rowData.id));
      setData(updatedData);
      setSelectedRows([]); 
    };

  // select rows 
  const handleSelectionChange = (data) => {
    setSelectedRows([...selectedRows, data.id]);
  };
//Search 
  const handleSearch = (searchText) => {
    const filteredData = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchResults(filteredData);
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
       <DeleteIconButton onClick={handleBulkDelete} />
       <Table  data={searchResults.length > 0 ? searchResults : data} onDeleteRow={handleDeleteRow} onSelectionChange={handleSelectionChange} />
    </div>
  );
};
