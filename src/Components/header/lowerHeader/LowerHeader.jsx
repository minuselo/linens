import style from './LowerHeader.css';
import logo from './../../../img/logo.png';
import phone from './../../../img/phone-icon.svg';
import liked from './../../../img/liked.svg';
import basket from './../../../img/basket.svg';
import isMobile from "../../../assets/Tools/isMobile";
import {useEffect, useState} from "react";
import classNames from "classnames/bind";
import MenuItems from "./MenuItems";


const LowerHeader = (props) => {
    useEffect(() => {
        if (isMobile.any()) {
            document.body.classList.add('_touch');
        } else {
            document.body.classList.add('_pc');
        }
    })


    return (
        <div className="navigation">
            <div className="navigation__content content">
                <div className="navigation__left">
                    <img src={logo} alt="логотип веб-сайта" className="navigation__logo"/>
                    {/*Основное меню*/}
                    <nav className={props.menuClass}>
                        <ul className="menu__list">
                            <MenuItems isSublist={true}>КАТЕГОРИИ</MenuItems>
                            <MenuItems>БРЕНДЫ</MenuItems>
                            <MenuItems>ИНФОРМАЦИЯ</MenuItems>
                            <MenuItems>О КОМПАНИИ</MenuItems>
                            <MenuItems>НОВОСТИ</MenuItems>
                            <MenuItems>КОНТАКТЫ</MenuItems>
                        </ul>
                    </nav>
                </div>
                <div className="navigation__right">
                    <div className="navigation__phone phone">
                        <h5>066-677-55-33</h5>
                        <button className="phone__btn"><img src={phone} alt="иконка телефона"/>Перезвоните
                            мне
                        </button>
                    </div>
                    <div className="navigation__icons">
                        <div className="navigation__liked"><img src={liked} alt="Понравилось"/>
                            <div className="counter"><span>99</span></div>
                        </div>
                        <div className="navigation__bracket"><img src={basket} alt="Корзина товаров"/>
                            <div className="counter"><span>1</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerHeader;