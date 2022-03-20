import s from "./product.module.css";
import upper from "../../../img/categories/upperarrow.svg";
import lower from "../../../img/categories/lowerarrow.svg";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";
import React, {useState} from "react";


const ProductOrder=()=>{
    const [productsCount, setProductsCount] = useState(0);

    return(<div className={s.productOrder}>
        <div className={s.productCount}>
            <span>{productsCount}</span>
            <div>
                <img src={upper} onClick={() => setProductsCount(productsCount + 1)} alt=""/>
                <img src={lower}
                     onClick={() => productsCount > 0 ? setProductsCount(productsCount - 1) : null}
                     alt=""/>
            </div>
        </div>
        <BuyButton>Купить</BuyButton>
        <BuyButton fastorder>Быстрый заказ</BuyButton>
    </div>)
}


export default ProductOrder;