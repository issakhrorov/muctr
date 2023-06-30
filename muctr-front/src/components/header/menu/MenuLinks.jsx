import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import { IoIosArrowDown } from 'react-icons/io'

function MenuLinks({article}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }


  return (
    // <div className="menu__link-li dropdown" ref={dropdownRef}>
    //   <a className="menu__link dropdown-toggle" onClick={toggleMenu} tabIndex="1" >
    //     {article.title} <IoIosArrowDown className='menu__icon'/>
    //   </a>

    //   {isOpen && (
    //     <ul className={`${isOpen ? 'show' : ''}` + "dropdown-menu menu__inner"}>
    //       <li><a href="/abitur/enrol-muctr/">Поступление в вуз</a></li>
    //       <li><a href="https://future.muctr.ru/">Навигатор поступления</a></li>
    //       <li><a href="/abitur/transfer/">Перевод из другой образовательной организации</a></li>
    //       <li><a href="/abitur/school/sarkisov/osnovnaya-informatsiya/">Межрегиональная химическая олимпиада школьников имени акад. П. Д. Саркисова</a></li>
    //       <li><a href="/abitur/school/open_day/">Дни открытых дверей</a></li>
    //     </ul>
    //   )}
    // </div>

    <div className="menu__link-li dropdown">
      <a className="menu__link dropdown-toggle" onClick={toggleMenu} tabIndex="1" >
        <IoIosArrowDown className='menu__icon'/>
      </a>

      <ul className={`${isOpen ? 'show' : ''} ` + " dropdown-menu menu__inner"}>
        <li><a href="/abitur/enrol-muctr/">Поступление в вуз</a></li>
        <li><a href="https://future.muctr.ru/">Навигатор поступления</a></li>
        <li><a href="/abitur/transfer/">Перевод из другой образовательной организации</a></li>
        <li><a href="/abitur/school/sarkisov/osnovnaya-informatsiya/">Межрегиональная химическая олимпиада школьников имени акад. П. Д. Саркисова</a></li>
        <li><a href="/abitur/school/open_day/">Дни открытых дверей</a></li>
      </ul>
    </div>
  );
}

export default MenuLinks;