import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Header.module.css';
import CabecalhoLink from "../HeaderLink";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Logo Cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./favoritos">Favorites</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Header;