//Importaciones
import imagenThree from "../images/imagenthree.jpg";
import { About_Us } from "../Components/AboutUs";
import {NavigationIndex} from "../Components/NavsOfPages"
import "../styles/styles.css";

//Exportaciones

export const IndexApp = () => {

    return (
        <>
        <NavigationIndex></NavigationIndex>
            <header>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={imagenThree}
                                className="imageOfVision d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption">
                                <h5>Quienes Somos</h5>
                                <p>Somos Agrocentro</p>
                                <p className="welcome">
                                    En Agrocentro, estamos comprometidos con el bienestar de tus
                                    queridas mascotas. Nos enorgullece ser tu fuente confiable de
                                    alimentos y productos de alta calidad para animales en Barbosa,
                                    Santander. Nuestra pasión por los animales y su salud nos impulsa
                                    a ofrecer una amplia gama de opciones nutritivas y deliciosas para
                                    satisfacer las necesidades de tus amigos peludos, ya sean perros,
                                    gatos, aves, peces, reptiles u otros compañeros de cuatro patas.
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <p>Nuestra Misión</p>
                                        <p className="mision">
                                            En Agrocentro, nuestra misión es proporcionar a los dueños de
                                            mascotas una experiencia de compra excepcional, brindando
                                            alimentos de la más alta calidad y productos relacionados con
                                            la salud y el bienestar de los animales. Queremos que cada
                                            mascota se sienta amada y cuidada a través de una nutrición
                                            adecuada y productos que mejoren su calidad de vida.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>Nuestra Visión</p>
                                        <p className="vision">
                                            En Agrocentro, visualizamos un mundo donde cada mascota sea
                                            tratada con el amor, el cuidado y la nutrición adecuada que se
                                            merece. Nos esforzamos por ser líderes en la industria de
                                            alimentos para animales, marcando la diferencia en la vida de
                                            las mascotas y sus dueños en Barbosa, Santander y más allá.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           <About_Us></About_Us>
        </>

    )
};