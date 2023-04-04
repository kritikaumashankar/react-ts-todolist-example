import {MouseEvent, useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddListItem from './components/AddListItem';

function App() {

  const [buttonClicked, setButtonClicked] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      setButtonClicked(!buttonClicked);  
  };

  const addToList = useCallback((item: string) => {
    console.log(`Added item: ${item}`)
    setItems(prev => [...prev,item]);
  },[items]);

  return (
    <>
      <div className='container'>
      <h1>Todo List - React Ts</h1>
      <button onClick={handleClick}>+ Add Todo</button>
        {buttonClicked? <AddListItem addToList={addToList}/> : null}
        <List items={items} />
      </div>
    </>
  );
}

export default App;
