import style from './UpperHeader.css';
import comparison from '../../../img/sravnenie.svg'
import profile from '../../../img/profile-image.svg'
import search from '../../../img/search-image.svg'
import {useState} from "react";



const UpperHeader = (props) => {
    const [isMobileMenuClicked,setIsMobileMenuClicked]=useState(true);
    const [iconClass,setIconClass]=useState("upper__icon");

    const openMobileMenu=()=>{
        document.body.classList.toggle('_lock');
        setIsMobileMenuClicked(!isMobileMenuClicked);
        /*isMobileMenuClicked?setIconClass("upper__icon _active"):setIconClass("upper__icon");*/
        if (isMobileMenuClicked){
            setIconClass("upper__icon _active");
            props.toggleMenuClass("menu _active");
        }
        else {
            setIconClass("upper__icon");
            props.toggleMenuClass("menu");
        }
    }

    return (
        <div className="upper">
            <div className="upper__content content">
                <div className="upper__nav">
                    <div className={iconClass} onClick={openMobileMenu}>
                        <span></span>
                    </div>
                    <ul>
                        <li>Доставка</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="upper__controls">
                    <a href="#">
                        <div className="upper__controls_showmob hide"><img src={comparison}
                                                                                      alt="Сравнение товаров"/>
                            <div className="counter"><span>0</span></div>
                        </div>
                        <h5>Сравнение: <span>0</span></h5>
                    </a>
                    <a href="#">
                        <div className="upper__controls_showmob"><img src={profile} alt="proflie image"/>
                        </div>
                        <h5 className="upper__personal">Личный кабинет</h5>
                    </a>
                    <div className="upper__search upper__controls_showmob"><img src={search}
                                                                                                    alt="search on web-site"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperHeader;