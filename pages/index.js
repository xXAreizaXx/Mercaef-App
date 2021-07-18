import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import BtnLogin from '../components/Button/BtnLogin'
import Logo from '../components/Logo/Logo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercaef | Login</title>
        <meta name="description" content="SuperMarket Shop" />
        <link rel="icon" href="Logo.png" />
      </Head>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <Logo imgWidth="150" imgHeight="150" />
          <h3 id={Styles.title}>
            An application where you can make your purchases
            quickly and effectively, knowing purchase value and your ideal route 🍒🛒🥝
          </h3>
          <BtnLogin description="Login with Google" />
          <BtnLogin description="Login with GitHub" />
        </div>
      </div>
    </>
  )
}
