import { useState } from "react";
import styles from "./index.module.css";

export default function AIImage() {
    const [promptInput, setPromptInput] = useState("");
    const [result, setResult] = useState();
  
    async function onSubmit(event) {
      event.preventDefault();
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
  
        setResult(data.result);
        setPromptInput("");
      } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
      }
    }

    return (
        <main className={styles.main}>
        <h3>Dream up something magical...</h3>
        <img src={result} className={styles.icon} />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Hint: imaging an animal, in a place, doing a thing."
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Go" />
        </form>
        {/* <div className={styles.result}>{result}</div> */}
      </main>
    )
}