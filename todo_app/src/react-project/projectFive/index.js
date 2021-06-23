import React,{useState} from 'react';
import Menu from './Menu';
import Category from './Category';
import data from './data';
import './index.css'



const App = () => {

  const [menuItems, setMenuItems] = useState(data)
  const [category, setCategory] = useState([])


  return (
    <main>
    <div>
    <section className="menu section">
    <div className="title">
    <h2>our menu</h2>
    <div className="underline"></div>
    </div>
    
    </section>
    
    </div>
      <Menu items={menuItems}/>
      <Category/>
    </main>
  )
}

export default App
