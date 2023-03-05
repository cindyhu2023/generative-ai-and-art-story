import styles from "./index.module.css";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
    imageUrl: '/Future.jpg'
  };
const SECOND_IMAGE = {
    imageUrl: '/Past.jpg'
 };

export default function Section1() {
    return (
        <div className={styles.section1}>
        <h2>Professional artists today are using similar technologies in their work.</h2>
        <div className={styles.gridDisplay}>
        <div>
        <p>
        Decades after the death of Salvador Dalí, artist and creative technologist Nathan Shipley worked 
        to bring the iconic surrealist painter back to life with deep fake technology. New technologies 
        gave him “the ability to create things that are impossible to make otherwise,” Shipley said. 
        In his 2017 exhibit, <i>Dreams of Dalí</i>, he used interviews, quotes and existing archival footage 
        of Dalí to gather enough data so that he could train the AI to create deepfakes of the artist. 
        </p>
        <p>
        Proponents of generative AI art see AI as a tool, not a replacement for human creativity. Kate 
        Compton, an expert in computational creativity and professor at Northwestern University, 
        described using generative AI as “making things that make things.” She described AI artmaking 
        as essentially designing and implementing an algorithm that would then create the art. 
        She compared the new technology to the advent of photography, and how photography impacted 
        the art world. “[New tools] allow more people to make art of things that people wouldn't have 
        traditionally made art of,” she said.
        </p>
        </div>
        <div className={styles.shipleyImg}>
        <img src="/shiply.png"/>
        <p className={styles.imgSource}>Source: nathanshipley.com</p>
        </div>
                
        </div>
        
        <div className={styles.slider}>
        <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
        />
        <p className={styles.imgSource}>Source: nathanshipley.com</p>
        </div>
        </div>
    )
}