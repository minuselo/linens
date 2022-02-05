import s from "./newsSection.module.css";
import news1 from "../../../img/news/news1.jpg";

const NewsItem=(props)=>{
    return ( <div className={s.news__item}>
        <img src={props.img} align="left" alt=""/>
        <h5>{props.title}</h5>
        <p className={s.news__data}>{props.data}</p>
        <p>Повседневная практика
            показывает, что новая модель организационной деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании позиций, занимаемых участниками.</p>
    </div>);
}

export default NewsItem;