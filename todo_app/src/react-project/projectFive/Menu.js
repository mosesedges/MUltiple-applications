import React from 'react'
import Category from './Category'

const Menu = ({items}) => {
  return (
    <div className="section-center" >
      {items.map(item =>{
        const{id,name,image, category, desc} =item;
        return (
          <article className="menu-item" key={id}>
          <img src={image} alt={name} className="photo"/>
          <div className="item-info">
            <header >
            <h4>{name}</h4>
            </header>
            </div>
            <p className="item-text">{desc}</p>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
