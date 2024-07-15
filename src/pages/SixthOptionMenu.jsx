import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import Footer from "../components/organisms/Footer";
import ImagenesSixthOptionMenu from "../components/atoms/ImagenesSixthOptionMenu";
import LineaHorizontalOptionMenu from "../components/atoms/LineaHorizontalOption";
import ListaImagenesSixthOptionMenu from "../components/atoms/ListaImagenesSixthOptionMenu";

function SixthOptionMenu() {
    return (
        /* <div className="min-h-screen flex flex-col">*/
        <div>
            <HeaderMenu />
            <div className="flex-grow">
                <ImagenesSixthOptionMenu />
                <LineaHorizontalOptionMenu />
                <ListaImagenesSixthOptionMenu />
            </div>
            <Footer />
        </div>
    );
}

export default SixthOptionMenu;