import style from "./appBar.module.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { phoneDigits } from '../../utils/phone';

function NavBar() {
  const phone = useSelector((state) => state.settings.phone);
  return (
    <div className={style.navBar}>
      <div className={style.logoPositions}>
        <img className={style.logo} src={logo} alt="" />
        <div>
          <p className={style.logoTitle}>
            ЭлектроТочка34
          </p>
          <p className={style.logoDecription}>Электромонтажные работы</p>
        </div>
      </div>
      <div className={style.navButtons}>
        <a href="#uslugi">Услуги</a>
        <a href="#about">О компании</a>
        <a href="#footer">Наши работы</a>
        <a href="#works">Контакты</a>
        <Link className={style.adminLink} to="/admin">Админ панель</Link>
      </div>
      <div className={style.blockCallback}>
        <p className={style.phoneNumber}>
          {phone}
        </p>
        <a href={`tel:+${phoneDigits(phone)}`} className={style.phoneCall}>
          Позвонить по телефону
        </a>
      </div>
      <NavDropdown className={style.mobileNavBtn} title="Меню" id="basic-nav-dropdown">
        <NavDropdown.Item href="#uslugi">Услуги</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#about">
          О компании
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#works">Наши работы</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#footer">
          Контакты
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/admin">Админ панель</NavDropdown.Item>
      </NavDropdown>
    </div>
  )
}

export default NavBar