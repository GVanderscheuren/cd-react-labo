import React, { useState } from 'react';
import AppContainer from './components/AppContainer';
import AppRow from './components/AppRow';
import Header from './components/TodoAppHeader';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import data from './data/data.json';

function App() {
  const [toDolist, setTodoList] = useState(data);

  return (
    <main className="App">
      <AppContainer>
        <Header />
        <AppRow>
          <TodoInput />
          <TodoItem />
        </AppRow>
      </AppContainer>
    </main>
  );
}

export default App;
