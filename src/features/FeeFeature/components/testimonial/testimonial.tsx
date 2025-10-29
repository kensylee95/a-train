import Image, { StaticImageData } from "next/image";
import styles from "./testimonial.module.scss"
import woman1 from './assets/woman1.png'
import woman from './assets/woman.png'
import woman2 from './assets/woman2.png'
import woman3 from './assets/woman3.png'
type Testimonial = {
    name:string
    image: StaticImageData;
    job: string
    message: string
}
const testimonials: Testimonial[] = [
    {image:woman1, name:"Zara Nyx", job:"CEO, Nyx Corp", message:"VitalSwap made international transfers a breeze!",},
    {image:woman, name:"Liam Arlo", job:"Freelancer", message:"Transparent fees and great customer service.",},
    {image:woman2, name:"Ava Lark", job:"Finance Manager", message:"Reliable and fast swaps every time.",},
    {image: woman3, name:"Kai Ren", job:"Entrepreneur", message:"VitalSwap is my go-to for all currency needs.",},

]
export function Testimonial(){
return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Trusted by 10,000+ users</h1>
            <div className={styles.testimonials}>
                {testimonials.map((test, index)=>
                <div key={index} className={styles.testimony}>
                    <div className={styles.user}>
                        <Image className={styles.roundedImg}  src={test.image} alt=''/>
                        <div className={styles.userdetails}>
                            <span className={styles.name}>{test.name}</span>
                            <span className={styles.subtitle}>{test.job}</span>
                        </div>
                    </div>
                    
                        <div className={styles.body}>
                            <span className={styles.bar}/>
                            <span className={styles.message}>{test.message}</span>
                        </div>
                </div>)}
        </div>
    </div>
)
}