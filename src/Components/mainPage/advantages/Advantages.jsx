import s from './advantages.module.css'
import classNames from 'classnames';
import delivery from './../../../img/advantages/delivery.webp';
import pay from './../../../img/advantages/pay.webp';
import orders from './../../../img/advantages/orders.webp';
import adv1 from './../../../img/advantages/adv1.webp';
import adv2 from './../../../img/advantages/adv2.webp';
import adv3 from './../../../img/advantages/adv3.webp';
import StarRating from "../../../assets/Components/rating/StarRating";

const Advantages = () => {
    return (<section className={classNames(s.advantages, s.content)}>
        <div className={s.advantages__adv}>
            <div className={s.advantages__item}>
                <img src={delivery} alt="Доставка"/>
                <div className={s.advantages__info}>
                    <h5>Бесплатная доставка</h5>
                    <p>Мы осуществляем бесплатную доставку, чтобы вам было максимально удобно заказывать нашу
                        продукцию</p>
                </div>
            </div>
            <div className={s.advantages__item}>
                <img src={pay} alt="Оплата"/>
                <div className={s.advantages__info}>
                    <h5>Платите как вам удобно</h5>
                    <p>Вы можете оплатить заказ прямо на сайте, с помощью карты, либо оформить посылку наложенным
                        платежом</p>
                </div>
            </div>
            <div className={s.advantages__item}>
                <img src={orders} alt="Заказы"/>
                <div className={s.advantages__info}>
                    <h5>Принимаем заказы 24/7</h5>
                    <p>Заказывайте в любое удобное время для вас. Будь то 6 утра или 11 вечера, мы готовы принять
                        ваш заказ!</p>
                </div>
            </div>
        </div>
        <div className={s.advantages__prods}>
            <div className={s.advantages__product}>
                <img src={adv1} alt=""/>
                <h4>Махровые полотенца</h4>
                <p>Именно те махровые полотенца, которые вы полюбите с первого прикосновения</p>
                <a href="">
                    <button className={s.advantages__btn}>ПОДРОБНЕЕ</button>
                </a>
            </div>
            <div className={s.advantages__product}>
                <img src={adv2} alt=""/>
                <p className={s.novice}>НОВИНКА!</p>
                <h4>Набор классических мужских
                    носков</h4>
                <a href="">
                    <button className={s.advantages__btn}>ПОДРОБНЕЕ</button>
                </a>
            </div>
            <div className={s.advantages__product}>
                <img src={adv3} alt=""/>
                <h4>Постельное белье Сатин-Твил Вилюта</h4>
                <div className={s.advantages__pricing}>
                    <h5>671 ГРН</h5>
                    <StarRating/>
                </div>
                <a href="">
                    <button className={s.advantages__btn}>ПОДРОБНЕЕ</button>
                </a>
            </div>
        </div>
    </section>
)
}

export default Advantages;