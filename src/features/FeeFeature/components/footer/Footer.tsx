import styles from "./Footer.module.scss";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer(){
    return (
        <>
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.heading}>Join VitalSwap Today</h2>
                    <br />
                    <p className={styles.subheading}>Get started with a plan that suits your needs.</p>
                    <br />
                    <button className={styles.cta}>Join via VitalSwap</button>
                </div>
            </section>

            <footer className={styles.container}>
                <br />
                <br />
                <div className={styles.linksSection}>
                    <div className={styles.brandColumn}>
                        <div className={styles.brandRow}>
                            <img src="/logo.png" alt="VitalSwap Logo" width={28} height={28} style={{ borderRadius: "50%" }} />
                            <span className={styles.brandName}>VitalSwap</span>
                        </div>
                        <div className={styles.socials}>
                            <a className={styles.socialLink} href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a className={styles.socialLink} href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a className={styles.socialLink} href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>
                    <div className={styles.columns}>
                        <div className={styles.col}>
                            <div className={styles.colTitle}>Support</div>
                            <br />
                            <a className={styles.link} href="#">Help Center</a>
                            <br />
                            <a className={styles.link} href="#">Contact Us</a>
                            <br />
                            <a className={styles.link} href="#">FAQs</a>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.colTitle}>Legal</div>
                            <br />
                            <a className={styles.link} href="#">Privacy Policy</a>
                            <br />
                            <a className={styles.link} href="#">Terms of Service</a>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.colTitle}>Company</div>
                            <br />
                            <a className={styles.link} href="#">About Us</a>
                            <br />
                            <a className={styles.link} href="#">Careers</a>
                            <br />
                            <a className={styles.link} href="#">Blog</a>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.colTitle}>Follow Us</div>
                            <br />
                            <a className={styles.link} href="#">Twitter</a>
                            <br />
                            <a className={styles.link} href="#">LinkedIn</a>
                            <br />
                            <a className={styles.link} href="#">Facebook</a>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </footer>
        </>
    )
}


