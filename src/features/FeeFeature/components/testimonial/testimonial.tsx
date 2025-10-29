import styles from "./testimonial.module.scss"
export function Testimonial(){
return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Trusted by 10,000+ users</h1>
        <div className={styles.testimonial}>
            <div className={styles.testimonial}>
                <div className={styles.testimonialItem}></div>
            </div>
        </div>
    </div>
)
}