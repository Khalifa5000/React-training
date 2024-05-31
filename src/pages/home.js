import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HOME Page</title>
        <meta name="description" content="HOME page" />
      </Helmet>

      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </>
  );
};

export default Home;
