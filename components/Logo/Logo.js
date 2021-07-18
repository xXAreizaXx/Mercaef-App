import Image from 'next/image'
import Mercaef from '../../public/Logo.png'

export default function Logo(props) {
    return (
        <Image src={Mercaef} alt="Logo" width={props.imgWidth} height={props.imgHeight} />
    )
}