import styles from "./testimonial.module.scss"
export function Testimonial(){
return (
    <div className={styles.container}>
        <br />
        <br />
        <br />
        <h1 className={styles.heading}>Trusted by 10,000+ users</h1>
        <br />
        <div className={styles.testimonial}>
            <div className={styles.track}>
            {[
                {
                    name: "Zara Nyx",
                    title: "CEO, Nyx Corp",
                    quote: "VitalSwap made international transfers a breeze!",
                    avatar: "/woman.png"
                },
                {
                    name: "Jian Lin",
                    title: "Tech Lead",
                    quote: "Transparent fees and great customer service.",
                    avatar: "/woman.png"
                },
                {
                    name: "Ana Lok",
                    title: "Finance Manager",
                    quote: "Reliable and fast swaps every time.",
                    avatar: "/woman.png"
                },
                {
                    name: "Kai Ren",
                    title: "Entrepreneur",
                    quote: "VitalSwap is my go-to for all currency needs.",
                    avatar: "/woman.png"
                }
            ].flatMap((t) => [t, t]).map((testimonial, idx) => (
                <div className={styles.testimonialItem} key={testimonial.name + idx}>
                    <div className={styles.headerRow}>
                        <div className={styles.avatar} aria-hidden>
                            <img src={testimonial.avatar} alt={testimonial.name} width={48} height={48} />
                        </div>
                        <div className={styles.meta}>
                            <div className={styles.name}>{testimonial.name}</div>
                            <div className={styles.title}>{testimonial.title}</div>
                        </div>
                    </div>
                    <div className={styles.contentRow}>
                        <br />
                        <span className={styles.divider} aria-hidden></span>
                        <p className={styles.quote}>{testimonial.quote}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
)
}