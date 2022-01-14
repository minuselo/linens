import linens from './../../../img/products/linens.webp';
import pillows from './../../../img/products/pillows.webp';
import plaid from './../../../img/products/plaid.webp';
import blankets from './../../../img/products/blankets.webp';
import terry from './../../../img/products/terry.webp';
import s from './Products.module.css';
import classNames from "classnames";


const Products = () => {
    return (<section className={s.products}>
        <div className={classNames(s.products__left,s.products__content)}>
            <img src={linens} alt="Постельное белье" className={s.product__big}/>
                <img src={pillows} alt="Подушки"/>
        </div>
        <div className={classNames(s.products__midle,s.products__content)}>
            <img src={plaid} alt="Пледы"/>
        </div>
        <div className={classNames(s.products__right,s.products__content)}>
            <img src={blankets} alt="Одеяла"/>
                <img src={terry} alt="Махровые изделия" className={s.product__big}/>
        </div>
    </section>
)
}

export default Products;