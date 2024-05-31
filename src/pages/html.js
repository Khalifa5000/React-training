


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';


const Html = () => {
  return (
    <>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTML page" />
      </Helmet>
    <Header />
    <MainContent pageName= "HTML Page"
    content="HyperText Markup Language."
    describe=  "Define the content and structure of web content."
     />


    <Footer />
  </>
  );
}

export default Html;
