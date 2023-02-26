import styles from './index.module.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
    imageUrl: '/before.png'
  };
const SECOND_IMAGE = {
    imageUrl: '/after.png'
 };

export default function Explainer() {
    return (
        <div className={styles.explainer}>
        <h2>Generative Art Explainer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. 
        </p>
        <div className={styles.slider}>
        <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
        />
        </div>
        
        </div>
    )
}