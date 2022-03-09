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
      {/* CONTAINER: zet het in het midden */}
      <AppContainer>
        {/* APPROW: Geef het padding */}
        <AppRow>
          <Header />
          <TodoInput />


          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </AppRow>
      </AppContainer>
    </main>
  );
}

export default App;
