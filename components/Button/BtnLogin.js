import Styles from './BtnLogin.module.css'
import GitHub from '../Icons/GitHub'
import Google from '../Icons/Google'

export default function BtnLogin(props) {
    const Description = props.description

    return (
        Description === "Login with Google"
            ? <button className={Styles.btn} id={Styles.Google}>{props.description}<Google /></button>
            : <button className={Styles.btn} id={Styles.GitHub}>{props.description}<GitHub fill="#000" /></button>
    )
}