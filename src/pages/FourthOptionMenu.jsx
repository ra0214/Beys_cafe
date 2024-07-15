import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesFourthOptionMenu from "../components/atoms/ImagenesFourthOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesFourthOptionMenu from "../components/atoms/ListaImagenesFourthOptionMenu";

function FourthOptionMenu() {
    return (
        /*<div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            <div className="flex-grow">
                <ImagenesFourthOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesFourthOptionMenu />
            </div>
            <Footer />
        </div>
    );
}

export default FourthOptionMenu;