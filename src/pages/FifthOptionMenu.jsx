import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesFifthOptionMenu from "../components/atoms/ImagenesFifthOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesFifthOptionMenu from "../components/atoms/ListaImagenesFifthOptionMenu";

function FifthOptionMenu() {
    return (
        /*<div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            <div className="flex-grow">
                <ImagenesFifthOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesFifthOptionMenu />
            </div>
            <Footer />
        </div>
    );
}

export default FifthOptionMenu;