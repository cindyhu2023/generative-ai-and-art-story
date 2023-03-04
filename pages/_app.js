import Head from "next/head";
import { useState } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import styles from "./index.module.css";
import "./styles.css";
import Landing from "./landing";
import AIImage from "./ai-image";
import MainContent from "./main-content";
import Explainer from "./explainer";
import Transition from "./transition";

export default function MyApp() {
    const FadeUp = batch(Fade(), Move(), Sticky());
  return    ( <div>
  <Head>
    <title>Generate AI and Art</title>
    <link rel="icon" href="/dog.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet" />
  </Head>
  <ScrollContainer>
  <ScrollPage>
  <Animator animation={FadeUp}><Landing /></Animator>
  </ScrollPage>
  <ScrollPage>
  <Animator animation={Fade()}><AIImage /></Animator>
  </ScrollPage>
  <ScrollPage>
  <Animator animation={FadeUp}><Transition /></Animator>
  </ScrollPage>
  </ScrollContainer>
  <MainContent />
  {/* <ScrollPage>
  <Animator animation={FadeUp}><MainContent /></Animator>
  </ScrollPage>
   */}
  

</div>)
}