import StarRating from "../rating/StarRating";

const SliderItemInfo=(props)=>{
    return(
        <div className="slider_itemInfo">
            <h5>{props.price} ГРН</h5>
            <StarRating/>
        </div>
    )
}

export default SliderItemInfo;