import s from "./product.module.css";
import StarRating from "../../../assets/Components/rating/StarRating";
import {Link} from "react-router-dom";
import upper from "../../../img/categories/upperarrow.svg";
import lower from "../../../img/categories/lowerarrow.svg";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";
import {ReactComponent as Like} from "../../../img/categories/assets/like.svg";
import {ReactComponent as Compare} from "../../../img/categories/assets/compare.svg";
import {ReactComponent as LikeSocial} from "../../../img/categories/assets/likesocial.svg";
import {ReactComponent as Twitter} from "../../../img/categories/assets/twitter.svg";
import React, {useState} from "react";
import ProductSize from "./ProductSize";
import ProductOrder from "./ProductOrder";


const ProductMain = ({productData}) => {

    const [likesCount, setLikesCount] = useState(0);


    return (<div className={s.productMain}>
            <img src={productData.img} alt=""/>
            <div className={s.productInfo}>
                <h3>{productData.name}</h3>
                <div className={s.productRating}>
                    <div><StarRating/>
                        <p>47 отзывов</p></div>
                    <Link to="jhghfjgf">Написать отзыв</Link>
                </div>
                <div className={s.productPrice}>
                    <h3>{productData.price} ГРН</h3>
                    {productData.isAvailable ? <span>Есть в наличии</span> : null}
                </div>
                <h5>Производитель: <span>{productData.factory}</span></h5>
                <ProductSize/>
                <ProductOrder/>
                <div className={s.productIcons}>
                    <div><Like/></div>
                    <div><Compare/></div>
                    <div onClick={() => setLikesCount(likesCount + 1)}>
                        <LikeSocial/><span>Like <span>{likesCount}</span></span></div>
                    <div><Twitter/></div>

                </div>
            </div>
        </div>
    )
}

export default ProductMain;