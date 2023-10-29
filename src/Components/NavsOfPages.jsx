import pricipalPage from "../images/logo.png";
import { Link } from 'react-router-dom'


function NavigationIndex() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">
                <Link to="/">
                    <img
                        src={pricipalPage}
                        title="Pagina Principal"
                        width={150}
                        height={30}
                    />
                </Link>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/login">
                            <a className="nav-link">
                                Login
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logup">
                            <a className="nav-link">
                                Logup
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <a
                            className="nav-link disabled"
                            aria-disabled="true"
                        >
                            Home
                        </a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
}

function NavigationLoginAndLogup() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">
                <Link to="/">
                    <img
                        src={pricipalPage}
                        title="Pagina Principal"
                        width={150}
                        height={30}
                    />
                </Link>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/login">
                            <a className="nav-link">
                                Login
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logup">
                            <a className="nav-link">
                                Logup
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">

                        <a
                            className="nav-link disabled"
                            aria-disabled="true"
                        >
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

function NavigationHome() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
                <Link to="/">
                    <img
                        src={pricipalPage}
                        title="Pagina Principal"
                        width={150}
                        height={30}
                    />
                </Link>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/home">
                            <a className="nav-link active" aria-current="page">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Opciones de Usuario
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Carrito de compras
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Historial de compras
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Configuración
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="index.html">
                                    Cerrar Sesion
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
}
function NavigationAdmin() {
   return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img
                    src= {pricipalPage}
                    title="Pagina Principal"
                    width={150}
                    height={30}
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Invetario
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Historial De Compras
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Generar Registro de ventas
                        </a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
}
export { NavigationIndex, NavigationLoginAndLogup, NavigationHome, NavigationAdmin }

