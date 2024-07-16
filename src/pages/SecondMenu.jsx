import React from "react";
import HeaderMenu from "../components/organisms/HeaderMenu";
import ListaImagenesSecondMenu from "../components/atoms/ListaImagenesSecondMenu";
import LineaHorizontal from "../components/atoms/LineaHorizontal";
import ImagenesSecondMenu from "../components/atoms/ImagenesSecondMenu";
import Footer from "../components/organisms/Footer";
import NavigationButton from "../components/atoms/NavigationButton";

function SecondMenu() {
    return(
        <div>
             <HeaderMenu/>
             <ListaImagenesSecondMenu/>
             <LineaHorizontal/>
             <ImagenesSecondMenu/>
             <div className="flex justify-center mt-4">
                <NavigationButton to="/menu">1</NavigationButton>
                <NavigationButton to="/second-menu">2</NavigationButton>
             </div>
             <Footer/>
        </div>
    )
}

export default SecondMenu;