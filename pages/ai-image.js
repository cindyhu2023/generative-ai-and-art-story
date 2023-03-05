import { useState } from "react";
import styles from "./index.module.css";
import { ColorRing } from  'react-loader-spinner';

export default function AIImage() {
    const [promptInput, setPromptInput] = useState("");
    const [result, setResult] = useState("/default.png");
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("Dream up something magical...");
  
    async function onSubmit(event) {
      event.preventDefault();
      setLoading(true);
      setTitle("Brewing your dream...");
      setResult();
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ promptVar: promptInput }),
        });
  
        const data = await response.json();
        if (response.status !== 200) {
          throw data.error || new Error(`Request failed with status ${response.status}`);
        }
        setLoading(false);
        setTitle(promptInput);
        setResult(data.result);
        setPromptInput("");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
        setLoading(false);
      }
    }

    return (
        <div className={styles.aiImage}>
        <h3>{title}</h3>
        <img src={result} className={styles.icon} />
        <ColorRing
            visible={loading}
            height="150"
            width="150"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#01BAEF', '#0CBABA', '#380036', '#26081C', '#150811']}
            />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Hint: imaging an animal, in a place, doing a thing."
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input className={styles.button} type="submit" value="Go"/>
        </form>
        {/* <div className={styles.result}>{result}</div> */}
        {/* <Link to="#main-article">or click here to view the article directly</Link> */}
        <a href="#main-article">or click here to view the article directly</a>
      </div>
    )
}