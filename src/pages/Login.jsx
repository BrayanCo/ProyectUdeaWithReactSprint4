import {NavigationLoginAndLogup} from "../Components/NavsOfPages"


export const LoginApp = () => {

    return (
        <>
            <NavigationLoginAndLogup></NavigationLoginAndLogup>
            <div className="login">
                <div className="container pt-5">
                    <div className="abs-center">
                        <div className="card px-5 py-5 rounded opacity-75">
                            <form action="/home">
                                <div className="mb-3">
                                    <label htmlFor="emailTwo" className="form-label">
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailTwo"
                                        aria-describedby="emailHelp"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                    <div id="emailHelp" className="form-text">
                                        Nunca compartiremos su correo electrónico con nadie más.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <p>
                                        <a href="">¿Olvidaste tu Contraseña?</a>
                                    </p>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Iniciar Sesion
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};