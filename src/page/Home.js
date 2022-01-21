import React from "react";
import Articles from "../component/Articles";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Block from "../component/Block";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="homeContent">
      <div className="whatNew">
            <Block>
            <h2>What's New today ?</h2>
            <p>Tyke Wellick</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                expedita velit eum inventore blanditiis molestiae obcaecati,
                provident illum dolorum, facilis nobis ea voluptates, suscipit
                veritatis culpa doloribus qui a. Explicabo!
            </p>
            <p>{new Date().toLocaleDateString()}</p>
            </Block>
         </div>
      <div className="areYouReady">
            <Block>
            <h2>Are you Ready ?</h2>
            <p>Mike Birkeushe</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                expedita velit eum inventore blanditiis molestiae obcaecati,
                provident illum dolorum, facilis nobis ea voluptates, suscipit
                veritatis culpa doloribus qui a. Explicabo!
            </p>
            <p>{new Date().toLocaleDateString()}</p>
            </Block>
         </div>
      <div className="iframe">
            <Block>
            <h2>Video of the day </h2>
            <iframe width="840" height="472" src="https://www.youtube.com/embed/sgNR-hA-Bho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         
            </Block>
         </div>

        <div className="imgLeftSideHome"></div>
        <div className="imgRightSideHome"></div>
        <Articles />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
