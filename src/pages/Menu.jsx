import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import FondoMenu from "../components/atoms/FondoMenu";
import ListaImagenesMenu from "../components/atoms/ListaImagenesMenu";
import LineaHorizontal from "../components/atoms/LineaHorizontal";
import ImagenesMenu from "../components/atoms/ImagenesMenu";
import Footer from "../components/organisms/Footer";
import NavigationButton from "../components/atoms/NavigationButton";

function Menu() {
    return(
        <div className="min-h-screen flex flex-col">
             <HeaderMenu/>
             <div className="flex-grow">
                <FondoMenu/>
                <ListaImagenesMenu/>
                <LineaHorizontal/>
                <ImagenesMenu/>
                <div className="flex justify-center mt-4">
                    <NavigationButton to="/menu">1</NavigationButton>
                    <NavigationButton to="/second-menu">2</NavigationButton>
                </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Menu;