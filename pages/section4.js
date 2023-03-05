import styles from './index.module.css';
export default function Section4(){
    return (
        <div>
            <h2>Will AI redefine art?</h2>
            <p>
            Art is a field characterized by ambiguity, and debates continue about whether art made using
             generative AI fits within the boundaries of art. Compton said she doesn’t generally view 
             categories in art as useful, and Tromble said she is still “chasing a working definition 
             of art.” 
            </p>
            <p>
            “I am both excited and terrified about what AI could mean for the future,” Shipley said. 
            </p>
            <img src={'/end.png'} className={styles.endImg}/>
        </div>
    )
}