import {useState} from "react";

const MenuSublist = (props) => {
    const [isClicked, setIsClicked] = useState(true);

    const openSubMenu = () => {
        setIsClicked(!isClicked);
        isClicked ? props.setItemtClass("menu__items _active") : props.setItemtClass("menu__items")
    }

    return (<><span className="menu__arrow" onClick={openSubMenu}></span>
        <ul className="menu__sublist">
            <li className="menu__subitems"><a href="" className="menu__sublink">Постельное
                белье</a></li>
            <li className="menu__subitems"><a href=""
                                              className="menu__sublink">Одеяла</a>
            </li>
            <li className="menu__subitems"><a href=""
                                              className="menu__sublink">Пледы</a>
            </li>
            <li className="menu__subitems"><a href="" className="menu__sublink">Махровые
                изделия</a></li>
            <li className="menu__subitems"><a href="" className="menu__sublink">Детский
                текстиль</a></li>
        </ul>
    </>);

}
export default MenuSublist;