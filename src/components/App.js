import React, { useEffect, useReducer } from 'react'
import ItemsContext from '../context/items-context'
import itemsReducer from '../reducers/items'
import AddItemForm from './AddItemForm'
import './App.css'
import ItemList from './ItemList'

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, ["item1", "item2", "item3"])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div className="App">
        <header className="App-header">
          To Do items
          <ItemList />
          <AddItemForm />
        </header>
      </div>
    </ItemsContext.Provider>
  )
}

export default App
