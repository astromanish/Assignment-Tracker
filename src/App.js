import React from 'react';
import './App.css';
import Header from './components/header'
import AssignmentList from './components/assingmentList'
import AddAssignment from './components/addAssigment'

function App() {
  return (
    <div>
      <Header />
      <AssignmentList />
      <AddAssignment />
    </div>
  );
}

export default App;
