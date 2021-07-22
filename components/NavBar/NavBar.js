import Collapse from '../../components/Icons/Collapse'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Icons/Search'
import Styles from './NavBar.module.css'

export default function NavBar({ handleClick }) {
    return (
        <section className={Styles.navBar}>
            <Logo imgWidth="100" imgHeight="100" />
            <div className={Styles.Search}>
                <input className={Styles.inputSearch} type="searh" placeholder="Search..." />
                <button className={Styles.btnSearch}><Search /></button>
                <button className={Styles.btnCollapse} onClick={handleClick}><Collapse /></button>
            </div>
        </section>
    )
}