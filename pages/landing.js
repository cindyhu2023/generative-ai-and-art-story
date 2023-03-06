import styles from './index.module.css';

export default function Landing() {
    return (
        <div className={styles.landing}>
            <img src={'/mobile.jpg'} className={styles.mobileBg}/>
            <video autoPlay muted loop className={styles.landingVideo}>
            <source src={'/bg.mp4'} type="video/mp4" />
            </video>
            <h1>"Excited and Terrified"</h1>
            <h1>How Artists and Academics See the Future of AI</h1>
        </div>
    )
}