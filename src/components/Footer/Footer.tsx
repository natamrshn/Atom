import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__social">
          <nav className="footer__social-nav">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  href="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <img
                    src="src/assets/icons/footer/footerIcons/footerFacebookIcon.svg"
                    alt="Facebook icon"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <img
                    src="src/assets/icons/footer/footerIcons/footerInstagramIcon.svg"
                    alt="Instagram icon"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                >
                  <img
                    src="src/assets/icons/footer/footerIcons/footerYoutubeIcon.svg"
                    alt="Youtube icon"
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item"
              >
                <a
                  href="tik-tok" target="_blank"
                  rel="noopener
                  noreferrer"
                  className="footer__social-link"
                >
                  <img
                    src="src/assets/icons/footer/footerIcons/footerTiktokIcon.svg"
                    alt="Tik-tok icon"
                    className="footer__social-icon"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <h2 className="footer__brand-name">at.university</h2>
        </section>

        <div className="footer__logo">
          <img
            src="src/assets/icons/footer/footerLogo/Group 427322007.svg"
            alt="Atom Logo"
            className="footer__logo-image"
          />
        </div>

        <section className="footer__contacts">
          <h2 className="footer__contacts-title">Контакти</h2>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a href="tel:0800334125" className="footer__contacts-link">
                <img
                  src="src/assets/icons/footer/footerContactsIcons/number.svg"
                  alt="Contact number"
                  className="footer__contacts-icon"
                />
                <span className="footer__contacts-text">0 800 33 41 25</span>
              </a>
            </li>
            <li className="footer__contacts-item">
              <a href="mailto:info@at.university" className="footer__contacts-link">
                <img
                  src="src/assets/icons/footer/footerContactsIcons/mail.svg"
                  alt="Contact mail"
                  className="footer__contacts-icon"
                />
                <span className="footer__contacts-text">info@at.university</span>
              </a>
            </li>
            <li className="footer__contacts-item">
              <address className="footer__contacts-address">
                <img
                  src="src/assets/icons/footer/footerContactsIcons/adress.svg"
                  alt="Address"
                  className="footer__contacts-icon"
                />
                <span className="footer__contacts-text">Київ, вул. Князів Острозьких, 2</span>
              </address>
            </li>
          </ul>
        </section>
      </div>

      <div className="subfooter">
        <ul className='subfooter__list'>
          <li className='subfooter__item'>
            © 2025, Всі права захищені
          </li>
          <li className='subfooter__item'>
            <Link to="/privacy" className="subfooter__link">
              Політика конфіденційності
            </Link>
          </li>
          <li className='subfooter__item'>
            <Link to="/offer" className="subfooter__link">
              Договір оферти UA/UA
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;