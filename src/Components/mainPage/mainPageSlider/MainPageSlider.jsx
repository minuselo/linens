import Slider from "react-slick";
import s from './MainPageSlider.css';
import msld1 from '../../../img/mainSlider/msld1.webp'
import msld2 from '../../../img/mainSlider/msld2.webp'
import msld3 from '../../../img/mainSlider/msld3.webp'
import msld4 from '../../../img/mainSlider/msld4.webp'
import msld5 from '../../../img/mainSlider/msld5.webp'
import StarRating from "../../../assets/Components/rating/StarRating";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";
import {ReactComponent as Liked} from '../../../img/mainSlider/liked.svg';
import {ReactComponent as Sravn} from '../../../img/mainSlider/sravnenie.svg';
import SliderSlide from "./SliderSlide";
import React from "react";


const MainPageSlider = () => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows:false
                }
            },
        ]
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <SliderSlide price="650" name="Шерстаное одеяло Влади" img={msld1} />
                <SliderSlide price="450" name="Шерстаное одеяло Влади" img={msld1} />
                <SliderSlide price="450" name="Шерстаное одеяло Влади" img={msld2} />
                <SliderSlide price="550" name="Полушерстяное оделяло Вилюта" img={msld3} />
                <SliderSlide price="550" name="Полушерстяное оделяло Вилюта" img={msld3} />
                <SliderSlide price="560" name="Полушерстяное оделяло Вилюта" img={msld4} />
                <SliderSlide price="560" name="Полушерстяное оделяло Вилюта" img={msld4} />
                <SliderSlide price="450" name="Полушерстяное оделяло Вилюта" img={msld5} />
                <SliderSlide price="450" name="Полушерстяное оделяло Вилюта" img={msld5} />
                <SliderSlide price="750" name="Жаккардовое одеяло" img={msld5} />
                <SliderSlide price="350" name="Жаккардовое одеяло" img={msld4} />
                <SliderSlide price="360" name="Шерстаное одеяло Влади" img={msld1} />
                <SliderSlide price="560" name="Полушерстяное оделяло Вилюта" img={msld4} />
                <SliderSlide price="450" name="Полушерстяное оделяло Вилюта" img={msld5} />
            </Slider>
        </div>

    );
}


export default MainPageSlider;