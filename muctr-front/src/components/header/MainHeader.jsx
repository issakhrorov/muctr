import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import './MainHeader.css'
import Menu from './menu/Menu';
import { GiHamburgerMenu } from 'react-icons/gi'


function MainHeader({articles}) {
  const [left, setLeft] = useState('100%')
  
  const burgerClick = (e) => {
    e.preventDefault()

    if (left === '100%') {
      setLeft('0')
    }
    else setLeft('100%')
  } 

  const xButtonClick = (e) => {
    e.preventDefault()

    if (left === '100%') {
      console.log(left)
      setLeft('0')
    }
    else setLeft('100%')
  } 
  
  return (
    <>
      <Menu articles={articles} left={left} xButtonClick={xButtonClick}/>
      <a href='/' className="header__mainHeader">

        <div className='mainHeader__container'>
          <div className="mainHeader__left">

            <div className='header__logo'>
              <img src={logo} alt="" />
            </div>

            <div className="header__name">
              <h1 className='hn__name'>ФИЛИАЛ РОССИЙСКОГО ХИМИКО-ТЕХНОЛОГИЧЕСКОГО УНИВЕРСИТЕТА имени Д.И.Менделеева</h1>
              <small className='hn__location'>в городе Ташкенте</small>
              <small className='hn__inter-name'>D.Mendeleev University of Chemical Technology of Russia in Tashkent</small>
            </div>

          </div>
          <div className="mainHeader__right">
            {articles
              .filter((value) => {
                if (
                  value.title.toLowerCase() === 'о филиале' || value.title.toLowerCase() === 'абитуриентам'
                ) {
                  return value
                }
              })
                .map((article) => 
                <a href={'/articles/' + article.slug}>{article.title}</a>
            )}
            <a href="/#" onClick={burgerClick} className='burger'><GiHamburgerMenu className='burgermenu'/></a>
          </div>
          
        </div>
      </a>
    </>
  );
}

export default MainHeader;

