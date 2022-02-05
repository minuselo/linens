import Breadcrumbs from "../../assets/Components/breadcrumbs/breadcrumbs";
import {NavLink, Route, useLocation} from "react-router-dom";
import s from './Categories.module.css';
import s2 from './ActiveStyles.css';
import CategorySection from "./CategorySection";
import {Routes} from "react-router";
import React, {useState} from "react";
import ProductsInCategory from "./products/ProductsInCategory";
import navicon from "../../img/categories/navicon.svg";
import {BiazRenforse} from "../../Data/CategoriesData";


const Categories = () => {
    //моб. меню
    const [ToggleMobileNav, setToggleMobileNav] = useState(true);
    const openMobileNav = () => {
        setToggleMobileNav(!ToggleMobileNav);
    }
    //хлебные крошки установка title
    const [ActiveTitle, SetActiveTitle] = useState();

    const getTitle = (title) => {
        SetActiveTitle(title);
    }

    return (
        <div className={s.categories}>
            <div className={`${s.categoriesContent} content`}>
                <Breadcrumbs title={ActiveTitle}/>
                <div className={s.contentMain}>
                    <aside className={s.categoriesSidebar}>
                        <nav className={s.categoriesMenu}>
                            <h3>КАТЕГОРИИ <span onClick={openMobileNav}><img src={navicon} alt=""/></span></h3>
                            <ul className={`${s.categoriesList} categories__active ${ToggleMobileNav ? 'categories__mobilenav' : null}`}>
                                <li><NavLink to='linens'>Постельное белье</NavLink></li>
                                <li><NavLink to='biaz-renfors'>Бязь-ранфорс</NavLink></li>
                                <li><NavLink to='satin-gakkard'>Сатин-Жаккард</NavLink></li>
                                <li><NavLink to='satin-lux'>Сатин-Люкс</NavLink></li>
                                <li><NavLink to='satin-tvil'>Сатин-Твил</NavLink></li>
                                <li><NavLink to='blankets'>Одеяла</NavLink></li>
                                <li><NavLink to='pillows'>Подушки</NavLink></li>
                                <li><NavLink to='plaid'>Пледы</NavLink></li>
                                <li><NavLink to='terry'>Махровые изделия</NavLink></li>
                                <li><NavLink to='for-childrens'>Детский текстиль</NavLink></li>
                                <li><NavLink to='for-kitchen'>Для кухни</NavLink></li>
                                <li><NavLink to='sheets'>Простыни</NavLink></li>
                                <li><NavLink to='bedspreads'>Покрывала</NavLink></li>
                                <li><NavLink to='novelties'>Новинки</NavLink></li>
                            </ul>
                        </nav>
                    </aside>
                    <Routes>
                        <Route path="" element={<h3>Выберите категорию</h3>}/>
                        <Route path="linens"
                               element={<CategorySection getTitle={getTitle} title={"Постельное белье"}/>}/>
                        <Route path="biaz-renfors"
                               element={<ProductsInCategory getTitle={getTitle} BiazRenforse={BiazRenforse}
                                                            title={"Бязь-ранфорс"}/>}/>
                        <Route path="satin-gakkard"
                               element={<CategorySection getTitle={getTitle} title={"Сатин-Жаккард"}/>}/>
                        <Route path="satin-lux" element={<CategorySection getTitle={getTitle} title={"Сатин-Люкс"}/>}/>
                        <Route path="satin-tvil" element={<CategorySection getTitle={getTitle} title={"Сатин-Твил"}/>}/>
                        <Route path="blankets" element={<CategorySection getTitle={getTitle} title={"Одеяла"}/>}/>
                        <Route path="pillows" element={<CategorySection getTitle={getTitle} title={"Подушки"}/>}/>
                        <Route path="plaid" element={<CategorySection getTitle={getTitle} title={"Пледы"}/>}/>
                        <Route path="terry"
                               element={<CategorySection getTitle={getTitle} title={"Махровые изделия"}/>}/>
                        <Route path="for-childrens"
                               element={<CategorySection getTitle={getTitle} title={"Детский текстиль"}/>}/>
                        <Route path="for-kitchen" element={<CategorySection getTitle={getTitle} title={"Для кухни"}/>}/>
                        <Route path="sheets" element={<CategorySection getTitle={getTitle} title={"Простыни"}/>}/>
                        <Route path="bedspreads" element={<CategorySection getTitle={getTitle} title={"Покрывала"}/>}/>
                        <Route path="novelties" element={<CategorySection getTitle={getTitle} title={"Новинки"}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Categories;