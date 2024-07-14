import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesOptionMenu from "../components/atoms/ImagenesOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesOptionMenu from "../components/atoms/ListaImagenesOptionMenu";

function OptionMenu() {
    return (
        /*<div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            /*<div className="flex-grow">*/
                <ImagenesOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesOptionMenu />
            /*</div>*/
            <Footer />
        </div>
    );
}

export default OptionMenu;
