import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import FirstBanner from "../components/firstBanner";
import Content from "../components/content/content";
import SecondBanner from "../components/secondBanner";
import History from "../components/history";
import Heading from "../components/content/heading";
import Gallery from "../components/gallery";
import Tictactoe from "../components/tictactoe";




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <FirstBanner/>
   <Content/>
   <SecondBanner />
   <History />
   <Gallery/>
   <Tictactoe />

   <div style={{ backgroundColor: "#7F8688", padding: "40px 100px"}}>
     <Heading colorVariant="white" sizeVariant="big">Contact</Heading>
     <h4>this website is only for private use</h4>
   </div>
  </Layout>
)

export default IndexPage
