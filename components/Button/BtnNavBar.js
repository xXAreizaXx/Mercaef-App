import Styles from './BtnNavBar.module.css'
import Home from '../Icons/Home'
import Lista from '../Icons/Lista'
import Ruta from '../Icons/Ruta'
import Configuracion from '../Icons/Configuracion'
import Link from 'next/link'

export default function BtnNavBar(props) {

    if (props.icon === "true") {
        return Collapse()
    } else {
        return NonCollapse()
    }


    function Collapse() {
        if (props.text === "Home") {

            return <Link href="/Home"><a className={Styles.btn}><Home /></a></Link>
        } else if (props.text === "Lista") {
            return <Link href="/Lista"><a className={Styles.btn}><Lista /></a></Link>
        } else if (props.text === "Ruta") {
            return <Link href="/Ruta"><a className={Styles.btn}><Ruta /></a></Link>
        } else {
            return <Link href="/Config"><a className={Styles.btn}><Configuracion /></a></Link>
        }
    }

    function NonCollapse() {
        if (props.text === "Home") {
            return <Link href="/Home"><a className={Styles.btn}><Home /><h1>{props.text}</h1></a></Link>
        } else if (props.text === "Lista") {
            return <Link href="/Lista"><a className={Styles.btn}><Lista /><h1>{props.text}</h1></a></Link>
        } else if (props.text === "Ruta") {
            return <Link href="/Ruta"><a className={Styles.btn}><Ruta /><h1>{props.text}</h1></a></Link>
        } else {
            return <Link href="/Config"><a className={Styles.btn}><Configuracion /><h1>{props.text}</h1></a></Link>
        }
    }


}