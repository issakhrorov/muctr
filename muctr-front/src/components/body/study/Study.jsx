import React from 'react';
import './Study.css';
import { FaChevronRight } from 'react-icons/fa'

function Study({widget}) {

  return (
    <div className="study">
      <h2 className='studyTitle'>
        <p>
          {widget.title}
        </p>
      </h2>
      <div className='videoDiv'>

        <div className="videoDiv__container">
          <div className="videoDesc">
            <h2>ВАШ УНИВЕРСИТЕТ УСТОЙЧИВОГО РАЗВИТИЯ</h2>
            <p>Частный университет Шарлотты Фрезениус является первым устойчивым частным университетом в Австрии. Новые знания, развитые межличностные навыки, интересные проекты с компаниями и устойчивое сообщество с однокурсниками гарантируют, что вы сможете развиваться.</p>
            <div className="videoDesc__button">
              <a href="/#">Почему учиться у нас <FaChevronRight className='videoDesc__icon'/></a>
            </div>
          </div>
          <div className="videoPlayer">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/zOF_QoVK7n8" title='Descriptional video' frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Study;

