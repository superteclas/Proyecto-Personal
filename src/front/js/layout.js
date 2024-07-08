import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Bio } from "./pages/bio";
import { Services } from "./pages/services";
import { Agenda } from "./pages/agenda";
import { Contact } from "./pages/contact";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <ParallaxProvider>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Bio />} path="/bio" />
                        <Route element={<Services />} path="/services" />
                        <Route element={<Agenda />} path="/agenda" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </ParallaxProvider>
    );
};

export default injectContext(Layout);
