import BuyButton from "../../assets/Components/StyledComponents/BuyButton";
import s from './Account.module.css';
import {useState} from "react";
import {getAuth, updatePassword} from "firebase/auth";


const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isChanged, setIsChanged] = useState(false);

    const handleSubmit = (e, newPassword) => {
        e.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;
        if (password !== confirmPassword) {
            setErrorMessage("Пароли не совпадают");
            return;
        }
        updatePassword(user, newPassword).then(() => {
            setErrorMessage(null);
            setIsChanged(true);
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }


    return (
        <div className={s.resetPassword}>
            <h3>Ваш пароль</h3>
            <form onSubmit={(e) => handleSubmit(e, password)}>
                <div>
                    <h5>Пароль</h5>
                    <input value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)}
                           type="password"/>
                </div>
                <div>
                    <h5>Подтвердите пароль</h5>
                    <input value={confirmPassword} autoComplete="off"
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           type="password"/>
                </div>
                {errorMessage ? <p className={s.errored}>{errorMessage}</p> : null}
                <BuyButton>Продолжить</BuyButton>
            </form>
            {isChanged ? <h3>Пароль успешно изменен!</h3> : null}
        </div>
    )
}

export default ResetPassword;