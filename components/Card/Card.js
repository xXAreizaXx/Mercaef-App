import Styles from './Card.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Card({ id, name, price, img }) {
    return (
        <div className={Styles.divCard}>
            <Image src={img} className={Styles.img} title="Galetas" alt="Galletas" width={522} height={250} />
            <h1 className={Styles.title}>{name}</h1>
            <p className={Styles.price}><b>$</b> {price}</p>
            <button className={Styles.add} key={id}>Añadir</button>
        </div>
    )
}