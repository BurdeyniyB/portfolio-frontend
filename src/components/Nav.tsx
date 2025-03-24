import { useEffect, useRef } from "react";
import navCSS from "../styles/Nav.module.css";

function Nav() {
    const menu = useRef<HTMLUListElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    // Закриття меню при кліку за межами або на посилання
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menu.current &&
                !menu.current.contains(event.target as Node) &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                menu.current.classList.remove(navCSS.openMenu);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const menuhandler = () => {
        if (menu.current) {
            menu.current.classList.toggle(navCSS.openMenu);
        }
    };

    // Функція для закриття меню при натисканні на посилання
    const closeMenu = () => {
        if (menu.current) {
            menu.current.classList.remove(navCSS.openMenu);
        }
    };

    return (
        <div ref={navRef} className={`${navCSS.nav}`}>
            <div className={navCSS.logo}>
                <a href="#">Burdeyniy B.</a>
            </div>

            <ul ref={menu}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>

            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuhandler}></i>
        </div>
    );
}

export default Nav;
