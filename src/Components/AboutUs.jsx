import pricipalPage from "../images/logo.png";
import cellPhone from "../images/telefono.png";
import email from "../images/gmail.png";
import direction from "../images/ubicación.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";

function About_Us() {
    return <footer>
        <div className="contact">
            <h4>Contactanos</h4>
        </div>
        <div className="row w-100">
            <div className="left col-4">
                <p>
                    <a href="/admin">Brayan Collazos</a>
                </p>
                <p>
                    <img
                        src={cellPhone}
                        title="Telefono Empresa"
                        width={30}
                        height={30}
                    />{" "}
                    3204036357
                </p>
                <p>
                    <img
                        src={email}
                        title="Correo Empresa"
                        width={25}
                        height={20}
                    />
                    agrocentrobarbosa@gmail.com
                </p>
                <p>
                    <img
                        src={direction}
                        title="Ubicación Negocio"
                        width={30}
                        height={30}
                    />
                    Cra 7 10-12
                </p>
            </div>
            <div className="imageIndex col-4">
                <a className="navbar-brand" href="/">
                    <img
                        src={pricipalPage}
                        title="Pagina Principal"
                        width={500}
                        height={100}
                    />
                </a>
            </div>
            <div className="right col-4 m-0">
                <a
                    className="navbar-brand"
                    href="https://es-la.facebook.com/agrocentro.barbosa.90/"
                >
                    <img
                        src={Facebook}
                        title="Facebook Agrocentro"
                        width={50}
                        height={50}
                    />
                </a>
                <a
                    className="navbar-brand"
                    href="https://www.instagram.com/petshoptunja1/"
                >
                    <img
                        src={Instagram}
                        title="Instagram Agrocentro"
                        width={50}
                        height={50}
                    />
                </a>
                <a
                    className="navbar-brand"
                    href="https://twitter.com/AgrocentroUY?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                >
                    <img
                        src={Twitter}
                        title="Twitter Agrocentro"
                        width={50}
                        height={50}
                    />
                </a>
            </div>
        </div>
    </footer>
}

export { About_Us }