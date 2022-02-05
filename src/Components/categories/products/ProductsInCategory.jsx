import s from './Products.module.css';
import {useEffect, useState} from "react";
import ProductsControls from "./ProductsControls";
import SliderItemInfo from "../../../assets/Components/slider price and rating/SliderItemInfo";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";
import ProductCharacteristic from "./ProductCharacteristic";
import CharacterList from "./CharactersList";
import {ReactComponent as Liked} from "../../../img/mainSlider/liked.svg";
import {ReactComponent as Sravn} from "../../../img/mainSlider/sravnenie.svg";
import ProductInfo from "./ProductInfo";

const ProductsInCategory = (props) => {
    const [productsListType, setProductsListType] = useState(true);
    const [activePage, setActivePage] = useState(1);
    const [sortValue, setSortValue] = useState(1);
    const [productData, setProductData] = useState(props.BiazRenforse);


    const paginator = (el) => {
        if (el.id >= ((activePage * 13) - 12) && el.id <= ((activePage * 13) - 1)) {
            return true
        } else return false;
    }

    const productsCount = Math.ceil(props.BiazRenforse.length / 12);
    let pages = [];
    for (let i = 1; i <= productsCount; i++) {
        pages.push(<li className={i == activePage ? s.active : null} onClick={() => setActivePage(i)} key={i}>{i}</li>)
    }

    /*сортировка*/
    const sortLowerPrice = (e) => {
        setSortValue(e.target.value);
        if (e.target.value == 1) {
            setProductData(productData.sort(
                setProductData(productData.sort(function (a, b) {
                        return +a.id - +b.id;
                    })
                )));
        }
        if (e.target.value == 2) {
            setProductData(productData.sort(function (a, b) {
                return +a.price - +b.price;
            }));
        } else if (e.target.value == 3) {
            setProductData(productData.sort(function (a, b) {
                return +b.price - +a.price;
            }));
        }
    }

    useEffect(() => {
        props.getTitle(props.title);
    },[props.title])

    return (
        <div className={s.products}>
            <h3>{props.title}</h3>
            <ProductsControls sortLowerPrice={sortLowerPrice} productsListType={productsListType}
                              setProductsListType={setProductsListType}/>
            <div className={productsListType ? s.productsItems : s.productsItemsVertical}>
                {productData.filter(el => paginator(el)).map(el => {
                    if (productsListType) {
                        return <div key={el.id} className={s.productItem}>
                            <img src={el.img} alt=""/>
                            <h4>{el.name}</h4>
                            <SliderItemInfo price={el.price}/>
                            <BuyButton>ВЫБРАТЬ</BuyButton>
                            <ProductCharacteristic/>
                        </div>
                    } else {
                        return <div key={el.id} className={s.productItemVertical}>
                            <img src={el.img} alt=""/>
                            <div className={s.productItemVerticalDescr}>
                                <h4>{el.name}</h4>
                                <p>Постельное белье бязь-ранфорс Вилюта 17160. Очень красивая цветочная расцветка с
                                    веточками саку.</p>
                                <CharacterList/>
                            </div>
                            <div className={s.productItemVerticalActions}>
                                <SliderItemInfo price={el.price}/>
                                <div className={s.productControlsVertical}>
                                    <button><Liked className={s.controlsKeys}/> <span>В закладки</span></button>
                                    <button><Sravn className={s.controlsKeys}/> <span>В сравнении</span></button>
                                </div>
                                <BuyButton>ВЫБРАТЬ</BuyButton>
                            </div>
                        </div>
                    }
                })}
            </div>
            <div className={s.productsPages}>
                <ul>
                    {pages}
                </ul>
            </div>
            <ProductInfo/>
        </div>
    );
}

export default ProductsInCategory;