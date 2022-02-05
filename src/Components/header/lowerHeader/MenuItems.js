import MenuSublist from "./MenuSublist";
import {useState} from "react";
import {Link} from "react-router-dom";

const MenuItems = (props) => {
    const [classIsActive,setClassIsActive]=useState("menu__items");
    const setItemClass=(value)=>{
        setClassIsActive(value);
    }

    return (<li className={classIsActive}><Link to={`/${props.link}`} className="menu__link">{props.children}
    </Link>
        {props.isSublist ? <MenuSublist setItemtClass={setItemClass}/> : null}
    </li>)

}


export default MenuItems;