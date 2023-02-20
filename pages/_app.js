import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import "./styles.css";
import Landing from "./landing";
import AIImage from "./ai-image";
import MainContent from "./main-content";

export default function MyApp() {
  return    ( <div>
  <Head>
    <title>OpenAI Quickstart</title>
    <link rel="icon" href="/dog.png" />
  </Head>
  <Landing />
  <AIImage />
  <MainContent />

</div>)
}