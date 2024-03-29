import React from "react";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      {/* <TopCarousel /> */}
      <main style={{ marginTop: "5%" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "this.title",
  description: "mern stack app",
  keywords: "ecommerse, mern,react,node,mongodb",
  author: "Zaheer IQBAL",
};

export default Layout;
