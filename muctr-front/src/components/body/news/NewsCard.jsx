import React from 'react';
import './News.css';
import { TfiArrowRight } from 'react-icons/tfi'



function NewsCard({newsCard}) {
  return (
    <a href={'news/' + newsCard.title} className="news__card">
      <div className="nc__img">
        <img src={newsCard.thumbnail} alt="" />
      </div>

      <div className="nc__desc">
        <span className="nc__data">{newsCard.news_date}</span>
        <a className='nc__descText'>{newsCard.title}</a>
        <div className='nc__moreButtonDiv'>
            <TfiArrowRight  className='nc__moreButton'/>
          </div> 
      </div>
    </a>
  );
}

export default NewsCard;
