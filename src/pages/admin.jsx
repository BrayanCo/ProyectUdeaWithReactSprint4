import { About_Us } from "../Components/AboutUs";
import {NavigationAdmin} from "../Components/NavsOfPages"


export const AdminApp = () => {

    return (
        <>
            <NavigationAdmin></NavigationAdmin>
            <div className="row w-100 m-0 text-light">
                <div className="col-2 py-1 vh-100">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success rounded vh-100">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                        >
                            <svg className="bi me-2" width={40} height={32}>
                                <use xlinkHref="#bootstrap" style={{ width: 280 }} />
                            </svg>
                            <span className="fs-4">Menu</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a
                                    href="admin.html"
                                    className="nav-link text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="admin.html" className="nav-link text-white">
                                    Inventario
                                </a>
                            </li>
                            <li>
                                <a href="admin.html" className="nav-link text-white">
                                    Historial De Compra
                                </a>
                            </li>
                            <li>
                                <a href="admin.html" className="nav-link text-white">
                                    Genera Registro de ventas
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a
                                href="#"
                                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                id="dropdownUser1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="../images/Autor.png"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="rounded-circle me-2"
                                />
                                <strong>Brayan Collazos</strong>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-dark text-small shadow"
                                aria-labelledby="dropdownUser1"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Configuración
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Perfil
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="index.html">
                                        Salir
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="imageAdmin col-10 m-0"
                ></div>
            </div>
            <About_Us></About_Us>
        </>
    )
};