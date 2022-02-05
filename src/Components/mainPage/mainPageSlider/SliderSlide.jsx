import msld1 from "../../../img/mainSlider/msld1.webp";
import StarRating from "../../../assets/Components/rating/StarRating";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";
import {ReactComponent as Liked} from "../../../img/mainSlider/liked.svg";
import {ReactComponent as Sravn} from "../../../img/mainSlider/sravnenie.svg";
import SliderItemInfo from "../../../assets/Components/slider price and rating/SliderItemInfo";


const SliderSlide=(props)=>{
    return(
        <div>
            <div className="slider__item">
                <img src={props.img} alt=""/>
                <SliderItemInfo price={props.price}/>
                <h5 className="slider__title">{props.name}</h5>
                <BuyButton>Купить</BuyButton>
                <div className="slider__controls">
                    <button><Liked className={"slider__keys"} /></button>
                    <button><Sravn className={"slider__keys"}/></button>
                </div>
            </div>
        </div>
    );
}


export default SliderSlide;