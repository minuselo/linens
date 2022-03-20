import s from './Account.module.css';
import React, {useState} from "react";
import BuyButton from "../../assets/Components/StyledComponents/BuyButton";
import {setUserInfo} from "../../firebase";
import {useSelector} from "react-redux";
import sended from "../../img/sendRequest.svg";


const EditProfile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const [isSended, setIsSended] = useState(false);

    const showSendMessage = () => {
        setIsSended(true);
        setTimeout(() => setIsSended(false), 2000);
    }

    const userId = useSelector(state => state.authUser.userId);


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            name,
            surname,
            phone
        }
        const checkData = (obj) => {
            for (let key in obj) {
                if (obj[key].length == 0) {
                    delete obj[key];
                }
            }
            return obj;
        }

        setUserInfo(userId, checkData(data));
        setEmail("");
        setName("");
        setSurname("");
        setPhone("");
        showSendMessage();
    }


    return (
        <div className={s.editProfile}>
            <h3>РЕДАКТИРОВАТЬ ВАШУ УЧЕТНУЮ ЗАПИСЬ</h3>
            {isSended ? <div className={s.requestSended}>
                <img src={sended} alt=""/>
                <p>Данные изменены</p></div> : null}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h5>Ваше имя:</h5>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                </div>
                <div>
                    <h5>Ваша фамилия:</h5>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text"/>
                </div>
                <div>
                    <h5>E-mail:</h5>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                </div>
                <div>
                    <h5>Телефон:</h5>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel"/>
                </div>
                <div>
                    <BuyButton type="submit">ПРОДОЛЖИТЬ</BuyButton>
                </div>

            </form>
        </div>

    )
}


export default EditProfile;