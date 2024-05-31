import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="CSS page" />
      </Helmet>

      <Header />

      <MainContent pageName="CSS Page"
       content="Cascading Style Sheets"
       describe="Is used to style and layout web pages." 
       />

      <Footer />
    </>
  );
};

export default Css;
