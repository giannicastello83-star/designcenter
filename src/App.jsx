import React from 'react';
import DesignEditor from './components/DesignEditor';
import { ContextProvider } from "./Web3Provider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <DesignEditor />
      </ContextProvider>
      
    </div>
  );
}

export default App;
