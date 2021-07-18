import Styles from './Lista.module.css'
import { useState } from 'react'
import BtnNavBar from '../../components/Button/BtnNavBar'
import Head from 'next/head'
import Image from 'next/image'
import Mercaef from '../../public/Logo.png'
import NavBar from '../../components/NavBar/NavBar'

export default function Lista() {
    const [isActive, setIsActive] = useState(true)

    const handleClick = () => {
        isActive === true ? setIsActive(false) : setIsActive(true)
    }
    return (
        <>
            <Head>
                <title>Mercaef | Lista</title>
                <link rel="icon" href="Logo.png" />
            </Head>
            <div className={Styles.main}>
                <div className={Styles.container}>
                    <NavBar handleClick={handleClick} />
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
                                :
                                <>
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
                        <div className={Styles.table}>
                            <div className={Styles.titles}>
                                <h2>#</h2>
                                <h2>Imagen</h2>
                                <h2>Name</h2>
                                <h2>Price</h2>
                                <h2>Count</h2>
                                <h2>Total</h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}