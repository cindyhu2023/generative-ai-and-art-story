import styles from "./index.module.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { InstagramEmbed } from 'react-social-media-embed';

const FIRST_IMAGE = {
    imageUrl: '/before.png'
  };
const SECOND_IMAGE = {
    imageUrl: '/after.png'
 };

export default function MainContent() {
    return (
    <div id="main-article">
    <div className="main-content">
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
        <div>
            <h2>When computers can create art, what are the limitations? </h2>
            <p>
            Concerns about the new technology’s ethics confound the art world. Even Shipley 
            voiced concerns about how AI, when used irresponsibly, could dampen creativity and the 
            authenticity of visual art. 
        </p>
        <p>
        Jon Lam, a storyboard artist at Riot Games, said that he can’t define art. But he said that 
        using generative AI isn’t a skill but something anybody can do, using data from millions of 
        artists. He added, “Somebody left their three-year-old in front of an AI generation program, 
        and the three-year-old is just typing stuff and still created something amazing.”
        </p>
        <p>
        In contrast, intermedia artist and Associate Professor at San Francisco Art Institute Meredith 
        Tromble said that for artists, working with new technologies not only helps them make the art 
        that they want to make, but it also attracts attention and interest. She said, “It’s seductive
         right now,” and she implored artists to approach it “from a standpoint of curiosity rather than 
         fear.”
        </p>
        </div>
        <div>
            <h2>As AI grows, some artists are finding an uglier side to its use. </h2>
            <p>
            Lam agreed that the new wave of generative AI in art is here to stay, but he said that the 
            cons of the technology outweigh the pros. He believes that algorithms trained off of public 
            images are fair use, but some models are trained on millions of copyrighted images without
             permission from the artists who made them. Then, when these AI programs are monetized, Lam 
             said, “artists are kind of left in the dust.”
            </p>
            <TwitterTweetEmbed
            style={{marginLeft: 'auto', marginRight: 'auto'}}
        tweetId={'1599672070652461056'}
        />
        <p>
        Lam started the hashtag <a href="https://www.instagram.com/p/CmIklJqrVyU/?utm_source=ig_web_copy_link">#CreateDontScrape </a>on Twitter and Instagram to push back against 
        monetized AI art. His movement is reacting specifically to the company Epic Games scraping 
        from artists. The video game and software developer owns ArtStation, a website for artists 
        to upload portfolios, and they used that artwork to train their generative AI technology 
        without the artists’ consent. As a result, Lam is urging artists to boycott ArtStation by 
        taking down their portfolio and uploading a “no AI” image. 
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CmIklJqrVyU/" width={600} height={500} />
        </div> 
        <p>
        Though Lam said artists are “traditionally a very quiet bunch,” he feels the need to take action
         around this cause. He described his primary struggle as convincing people to empathize with the 
         artists themselves, rather than focusing on the consumption of their work. "We don't think 
         about the human, or human side behind it, which is creating it and [spending] tens of years 
         building their craft to make this thing," he said.
        </p>
   
        </div>
        <div>
            <h2>[placeholder]</h2>
            <p>
            Art is a field characterized by ambiguity, and debates continue about whether art made using
             generative AI fits within the boundaries of art. Compton said she doesn’t generally view 
             categories in art as useful, and Tromble said she is still “chasing a working definition 
             of art.” 
            </p>
            <p>
            “I am both excited and terrified about what AI could mean for the future,” Shipley said. 
        </p>
        </div>
    </div>
    </div>
    )
}