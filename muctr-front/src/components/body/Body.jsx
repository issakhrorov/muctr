import React from 'react';
import Background from './background/Background';
import Study from './study/Study';
import Strengths from './strengths/Strengths';
import News from './news/News';
import Courses from './courses/Courses';

function Body({articles, widgets, news}) {
  const study = widgets.filter((value) => {
    if (
      value.name.toLowerCase() === 'study') {
      return value
    }
  })

  const strengths = widgets.filter((value) => {
    if (
      value.name.toLowerCase() === 'strengths') {
      return value
    }
  })

  const courses = widgets.filter((value) => {
    if (
      value.name.toLowerCase() === 'courses') {
      return value
    }
  })

  return (
    <div className='main'>
      {study[0] ? (
        <Study widget={study} />
      ) : (
        <div></div>
      )}

      {strengths[0] ? (
        <Strengths widget={strengths} />
      ) : (
        <div></div>
      )}

      {courses[0] ? (
        <Courses widget={courses} />
      ) : (
        <div></div>
      )}
{/* 
      <Study />
      <Strengths />
      <Courses /> */}

      <News news={news}/>
    </div>
    
  );
}

export default Body;