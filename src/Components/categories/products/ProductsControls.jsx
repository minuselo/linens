import s from "./Products.module.css";
import {ReactComponent as Vertical} from "../../../img/categories/vertical.svg";
import {ReactComponent as Horizontal} from "../../../img/categories/horizontal.svg";

const ProductsControls = (props) => {
    return (
        <div className={s.productsControls}>
            <div className={s.listTypeControls}>
                <div onClick={() => props.setProductsListType(!props.productsListType)}
                     className={props.productsListType ? s.verticalWrap : null}><Vertical width="25" height="25"
                                                                                          className={props.productsListType ? null : s.verticalControl}/>
                </div>
                <div onClick={() => props.setProductsListType(!props.productsListType)}
                     className={!props.productsListType ? s.horizontalWrap : null}><Horizontal width="25" height="25"
                                                                                               className={!props.productsListType ? null : s.horizontalControl}/>
                </div>
            </div>
            <select onChange={props.sortLowerPrice}  name="filterType">
                <option value="1">По умолчанию</option>
                <option value="2" >От дешевых к дорогим</option>
                <option value="3">От дорогих к дешевым</option>
            </select>
        </div>
    )
}

export default ProductsControls;