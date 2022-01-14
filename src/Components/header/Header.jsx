import UpperHeader from "./upperHeader/UpperHeader";
import LowerHeader from "./lowerHeader/LowerHeader";
import {useState} from "react";

const Header = () => {
    const [menuClass,setMenuClass]=useState("menu");

    const toggleMenuClass=(value)=>{
        setMenuClass(value);
    }

    return (
        <header className="App-header">
            <UpperHeader toggleMenuClass={toggleMenuClass}/>
            <LowerHeader menuClass={menuClass} />
        </header>)
}

export default Header;