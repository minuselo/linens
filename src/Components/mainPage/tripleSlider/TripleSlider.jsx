import Slider from "react-slick";
import s from './TripleSlider.css';
import ts1 from './../../../img/TripleSlider/ts1.jpg';
import ts2 from './../../../img/TripleSlider/ts2.jpg';
import ts3 from './../../../img/TripleSlider/ts3.jpg';
import ts4 from './../../../img/TripleSlider/ts4.jpg';
import ts5 from './../../../img/TripleSlider/ts5.jpg';
import ts6 from './../../../img/TripleSlider/ts6.jpg';
import TripleSliderSlide from "./TripleSliderSlide";


const TripleSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:2
    };
    return (
        <div className="tripleSlider">
            <div className="tripleSlider__slider">
                <h5>Избранное</h5>
                <Slider {...settings}>
                    <TripleSliderSlide price="350" name="Плед “Лондон”" img={ts1}/>
                    <TripleSliderSlide price="146" name="Байковое одеяло" img={ts2}/>
                    <TripleSliderSlide price="300" name="Байковое одеяло" img={ts2}/>
                    <TripleSliderSlide price="550" name="Плед “Лондон”" img={ts1}/>
                </Slider>
            </div>
            <div className="tripleSlider__slider">
                <h5>ХИТЫ ПРОДАЖ</h5>
                <Slider {...settings}>
                    <TripleSliderSlide price="157" name="Флисовый плед “Клетка”" img={ts3}/>
                    <TripleSliderSlide price="185" name="Плед акрил/шерсть" img={ts4}/>
                    <TripleSliderSlide price="287" name="Плед акрил/шерсть" img={ts4}/>
                    <TripleSliderSlide price="350" name="Флисовый плед “Клетка”" img={ts3}/>
                </Slider>
            </div>
            <div className="tripleSlider__slider">
                <h5>РЕКОМЕНДУЕМ</h5>
                <Slider {...settings}>
                    <TripleSliderSlide price="155" name="Плед “Палермо”" img={ts5}/>
                    <TripleSliderSlide price="185" name="Постельное белье бязь-ранфорс" img={ts6}/>
                    <TripleSliderSlide price="255" name="Постельное белье бязь-ранфорс" img={ts6}/>
                    <TripleSliderSlide price="1500" name="Плед “Палермо”" img={ts5}/>
                </Slider>
            </div>
        </div>
    );

}

export default TripleSlider;