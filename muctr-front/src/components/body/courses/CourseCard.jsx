import React from 'react';
import './Courses.css';
import { TfiArrowRight } from 'react-icons/tfi'

function CourseCard({course}) {

  return (
    <a href='/#' className="courseCard">
      <div className="courseCard__img">
        <img src="" alt="" />
      </div>

      <div className='courseCard__text'>
        <div className='course__name'>
          <p><span>Деловое</span><span>администрирование,</span><span>бакалавр</span></p>
        </div>
        
        <div className="course__level">
          <span>Бакалавриат </span>
        </div>

      </div>


      <div className='cmb'> 
        <div className='course__moreButtonDiv'>
          <TfiArrowRight  className='course__moreButton'/>
        </div> 
      </div>
    </a>
  );
}

export default CourseCard;

