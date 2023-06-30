import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <ul className="footer__contacts">
            <li>125047, г. Москва, Миусская площадь, д. 9</li>
            <li>125047, г. Москва, Миусская площадь, д. 9</li>
            <li><a href="/#" > Письмо ректору</a></li>
          </ul>

          <ul className="footer__menuLinks">
            <li><a href="/#">Сведения об образовательной организации</a></li>
            <li><a href="/#">Сведения об образовательной организации</a></li>

          </ul>

          <div className="footer__links">
            <a href="/#"><FaFacebookF size={27} className='link__icon'/></a>
            <a href="/#"><FaInstagram size={30} className='link__icon' /></a>
            <a href="/#"><FaTelegramPlane size={30} className='link__icon' /></a>
            <a href="/#"><FaYoutube size={30} className='link__icon' /></a>
          </div>
        </div>


        <p className='certify'>© 2023 Филиал Российского химико-технологического университета имени Д.И.Менделеева в городе Ташкенте</p>
      </div>
    </div>
  );
}

export default Footer;
