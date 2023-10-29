import { handleSubmit } from "../hooks/useForm";
import {NavigationLoginAndLogup} from "../Components/NavsOfPages"


export const LogupApp = () => {
    return (
        <>
            <NavigationLoginAndLogup></NavigationLoginAndLogup>
            <header className="logup">
                <h1 className="formularioOne text-center pt-3 text-white">
                    Formulario de Registro
                </h1>
                <div className="container pt-2">
                    <div className="abs-left">
                        <div className="card px-5 py-1 rounded opacity-75">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="namesOne" className="form-label text-black">
                                        Nombres
                                    </label>
                                    <input
                                        type="name"
                                        id="namesOne"
                                        className="form-control"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="namesTwo" className="form-label text-black">
                                        Apellidos
                                    </label>
                                    <input
                                        type="name"
                                        id="namesTwo"
                                        className="form-control"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailOne" className="form-label text-black">
                                        Correo Electronico
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailOne"
                                        aria-describedby="emailHelp"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="PasswordOne" className="form-label text-black">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="PasswordOne"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="PasswordTwo" className="form-label text-black">
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="PasswordTwo"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="directionOne" className="form-label text-black">
                                        Dirección
                                    </label>
                                    <input
                                        type="direction"
                                        id="directionOne"
                                        className="form-control"
                                        style={{ width: 400 }}
                                        required=""
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Registrarse
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};