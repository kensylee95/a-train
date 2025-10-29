import Image from 'next/image'
import styles from './Calculator.module.scss'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'    
export function Calculator(){
    return (
        <>
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.heading}>Live Calculator</div>
                 <span>Instantly estimate your swap costs and exchange rates.</span>
            <button className={styles.button}>Calculate</button>
                </div>
            <div className={styles.rightSide}>
                <Image src={image1} alt=''/>
                </div>

        </div>
        
        <div className={styles.container2}>
            <Image src={image2} alt=''/>
            <div className={styles.rightSide2}>
                <div className={styles.heading}>
                    FX Rate Simulation
                </div>
                <span>View recent exchange rate trends and insights.</span>
            <button> Try out</button>
            </div>
        </div>
        </>
    )
}