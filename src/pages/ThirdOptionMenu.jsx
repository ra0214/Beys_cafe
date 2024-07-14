import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesThirdOptionMenu from "../components/atoms/ImagenesThirdOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesThirdOptionMenu from "../components/atoms/ListaImagenesThirdOptionMenu";

function ThirdOptionMenu() {
    return (
        /*<div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            <div className="flex-grow">
                <ImagenesThirdOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesThirdOptionMenu />
            </div>
            <Footer />
        </div>
    );
}

export default ThirdOptionMenu;