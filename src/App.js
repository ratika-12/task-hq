import React, { useState, useEffect } from 'react';
import { fetchData } from './api';
import Table from './components/Table';
import TableRow from './components/TableRow';

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
