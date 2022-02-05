import s from './newsSection.module.css';
import news1 from './../../../img/news/news1.jpg';
import NewsItem from "./newsItem";
import news2 from './../../../img/news/news2.jpg';
import news3 from './../../../img/news/news3.jpg';

const NewsSection = (props) => {
    return (
        <div className={s.news}>
            <h2>Рекомендуем посмотреть</h2>
            <div className={s.news__items}>
                <NewsItem img={news1} title="Как лучше стирать нашу продукцию?" data="22.01.2021"/>
                <NewsItem img={news2} title="Как лучше стирать нашу продукцию?" data="22.12.2020"/>
                <NewsItem img={news3} title="Как лучше стирать ?" data="22.12.2020"/>
            </div>
        </div>
    );
}

export default NewsSection;