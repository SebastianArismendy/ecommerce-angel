import '../assets/css/home/style.css';
import { Image } from 'react-bootstrap';
import Logo from '../images/logo.jpeg';
import { AiFillMail,AiFillPhone } from "react-icons/ai";
import { BsFillPinFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <Image
                    src={Logo}
                    className="footer__logo p-0"
                />
                <h2>Contact</h2>
                <span><AiFillMail size="1.4rem" /> sebax1502@gmail.com</span>
                <address>
                    <BsFillPinFill size="1.4rem" />Cra. 52 #48-45, La Candelaria
                </address>
                <span>
                    <AiFillPhone size="1.4rem" /> +57 3045864289
                </span>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                </li>
                <li className="nav__item">
                    <h2 className="nav__title">Categorias</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Camisas</a>
                        </li>

                        <li>
                            <a href="#">Pantalones</a>
                        </li>

                        <li>
                            <a href="#">boxer</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item nav__item--extra">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Política de privacidad</a>
                        </li>

                        <li>
                            <a href="#">Términos y condiciones</a>
                        </li>
                    </ul>
                </li>


            </ul>

            <div className="legal">
                <p>&copy; 2023, Todos los derechos reservados.</p>

                <div className="legal__links">
                    <span>Hecho en <span className="heart">♥</span> colombia</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;