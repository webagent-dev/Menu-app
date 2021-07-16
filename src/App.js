import { useState } from 'react'
import './App.css';
import Menu from './comps/Menu'
import data from './data'
import List from './comps/List'
  const selectBtn = ['all', ...new Set(data.map(item => item.category))]
function App() {
  const [select, setSelect ] = useState(selectBtn)
  const [menu, setMenu ] = useState(data)

  const filterBtn = (category) => {
    if(category === 'all'){
      setMenu(data)
      return
    }
      const newMenu = menu.filter((item) => item.category === category)
      setMenu(newMenu)
  }
  return (
    <div className="container">
     <div className='header'>
       <h1>Our Menu</h1>
       <hr  className='underline'/>     
       </div>
       <Menu item={select} filterBtn={filterBtn}/>
       <List menu={menu}/>
    </div>
  );
}

export default App;
