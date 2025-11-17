// import React,{useState} from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Progarms from'./Components/Programs/Programs'
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
// const App=()=>{
//   const [playState,setPlayState]=useState(false);
//   return (
//     <div>
// <Navbar/>
// <Hero/>
// <div className="container">
//   < Title subTitle='OUR PROGRAM' title='What We Offer'/>
//    <Programs/>
//    <About setPlayState={setPlayState}/>
//      < Title subTitle='Gallery' title='Campus Photos'/>
//      <Campus/>
//      < Title subTitle='TESTIMONIALS' title='What Student Says'/>
//      <Testimonials/>
//      < Title subTitle='Contact Us' title='Get in touch'/>
//      <Contact/>
//      <Footer/>
//    </div>
// <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
//     </div>
//   )
// }
// export default App

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
