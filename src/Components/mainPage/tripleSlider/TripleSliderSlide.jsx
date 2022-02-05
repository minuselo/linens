import ts1 from "../../../img/TripleSlider/ts1.jpg";
import SliderItemInfo from "../../../assets/Components/slider price and rating/SliderItemInfo";
import BuyButton from "../../../assets/Components/StyledComponents/BuyButton";


const TripleSliderSlide=(props)=>{
    return (
        <div className="tripleSlider__item">
            <div className="tripleSlider__img"><img src={props.img} alt=""/></div>
            <div className="tripleSlider__info">
                <h5>{props.name}</h5>
                <SliderItemInfo price={props.price}/>
                <BuyButton>Купить</BuyButton>
            </div>
        </div>
    );
}


export default TripleSliderSlide;