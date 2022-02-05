import {Rating} from 'react-simple-star-rating';
import {useState} from "react";
import {ReactComponent as EmptyStar} from '../../../img/star.svg';
import {ReactComponent as FullStar} from '../../../img/fullstar.svg';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rateNumber) => {
        setRating(rateNumber)
    }

    return (
        <div className="rating">
            <Rating onClick={handleRating} ratingValue={rating} size={24} allowHalfIcon={true} fullIcon={<FullStar  />}
                    emptyIcon={<EmptyStar size={100}/>}/>
        </div>
    )
}

export default StarRating;