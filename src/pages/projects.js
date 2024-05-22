import React, { useState, useEffect } from 'react';

function App() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5100/api/portfolio')
      .then(response => response.json())
      .then(data => setPortfolio(data))
      .catch(error => console.error('Error fetching portfolio:', error));
  }, []);

  return (
    <div className="App">
      <h1>Portfolio</h1>
      <ul>
        {portfolio.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
