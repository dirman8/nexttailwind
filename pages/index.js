import React, { useEffect, Fragment } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Feature from '../components/Feature';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const isServer = typeof window === 'undefined'
const WOW = !isServer?require('wow.js'):null

export default function Home() {
 useEffect(() => {
   //WOW Js Init
  new WOW().init();

   //  For Menu Scroll
   const pageLink = document.querySelectorAll(".ud-menu-scroll");
   pageLink.forEach((elem) => {
     elem.addEventListener("click", (e) => {
       e.preventDefault();
       document.querySelector(elem.getAttribute("href")).scrollIntoView({
         behavior: "smooth",
         offsetTop: 1 - 60,
       });
     });
   });

   // section menu active
   function onScroll(event) {
     const sections = document.querySelectorAll(".ud-menu-scroll");
     const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

     for (let i = 0; i < sections.length; i++) {
       const currLink = sections[i];
       const val = currLink.getAttribute("href");
       const refElement = document.querySelector(val);
       const scrollTopMinus = scrollPos + 73;
       if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
         document.querySelector(".ud-menu-scroll").classList.remove("active");
         currLink.classList.add("active");
       } else {
         currLink.classList.remove("active");
       }
     }
   }

   window.document.addEventListener("scroll", onScroll);
 })


  return (
    <Fragment>
      <Head>
        <title>Play | Free Tailwind CSS Template for Startup and SaaS By TailGrids</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>
      <Navigation />
      <Hero />
      <Feature />
      <About />
      <Pricing />
      <Faq />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </Fragment>
  );
}