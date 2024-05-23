import style from "./appBar.module.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.logoPositions}>
        <img className={style.logo} src={logo} alt="" />
        <div>
          <p className={style.logoTitle}>
            ЭлектроЖор
          </p>
          <p className={style.logoDecription}>Электромонтажные работы</p>
        </div>
      </div>
      <div className={style.navButtons}>
        <a href="#uslugi">Услуги</a>
        <a href="#about">О компании</a>
        <a href="#footer">Наши работы</a>
        <a href="#works">Контакты</a>
      </div>
      <div className={style.blockCallback}>
        <p className={style.phoneNumber}>
        +7-909-383-99-46
        </p>
        <a href="" className={style.phoneCall}>
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
      </NavDropdown>
    </div>
  )
}

export default NavBar