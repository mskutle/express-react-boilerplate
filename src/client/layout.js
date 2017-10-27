import React from 'react';
import ReactDOM from 'react-dom';
import TopNavigation from './components/TopNavigation.jsx';

const App = () => {
  return (
    <TopNavigation />
  )
}

ReactDOM.render(<App />, document.getElementById('layout'))
