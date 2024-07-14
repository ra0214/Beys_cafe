import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesSecondOptionMenu from "../components/atoms/ImagenesSecondOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesSecondOptionMenu from "../components/atoms/ListaImagenesSecondOptionMenu";

function SecondOptionMenu() {
    return (
        /*<div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            <div className="flex-grow">
                <ImagenesSecondOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesSecondOptionMenu />
            </div>
            <Footer />
        </div>
    );
}

export default SecondOptionMenu;