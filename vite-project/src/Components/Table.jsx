import React from 'react';

const Table = () => {
  const tableSize = 3;
  const cellSize = 150;

  const tableStyle = {
    display: 'table',
    borderCollapse: 'collapse',
  };

  const rowStyle = {
    display: 'table-row',
  };

  const cellStyle = {
    display: 'table-cell',
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    border: '1px solid white',
    textAlign: 'center',
    verticalAlign: 'middle',
  };

  return (
    <div style={tableStyle}>
      {Array.from({ length: tableSize }).map((_, rowIndex) => (
        
        <div key={rowIndex} style={rowStyle}>
            
          {Array.from({ length: tableSize }).map((_, colIndex) => (
            <div key={colIndex} style={cellStyle}>
               <img src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png" alt="Jerry Mouse" width="200"/>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
