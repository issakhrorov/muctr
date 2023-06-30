import React from 'react';
import './Courses.css';
import CourseCard from './CourseCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className="courses">
      <div className="courses__container">

        <h2 className='courses__title'>НАЙДИТЕ СВОЙ КУРС</h2>
        <p className='courses__desc'>Изучаете бизнес-психологию или деловое администрирование в Вене? Вас интересует, что движет людьми в их действиях, или вы хотели бы узнать больше об управлении и лидерстве в компаниях? Какими бы ни были ваши интересы, найдите правильный курс для себя прямо сейчас и станьте на шаг ближе к своим целям!</p>

        <div className=''>
          <Slider {...settings}>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />

          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Courses;


