import Styles from './BtnNavBar.module.css'
import Home from '../Icons/Home'
import Lista from '../Icons/Lista'
import Ruta from '../Icons/Ruta'
import Configuracion from '../Icons/Configuracion'

export default function BtnNavBar(props) {

    if (props.icon === "true") {
        return Collapse()
    } else {
        return NonCollapse()
    }


    function Collapse() {
        if (props.text === "Home") {
            return <button className={Styles.btn}><Home /></button>
        } else if (props.text === "Lista") {
            return <button className={Styles.btn}><Lista /></button>
        } else if (props.text === "Ruta") {
            return <button className={Styles.btn}><Ruta /></button>
        } else {
            return <button className={Styles.btn}><Configuracion /></button>
        }
    }

    function NonCollapse() {
        if (props.text === "Home") {
            return <button className={Styles.btn}><Home /><h1>{props.text}</h1></button>
        } else if (props.text === "Lista") {
            return <button className={Styles.btn}><Lista /><h1>{props.text}</h1></button>
        } else if (props.text === "Ruta") {
            return <button className={Styles.btn}><Ruta /><h1>{props.text}</h1></button>
        } else {
            return <button className={Styles.btn}><Configuracion /><h1>{props.text}</h1></button>
        }
    }


}