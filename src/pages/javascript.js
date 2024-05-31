import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta name="description" content="JAVASCRIPT page" />
        <style type="text/css">{`
   
 
        
    `}</style>
      </Helmet>
      <Header />
     
      <MainContent pageName="JAVASCRIPT Page"
      content="JavaScript often abbreviated as JS."
      describe="JavaScript is the programming language of the Web."
      />
      <Footer />
    </>
  );
};

export default Javascript;
