import styles from './index.module.css';

export default function Transition() {
    return (
        <div className={styles.transition}>
            <h1>Wait a minute...</h1>
            <h1>Did you just create art with AI?</h1>
            {/* TODO: change to a button */}
            <a href="https://www.artaigallery.com/pages/what-is-ai-generated-art">External read: What Is AI-generated Art?</a>
        </div>
    )
}