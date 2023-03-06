import { InstagramEmbed, TwitterEmbed } from 'react-social-media-embed';

export default function Section3() {
    return (
        <div>
            <h2>As AI grows, some artists are finding an uglier side to its use. </h2>
            <p>
            Lam agreed that the new wave of generative AI in art is here to stay, but he said that the 
            cons of the technology outweigh the pros. He believes that algorithms trained off of public 
            images are fair use, but some models are trained on millions of copyrighted images without
             permission from the artists who made them. Then, when these AI programs are monetized, Lam 
             said, “artists are kind of left in the dust.”
            </p>
            <div
                style={{
                display: 'flex',
                justifyContent: 'center'
                }}
            >
                <TwitterEmbed
                url="https://twitter.com/JonLamArt/status/1599672070652461056?"
                width={400}
                />
            </div>
        <p>
        Matthew Butterick, who is a lawyer and visual artist, is filing a lawsuit against Github Copilot for 
        “unprecedented open-source software piracy,” according to his website. Partnering with Joseph Saveri Law Firm, 
        they are responding to AI systems that are trained using copyrighted work from artists, without any consent or 
        compensation. 
        </p>
        <p>
        The artist plaintiffs include Sarah Andersen, Kelly McKernan and Karla Oritz who are filing against Stability 
        AI, DeviantArt, and Midjourney for using the tool Stable Diffusion to remix copyrighted work. Butterick added,
         “The image-gen­er­a­tor com­pa­nies have made their views clear. Now they can hear from artists.” 
        </p>
        <p>
        With similar intentions, Lam started the hashtag <a href="https://www.instagram.com/p/CmIklJqrVyU/?utm_source=ig_web_copy_link">#CreateDontScrape </a>on Twitter and Instagram to push back against 
        monetized AI art. His movement is reacting specifically to the company Epic Games scraping 
        from artists. The video game and software developer owns ArtStation, a website for artists 
        to upload portfolios, and they used that artwork to train their generative AI technology 
        without the artists’ consent. As a result, Lam is urging artists to boycott ArtStation by 
        taking down their portfolio and uploading a “no AI” image. 
        </p>
        <p>
        Though Lam said artists are “traditionally a very quiet bunch,” he feels the need to take action
         around this cause. He described his primary struggle as convincing people to empathize with the 
         artists themselves, rather than focusing on the consumption of their work. "We don't think 
         about the human, or human side behind it, which is creating it and [spending] tens of years 
         building their craft to make this thing," he said.
        </p>
   
        </div>
    )
}