import React from 'react';
import './News.css';
import NewsCard from './NewsCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function News({news}) {
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
    <div className="news">

      <div className="news__container">
        <h2 className="news__title">ПОСЛЕДНИЕ СООБЩЕНИЯ В БЛОГЕ</h2>

        <div className="">
          <Slider {...settings}>
            {news.length !== 0 ? (news
              .map((newsCard) => 
                <NewsCard newsCard={newsCard} />
            )) :
              (<div></div>)
            }

          </Slider>
        </div>
      </div>
      
    </div>
  );
}

export default News;
