import { useRef } from "react";
import navCSS from "../styles/Nav.module.css"

function Nav() {

    const menu = useRef<HTMLUListElement | null>(null);

    const menuhandler = () => {
        if (menu.current) {
            menu.current.classList.toggle(navCSS.openMenu);
        }
    }

    return (
        <div className={navCSS.nav}>
            <div className={navCSS.logo}>
                <a href="#">Burdeyniy B.</a>
            </div>

            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuhandler}></i>
        </div>
    )
}

export default Nav;