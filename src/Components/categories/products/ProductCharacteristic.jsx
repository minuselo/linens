import s from "./Products.module.css";
import {ReactComponent as Liked} from "../../../img/mainSlider/liked.svg";
import {ReactComponent as Sravn} from "../../../img/mainSlider/sravnenie.svg";
import CharacterList from "./CharactersList";


const ProductCharacteristic = () => {
    return (<div className={s.productCharacters}>
       <CharacterList/>
        <div className={s.productControls}>
            <button><Liked className={s.controlsKeys}/></button>
            <button><Sravn className={s.controlsKeys}/></button>
        </div>
    </div>)
}

export default ProductCharacteristic;