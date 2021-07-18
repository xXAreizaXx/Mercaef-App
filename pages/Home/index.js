import Styles from './HomePage.module.css'
import Head from 'next/head'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Icons/Search'
import Collapse from '../../components/Icons/Collapse'
import Image from 'next/image'
import Mercaef from '../../public/Logo.png'
import BtnNavBar from '../../components/Button/BtnNavBar'
import { useState } from 'react'

export default function HomePage() {
    const [isActive, setIsActive] = useState(true)

    const handleClick = () => {
        isActive === true ? setIsActive(false) : setIsActive(true)
    }
    return (
        <>
            <Head>
                <title>Mercaef | Home</title>
            </Head>
            <div className={Styles.main}>
                <div className={Styles.container}>
                    <section className={Styles.navBar}>
                        <Logo imgWidth="100" imgHeight="100" />
                        <div className={Styles.inputSearch}>
                            <input type="searh" placeholder="Search..." />
                            <button className={Styles.btnSearch}><Search /></button>
                            <button className={Styles.btnCollapse} onClick={handleClick}><Collapse /></button>
                        </div>
                    </section>
                    <section className={Styles.navRight}>
                        {
                            isActive === true
                                ?
                                <div className={Styles.btnsNavBar}>
                                    <Image src={Mercaef} alt="Avatar" width={80} height={80} />
                                    <BtnNavBar icon="true" text="Home" />
                                    <BtnNavBar icon="true" text="Lista" />
                                    <BtnNavBar icon="true" text="Ruta" />
                                    <BtnNavBar icon="true" text="Config" />
                                </div>

                                : <>
                                    <div className={Styles.divAvatar}>
                                        <Image src={Mercaef} alt="Avatar" width={80} height={80} />
                                        <h3>Jorge Esteban Areiza Castrillon</h3>
                                    </div>
                                    <div className={Styles.btnsNavBar}>
                                        <BtnNavBar text="Home" />
                                        <BtnNavBar text="Lista" />
                                        <BtnNavBar text="Ruta" />
                                        <BtnNavBar text="Config" />
                                    </div>
                                </>

                        }

                    </section>
                    <section className={Styles.cards}>
                        cards
                    </section>
                </div>
            </div>
        </>
    )
}