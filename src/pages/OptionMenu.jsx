import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu"
import Footer from "../components/organisms/Footer";
import ImagenesOptionMenu from "../components/atoms/ImagenesOptionMenu";
import LineaHorizontal from "../components/atoms/LineaHorizontal";
import ListaImagenesOptionMenu from "../components/atoms/ListaImagenesOptionMenu";

function OptionMenu() {
    return(
        <div>
            <HeaderMenu/>
            <ImagenesOptionMenu/>
            <LineaHorizontal/>
            <ListaImagenesOptionMenu/>
            <Footer/>
        </div>
    )
}

export default OptionMenu;