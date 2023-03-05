import styles from "./index.module.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move } from "react-scroll-motion";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";


export default function MainContent() {
    return (
    <div id="main-article">
    <div className="main-content">
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    </div>
    </div>
    )
}