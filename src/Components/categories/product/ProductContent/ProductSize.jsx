import s from "./product.module.css";
import React from "react";


const ProductSize=()=>{
    return(<div className={s.productSize}>
        <h5>Выбери размер постельного белья:</h5>
        <div>Полуторный (Пододеяльник 145х210 см; Простынь 145х210 см; 2 наволочки)</div>
        <div>Двуспальный (Пододеяльник 175х210 см; Простынь 200х220 см; 2 наволочки)</div>
        <div>Евро №6 (Пододеяльник 200х220 см; Простынь 220х240 см; 2 наволочки)</div>
        <div>Семейный ( 2 пододеяльника 145х210 см; Простынь 220х240 см; 2 наволочки)</div>
    </div>)
}

export default ProductSize;