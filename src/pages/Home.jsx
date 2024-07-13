import Header from "../components/organisms/Header";
import Background from "../components/atoms/Background";
import ListaImagenes from "../components/atoms/ListaImagenes";
import Footer from "../components/organisms/Footer";
import LineaHorizontal from "../components/atoms/LineaHorizontal";
import Imagenes from "../components/atoms/Imagenes";

function Home(){
    return(
        <>
        <Header/>
        <Background/>
        <ListaImagenes/>
        <LineaHorizontal/>
        <Imagenes/>
        <Footer/>
        </>
    )
}

export default Home;