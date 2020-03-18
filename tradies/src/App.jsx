import React from 'react';
import PageLayout from './Routes'
import Errorboundary from './Errorboundary';


function App() {
  return (
    <div>
      <Errorboundary>
        <PageLayout></PageLayout>
      </Errorboundary>
    </div>
  );
}

export default App;
