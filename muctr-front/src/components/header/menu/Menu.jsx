import React from 'react';
import './Menu.css';
import MenuLinks from './MenuLinks';
import { MdClose } from 'react-icons/md'

function Menu({left, xButtonClick, articles}) {

  return (
    <div style={{left: left, transition: '0.5s '}} className="menu" id='menu'>
      <a onClick={xButtonClick} href="/#" className='x-button' id='x-button'><MdClose /></a>
      <p className='menu__header'>Основное меню</p>
        {articles
          .map((article, index) => 
          <MenuLinks article={article} key={index}/>
        )}
          <MenuLinks />
          <MenuLinks />
          <MenuLinks />

    </div>
  );
}

export default Menu;
