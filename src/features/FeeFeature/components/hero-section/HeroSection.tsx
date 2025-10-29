import Image from 'next/image'
import styles from './HeroSection.module.scss'
import WavyLineImg from './assets/wavy-line.png'
import SmilingWoman from './assets/smiling-woman.png'
import SwapDetails from './assets/swap-details.png'
export function HeroSection (){
    return(
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.flexColumn}>
                <span className={styles.headingText}>Transparent Fees.</span>
                    <span className={styles.headingText}>Smarter Swaps.</span>
                    </div>
                    <span className={styles.subtitle}>We keep our fees simple, clear, and easy to understand.</span>
                    <button className={styles.button}>Try for free</button>
            </div>
            <Image className={styles.smilingWoman} width={654} height={773} src={SmilingWoman} alt='smiling-woman'/>

            
            <Image className={styles.swapDetails} src={SwapDetails} height={65} width={252} alt=''/>
            <Image height={331} className={styles.wavyLine} src={WavyLineImg} alt='wavy-line'/>
        </div>
    )
}