import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import FondoMenu from "../components/atoms/FondoMenu";
import ListaImagenesMenu from "../components/atoms/ListaImagenesMenu";
import LineaHorizontal from "../components/atoms/LineaHorizontal";
import ImagenesMenu from "../components/atoms/ImagenesMenu";
import Footer from "../components/organisms/Footer";

function Menu() {
    return(
        <div>
             <HeaderMenu/>
             <FondoMenu/>
             <ListaImagenesMenu/>
             <LineaHorizontal/>
             <ImagenesMenu/>
             <Footer/>
        </div>
    )
}

export default Menu;