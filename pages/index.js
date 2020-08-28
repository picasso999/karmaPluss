import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import Pricing from "../components/Pricing";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Head from 'next/head';

const HomePage = () => (
  <div>
    <Head>
      <meta name="description" content="Karma Pluss helps in developing mental, emotional, physical strengths/ skills while reducing &amp; tracking Carbon Emissions and doing recycle of waste, unwanted items" />
      
      

    </Head>
    <Preloader />

    <Layout pageTitle="Karma Pluss | Discover 'The Best' in You">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Banner />
      <Services />
      <CTAOne />
      <FunFact />
      <CTATwo />
      <Pricing />
      <Testimonials />
      <Clients />
      <Team />
      <VideoOne />
      <AppScreen />
      <FAQ />
      {/* <BlogHome /> */}
      <Contact />
      <CTAThree />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
