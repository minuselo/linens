import MenuSublist from "./MenuSublist";
import {useState} from "react";

const MenuItems = (props) => {
    const [classIsActive,setClassIsActive]=useState("menu__items");
    const setItemClass=(value)=>{
        setClassIsActive(value);
    }

    return (<li className={classIsActive}><a href="#" className="menu__link">{props.children}
    </a>
        {props.isSublist ? <MenuSublist setItemtClass={setItemClass}/> : null}
    </li>)

}


export default MenuItems;