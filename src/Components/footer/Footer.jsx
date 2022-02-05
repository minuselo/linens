import s from './Footer.module.css';
import map from './../../img/footer/map.svg';
import mail from './../../img/footer/mail.svg';
import phone from './../../img/footer/phone.svg';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__item}>
                <h3>ИНФОРМАЦИЯ</h3>
                <ul>
                    <li>О нас</li>
                    <li>Доставка</li>
                    <li>Политика безопасности</li>
                    <li>Как заказать?</li>
                </ul>
            </div>
            <div className={s.footer__item}>
                <h3>ДОПОЛНИТЕЛЬНО</h3>
                <ul>
                    <li>Производители</li>
                    <li>Подарочные сертификаты</li>
                    <li>Партнерская программа</li>
                    <li>Акции</li>
                    <li>Связаться с нами</li>
                    <li>Возврат товара</li>
                    <li>Карта сайта</li>
                </ul>
            </div>
            <div className={s.footer__item}>
                <h3>ЛИЧНЫЙ КАБИНЕТ</h3>
                <ul>
                    <li>Личный Кабинет</li>
                    <li>История заказов</li>
                    <li>Закладки</li>
                    <li>Рассылка</li>
                </ul>
            </div>
            <div className={s.footer__item}>
                <h3>КОНТАКТЫ</h3>
                <ul>
                    <li><img src={map} alt=""/>
                        Украина</li>
                    <li><img src={phone} alt=""/>
                        38011111111</li>
                    <li><img src={mail} alt=""/>
                    example@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;