import Styles from './BtnLogin.module.css'
import GitHub from '../Icons/GitHub'
import Google from '../Icons/Google'
import Link from 'next/link'

export default function BtnLogin(props) {
    const Description = props.description

    return (
        Description === "Login with Google"
            ? <Link href="/Home"><a className={Styles.btn} id={Styles.Google}>{props.description}<Google /></a></Link>
            : <Link href="/Home"><a className={Styles.btn} id={Styles.GitHub}>{props.description}<GitHub fill="#000" /></a></Link>
    )
}