import React from 'react';
import './ForStudents.css';
import { FaCalendarAlt, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { CgList } from 'react-icons/cg'

function ForStudents() {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const today = new Date();

  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate().toString();
  const month = months[today.getMonth() + 1]
  const year = today.getFullYear().toString();

  const todayDate = `${dayOfWeek}, ${day} ${month} ${year}`;

  return (
    <div className="header__students">
      <div className="students__container">
        <div className="students__left">
          <a href="/#" className="students__menu"><FaCalendarAlt size={10} style={{ color: 'white', position: 'absolute' }}/><p>{todayDate}</p></a>
          <a href="/#" className="students__menu"><CgList size={10} style={{ color: 'white', position: 'absolute' }}/><p>Расписание</p></a>
          <a href="/#" className="students__menu"><FaPhoneAlt size={10} style={{ color: 'white', position: 'absolute' }}/><p>Связаться с приемной комиссией</p></a>
        </div>
        <div className="students__right">
          <a href="/#" className="students__search"><FaSearch size={10} style={{ color: 'white', top: '4'}}/></a>
        </div>
      </div>
    </div>
  );
}

export default ForStudents;

