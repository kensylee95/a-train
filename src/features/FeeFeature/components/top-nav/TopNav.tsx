import Image, { StaticImageData } from 'next/image'
import styles from './TopNav.module.scss'
import Logo from './assets/logo.png'
import AngleDown from './assets/chevron-down.png'

export function TopNav(){
    const navItems:string[] = ["Home", "Features", "Pricing", "Contact"];
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={Logo} alt=''/>
                <span>VitalSwap</span>
            </div>
            <div className={styles.navigation}>
                {navItems.map((item, index)=>
                <div onClick={()=>{}} key={index} className={styles.navItem}>
                  <span>{item}</span>
                  <Image src={AngleDown} alt=''/>
                </div>)
                }
            </div>
            <div className={styles.ctaWrapper}>
                <button className={styles.textButton}>Log in</button>
                <button className={styles.ctaButton}>Try it free</button>
            </div>
        </div>
    )
}