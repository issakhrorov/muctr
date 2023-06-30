import React from 'react';
import ForStudents from './ForStudents';
import MainHeader from './MainHeader';

function Header({articles}) {
  return (
    <div className='header'>
      <ForStudents />
      <MainHeader articles={articles}/>
    </div>
  );
}

export default Header;

